import { Component } from "react";
import Displayer from "./Displayer";
import Pictures from "./Pictures";



class App extends Component {
  render() {
    var movie = [{
      Title:"OnePunchMan"
      ,description:"A powerfull guy who can one shot any one by a punch"
      ,image:"https://animelek.me/uploads/posters/poster-One-Punch-Man-5f0a94234ebe9.jpg"
    },
    {
      Title:"Norogami"
      ,description:"A powerfull guy who can one shot any one by a punch"
      ,image:"https://i0.wp.com/ww.anime4up.com/wp-content/uploads/2020/02/Anime4up_2020.02.11_18h42m34s_006_.png?fit=299%2C450&ssl=1"
    }
    ,
    {
      Title:"FullMetalAlchamist"
      ,description:"A powerfull guy who can one shot any one by a punch"
      ,image:"https://nefariousreviews.files.wordpress.com/2015/12/fullmetal-alchemist-brotherhood-featured.jpg?w=672&h=372&crop=1"
    }
    ,
    {
      Title:"Kingdom"
      ,description:"A powerfull guy who can one shot any one by a punch"
      ,image:"https://cdn.myanimelist.net/images/anime/13/39511.jpg"
    }
    ,
    {
      Title:"SwordArtOnline"
      ,description:"A powerfull guy who can one shot any one by a punch"
      ,image:"https://www.xsanime.com/wp-content/uploads/2020/01/39717.jpg"
    }
    ,{
      Title:"Kakegurui"
      ,description:"A powerfull guy who can one shot any one by a punch"
      ,image:"http://pm1.narvii.com/7503/ebdbcf33258b48553d582eb3850ea2530a95e1cdr1-294-409v2_00.jpg"
    }
    ,
    {
      Title:"HunterXHunter"
      ,description:"A powerfull guy who can one shot any one by a punch"
      ,image:"https://1.bp.blogspot.com/-AoZ3KtdfJwc/YCaUgmOWAwI/AAAAAAAABfY/b_OtOlDWaEQkmeJHYPriQJNMD5VyTzAlgCLcBGAsYHQ/s1200/HunterxHunter-header%2B%25281%2529.jpg"
    }
    ,{
      Title:"Demon Slayer"
      ,description:"A powerfull guy who can one shot any one by a punch"
      ,image:"https://images-na.ssl-images-amazon.com/images/I/61Zm2hsRJ0L._AC_SY679_.jpg"
    }
    ,
    {
      Title:"Assasination-ClassRoom"
      ,description:"A powerfull guy who can one shot any one by a punch"
      ,image:"https://cdn11.bigcommerce.com/s-l71eudan7b/images/stencil/1280x1280/products/1086/2252/618oQMDp%2BVL__35870.1590260967.jpg?c=2"
    }
    ,{
      Title:"Jujutsukaisen"
      ,description:"A powerfull guy who can one shot any one by a punch"
      ,image:"https://images-na.ssl-images-amazon.com/images/I/81s%2BjxE5KEL._AC_SY741_.jpg"
    }
    ,
    {
      Title:"Kimi No Na Wa Your Name"
      ,description:"A powerfull guy who can one shot any one by a punch"
      ,image:"https://www.steelbookbluray.com/wp-content/uploads/2017/07/your_name_temp-1.jpg"
    }
    ,{
      Title:"SoulEater"
      ,description:"A powerfull guy who can one shot any one by a punch"
      ,image:"https://m.media-amazon.com/images/I/51SrmFJF4yL._AC_.jpg"
    }
  ]
    return (
      <div>
        <h1 className="header">Anime app</h1>
        <br></br>
        <div>
        <Displayer movieDisplayer = {movie}/>
        </div>
      </div>
    )
  }
}
export default App;