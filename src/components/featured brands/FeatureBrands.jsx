import React from 'react'
import '../featured brands/FeatureBrands.css'




function FeatureBrands({data,datatwo}) {
  return (
    <div className='feature-main'>
        <div className='feature-sbdiv'>
            <div className='heading'>
                <div className='heading-margin'>
                    Featured Brands
                </div>
            </div>
            <div className='feature-content'>
                <div className='feature-div'>
                    {
                        data.map((item)=>{
                            return <div className='feature-element' key={item.id}>
                                        <a href="">
                                            <img src={item.src} alt={item.alt} />
                                        </a> 
                                    </div>
                        })
                    }
                    {
                        datatwo.map((item)=>{
                            return <div className='featurelap-element' key={item.id}>
                                        <a href="">
                                            <img src={item.src} alt={item.alt} />
                                        </a> 
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureBrands