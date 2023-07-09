import Main from './components/Main';
import Navbar from './components/Navbar';
import Tabs from './components/Tabs';
import ReservaMesa from './components/ReservaMesa';
import FormularioContacto from './components/FormularioContacto';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ minWidth: 'fit-content' }}>
      <Navbar />
      <Main />
      <Tabs />
      <ReservaMesa />
      <FormularioContacto />
      
      <Footer/>
    </div>
  );
}

export default App;
