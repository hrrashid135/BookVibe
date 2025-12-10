import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <div className="max-w-9/12 mx-auto">
        <Header></Header>
        <Outlet />
        <Footer></Footer>

      </div>
    </>
  )
}

export default App
