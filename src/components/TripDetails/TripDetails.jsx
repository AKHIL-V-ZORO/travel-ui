import React, { useContext } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import './TripDetails.css'
import { MyContext } from '../MyProvider'

const TripDetails = () => {
 const {data,setData}= useContext(MyContext)

  return (
    <>
      <Navbar />
      <div className='trip-details'>
        <div className="trip">
          <div className="user-data">
            <h5 >user name : <span className='name'>naruto</span> </h5>
            <h5 >user PNR:<span className='pnr'>1004</span></h5>
          </div>

          <div className="trip-data">
            <h5 > trip start date: <span className='startDate'>01-01-2024</span></h5>
            <h5 >trip end date: <span className='endDate'>02-01-2024</span></h5>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default TripDetails
