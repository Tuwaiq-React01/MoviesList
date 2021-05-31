import React, { Component } from "react";
import Image from "./Image";
import Info from "./Info";
import "./Movie.css";

export default class Movie extends Component {
    render() {
        const moviesList = [
            {
                title: "The Godfather ",
                summury:
                    "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
                image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
            },
            {
                title: "The Shawshank Redemption",
                summury:
                    "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
            },
            {
                title: "Schindler's List",
                summury:
                    "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
                image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
            },
            {
                title: "The Dark Knight",
                summury:
                    "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            },
            {
                title: "Fight Club",
                summury:
                    "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
                image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
            },
            {
                title: "The Green Mile",
                summury:
                    "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
                image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
            },
            {
                title: "Inception",
                summury:
                    "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
            },
            {
                title: "The Silence of the Lambs",
                summury:
                    "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
                image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",
            },
            {
                title: "The Matrix",
                summury:
                    "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
                image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
            },
        ];
        return (
            <div className="row  ">
                {moviesList.map((item, index) => {
                    return (
                        <div key={index} className="col">
                            <div className="item">
                                <Image urlLink={item.image} />

                                <Info
                                    title={item.title}
                                    summury={item.summury}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}
