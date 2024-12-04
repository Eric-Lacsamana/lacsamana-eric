import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';
import SeminarsPage from './pages/Seminars';
import AddSeminarPage from './pages/AddSeminar';
import Seminar from './pages/Seminar';
import EditSeminarPage from './pages/EditSeminar';
import Login from './pages/Login';



function App() {

  return (
    <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
   

          <Route element={<AuthenticatedLayout />}>
            <Route path='/' element={null} />
            <Route path='/admin/seminars' element={<SeminarsPage />} />
            <Route path="/admin/seminars/add" element={<AddSeminarPage />} />
            <Route path="/admin/seminars/:id" element={<Seminar />} />
            <Route path="/admin/seminars/:id/edit" element={<EditSeminarPage />} />
          </Route>
        </Routes>
    </Router>
  )
}

export default App
