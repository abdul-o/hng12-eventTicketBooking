import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SelectTicket from './Pages/SelectTicket.jsx'
import Attendee from './Pages/Attendee.jsx'
import TicketReady from './Pages/TicketReady.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Attendee",
    element: <Attendee />,
  },
  {
    path: "/TicketReady",
    element: <TicketReady />,
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/> ,
  
  </React.StrictMode>,
)