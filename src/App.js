import Navbar from './components/Navbar';
import Início from './pages/Início'
import './styles/Global.css';

function App() {
  return (
    <div className="App">
      
      <head>
        <title>Web-Moderno | Início</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Rajdhani&display=swap" rel="stylesheet"/>
      </head>

      <header>
        
      </header>

      <body>
        <Navbar/>
        <Início/>
      </body>

    </div>
  );
}

export default App;
