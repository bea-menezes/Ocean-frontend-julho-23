
import './Card.css';

//Props de um componente react
export default function Card(props) {
    //variavel que armazena as props que estao no App.jsx
    const item = props.item;

    // console.log(item);

    return (
        <>
            <div className='card'>
                <h1>{item.nome}</h1> 
                <img src={item.imagem}/>
            </div>
        </>
    )
}

