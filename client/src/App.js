// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Dashboard from './admin/components/Dashboard';
// import Login from './admin/components/Login';
// import ForgotPassword from './admin/components/ForgotPwd';
// import Users from './admin/components/Users';
// import Order from './admin/components/Order';
// import Product from './admin/components/Product';
// import PrivateRoute from './admin/components/PrivateRoute';
// import AuthLayout from './admin/components/AuthLayout';
// import CreatedUsers from './admin/components/CreateUser';
// import Marketing from './admin/components/Marketing';
// import Stock from './admin/components/Stock';
// import Attandance from './admin/components/Attandance';
// import Headerd from './admin/components/Headerd';

// function App() {
//   return (
//     <Router>
//       <Headerd />
//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/ForgotPassword" element={<ForgotPassword />} />

//         {/* Protected routes */}
//         <Route path="/admin/dashboard" element={
//               <PrivateRoute>
//               <AuthLayout>
//                 <Dashboard />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/order"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <Order />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/users"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <Users />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/product"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <Product />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/stock"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <Stock />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/attandance"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <Attandance />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/createUser"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <CreatedUsers />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//           <Route
//           path="/marketing"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <Marketing />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//       </Routes>
      
//     </Router>
//   );
// }

// export default App;




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Dashboard from './admin/components/Dashboard';
// import Login from './admin/components/Login';
// import ForgotPassword from './admin/components/ForgotPwd';
// import Users from './admin/components/Users';
// import Order from './admin/components/Order';
// import Product from './admin/components/Product';
// import PrivateRoute from './admin/components/PrivateRoute';
// import AuthLayout from './admin/components/AuthLayout';
// import CreatedUsers from './admin/components/CreateUser';
// import Marketing from './admin/components/Marketing';
// import Stock from './admin/components/Stock';
// import Attandance from './admin/components/Attandance';
// import Headerd from './admin/components/Headerd';

// function HeaderWithConditionalRender() {
//   const location = useLocation();

//   // Conditionally render the Headerd component based on the current route
//   if (location.pathname === '/' || location.pathname === '/ForgotPassword') {
//     return null;
//   }

//   return <Headerd />;
// }

// function App() {
//   return (
//     <Router>
//       <HeaderWithConditionalRender /> {/* Conditionally render Headerd */}
      
//       <Routes>
//         {/* Public routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/ForgotPassword" element={<ForgotPassword />} />

//         {/* Protected routes */}
//         <Route path="/admin/dashboard" element={
//               <PrivateRoute>
//                 <AuthLayout>
//                   <Dashboard />
//                 </AuthLayout>
//               </PrivateRoute>
//             }
//         />
//         <Route
//           path="/order"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <Order />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/users"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <Users />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/product"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <Product />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/stock"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <Stock />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/attandance"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <Attandance />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/createUser"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <CreatedUsers />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/marketing"
//           element={
//             <PrivateRoute>
//               <AuthLayout>
//                 <Marketing />
//               </AuthLayout>
//             </PrivateRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from './admin/components/Dashboard';
import Login from './admin/components/Login';
import ForgotPassword from './admin/components/ForgotPwd';
import Users from './admin/components/Users';
import Order from './admin/components/Order';
import Product from './admin/components/Product';
import PrivateRoute from './admin/components/PrivateRoute';
import AuthLayout from './admin/components/AuthLayout';
import CreatedUsers from './admin/components/CreateUser';
import Marketing from './admin/components/Marketing';
import Stock from './admin/components/Stock';
import Attandance from './admin/components/Attandance';
import Headerd from './admin/components/Headerd';
import TotalUser from './admin/components/TotalUser'
import TotalOrder from './admin/components/TotalOrder'
import ReceptionAttandance from './admin/components/ReceptionAttandance'
import PendingOrder from './admin/components/PendingOrder';
import AddDeliveryCharges from './admin/components/DeliveryCharge'
import CreateOrder from './admin/components/CreateOrder'
import AttandanceDispatch from './admin/components/AttandanceDispatch'
import AttandanceStock from './admin/components/AttandanceStock'
import AddStock from './admin/components/AddStock'
import Dispatch from './admin/components/Dispatch'
import DispatchHistory from './admin/components/DispatchHistory'
import ChallanHistory from './admin/components/ChallanHistory'


// Import new role-specific dashboard components
import ReceptionDashboard from './admin/components/ReceptionDashboard';
import StockDashboard from './admin/components/StockDashboard';
import DispatchDashboard from './admin/components/DispatchDashboard';
import PendingOrders from './admin/components/PendingOrder';


function HeaderWithConditionalRender() {
  const location = useLocation();
  const publicPaths = ['/', '/ForgotPassword'];
  
  if (publicPaths.includes(location.pathname)) {
    return null;
  }

  return <Headerd />;
}

