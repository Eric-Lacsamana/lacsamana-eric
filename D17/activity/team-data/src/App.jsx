import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import Teams from './pages/Teams';
import TeamMemberDetails from './pages/TeamMemberDetails';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />}>
          <Route path=":id" element={<TeamMemberDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
