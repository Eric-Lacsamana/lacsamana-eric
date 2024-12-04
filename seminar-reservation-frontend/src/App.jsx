import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from './layouts/PublicLayout';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';
import SeminarsPage from './pages/Seminars';
import AddSeminarPage from './pages/AddSeminar';
import SeminarDetails from './pages/SeminarDetails';
import EditSeminarPage from './pages/EditSeminar';
import Login from './pages/Login';
import { AuthProvider } from './context/AuthContext';
import DashboardPage from './pages/Dashboard';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<PublicLayout />}>
              <Route path='/login' element={<Login />} />
          </Route>
          <Route element={<AuthenticatedLayout />}>
            <Route path='/' element={<DashboardPage /> } />
            <Route path='/admin/seminars' element={<SeminarsPage />} />
            <Route path="/admin/seminars/add" element={<AddSeminarPage />} />
            <Route path="/admin/seminars/:id" element={<SeminarDetails />} />
            <Route path="/admin/seminars/:id/edit" element={<EditSeminarPage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
