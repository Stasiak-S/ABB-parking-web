import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Reservation from './components/pages/ReservationPage';
function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<Reservation/>} />
       </Routes>
    </div>
  );
}

export default App;
