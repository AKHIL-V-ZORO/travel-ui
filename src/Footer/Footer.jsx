import React, { useEffect } from 'react'
import './footer.css'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import footer from '../assets/Cinque Terre.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
  Aos.init({duration:2000})
  }, [])
  
  return (
    <section className="footer">

      <div className="footer--img--div">
       <img src={footer} alt="" />
      </div>

      <div className="footer--contents">

        <div className="footer--contact--div">
          <div className="footer--contact--text">
            <small data-aos="fade-up">KEEP IN TOUCH</small>
            <h3 data-aos="fade-up">Travel with us</h3>
          </div>
        </div>

        <div  className="footer--input ">
          <input data-aos="fade-up" type="text" placeholder='Enter Email Address' />
          <button data-aos="fade-up" className='btn flex' type='submit'>
            SEND<FiSend className='icon' />
          </button>
        </div>

      </div>

      <div className="footer--card flex">
        <div className="footer--intro flex">
          <div className="footer--logo">
            <a href="#" className='logo flex'>
              < MdTravelExplore className="icon" />Travel
            </a>
          </div>

          <div data-aos="fade-up" className="footer--paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores sapiente tempora placeat eveniet natus ut esse reprehenderit minus accusantium?
          </div>

          <div data-aos="fade-up" className="footer--socials flex">
            <AiOutlineTwitter className="icon" />
            <AiOutlineYoutube className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>

        </div>

        <div className="footer--links grid">

          <div data-aos="fade-up" data-aos-duration="4000" className="link--group">
            <span className='group--title'>OUR AGENCY</span>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              Services
            </li>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              Insurance
            </li>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              Agency
            </li>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              Tourism
            </li>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              Payment
            </li>
          </div>

          <div data-aos="fade-up" data-aos-duration="4000" className="link--group">
            <span className='group--title'>PARTNERS</span>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              Bookings
            </li>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              Rentcars
            </li>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              HotelWorld
            </li>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              Trivago
            </li>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              Tripadvisor
            </li>
          </div>

          <div data-aos="fade-up" data-aos-duration="5000" className="link--group">
            <span className='group--title'>LAST MINUTE</span>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              London
            </li>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              California
            </li>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              Indonesia
            </li>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              Europe
            </li>
            <li className="footer--list flex">
              <FiChevronRight className='icon' />
              Oceania
            </li>
          </div>
        </div>

        <div className="footer--div">
          <small >TRAVEL WEBSITE</small>
          <small >COPYRIGHT RESERVED - Akhilv_Zoro 2024</small>
        </div>

      </div>

    </section>
  )
}

export default Footer
