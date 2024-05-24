
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TripDetails from './components/TripDetails/TripDetails';
import { MyProvider } from './components/MyProvider';
import Home from './components/Home/Home';


function App() {
  return (
    <> 
    <MyProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/tripdetails' element={<TripDetails />} />
      </Routes>
    </MyProvider>
    </>
  );
}

export default App;
