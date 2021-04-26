import React, {Suspense, lazy} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//Components
import Navbar from './components/Navbar';
import {Load} from './components/LazyLoad';
//Styles
import './styles/Global.css';
//Pages
const Início = lazy(() => import('./pages/Início'));
const Base = lazy(() => import('./pages/Texto2'));

function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Rajdhani&display=swap" rel="stylesheet"/>
      </head>

      <body className="bodyContainer">
        <Router>
          <div className="navbarContainer">
            <Navbar/>
          </div>

          <section className="contentContainer">
            <Suspense fallback={<Load/>}>
              <Switch>
                <Route path="/" exact component={Início} /> 
                <Route path="/início" component={Início} />
                <Route path="/base" component={Base} />
              </Switch>
            </Suspense>
          </section>
        </Router>
      </body>
    </>
  );
}

export default App;
