import { Component } from 'react'


class MovieList extends Component {
    render() {

        const movies = 
        [
            {
                name: "Attack on titan"
                , desc: "Season 4 soon"
                , imagePath: "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98"
            }
            , {
                name: "Death Note"
                , desc: "Death Note description"
                , imagePath: "https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a"
            }, {
                name: "Fullmetal Alchemist"
                , desc: "Rank 1 Anime"
                , imagePath: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb"
            }, {
                name: "Death Note"
                , desc: "Death Note description"
                , imagePath: "https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a"
            }, {
                name: "Fullmetal Alchemist"
                , desc: "Rank 1 Anime"
                , imagePath: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb"
            }, {
                name: "Attack on titan"
                , desc: "Season 4 soon"
                , imagePath: "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98"
            } ,{
                name: "Fullmetal Alchemist"
                , desc: "Rank 1 Anime"
                , imagePath: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg?s=faffcb677a5eacd17bf761edd78bfb"
            }, {
                name: "Attack on titan"
                , desc: "Season 4 soon"
                , imagePath: "https://cdn.myanimelist.net/images/anime/10/47347.jpg?s=29949c6e892df123f0b0563e836d3d98"
            } , {
                name: "Death Note"
                , desc: "Death Note description"
                , imagePath: "https://cdn.myanimelist.net/images/anime/9/9453.jpg?s=b89e80691ac5cc0610847ccbe0b8424a"
            }
            
        ];
  
        return(
            

            <div class="container">
                 
                <div class="row mb-2">
                    {
                        movies.map((item, index) => (
                            <div class="col-md-4">
                            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                <br></br>
                                <br></br>
                                <br></br>   
                                <h3 class="mb-0">{item.name}</h3>
                                <h5 class="mb-0">{item.desc}</h5>
                                <br></br>
                                <a  href="">
                                <button class="mb-0">Book</button>
                                </a>
                                
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img src={item.imagePath} class="img-fluid" alt="Responsive imagee" />
                                </div>
                            </div>
                            </div>
                    
                    ))
                }
                </div>
            
            </div>




        );
    }
}

export default MovieList;