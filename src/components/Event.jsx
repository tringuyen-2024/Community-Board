import React from 'react'
import '../App.css'


export default function Event(props) {
  return (
    <div className='event'>
        <img src={props.imageSrc} alt={".jpg"} />
        <div className='eventName'>
            {props.name}
        </div>
        <a href={props.link}> 
          <button className='eventUrl'>View</button> 
        </a>
    </div>
  )
}