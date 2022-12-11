import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About';
import Blog from '../../Pages/Blog/Blog';
import Contact from '../../Pages/Contact/Contact';
import Experience from '../../Pages/Experience/Experience';
import Home from '../../Pages/Home/Home';
import Portfolio from '../../Pages/Portfolio/Portfolio';
import Services from '../../Pages/Services/Services';
import Testimonials from '../../Pages/Testimonials/Testimonials';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/experience',
        element: <Experience></Experience>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>
      },
      {
        path: '/testimonial',
        element: <Testimonials></Testimonials>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
    ],
  },
]);
