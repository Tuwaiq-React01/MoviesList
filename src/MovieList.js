import { Component } from 'react'


class MovieList extends Component {
    render() {

        const movies = 
        [
            {
                name: "Spiral"
                , desc: "Spiral description"
                , imagePath: "/img/spiral.jpeg"
            }
            , {
                name: "Cruella"
                , desc: "Cruella description"
                , imagePath: "/img/Cruella.jpeg"
            }, {
                name: "Almaht"
                , desc: "Almaht description"
                , imagePath: "/img/Almaht.jpeg"
            }, {
                name: "WrathOfMan"
                , desc: "WrathOfMan description"
                , imagePath: "/img/WrathOfMan.jpeg"
            }, {
                name: "Dido"
                , desc: "Dido description"
                , imagePath: "/img/Dido.jpeg"
            }, {
                name: "Nobody"
                , desc: "Nobody description"
                , imagePath: "/img/Nobody.jpeg"
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
                                <h3 class="mb-0">{item.name}</h3>
                                <h5 class="mb-0">{item.desc}</h5>
                                
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <img src={item.imagePath} class="img-fluid" alt="Responsive image" />
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