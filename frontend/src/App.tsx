

import Contacts from './pages/Contacts'
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import New from './pages/New'
import Welcome from './pages/Welcome'

function App() {


  return (
    <div>
      <Router>
       
          <Routes>
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/" element={<Welcome />} />
            <Route path="/contacts/new" element={<New />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          <Route path='*' element={<NotFound />} />
          </Routes>
     
      </Router>
    </div>
  )
}

export default App
