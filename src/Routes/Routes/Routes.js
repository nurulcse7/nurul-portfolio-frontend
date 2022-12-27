import { createBrowserRouter } from 'react-router-dom';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import Main from '../../Layout/Main';
import About from '../../Pages/About/About';
import Blog from '../../Pages/Blog/Blog';
import Contact from '../../Pages/Contact/Contact';
import Experience from '../../Pages/Experience/Experience';
import Home from '../../Pages/Home/Home';
import Dental from '../../Pages/Portfolio/Dental/Dental';
import Educational from '../../Pages/Portfolio/Educational/Educational';
import Gpt from '../../Pages/Portfolio/GPT-3/Gpt';
import Gym from '../../Pages/Portfolio/Gym/Gym';
import Motor from '../../Pages/Portfolio/Motor/Motor';
import Oop from '../../Pages/Portfolio/Oop/Oop';
import Portfolio from '../../Pages/Portfolio/Portfolio';
import Resale from '../../Pages/Portfolio/Resale/Resale';
import Services from '../../Pages/Services/Services';
import ErrorPage from '../../Pages/Shared/error-page';
import Terms from '../../Pages/Terms/Terms';
import Testimonials from '../../Pages/Testimonials/Testimonials';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>,
      },
      {
        path: '/resale',
        element: <Resale/>,
      },
      {
        path: '/dental',
        element: <Dental/>,
      },
      {
        path: '/motor',
        element: <Motor/>,
      },
      {
        path: '/education',
        element: <Educational></Educational>,
      },
      {
        path: '/gpt',
        element: <Gpt></Gpt>,
      },
      {
        path: '/gym',
        element: <Gym></Gym>
      },
      {
        path: '/oop',
        element: <Oop></Oop>
      },
      {
        path: '/experience',
        element: <Experience></Experience>,
      },
      {
        path: '/services',
        element: <Services></Services>,
      },
      {
        path: '/testimonial',
        element: <Testimonials></Testimonials>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/terms',
        element: <Terms></Terms>,
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
    ],
  },
]);
