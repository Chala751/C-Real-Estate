
import Contact from "./components/Contact/Contact"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Residencies from "./components/Residencies/Residencies"
import Value from "./components/Value/Value"
import Start from "./components/Start/Start"
import Footer from "./components/Footer/Footer"


function App() {
  

  return (
    <div className="App">
      <div>
        <Header/>
        <Hero/>
      </div>
      <Residencies/>
      <Value/>
      <Contact/>
      <Start/>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App
