import MyCard from './Components/MyCard'


let MovieList = require('./db.json')

function App() {
  
  
  const Cardlist = MovieList.map(
    (elem,i)=> {
      return <MyCard key={i} title={elem.title} movieImg = {elem.poster} description={elem.overview} /> 
    }
  )
  return (
    <>
         <header style={{width:"100%", textAlign:"center" }}> <h1 style={{zIndex:99,backgroundColor:'rgb(95, 67, 211)',color:'white',paddingTop:"0.4em"}}>Movie List</h1></header>
        <div className="container">
        {Cardlist} 
        </div>
        </>
  )
}
export default App
