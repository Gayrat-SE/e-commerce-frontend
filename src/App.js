import React from 'react'
import {Container} from 'react-bootstrap' 
import Header  from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter as Routes, Route } from "react-router-dom" ;




function App() {
  return (
    <Routes>
      <Header />
      <main>
        <Container>
          <Route path='/' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Routes>
  )
}

export default App;
