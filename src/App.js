import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import CoinPage from './Pages/CoinPage/CoinPage';
import { useStyles } from './AppStyles';


function App() {
  const classes = useStyles()


  return (
    <Router>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route path='/' exact element={<Homepage />} />
          <Route path='/coins/:id' element={<CoinPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
