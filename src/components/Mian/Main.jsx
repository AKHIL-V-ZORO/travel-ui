import React, { useEffect } from 'react'
import './main.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Data } from '../../data'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";

const Main = () => {
  useEffect(() => {
    Aos.init({duration:2000})
  }, [])
  
  const truncate=(string,n)=>{
    if(n>50)
    return string.substring(0,91).concat("...")
  }
  return (
    <section className='main'>
      <div className="main--title">
        <h3 data-aos="fade-up"  className="title">Most visited destinations</h3>
      </div>
      <div className="main--content grid">
        {
          Data.map((item) => (

            <div data-aos="fade-up" key={item.id} className='main--card'>
              <div className="card--image-box">
                <img src={item.imgSrc} loading='lazy' alt={item.destTitle} />
              </div>

              <div className="card--info">

                <h4 className="card--info--destTitle">{item.destTitle}</h4>

                <span className="card--info--continent flex">
                  <HiOutlineLocationMarker className='icon' />
                  <span className="card--info--location">{item.location}</span>
                </span>
               

                <div className="card--info--fees flex">
                  <div className="card--info--grade">
                    <span>{item.grade}<small>+1</small></span>
                  </div>

                  <div className="card--info--price">
                    <h5>{item.fees}</h5>
                  </div>
                </div>

                <div className="card--info--description">
                  <p>{truncate(item.description,item.description.length)}</p>
                </div>

                <button className='btn flex'>
                  DETAILS <HiOutlineClipboardCheck className='icon' />
                </button>

              </div>

            </div>
          )
          )
        }
      </div>
    </section>
  )
}

export default Main
