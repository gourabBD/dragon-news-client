
import './App.css';
import { Button } from 'react-bootstrap';
import {

  RouterProvider,
 
} from "react-router-dom";
import { router } from './Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
