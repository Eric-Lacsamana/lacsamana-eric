import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthenticatedLayout from './layouts/AuthenticatedLayout';
import SeminarsPage from './pages/Seminars';
import Seminar from './pages/Seminar';
import EditSeminar from './pages/EditSeminar';
import Login from './pages/Login';

function App() {

  return (
    <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<AuthenticatedLayout />}>
            <Route path='/admin/seminars' element={<SeminarsPage />} />
            <Route path="/admin/seminars/:id" element={<Seminar />} />
            <Route path="/admin/seminars/:id/edit" element={<EditSeminar />} />
          </Route>
        </Routes>
    </Router>
  )
  // return (
  //  <div>
  //   {/* <AppNavbar /> */}
  //     {/* <h1>Hello, World!</h1>
  //     <Welcome />
  //     <DisplayName name={'John Doe'}/>
  //     <Greetings />
  //     <Counter />
  //     <ConditionalRender /> */}
  //      {/* <h1>Welcome to My React App</h1>
  //      <Button variant='primary'>Click Me</Button> */}
  //      {/* <IconExample /> */}
  //  </div>
  // )
}

export default App
