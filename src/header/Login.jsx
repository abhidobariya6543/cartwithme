import React from 'react'
import './Login.css'


function Login({data}) {
  return (
    <div className='login_more_main'>
        <div className='login_more_div'>
            <ul>
                <a href="" className='sign_up'>
                    <li>
                        <span>New customer?</span>
                        <span className='sign_up_text' >Sign Up</span>
                    </li>
                </a>
                {
                    data.map((item)=>{
                        return <a href="" className='login_more_content' key={item.id}>
                                    <li>
                                        <div className='login_more_logo'><img src={item.src} alt={item.alt} /></div>
                                        <span>{item.name}</span>
                                    </li>
                                </a>
                    })
                }   
            </ul>
        </div>
    </div>
  )
}

export default Login