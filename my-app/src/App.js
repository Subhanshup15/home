import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomNavbar } from './components/navigation';
import { AboutUs } from './components/about-us';
import { Home } from './components/home';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <CustomNavbar />
        <Home />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
}


export default App;
