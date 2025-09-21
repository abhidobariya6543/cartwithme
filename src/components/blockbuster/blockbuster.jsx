import React from 'react'
import blockbusterbg from '/images/blockbuster.webp'
import '../blockbuster/blockbuster.css'


function Blockbuster({data}) {          
  return (
    <div className='blockbuster-main'>
            <div className='blockbuster-sbdiv'>
                <div className='blockbuster-upsec'>
                    <div className='blockbuster-updiv'>
                        <div className='blockbusterbg-div'>
                            <img src={blockbusterbg} alt=""  className='blockbuster-bg'/>
                        </div>
                        <div className='blockbuster-heading'>
                            <div className='heading-margin'>
                                Blockbuster Deals
                            </div>
                        </div>
                    </div>
                </div>
                <div className='blockbuster-downsec'>
                    <div className='blockbuster-downdiv'>
                         <div className='blockbuster-div'>
                            <div className='blockbuster-content'>
                                {
                                    data.map((item)=>{
                                        return <div className='pressure headphones' key={item.id}>
                                                    <a href=""><img src={item.src} alt={item.alt} /></a>
                                                </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className='blockbuster-sibdiv'>
                        <div className='blockbuster-borderbtm'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default Blockbuster