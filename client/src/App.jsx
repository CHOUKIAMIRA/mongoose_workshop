
import './App.css'
import Productlist from './components/Productlist'
import AddProduct from './components/AddProduct'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Userlist from './components/Userlist'
import { Link, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <Link to="/products"> Go to product list</Link>
    <Link to="/users">Go to user list</Link>
    <Routes>
      <Route path="/users" element={<Userlist/>}/>
      <Route path="/products" element={
      <>
      <AddProduct/>
      <Productlist/>
      </>
    }/>
    </Routes>
    
      <ToastContainer position='bottom-left'/>
    </>
  )
}

export default App
