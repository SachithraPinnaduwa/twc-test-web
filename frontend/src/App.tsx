

import './App.css'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Register from './pages/Register'
import NotFound from './pages/NotFound'

function App() {


  return (
    <div>
      <Router>
       
          <Routes>
            <Route path="/" element={<Contacts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          <Route path='*' element={<NotFound />} />
          </Routes>
     
      </Router>
    </div>
  )
}

export default App
