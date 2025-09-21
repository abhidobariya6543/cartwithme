import React from 'react'

function Offer_second({data}) {
  return (
    <div className='offertwo_main'>
      <div className='offertwo_hddiv'>
        {
          data.map((item)=>{
            return <div key={item.id} className='offertwo_div'>
                      <a href="">
                        <div className='offertwo_img'>
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

export default Offer_second