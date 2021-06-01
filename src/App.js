import React, { Component } from 'react'
import Image1 from './Image/Image1.jpg';
import Image2 from './Image/Image2.jpg';
import Image3 from './Image/Image3.jpg';
import Image4 from './Image/Image4.jpg';
import Image5 from './Image/Image5.jpg';
import Image6 from './Image/Image6.jpg';
import Poster from './Poster';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Container, Row, Col} from 'react-bootstrap';

 export default class App extends Component {
   render() {
     
    const poster=[
      {title:"1st Movie",
      poste:Image1 ,
      discription:"this is the fist movie poster"
      },
      {title:"2nd Movie",
      poste:Image2 ,
      discription:"this is the second movie poster"
      },
      {title:"3rd Movie",
      poste:Image1 ,
      discription:"this is the fist movie poster"
      },
      {title:"4th Movie",
      poste:Image2,
      discription:"this is the second movie poster"
      },
      {title:"5th Movie",
      poste:Image1 ,
      discription:"this is the fist movie poster"
      },
      {title:"6th Movie",
      poste:Image2 ,
      discription:"this is the second movie poster"
      }
    ]
    
    const ItemList=poster.map((item,index)=>{
     return< Poster key={index} src={item.poste} title={item.title} discription={item.discription} /> })
     const item=ItemList.map((item,indx)=> {
       return <Col sx="4"></Col>
     })
     
     return (
               <Container>
                 <Row>

                         {ItemList}
                  
                
                 </Row>
               </Container>
     )
   }
 }
 

