
import './App.css';
import MovieCard from './MovieCard'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  let movies = [
    {ide: 1, title : "MOANA 2016", image : "https://www.joblo.com/assets/images/oldsite/posters/images/full/Moana-Sing-Along-poster-1-large_thumb.jpg" , description: "A young woman uses her navigational talents to set sail for a fabled island. Joining her on the adventure is her hero, the legendary demi-god Maui." },

    {id:2 ,title : "BIG HERO 6 (2014)", image : "https://www.joblo.com/assets/images/oldsite/posters/images/full/big-hero-six-poster2_thumb.jpg" , description: "From Walt Disney Animation Studios comes Big Hero 6, an action comedy adventure about brilliant robotics prodigy Hiro Hamada, who finds himself in the grips of a criminal plot that threatens to destroy the fast-paced, high-tech city of San Fransokyo. With the help of his closest companion-a robot named Baymax-Hiro joins forces with a reluctant team of first-time crime fighters on a mission to save their city. Inspired by the Marvel comics of the same name, and featuring comic-book style action and all the heart and humor audiences expect from Walt Disney Animation Studios, the CG-animated Big Hero 6 hits theaters in 3D on November 7, 2014." },

    {id:3 ,title : "TOY STORY 2", image : "https://www.joblo.com/assets/images/oldsite/posters/images/full/1999-poster-toy_story_two-1.jpg" , description: "Toys will be toys - except when their owners aren't around - and now the gang from Andy's room is all wound up and ready to play once again in Toy Story 2, the exciting all-new sequel to the landmark 1995 blockbuster from Disney and Pixar. Buzz Lightyear, Woody and a colorful cast of toys are joined by a delightful group of new characters for an incredible action-filled comedy-adventure that is loaded with laughs, emotion and surprises. Tom Hanks, Tim Allen and all the terrific voice talents from the first film reprise their original roles. Taking the art of computer animation to the next plateau, the film utilizes state of the art technology to work its storytelling magic and create a world of infinite possibilities." },

    {id:4 ,title : "FROZEN (2013)", image : "https://www.joblo.com/assets/images/oldsite/posters/images/full/frozen_ver8_xlg_thumb.jpg" , description: "From the studio behind 2010’s “Tangled” and this year’s “Wreck-It Ralph,” Walt Disney Animation Studios presents “Frozen,” the coolest comedy-adventure ever to hit the big screen. When a prophecy traps a kingdom in eternal winter, Anna (voice of Kristen Bell), a fearless optimist, teams up with extreme mountain man Kristoff and his sidekick reindeer Sven on an epic journey to find Anna’s sister Elsa (voice of Idina Menzel), the Snow Queen, and put an end to her icy spell. Encountering mystical trolls, a funny snowman named Olaf, Everest-like extremes and magic at every turn, Anna and Kristoff battle the elements in a race to save the kingdom from destruction." },
    {id:5 ,title : "THE LION KING (1994)", image : "https://www.joblo.com/assets/images/oldsite/posters/images/full/1994-the-lion-king-poster4_thumb.jpg" , description: "Still the mightiest animated feature of them all and the undisputed king of the box office, Walt Disney Pictures' The Lion King roars to life as never before with its dazzling Large Format Cinema debut. Reformatted specifically for the Giant Screen from the film's original digital elements, this special limited engagement in IMAX Theatres and other Large Format cinemas offers moviegoers a chance to experience one of the greatest animated adventures of all time on the most majestic canvas imaginable. The original filmmaking trio - producer Don Hahn and directors Roger Allers and Rob Minkoff - joined forces with a team of top artists and technicians to oversee the creation of this new Large Format version that boasts added detail, richer colors, a newly remixed soundtrack, and a theatrical experience uniquely suited to capture the scope and beauty of its African settings. With its compelling story, breathtaking animation, colorful characters, Oscar-winning music (songs by Elton John and Tim Rice; score by Hans Zimmer), the film follows the adventures of a young lion cub named Simba, who just can't wait to be king. The sudden death of his father, Mufasa, and the treacherous actions of his Uncle Scar lead Simba into exile and ultimately on a hero's journey of self discovery. Adopting the hakuna matata philosophy of his comical jungle guardians - a warthog named Pumbaa and a meerkat named Timon - Simba grows to maturity, but eventually comes to terms with his destiny and returns home to Pride Rock to help put things right. The Lion King was originally released in 1994 and went on to become the most successful animated film of all time with a worldwide gross in excess of $771 million. Eight years after its debut, it continues to hold the box-office crown as the top grossing animated film and it occupies the #10 spot on the list of all time worldwide box-office champs, just behind Star Wars and E.T.: The Extra- Terrestrial." },

    {id:5 ,title : "COCO (2017)", image : "https://www.joblo.com/assets/images/oldsite/posters/images/full/cocoposter_thumb.jpg" , description: "Coco follows the secret musical ambitions of Miguel who accidentally enters the Land of the Dead and must earn his family’s blessing to perform music and return to the Land of the Living before time runs out." },    
]

const movieList = movies.map((value,i)=>{
  return (<MovieCard key={i} title={value.title} image={value.image} description={value.description} />)
      

});



  return (
    
    
    <div className="App">
      <h1>Welcome To The Movies List</h1>
      {movieList}
    </div>
  );

}
export default App;
