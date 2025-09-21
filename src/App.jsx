
import {  Routes, Route,Navigate} from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Search from "./header/Search";
import Food_health from "./pages/Food_health";
import Filter from "./header/Filter";
import SingleProduct from "./pages/SingleProduct";
import BuyProduct from "./pages/BuyProduct";
import Cart from "./pages/Cart";
import CheckoutAddress from "./pages/CheckoutAddress";
import CheckoutSummary from "./pages/CheckoutSummary";
import CheckoutPayment from "./pages/CheckoutPayment";
import OrderConfirmation from "./pages/OrderConfirmation";
import CategoryPage from "./pages/CategoryPage";


function App() {
 

  return (
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/food_health" element={<Food_health/>}/>
          <Route path="/food_health/filter" element={<Filter/>}/>
          <Route path="/food_health/SingleProduct" element={<SingleProduct/>}/>
          <Route path="/food_health/BuyProduct" element={<BuyProduct/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout/address" element={<CheckoutAddress/>}/>
          <Route path="/checkout/summary" element={<CheckoutSummary/>}/>
          <Route path="/checkout/payment" element={<CheckoutPayment/>}/>
          <Route path="/order-confirmation" element={<OrderConfirmation/>}/>
          <Route path="/category/:category" element={<CategoryPage/>}/>
        </Routes>      
  )   
}

export default App
   
