
import React, { useState, useEffect } from 'react'
import './dropdown.css'

function Fashion({ data }) {
  const [activeIndex, setActiveIndex] = useState(0)


  useEffect(() => {
    if (data[0]?.suboptions) {
      setActiveIndex(0)
    }      
  }, [data])

  return (
    <div className='fashion_component position_comp'>
      <div className='fashion_left_div'>
        {data.map((item, i) => (
          <div
            key={item.id}
            className={`fashion_links fashion_pad_link slotActive`}
            onMouseEnter={() => setActiveIndex(i)}
          >
            {item.name}
            {item.suboptions && <span className={`${i === activeIndex? 'arrow_right' : ''}`}></span>}
          </div>
        ))}
      </div>

      <div className='fashion_right_div'>
        {data[activeIndex]?.suboptions ? (
          <>
            <div className='fashion_right_hd'>More in {data[activeIndex].name}</div>
            {data[activeIndex].suboptions.map((subItem) => (
              <div key={subItem.id} className='fashion_links fashion_pad_link subitem'>
                {subItem.name}
              </div>
            ))}
          </>
        ) : (
          <div className='fashion_right_hd'></div>
        )}
      </div>
    </div>
  )
}

export default Fashion

