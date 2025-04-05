import React from 'react'
import './Contact.css'
import { MdCall, MdEmail, MdLocationOn } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'


const Contact = () => {
  const contactMethods = [
    {
      icon: <MdCall size={24} />,
      title: "Call",
      description: "Speak directly with our team",
      detail: "+251 096-041-6208",
      action: "Call Now"
    },
    {
      icon: <BsFillChatDotsFill size={24} />,
      title: "Chat",
      description: "Live chat with our support",
      detail: "Start a conversation",
      action: "Chat Now"
    },
    {
      icon: <MdEmail size={24} />,
      title: "Email",
      description: "Send us your questions",
      detail: "ctem@realestate.com",
      action: "Send Email"
    },
    {
      icon: <MdLocationOn size={24} />,
      title: "Visit",
      description: "Come see us in person",
      detail: "123 Property St, Adama",
      action: "Get Directions"
    }
  ]

  return (
    <section className='c-wrapper' id='contact'>
      <div className="paddings innerWidth flexCenter c-container">
       
        <div className="flexColStart c-left">
          <span className='orangeText'>Contact Us</span>
          <span className='primaryText'>Easy to Contact Us</span>
          <span className='secondary2Text'>
            We're always ready to help by providing the best services.
            We believe a good place to live can make your life better.
          </span>

          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <div className="method-card flexStart" key={index}>
                <div className="icon-circle flexCenter">
                  {method.icon}
                </div>
                <div className="method-details">
                  <span className="method-title">{method.title}</span>
                  <span className="method-description">{method.description}</span>
                  <span className="method-detail">{method.detail}</span>
                  <button className="method-button">{method.action}</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        
      </div>
    </section>
  )
}

export default Contact