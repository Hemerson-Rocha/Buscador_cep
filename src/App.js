import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';

import api from './sevices/api';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSeach(){
    // 62540000/json/

    if(input === ''){
      alert("Preencha algum cep!")
      return;
    }

    try{
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("")
    }catch{
      alert("Ops erro ao buscar")
      setInput("")
    }

  }

  return (
    <div className="container">
      <h1 className="title">Buscar endereço pelo cep</h1>

      <div className="containerInput">
          <input 
          type="text" 
          placeholder="Digite seu cep..." 
          value={input}
          onChange={(e) => setInput(e.target.value)}/>

          <button className="buttonSearch" onClick={handleSeach}><FiSearch size={25} color="#fff"/></button>
      </div>

      {Object.keys(cep).length > 0 &&(
        <main className="main">
          <h2>CEP: {cep.cep}</h2>
          <span>{cep.logradouro}</span>
          <span>Complemmento: {cep.complemento}</span>
          <span>Localidade: {cep.localidade}</span>
          <span>Estado: {cep.uf}</span>
        </main>
      )}

    </div>
  );
}

export default App;
