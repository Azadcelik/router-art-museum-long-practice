
import {createBrowserRouter,Outlet,RouterProvider} from 'react-router-dom'

import harvardArt from './data/harvardArt';

import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation';
import GalleryView from './components/GalleryView/GalleryView';


export function Layout () { 

  return (
    <div className = 'Page Wrapper'>     
        <GalleryNavigation galleries = {harvardArt.records} />
        <main>
          <Outlet />
        </main>  
    </div>

  )

}

const router = createBrowserRouter([
  {
    element : <Layout />,
    children : 
     [
      {
        path: '/',
        element: 
        <>
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don&apos;t Touch. Please select a Gallery in the navigation bar.</p>
        </>
      },

      {
        path: '/galleries/:galleryId',
        element : <GalleryView  galleries={harvardArt.records}/>
      },
    
      {
        path: '*',
        element: <h2>Page Not Found</h2>
      }

     ]
  }


])


function App() {

 return  < RouterProvider router = {router} />

}

export default App;
