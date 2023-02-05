import { FiSearch } from 'react-icons/fi';
import './style.css';
function App() {
  return (
    <div className="container">
      <h1 className="title">Buscar endereço pelo cep</h1>

      <div className="containerInput">
          <input type="text" placeholder="Digite seu cep..." />
          <button className="buttonSearch"><FiSearch size={25} color="#fff"/></button>
      </div>

      <main className="main">
        <h2>CEP: 99999999</h2>

        <span>Rua chavo</span>
        <span>complemmento: algum</span>
        <span>vila da folha</span>
        <span>aldeia</span>

      </main>

    </div>
  );
}

export default App;
