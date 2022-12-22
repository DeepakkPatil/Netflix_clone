import './App.css';
import './components/Navbar/Navbar.css'
import Navbar from './components/Navbar/Navbar'
import Header from './components/header/Header'
import Content from './components/content/Content'


import axios from 'axios' // to get data from api  (write npm i axios)
axios.defaults.baseURL='https://api.themoviedb.org/3';
axios.defaults.params={
  api_key : '25d625be80c8cf4d343298446442d727',
}
function App() {
  return (
  <div>
    <Navbar/>
    <Header/>
    <Content/>
  </div>
  );
}

export default App;
