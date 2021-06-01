import { Component } from "react";
import Movies from "./Movies";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

class App extends Component {
  render() {

    
    const movieslist = [
    {title:"Wrath of Man", desc:"The plot follows H, a cold and mysterious character working at a cash truck company responsible for moving hundreds of millions of dollars around Los Angeles each week.", img:"https://i.egycdn.com/pic/RHNhSUNlY21Zam1wbW1ZYnZSY3ZjbWp2Y3Z3bFBtamE.jpg"  },
    
    {title:"Army of the Dead", desc:"Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble, venturing into the quarantine zone to pull off the greatest heist ever attempted.",  img:"https://i.egycdn.com/pic/RHNhSUNlY21Zam1FbW9jbXBtRWNjd2xhbXBJbG1qeA.jpg"},

    {title:"Godzilla vs. Kong", desc:"The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against one another - the fearsome Godzilla and the mighty Kong ..", img:"https://i.egycdn.com/pic/RHNhSUNlY21Zam1wcFlZYWNsbVRyTnpQbG12.jpg"} ];

    const items = movieslist.map((item)=>{
     return <Movies title={item.title} desc={item.desc} img={item.img}/> 
    })

    const movie = items.map((item) => {
      return <Col xs="4"> {item}</Col>
    })


return (

<div className="background">
<h1 className="h1">Movies List </h1>
<br></br>
<Container>
<Row>
{movie}
</Row>
</Container>
</div>
)

}
}
export default App;
