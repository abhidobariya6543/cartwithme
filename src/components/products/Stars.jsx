import React, { useEffect, useRef } from 'react'

function Stars({totalStars=5,rating}) { 
    const ref=useRef(null)
    const drawstar=(ctx,{x,y,spikes=5,outerRadius=28,innerRadius=14,fill})=>{
        let rot=(Math.PI/2)*3
        let step=Math.PI/spikes
        ctx.beginPath()
        ctx.moveTo(x,y-outerRadius)
        for(let i=0;i<spikes ;i++){
            ctx.lineTo(x + Math.cos(rot)*outerRadius,y + Math.sin(rot)*outerRadius)
            rot += step
            ctx.lineTo(x + Math.cos(rot)*innerRadius,y + Math.sin(rot)*innerRadius)   
            rot += step
        }                                                             
        ctx.closePath()
        ctx.fillStyle=fill
        ctx.fill()
    } 
    useEffect(()=>{
        const canvas=ref.current
        const ctx=canvas.getContext('2d')
        ctx.clearRect(0,0,canvas.width,canvas.height)
        for (let i = 0; i < totalStars; i++) {
            const x =25 + i * 55
            const y=60
            if(i<Math.floor(rating)){
                drawstar(ctx,{x,y,fill:'#008c00'})
            }
            else if(i<rating){
                drawstar(ctx,{x,y,fill:'lightgray'})
                ctx.save()
                ctx.beginPath()
                ctx.rect(x-24,y-24,24,48)
                ctx.clip()
                drawstar(ctx,{x,y,fill:'#008c00'})
                ctx.restore()
            }
            else{
               drawstar(ctx,{x,y,fill:'lightgray'})  
            }
            
        }
    },[rating,totalStars])
  return (
    <div className='rating'>
        <canvas ref={ref} width={totalStars*55} height={120} style={{width:'80px',height:'35px'}}/>
    </div>
  )
}

export default Stars