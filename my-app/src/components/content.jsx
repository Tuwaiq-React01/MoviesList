import React, { Component } from 'react';

class content extends Component {

state = {
    counter : 0
}
    
    

    render() {
       const  movies = [
            { title: "I Care a Lot" , des : "A crooked legal guardian who drains the savings of her elderly wards meets her match when a woman she tries to swindle turns out to be more than she first appears.", img : "https://occ-0-1001-448.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTnDrXenR7tkDPdtvmVbm44VoVh2WZmrDogXjgNVd9B9cIrrj3D-pQPVO-tj2EhRTwCWztGtzM-pPdeP1FlTH9qS7gLI.jpg?r=ccb"},
            { title: "Paper Lives " , des:"Mehmet is a cherished fellow who runs the solid waste warehouse in the neighborhood, he helps everyone in need, especially homeless children and teenagers since he was one too.", img : "https://resizing.flixster.com/B5GMmCNfMRbmhOA9D-yUuQhOrv8=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzczNWUyY2MxLTEyMmMtNGViZS1iZTc0LTBjMGM4YzQyOWZiMS5qcGc="},
            { title: "Run" , des:"Desiring freedom after years of isolated medical care, teenager Chloe suspects her mother might be holding her back — and harboring",  img : "https://i.ytimg.com/vi/EoGojQE4p-8/maxresdefault.jpg"} ,
            { title: "Dolittle",des:"After losing his wife, Dolittle hermits himself away behind the high wall of his manor, but is forced to set sail on an epic adventure when the queen falls gravely ill.", img : "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/kids-movies-2020-doolittke-1576597612.jpg?crop=0.8293075684380031xw:1xh;center,top&resize=480:*"}
             ,{title : "Venom" ,des:"A reporter battles a mad scientist in a fight for his life after merging with a snarky alien symbiote that gives him remarkable superpowers", img : "https://i.pinimg.com/474x/19/89/c8/1989c8ead461390dcd2057af7e370dea.jpg"} 
             ,{title: "Outside Wire" , des:"In the near future, a drone pilot sent into a war zone finds himself paired with a top-secret android officer on a mission to stop a nuclear attack.",  img :"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdoFMON1Dc4JAAhHB1pZcrkNlrHmaicfwCp52sBHArXPy_cxmrNICv_nS5K3dYTShdkcwXt636Q5W7HYtQFQ1WkwMjtFd6Ju-yBimpwJmB0JG2YQGuDeE1He3ayX.jpg?r=d8a"}  
             ,{title: "Zombieland" , des:"Amid a zombie apocalypse, a cautious loner joins a Twinkie-obsessed daredevil and a cunning pair of sisters on a road trip from Texas to Los Angeles.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2O-qnA6KF5SHWwKHP_X-rosAVbbwdg2H8zA&usqp=CAU"}
            ]


        return (
    <div className ="grid-container">
    <hr class="mb-5"/>

<div class="">


{/* style={{word-wrap: "break-word "}} */}
      {movies.map((m,i)=>{
  return(
<div class="card">
<div class="card-header">{m.title}</div>

 
  <img src= {m.img}  alt="" style={{width: "300px", height:"300px" }} /> 
 
  <div class="card-body">
    <p style ={{    width: "258px" }}  className = "text-light" >{m.des}</p>
  </div>
  <button type="button" class="btn btn-primary" >Watch</button>

</div>  
 
  )
})
}
    



  </div>

</div>
           
        );
    }
}

export default content;