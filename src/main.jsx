import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import App from './App.jsx'
// import App from './todo/App.jsx'
import App from './Quiz/App.jsx'
// import App from './Routing/pages/App'
// import App from './dynamic_routing/App'
// import App from './UseReducer/todo/App'
// import App from './SWIGGY/App'
// import { RouterProvider } from 'react-router-dom'
// import appRouter from './SWIGGY/ComponentsDay3/App'
// import App from './contextApi/App'
// import App from './SWIGGY/Index'

createRoot(document.getElementById('root')).render(
  // <RouterProvider router={appRouter}/>,
  <StrictMode>
    {/* <Index /> */}
    <App/>
  </StrictMode>
)


