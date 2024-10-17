import './App.css'
import Login from './pages/login'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Labs from './pages/Labs'
import Days from './pages/Days'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/day/:days' element={<Days/>}/>
      <Route path='/lab/:days/:labs' element={<Labs/>}/>
    </Routes>
    </>
  )
}

export default App
