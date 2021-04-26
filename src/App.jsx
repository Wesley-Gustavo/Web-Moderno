import React, {Suspense, lazy} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//Components
import Navbar from './components/Navbar';
//Styles
import './styles/Global.css';
//Pages
import Início from './pages/Início';
import Base from './pages/Texto2';

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
              <Switch>
                <Route path="/" exact component={Início} /> 
                <Route path="/início" component={Início} />
                <Route path="/base" component={Base} />
              </Switch>
          </section>
        </Router>
      </body>
    </>
  );
}

export default App;
