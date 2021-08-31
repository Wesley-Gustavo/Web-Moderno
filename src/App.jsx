import React, {Suspense, lazy } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//Components
import Navbar from './components/Navbar';
import Spinner from './components/Spinner';
//Styles
import './styles/Global.css';
//Pages
const Inicio =  lazy(() => import('./pages/Início'));
const Base = lazy(() => import('./pages/Texto2'));

function App() {
  return (
      <div className="bodyContainer">
        <Router>
          <div className="navbarContainer">
            <Navbar/>
          </div>
          
          <section className="contentContainer">
            <Suspense fallback={<Spinner/>} >
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
