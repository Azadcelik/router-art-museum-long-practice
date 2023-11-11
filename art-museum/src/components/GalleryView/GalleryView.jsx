
import { useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"

import ArtImageTile from "../ArtImageTile/ArtImageTile"



export default function GalleryView ({galleries}) { 

const {galleryId} = useParams()

const matchedGallery = galleries.find(galery => galery.id == galleryId)

// console.log(matchedGallery)

if (!matchedGallery) {
    return  <Navigate to='/'>Home PAgor</Navigate>
}


 return (

<>
        <h1>{matchedGallery.name}</h1>
     
        {matchedGallery.objects.map(art => (
        <ArtImageTile key={art.id} art={art} />
      ))}
 </>

 

    )
}