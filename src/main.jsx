import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import router from './Router/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import ProviderAuth from './providerShare/ProviderAuth';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ProviderAuth>
<RouterProvider router={router}/>
</ProviderAuth>
  
</React.StrictMode>
)
