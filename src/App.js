
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './Pages/Home/Services/Services';
import Team from './Pages/Team/Team';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Shared/Footer/Footer';
import AppointMent from './Pages/Appointment/AppointMent';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Facilities from './Pages/Home/Facilities/Facilities';

import Achievements from './Pages/Home/Achievements/Achievements';
import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';



function App() {
  return (
    <div className="App">

   <AuthProvider>
   <Router>
     <Header></Header>
     
     <Switch>
       <Route exact path="/">
            <Home></Home>
       </Route>
       <Route path="/home">
          <Home></Home>
       </Route>
       <Route  path="/facilities">
       <Facilities></Facilities>
       </Route>
       <Route  path="/services">
          <Services></Services>
       </Route>
       <PrivateRoute  path="/service/:serviceId">
       <ServiceDetail></ServiceDetail>
       </PrivateRoute>
       <Route  path="/achievements">
     <Achievements></Achievements>
       </Route>

         <PrivateRoute path="/team">
           <Team></Team>
         </PrivateRoute>
       <PrivateRoute path="/contact">
          <Contact></Contact>
       </PrivateRoute>
       <PrivateRoute path="/appointment">
          <AppointMent></AppointMent>
       </PrivateRoute>
       <Route path="/login">
         <Login>
         </Login>
       </Route>
       <Route path="/register">
    <Register></Register>
       </Route>
       <Route path="*">
            <NotFound></NotFound>
       </Route>
     </Switch>
         <Footer></Footer>
     </Router>
   </AuthProvider>

    
   
    </div>
  );
}

export default App;
