import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FormExample from './components/FormExample';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Welcome from './components/Welcome'
// import Greetings from './components/Greetings'
// import Counter from './components/Counter'
// import DisplayName from './components/DisplayName'
// import ConditionalRender from './components/ConditionalRender'
// import AppNavbar from './components/AppNavbar'
// import { Button } from 'react-bootstrap'
// import IconExample from './components/IconExample'

function App() {

  return (
    <Router>
      <AppNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/form' element={<FormExample />} />
          <Route path='/products' element={<Products />}>
            <Route path=":id" element={<ProductDetails />}/>
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
