import './assets/styles/app.css';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
  return (

    <>
      <NavBar />
      <div id="main">
        <Outlet />
      </div>
    </>

  );
}

export default App;