function App() {
  return (
    <Router>
      
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Login />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />

        {/* Admin routes */}
        <Route path="/admin/dashboard" element={
          <PrivateRoute allowedRoles={['admin']}>
             <HeaderWithConditionalRender />
            <AuthLayout>
              <Dashboard />
            </AuthLayout>
          </PrivateRoute>
        }/>

        {/* Reception routes */}
        <Route path="/reception/dashboard" element={
          <PrivateRoute allowedRoles={['reception']}>
            <AuthLayout>
              <ReceptionDashboard />
              
            </AuthLayout>
          </PrivateRoute>
        }/>
        <Route path="/total-users" element={
          <PrivateRoute allowedRoles={['reception']}>
            <AuthLayout>
              <ReceptionDashboard />
              <TotalUser />
            </AuthLayout>
          </PrivateRoute>
        }/>
         <Route path="/total-orders" element={
          <PrivateRoute allowedRoles={['reception']}>
            <AuthLayout>
              <ReceptionDashboard />
              <TotalOrder />
            </AuthLayout>
          </PrivateRoute>
        }/>

        <Route path="/attandance/reception" element={
          <PrivateRoute allowedRoles={['reception']}>
            <AuthLayout>
              <ReceptionDashboard />
              <ReceptionAttandance />
            </AuthLayout>
          </PrivateRoute>
        }/>

        <Route path="/pending-orders" element={
          <PrivateRoute allowedRoles={['reception']}>
            <AuthLayout>
              <ReceptionDashboard />
              <PendingOrder />
            </AuthLayout>
          </PrivateRoute>
        }/>
         <Route path="/add-delivery-charges" element={
          <PrivateRoute allowedRoles={['reception']}>
            <AuthLayout>
              <ReceptionDashboard />
              <AddDeliveryCharges />
            </AuthLayout>
          </PrivateRoute>
        }/>


<Route path="/create-order" element={
          <PrivateRoute allowedRoles={['reception']}>
            <AuthLayout>
              <ReceptionDashboard />
              <CreateOrder />
            </AuthLayout>
          </PrivateRoute>
        }/>
        
       
        
        {/* Stock routes */}
        <Route path="/stock/dashboard" element={
          <PrivateRoute allowedRoles={['stock']}>
            <AuthLayout>
              <StockDashboard />
            </AuthLayout>
          </PrivateRoute>
        }/>

<Route path="/attandance/stock" element={
          <PrivateRoute allowedRoles={['stock']}>
            <AuthLayout>
              <StockDashboard />
              <AttandanceStock />
            </AuthLayout>
          </PrivateRoute>
        }/>

<Route path="/Add-Stocks" element={
          <PrivateRoute allowedRoles={['stock']}>
            <AuthLayout>
              <StockDashboard />
          <AddStock />
            </AuthLayout>
          </PrivateRoute>
        }/>



        {/* Dispatch routes */}
        <Route path="/dispatch/dashboard" element={
          <PrivateRoute allowedRoles={['dispatch']}>
            <AuthLayout>
              <DispatchDashboard />
            </AuthLayout>
          </PrivateRoute>
        }/>
            <Route path="/attandance/dispatch" element={
          <PrivateRoute allowedRoles={['dispatch']}>
            <AuthLayout>
              <DispatchDashboard />
              <AttandanceDispatch />
            </AuthLayout>
          </PrivateRoute>
        }/>
           <Route path="/dispatch" element={
          <PrivateRoute allowedRoles={['dispatch']}>
            <AuthLayout>
              <DispatchDashboard />
              <Dispatch />
            </AuthLayout>
          </PrivateRoute>
        }/>
             <Route path="/order-history-dispatch" element={
          <PrivateRoute allowedRoles={['dispatch']}>
            <AuthLayout>
              <DispatchDashboard />
              <DispatchHistory />
            </AuthLayout>
          </PrivateRoute>
        }/>
          <Route path="/user/dispatch" element={
          <PrivateRoute allowedRoles={['dispatch']}>
            <AuthLayout>
              <DispatchDashboard />
             <ChallanHistory />
            </AuthLayout>
          </PrivateRoute>
        }/>

        
      

        {/* Shared routes with role restrictions */}
        <Route path="/order" element={
          <PrivateRoute allowedRoles={['admin', 'reception']}>
            <AuthLayout>
              <Order />
            </AuthLayout>
          </PrivateRoute>
        }/>

        <Route path="/users" element={
          <PrivateRoute allowedRoles={['admin']}>
            <AuthLayout>
              <Users />
            </AuthLayout>
          </PrivateRoute>
        }/>
         

        <Route path="/product" element={
          <PrivateRoute allowedRoles={['admin', 'stock']}>
            <AuthLayout>
              <Product />
            </AuthLayout>
          </PrivateRoute>
        }/>

        <Route path="/stock" element={
          <PrivateRoute allowedRoles={['admin', 'stock']}>
            <AuthLayout>
              <Stock />
            </AuthLayout>
          </PrivateRoute>
        }/>

        <Route path="/attandance" element={
          <PrivateRoute allowedRoles={['admin']}>
            <AuthLayout>
              <Attandance />
            </AuthLayout>
          </PrivateRoute>
        }/>

        <Route path="/createUser" element={
          <PrivateRoute allowedRoles={['admin']}>
            <AuthLayout>
              <CreatedUsers />
            </AuthLayout>
          </PrivateRoute>
        }/>

        <Route path="/marketing" element={
          <PrivateRoute allowedRoles={['admin', 'marketing']}>
            <AuthLayout>
              <Marketing />
            </AuthLayout>
          </PrivateRoute>
        }/>
      </Routes>
    </Router>
  );
}

export default App;