import Navbar from './components/Navbar';
import Início from './pages/Início'
import './styles/Global.css';
import {BrowserRouter as Router, Switch} from 'react-router-dom'

function App() {
  return (
    <div>

      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Rajdhani&display=swap" rel="stylesheet"/>
      </head>

      <body className="bodyContainer">
        <div className="navbarContainer"><Navbar/></div>
        <section className="contentContainer">
          <Início/>
        </section>
      </body>

    </div>
  );
}

export default App;
