import React, { useContext, useEffect, useState } from 'react'
import './home.css'
import { FaSearch } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiTripadvisor } from "react-icons/si";
import { BsListTask } from "react-icons/bs";
import { TbApps } from "react-icons/tb";
import banner from '../../assets/banner.jpg'
import { useNavigate } from 'react-router-dom';

import Aos from 'aos'
import 'aos/dist/aos.css'
import axios from '../../axios/axios';
import Navbar from '../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import Main from '../Mian/Main';
import { MyContext } from '../MyProvider';


const Home = () => {

  const [date, setDate] = useState({ startDate: "", endDate: "" })

  const{data,setData}=useContext(MyContext)

 const navigate=useNavigate()
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const onSearch = async (e) => {
    e.preventDefault()
  
    await axios.get("/findtrips", {
      params: {
        startDate: date.startDate,
        endDate: date.endDate
      }
    }).then((response)=>{
      console.log(response.data)
      setData(response.data)
      response.data.length>=1?
      navigate("/tripdetails"): navigate('/')
  
    })
      .catch((error)=>console.log(error))
  }

  return (
    <>
    <Navbar/>
    <section className="home">
      <div className="home--overlay"></div>
      <img src={banner} className='home--banner' alt="" />

      <div className="home--content container">

        <div className="home--textDiv">
          <span data-aos="fade-up" className="home--small--text">Our Packages</span>
          <h1 data-aos="fade-right" className="home--title">Search Your Trip details</h1>
        </div>

        <form onSubmit={onSearch} data-aos="fade-up" className="home--card">

          <div className="dateInput">
            <label>start date:</label>
            <div className="input--box flex">
              <input name='startDate'
                onChange={(e) => {
                  setDate((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value
                  }))
                }}
                type="date"
                required />
            </div>
          </div>

          <div className="dateInput">
            <div className="label--end--date flex">
              <label>End date:</label>
            </div>
            <div className="input--box flex">
              <input name='endDate'
                onChange={(e) => {
                  setDate((prev) => ({
                    ...prev,
                    [e.target.name]: e.target.value
                  }))
                }}
                type="date"
                required />
            </div>
          </div>

          <div className="search--options flex">
            <button type='submit' className='search-btn'>Search</button>
            <FaSearch className='icon' />
          </div>
        </form>

        <div data-aos="fade-up" className="home--footer--icons flex">

          <div className="right--icons">
            <FiFacebook className='icon' />
            <AiOutlineInstagram className='icon' />
            <SiTripadvisor className='icon' />
          </div>

          <div className="left--icons">
            <BsListTask className='icon' />
            <TbApps className='icon' />
          </div>

        </div>
      </div>
    </section>

    <Main/>
    <Footer/>

    </>
  )

}

export default Home
