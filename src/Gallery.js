import Picture from "./Picture"

/*if you wish to use information from the props object, don't forget to pass it into your function component.*/ 

const Gallery = (props) => {
    console.log("Gallery is rendered", props )
    return(
        <section className="gallery">
            <h2>A gallery of pictures</h2>
            <ul>
                {/* We are going to map through the array of art within the props object. */}
                {/* for each object within the array, we will return a Picture component. */}
                {/*and pass down the image and title for that specific object which the picture component will then render to the page.*/}
                {
                    props.arrayOfArt.map( (artObject) => {
                        return <Picture artInfo={artObject} key={artObject.id}/>
                    })
                }
            </ul>
        </section>
    )
}

export default Gallery