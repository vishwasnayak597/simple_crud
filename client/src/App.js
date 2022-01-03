import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NavBar from './Component/NavBar';
import NotFound from './Component/NotFound'; 
import Home from './Component/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/all" element={<AllUsers/>} />
        <Route exact path="/add" element={<AddUser/>}/>
        <Route exact path="/edit/:id" element={<EditUser/>} />
        <Route element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;