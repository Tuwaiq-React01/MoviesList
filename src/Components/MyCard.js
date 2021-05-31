import FilmImg from './FilmImg'
import MyButton from './MyButton'

const MyCard = ({title, movieImg , description }) => {
    return ( 
      
       <div className="movieCard">     
       <FilmImg movieImg={movieImg}/>
       <div className="details-div">
       <div className="MovieTitle">  <p>{title}</p> </div>
       
       <div className="Description"> <p>{description.slice(0,110).concat("..")}</p> </div>
       </div>
       <MyButton text="book"/> 
       </div>
    
     );
}
 
export default MyCard;