import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Video from './components/Video';
import Footer from './components/Footer';
import Upload from './components/Upload';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/videos' element={<Video />} />
      <Route path='/upload' element={<Upload />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </Routes>
    <Footer />
  </Router>
  );
}

export default App;
