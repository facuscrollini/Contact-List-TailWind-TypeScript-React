
import '././styles/App.css'
import { NavBar } from './components/NavBar'
import { Outlet } from 'react-router'
// import { Footer } from './components/Footer'

function App() {
  

  return (
    <>
      <NavBar/>
      <Outlet/>
      {/* <Footer/> */}
    </>
  )
}

export default App
