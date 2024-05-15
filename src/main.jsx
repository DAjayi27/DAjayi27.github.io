import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/style.css'
import '../public/js/fadeInAnimation.js'

const rootElement = document.getElementById('root');
rootElement.classList.add('root');
window.addEventListener('load', onPageLoad);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

function onPageLoad(){
  

  let elements = document.querySelectorAll('.hidden');
  addDelay(elements)
  const observer = new IntersectionObserver(animateOnScroll);
  elements.forEach((element) => observer.observe(element));

}



function animateOnScroll(entries) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
          // Trigger your animation logic here
      } else {
          entry.target.classList.remove('show');
      }
  });
}
