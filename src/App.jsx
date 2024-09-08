import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App = () => {
  return (
    <main>
      <Navbar />
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
      </BrowserRouter>
    </main>
  );
};
export default App;
