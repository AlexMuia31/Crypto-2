import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header/Header';


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
