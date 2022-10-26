import { useState, useEffect } from "react";
import axios from "axios"
import Gallery from "./Gallery";



const ArtWall = () => {

    // initialize a state to keep track of whether the Galler is visible or not.
const [isGalleryVisible, setIsGalleryVisible] = useState(false)

// initialize a state for the API data from Rijksmuseum to be displayed.
const [art, setArt] = useState([]);

// call the API once the component has been mounted to the DOM. AKA, run the side effect.
useEffect( () => {
    console.log("side effect is running")
    axios({
        url:'https://www.rijksmuseum.nl/api/en/collection',
        params:{
            imgonly:true,
            key:'Tt1DWmnG',
            toppieces: true
        }
    }).then( (art) =>{
        // once the data is returned from the API, lets save it within state!
        // use dot notation to ONLY save the array of art objects within state.
        setArt(art.data.artObjects)
    })
},[]);





return(
        <section>
            <h2>{
                isGalleryVisible === true
                ? "Wow, this is some beautiful art!"
                :"Ok, but would you like to actually see some art???"
                }</h2>
            <button onClick={() => setIsGalleryVisible(!isGalleryVisible)}>
                {
                    isGalleryVisible === true
                    ? "I've seen enough."
                    :"Click here for some art."
                }
            </button>
            {
                isGalleryVisible === true
                ?<Gallery arrayOfArt={art} /> 
                : null
            }   
        </section>
    )
}

export default ArtWall;