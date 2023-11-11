import { Link, useParams } from "react-router-dom"
// import { useParams } from "react-router-dom";

export default function ArtImageTile({art}) { 
    const {galleryId} = useParams()

    // const galleryId = art.galleryId; // Assuming art object contains galleryId
    const artId = art.id; // Assuming art object has an id
  

    return (
  <>
   
   <Link to={`/galleries/${galleryId}/art/${artId}`}>
        <img src={art.imageUrl} alt={art.title} /> {/* Replace art.imageUrl with the correct property */}
      </Link>
      
 </>
    )
}