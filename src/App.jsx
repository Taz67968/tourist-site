import Home from './pages/home'
import About from './pages/About'
import Gallery from './pages/gallery'
import TourPackage from './pages/tourPackage'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router'
import ContactUs from './pages/ContactUs'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About/' element={<About />} />
        <Route path='/Gallery/' element={<Gallery />} />
        <Route path='/TourPackage/' element={<TourPackage/>}/>
        <Route path='/ContactUS/' element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
