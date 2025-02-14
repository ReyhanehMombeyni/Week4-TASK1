import './App.css'
import Benefits from './components/unshared/Benefits/benefits.jsx';
import Header from './components/unshared/Header/header.jsx';
import Nav from "./components/unshared/Nav/nav.jsx"

function App() {

  return (
    <div className="container">
      <Nav />
      <Header />
      <Benefits />
      <Benefits />
      <Benefits />
      
    </div>
  )
}

export default App;
