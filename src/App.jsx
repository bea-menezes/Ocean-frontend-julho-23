
import './App.css'
import Card from './components/Card/Card';

//Objetos que armazenam as informacoes dos cards
const item1 = {
  nome: "Princesa Zelda",
  imagem: "https://upload.wikimedia.org/wikipedia/en/6/6e/Link_to_the_Past_Zelda.png"
}

const item2 = {
  nome: "Link",
  imagem: "https://www.zeldadungeon.net/wiki/images/thumb/f/f5/Link_-_TotK_key_art.png/400px-Link_-_TotK_key_art.png"
}

const item3 = {
  nome: "Epona",
  imagem: "https://pm1.aminoapps.com/6873/e56769ef7d6abb8d617b2094144c0994549935f8r1-373-393v2_uhq.jpg"
}

// lista de objetos para usar no map
const itens = [item1, item2, item3];

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

async function carregarDadosApi(){
  const apiUrl = "https://ocean-api-itens.onrender.com/itens";

  const response = await fetch(apiUrl);
  const body = await response.json();

  console.log(body)
}

carregarDadosApi();

function App() {

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
