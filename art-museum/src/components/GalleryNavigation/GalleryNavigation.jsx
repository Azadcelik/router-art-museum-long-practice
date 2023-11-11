import { NavLink } from "react-router-dom"




export default function GalleryNavigation ({galleries}) { 

    console.log( galleries) //an object and array and object inside

  return (

    <nav>

    {galleries.map(gallery => (
       
       <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>
       {gallery.name}
     </NavLink>
    ))}
 
     <h1>Galleries</h1>


    </nav>
  )
}