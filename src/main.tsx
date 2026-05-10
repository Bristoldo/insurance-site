import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import './assets/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

import 'bootstrap-icons/font/bootstrap-icons.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './assets/lib/animate/animate.min.css';

import './assets/css/style.css';

import('./assets/js/main.js');

import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// import 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js';



// import('./assets/lib/easing/easing.min.js');


import './assets/lib/lightbox/css/lightbox.min.css';

import ('./assets/lib/owlcarousel/owl.carousel.min.js');

// import('./assets/lib/waypoints/waypoints.min.js');

import('./assets/lib/wow/wow.min.js');


import './assets/lib/owlcarousel/assets/owl.carousel.min.css';

import './assets/lib/owlcarousel/assets/owl.theme.default.min.css';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
