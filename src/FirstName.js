import { Component } from "react";
import LastName from "./LastName";

 class FirstName extends Component{
     render(){
         return(
             <div>
                 <h1>Hello me</h1>
                 <LastName />
             </div>
         )
     }
 }
 export default FirstName;