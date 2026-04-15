  import React from 'react'
  import Menu from './components/Menu/Menu'
  import Cabecalho from './components/Cabecalho/Cabecalho'
  import Sobre from './components/Sobre/Sobre'
  import SecaoProjetos from './components/SecaoProjetos/SecaoProjetos'
  import Contatos from './components/Contatos/Contatos'
  import Rodape from './components/Rodape/Rodape'
  import './App.css'
  


  function App() {

    return (
      <div className="App">
        <Menu />
        <Cabecalho />
        <Sobre />
        <SecaoProjetos />
        <Contatos />
        <Rodape />
      </div>
    )
  }





export default App;