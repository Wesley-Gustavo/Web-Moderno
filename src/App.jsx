import Navbar from './components/Navbar';
import Início from './pages/Início'
import Base from './pages/Texto2'
import './styles/Global.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>

      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Rajdhani&display=swap" rel="stylesheet"/>
      </head>

      <body className="bodyContainer">
        <div className="navbarContainer">
          <Navbar/>
        </div>

        <section className="contentContainer">

          <Router>
            <Switch>
              <Route path="/" exact component={Início} /> 
              <Route path="/início" component={Início} />
              <Route path="/base" component={Base} />
            </Switch>
          </Router>

        </section>

      </body>

    </div>
  );
}

export default App;
