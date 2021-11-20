import React, {Suspense, lazy } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//Components
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Spinner from './components/Spinner';
//Styles
import './styles/Global.css';
//Pages
const Inicio =  lazy(() => import('./pages/Início'));
const Base = lazy(() => import('./pages/Texto2'));

function App() {
  return (
      <div className="bodyContainer" id="bodyContainer">
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@1,300&display=swap" rel="stylesheet"/>
        
        <Router>
          <div className="navbarContainer">
            <Navbar/>
            <Profile/>
          </div>
          
          <section className="contentContainer">
            <Suspense fallback={<Spinner/>}>
              <Switch>
                <Route path="/" exact component={Inicio}/> 
                <Route path="/início" component={Inicio}/>
                <Route path="/base" component={Base}/>
              </Switch>
            </Suspense>
          </section>

        </Router>
      </div>
  );
}

export default App;
