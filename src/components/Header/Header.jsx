import React ,{useState}from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'

const Header = () => {
  const[menuOpened,setMenuOpened]=useState(false)
  const getMenuStyles=(menuOpened)=>{
    if(document.documentElement.clientWidth <=800){
      return{right: !menuOpened && "-100%"}
    }
  }


  return (
    <section className='h-wrapper'>
        <div className="flexCenter paddings innerwidth h-container">
            <img src="./c-logo11.png" alt="logo"  width={100}/>

            <div className=" flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                <a href="#Residencies">Residencies</a>
                <a href="#Value">Our Value</a>
                <a href="#Contact">Contact Us</a>
                <a href="#Start">Get Started</a>
                <button className='button'>
                   <a href="">Contact</a>
                </button>
            </div>
            <div className="menu-icon"  onClick={()=>setMenuOpened((prev)=>!prev)}>
              <BiMenuAltRight size={40}/>
            </div>
        </div>
        

    </section>
  )
}

export default Header
