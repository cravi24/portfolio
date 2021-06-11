import { BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from './components/Header';
import './App.scss';
function App() {
  return (
    <div className="App">
      <Router>
        <HeaderComponent />
      </Router>
    </div>
  );
}

export default App;
