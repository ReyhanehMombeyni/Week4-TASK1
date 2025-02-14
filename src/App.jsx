import './App.css'
import Benefits from './components/unshared/Benefits/benefits.jsx';
import Footer from './components/unshared/Footer/footer.jsx';
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
      <Footer />
    </div>
  )
}

export default App;
