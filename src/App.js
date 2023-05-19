import './App.css';
import {Box} from '@mui/material';
import {Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Footer from './components/Footer';
import ExerciseDetails from './components/pages/ExerciseDetails';

function App() {
  return (
    <Box width="400px" sx={{width: {xl:'1488px'}}} m='auto'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
