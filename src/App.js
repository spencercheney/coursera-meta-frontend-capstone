import './styles/App.css';
import Footer from './Footer';
import Nav from './Nav';
import Main from './Main';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Main/>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
