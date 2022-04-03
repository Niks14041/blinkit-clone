
import './App.css'
import Header from './components/Header/Header'
import Body from './components/Body/Body'
import Bank from './components/Bank/Bankdetails'
import Footer from './components/Footer/Footer'
import Homeproduct from './components/BodyCorosaul/Homeproduct'
import Downloadapp from './components/DownloadApp/Downloadapp'
import Maincorousel from './components/Maincorosaul/Maincorousel'
import { CorouselData } from './components/Maincorosaul/MaincorouselData'

function App() {

  return (
    <>
      <Header />
      <Body />
      <Bank/>
      <Maincorousel slides={CorouselData}/>
      <Homeproduct />
      <Downloadapp/>
      <Footer/>
    </>
  )
}

export default App
