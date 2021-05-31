import img1 from './img/food1.jpg';
import img2 from './img/food2.jpg';
import img3 from './img/food3.jpg';
import img4 from './img/food4.jpg';
import img5 from './img/food5.jpg';
import img6 from './img/food6.jpg';

import './App.css';
import Img from './Img.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const img = [img1, img2, img3, img4, img5, img6];
const title = ['Burger', 'Macaroni', 'Egg', 'Pancakes', 'Meat Burger', 'Spaghetti'];
const desc = ['Burger', 'Potatos', 'Egg', 'Pancakes', 'Meat Burger', 'Spaghetti'];

function App() {
  return (
    <>
    <h1>Delecious Recipies</h1>
    <div class="card-deck">
     {img.map((element, index) => {
      return <Img key={index} imgSrc={element} title={title[index]} desc={desc[index]}></Img>
     })}
</div>
</>
  );
}

export default App;
