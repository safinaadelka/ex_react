import { useParams } from "react-router-dom";
import { catalog } from "../../data";
import Foto from "/public/card/card_foto.jpg";
import "././CardPage.css";
import Card from "../../components/Card/Card";


export default function OneCard({ addTovar, addToBasket, basket }){
  const { id } = useParams();
    const product = catalog.find((product) => product.id === parseInt(id));

    return(
      <>
      <p className="">{product.name}</p>
      <button onClick={addTovar=()=>addToBasket([...basket, product.id])}>Добавить</button>
      </>
    )
}




// export default function CatalogPage({ addToBasket, basket }) {
//   const { id } = useParams();
//   const product = catalog.find((product) => product.id === parseInt(id));

//   return (
//     <div className="catalog_cards">
//       <br /> <br /> <br /> <br />
//       <div className="container">
//         <p className="catalog_name">Главная \ Каталог</p>
//         <div className="cards">
//           <Card
//             {...product}
//             addCard={() => addToBasket([...basket, product.id])}
//           />
//         </div>
//         <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
//       </div>
//     </div>
//   );
// }

// export default function CardPage({ addToBasket, basket }) {
//   const { id } = useParams();
//   const product = catalog.find((product) => product.id === parseInt(id));

//   const handleAddToCart = () => {
//     addProductToCart(product.id);
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="card_page">
//           <img src={Foto} alt="" className="foto" />
//           <div className="info">
//             <h1>{product.name}</h1>
//             <p className="price">{product.price} ₽</p>
//             <p className="text">
//               В большинстве случаев мужчины для деловой и повседневной жизни
//               выбирают рубашки спокойных оттенков и носят их по всем
//               классическим правилам, где рубашка гораздо светлее пиджака и брюк.
//               При таком подходе выбор цвета сорочки останавливается на белом,
//               цвета шампань или голубом.
//             </p>
//             <button className="violet">Добавить в корзину</button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
