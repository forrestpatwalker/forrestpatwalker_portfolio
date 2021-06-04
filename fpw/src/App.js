import './scss/App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
      </Router>
    </div>
  );
}

export default App;
