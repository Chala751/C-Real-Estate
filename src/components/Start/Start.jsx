import React from 'react'
import './Start.css'
import { RiSearch2Line } from 'react-icons/ri'
import { FiMapPin } from 'react-icons/fi'
import { BsHouseDoor } from 'react-icons/bs'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'


const GetStarted = () => {
  const steps = [
    {
      icon: <RiSearch2Line size={24} />,
      title: "Search Property",
      description: "Browse our extensive listings to find your perfect home"
    },
    {
      icon: <FiMapPin size={24} />,
      title: "Visit Location",
      description: "Schedule a visit to explore the neighborhood and property"
    },
    {
      icon: <BsHouseDoor size={24} />,
      title: "Select Your Home",
      description: "Choose the property that best fits your needs and budget"
    },
    {
      icon: <HiOutlineCurrencyDollar size={24} />,
      title: "Make It Official",
      description: "Complete paperwork and move into your new home"
    }
  ]

  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth flexCenter g-container">
        {/* Left side - Content */}
        <div className="flexColStart g-left">
          <span className='orangeText'>Get Started</span>
          <span className='primaryText'>Find Your Dream Home in 4 Simple Steps</span>
          <span className='secondary2Text'>
            Our streamlined process makes finding and securing your perfect property 
            easier than ever before. Let's begin your journey today.
          </span>

          <div className="steps-container">
            {steps.map((step, index) => (
              <div className="step-card flexStart" key={index}>
                <div className="step-number">{index + 1}</div>
                <div className="step-icon">{step.icon}</div>
                <div className="step-details">
                  <span className="step-title">{step.title}</span>
                  <span className="step-description">{step.description}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="start-button">
            Begin Your Search Now
          </button>
        </div>

        
      </div>
    </section>
  )
}

export default GetStarted