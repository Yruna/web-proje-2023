import Categories from "../../components/categories/categories.component";
import {Outlet} from 'react-router-dom';

const Home = () => {
    const categories = [
        {
          "id": 1,
          "title": "Pet-Friendly Plants",
          "imageUrl": "https://leafy-life.com/wp-content/uploads/2020/12/4CHLUBU86.png"
        },
        {
          "id": 2,
          "title": "For Beginners",
          "imageUrl": "https://www.plants.com/greenhouse/wp-content/uploads/2019/08/peace-lily.jpg"
        },
        {
          "id": 3,
          "title": "Flowering Plants",
          "imageUrl": "https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"
        },
        {
          "id": 4,
          "title": "Faux & Preserved",
          "imageUrl": "https://plantscapes.ae/wp-content/uploads/2020/08/supply-of-pots-and-containers.jpg"
        },
        {
          "id": 5,
          "title": "Decor Planters",
          "imageUrl": "https://i.shgcdn.com/cbd185ae-ce5b-4bd5-a513-d80e390496ce/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        }
      ]
  return (
    <div>
        <Outlet/>
        <Categories categories={categories}/>
    </div>
  );
}

export default Home;