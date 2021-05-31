//import src from "*.avif";
import { Component } from "react";
import MesbahAlDarb from "./MesbahAlDarb";
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {
  render() {
    // const movies = [this.movie,this.movie1,this.movie2];
    //const movie = ["Dora", "5", "Nice"];
    //var movie = "Fiat";
      /*function movie (n,r,c,p){
      this.NameOfMovie= n;
      this.Rating= r;
      this.Comment= c;
      this.PicOfMovie= p;
    }*/
    return (
      <div>
        <h1>Hello World</h1>
       
        
        <MesbahAlDarb/>


      </div>
    )
  }
}
export default App;