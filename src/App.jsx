
import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card/Card';

//Objetos que armazenam as informacoes dos cards
// const item1 = {
//   nome: "Rick Sanchez",
//   imagem: "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png"
// }

// const item2 = {
//   nome: "Morty Smith",
//   imagem: "https://comicvine.gamespot.com/a/uploads/scale_medium/6/66303/4469088-tumblr_inline_n0aleph3fl1r8rr6o.jpg"
// }

// const item3 = {
//   nome: "Summer Smith",
//   imagem: "https://images.squarespace-cdn.com/content/v1/5616ac17e4b018d366f57f53/1616952566614-0IEBMBBMXMO30Z37PTMN/summer+smith+soundboard"
// }

// lista de objetos para usar no map
// const itens = [item1, item2, item3];
// const itens = [item1, item2, item3];
// const itens = [];

/*
  ATENCAO: SE TIVER ALGUEM VENDO O CODIGO, ESSES COMENTARIOS SAO DE ENTENDIMENTO PROPRIO, PODE ESTAR SUJEITO A ERROS DE NOMEACAO. (ATE MESMO DE CONCEITO ......) !!!!!!!

  SOBRE A FUNCAO MAP NA DIV

  - TODO CODIGO JS DEVE SER ESCRITO ENTRE {}
  - A FUNCAO MAP PEGA O ARRAY ITENS E JOGA PARA A FUNCAO QUE ESTA DENTRO
  - DENTRO DA FUNCAO TEM OS ATRIBUTOS ITEM QUE SIMBOLIZA CADA OBJETO DO ARRAY E O INDEX E A ORDEM (0, 1, 2, 3 ....)
  - O RETORNO É O CARD
  - CADA CARD PRECISA DE UMA KEY PARA IDENTIFICACAO, É AI QUE SE USA O INDEX.
  - AGORA TODOS OS ITENS CHAMAMOS NO ITEM (GERAL) DO RETORNO QUE É DIFERENTE DO ITEM ATRIBUTO
  - O ITEM (GERAL) RECEBE O ATRIBUTO ITEM COM TODOS OS OBJETOS DO ARRAY.

  classe no js é uma funcao que gera um objeto
*/

// carregarDadosApi();

function App() {

  const [itens, setItens] = useState([])

  console.log("itens", itens)

  async function carregarDadosApi(){
    const apiUrl = "https://ocean-api-itens.onrender.com/itens";
  
    const response = await fetch(apiUrl);
    const body = await response.json();
  
    console.log(body)
    setItens(body)
  }

  useEffect(function () {
    // setItens([item1, item2])
    carregarDadosApi();
  }, [])


  // Adicionando card de forma automatica com o map
  return (
    <>
      <div className='cards-list'>
        {
          itens.map(function(item, index){
            return <Card key={index} item = {item}/>
          })
        }

        {/* <Card item = {item1} />
        <Card item = {item2}/>
        <Card item = {item3}/> */}


      </div>
    </>

  )
}

export default App;
