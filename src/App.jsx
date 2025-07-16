import { Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Fotter from './Components/Fotter'
import Home from './Pages/Home'
import About from './Pages/About'
import Avalibality from './Pages/Avalibality'
import Doner from './Pages/Doner'
import Request from './Pages/Request'
import Galleary from './Pages/Galleary'
import Contact from './Pages/Contact'

function App() {
  return (
    <>
      <Header />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Home" element={<Home />} />
  <Route path="/About" element={<About />} />
  <Route path="/Avalibality" element={<Avalibality />} />
  <Route path="/Doner" element={<Doner />} />
  <Route path="/Request" element={<Request />} />
  <Route path="/Galleary" element={<Galleary />} />
  <Route path="/Contact" element={<Contact />} />
</Routes>
      <Fotter />
    </>
  )
}

export default App
