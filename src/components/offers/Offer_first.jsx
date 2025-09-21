import React from 'react'

function Offer_first({data}) {
  return (
    <div className='offerone_main'>
          <div className='offerone_hddiv'>
            
            {
                data.map((item)=>{
                      return <div className='offerone_div' key={item.id}>
                              <a href="">
                                <div className='offerone_img'>
                                  <img src={item.src} alt={item.alt} />
                                </div>
                              </a>
                            </div>
                })
            }          
          </div>
    </div>
  )
}

export default Offer_first