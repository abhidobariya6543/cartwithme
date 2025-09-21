import React from 'react'
import '../jackpotdeals/JackpotDeal.css'
import jackpotbg from '/images/jackpot.jpg'



function JackpotDeal({data}) {
  return (
    <div className='jackpot-main'>
            <div className='jackpot-sbdiv'>
                <div className='jackpot-upsec'>
                    <div className='jackpot-updiv'>
                        <div className='jackpotbg-div'>
                            <img src={jackpotbg} alt=""  className='jackpot-bg'/>
                        </div>
                        <div className='jackpot-heading'>
                            <div className='heading-margin'>
                                Jackpot Deals
                            </div>
                        </div>
                    </div>
                </div>
            <div className='jackpot-downsec'>
                <div className='jackpot-downdiv'>
                        <div className='jackpot-div'>
                        <div className='jackpot-content'>
                            {
                                data.map((item)=>{
                                    return <div className='headphones' key={item.id}>
                                                <a href=""><img src={item.src} alt={item.alt} /></a>
                                            </div>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className='jackpot-sibdiv'>
                    <div className='jackpot-borderbtm'>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JackpotDeal