import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './CategoryPage.css'
import Header_food from '../header/Header_food'
import Header_food_large from '../header/Header_food_large'
import Food_menubar from '../header/Food_menubar'
import Health_body from '../components/body/health_body'
import Products from '../components/products/Products'
import productsData from '../data/productsData.json'

function CategoryPage() {
    const { category } = useParams()
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [sortType, setSortType] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        if (category && productsData.categories[category]) {
            const categoryProducts = productsData.categories[category].products
            setProducts(categoryProducts)
            setFilteredProducts(categoryProducts)
        }
    }, [category])

    const handleSort = (sortType) => {
        setSortType(sortType)
        let sorted = [...filteredProducts]
        
        switch(sortType) {
            case 'popularity':
                sorted.sort((a, b) => a.id - b.id)
                break
            case 'lowToHigh':
                sorted.sort((a, b) => a.currentPrice - b.currentPrice)
                break
            case 'highToLow':
                sorted.sort((a, b) => b.currentPrice - a.currentPrice)
                break
            case 'newest':
                sorted.sort((a, b) => b.id - a.id)
                break
            default:
                break
        }
        
        setFilteredProducts(sorted)
    }

    // Convert our product data to match the expected format for Products component
    const convertedProducts = filteredProducts.map(product => ({
        id: product.id,
        src: product.image,
        name: product.name,
        brand: product.name.split(' ')[0], // Use first word as brand
        rate: product.rating,
        discount: `${product.discount}%`,
        underline: `₹${product.originalPrice}`,
        price: `₹${product.currentPrice}`,
        assure_src: product.assured ? '/images/buyproduct_f-assure.svg' : null
    }))

    if (!products.length) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <div className='food_health_main'>
                <Header_food setSortType={setSortType} sortType={sortType}/>                                                   
                <Products data={convertedProducts} />
            </div>
            <div className='food_health_large'>
                <Header_food_large/>
                <Food_menubar/>
                <Health_body setSortType={setSortType} sortType={sortType}/>
            </div>
        </div>
    )
}

export default CategoryPage
