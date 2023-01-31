import logo from './logo.svg';
import './App.css';
import BikeStations from './pages/bikeStations/BikeStations';
import NavBar from './pages/common/NavBar/NavBar';
import { RouterProvider } from 'react-router-dom';
import Router from './routes/Router';

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
