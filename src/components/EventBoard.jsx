import React from 'react'
import '../App.css'
import Event from './Event'
import image1 from '../images/image1.jpeg'
import image2 from '../images/image2.jpeg'
import image3 from '../images/image3.jpeg'
import image4 from '../images/image4.jpeg'
import image5 from '../images/image5.jpeg'
import image6 from '../images/image6.png'
import image7 from '../images/image7.png'
import image8 from '../images/image8.jpeg'
import image9 from '../images/image9.png'
import image10 from '../images/image10.jpg'
import image11 from '../images/image11.jpeg'
import image12 from '../images/image12.png'


export default function Gallery() {
  return (
    <div className='boardContainer'>
        <div className='board'>
            <Event 
              imageSrc={image1} 
              name="Live In Concert: Howard University's Department of Music" 
              link="https://www.eventbrite.com/e/live-in-concert-howard-universitys-department-of-music-tickets-518789632757?aff=ebdssbdestsearch"
            />

            <Event 
              imageSrc={image2} 
              name="Tennessee Military Department Merit Badge University" 
              link="https://www.eventbrite.com/e/tennessee-military-department-merit-badge-university-tickets-544416844437?aff=ebdssbdestsearch"
            />

            <Event 
              imageSrc={image3} 
              name="Brenau University Department of Dance present...VORTEX" 
              link="https://www.eventbrite.com/e/brenau-university-department-of-dance-presentvortex-tickets-551574954537?aff=ebdssbdestsearch"
            />

            <Event 
              imageSrc={image4} 
              name="Fire in which we Burn" 
              link="https://www.eventbrite.com/e/fire-in-which-we-burn-tickets-536268602827?aff=ebdssbdestsearch"
              />

            <Event 
              imageSrc={image5} 
              name="Wet Ink" 
              link="https://www.eventbrite.com/e/wet-ink-tickets-543311769127?aff=ebdssbdestsearch"
            />

            <Event 
              imageSrc={image6} 
              name="Chicago A Capella Presents: From Behind Closed Doors" 
              link="https://www.lincolnparkchamber.com/event/chicago-a-capella-presents-from-behind-closed-doors/"
            />

            <Event 
              imageSrc={image7} 
              name="Apprentice University Student Preview Day" 
              link="https://www.eventbrite.com/e/apprentice-university-student-preview-day-tickets-416666489687?aff=ebdssbdestsearch"
            />

            <Event 
              imageSrc={image8} 
              name="Dinner and Info Night with Apprentice University" 
              link="https://www.eventbrite.com/e/dinner-and-info-night-with-apprentice-university-tickets-412283098847?aff=ebdssbdestsearch"
            />
            
            <Event 
              imageSrc={image9} 
              name="Fairbanks Symposium at the University of Indianapolis 2023" 
              link="https://www.eventbrite.com/e/fairbanks-symposium-at-the-university-of-indianapolis-2023-tickets-532282490257?aff=ebdssbdestsearch"
            />

            <Event 
              imageSrc={image10} 
              name="Lisa Hendrickson: Burning the Breeze" 
              link="https://www.eventbrite.com/e/lisa-hendrickson-burning-the-breeze-tickets-507833432467?aff=ebdssbdestsearch"
            />

            <Event 
              imageSrc={image11} 
              name="Paratech Structural Shoring University" 
              link="https://www.eventbrite.com/e/paratech-structural-shoring-university-tickets-504753881447?aff=ebdssbdestsearch"
            />

            <Event 
              imageSrc={image12} 
              name="5th Annual Great Lakes Recreational Therapy Student Conference" 
              link="https://www.eventbrite.com/e/5th-annual-great-lakes-recreational-therapy-student-conference-tickets-530683377267?aff=ebdssbdestsearch"
            />
        </div>
    </div>
  )
}