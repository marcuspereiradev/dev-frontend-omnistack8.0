import React from 'react';

import logo from '../assets/logo.svg';
import dislike from '../assets/dislike.svg';
import like from '../assets/like.svg';

import '../styles/Main.scss';

const Main = ({ match }) => {
  return (
   <div className='main-container'>
     <img src={logo} alt='Tindev' />
     <ul>
       <li>
         <img src='https://avatars1.githubusercontent.com/u/2723477?v=4' alt='Avatar' />
         <footer>
           <strong>Jonas Porto</strong>
           <p>Curious, self-starter, troubleshooter and team player. \r\nWorking w/ Cloud, Unix, Ruby, Javascript.\r\nExploring data science possibilities w/ Python, R & Ruby</p>
         </footer>

         <div className='buttons'>
           <button type='button'>
             <img src={dislike} alt='Dislike' />
           </button>
           <button type='button'>
             <img src={like} alt='Like' />
           </button>
         </div>
       </li>

       <li>
         <img src='https://avatars1.githubusercontent.com/u/2723477?v=4' alt='Avatar' />
         <footer>
           <strong>Jonas Porto</strong>
           <p>Curious, self-starter, troubleshooter and team player. \r\nWorking w/ Cloud, Unix, Ruby, Javascript.\r\nExploring data science possibilities w/ Python, R & Ruby</p>
         </footer>

         <div className='buttons'>
           <button type='button'>
             <img src={dislike} alt='Dislike' />
           </button>
           <button type='button'>
             <img src={like} alt='Like' />
           </button>
         </div>
       </li>

       <li>
         <img src='https://avatars1.githubusercontent.com/u/2723477?v=4' alt='Avatar' />
         <footer>
           <strong>Jonas Porto</strong>
           <p>Curious, self-starter, troubleshooter and team player. \r\nWorking w/ Cloud, Unix, Ruby, Javascript.\r\nExploring data science possibilities w/ Python, R & Ruby</p>
         </footer>

         <div className='buttons'>
           <button type='button'>
             <img src={dislike} alt='Dislike' />
           </button>
           <button type='button'>
             <img src={like} alt='Like' />
           </button>
         </div>
       </li>

       <li>
         <img src='https://avatars1.githubusercontent.com/u/2723477?v=4' alt='Avatar' />
         <footer>
           <strong>Jonas Porto</strong>
           <p>Curious, self-starter, troubleshooter and team player. \r\nWorking w/ Cloud, Unix, Ruby, Javascript.\r\nExploring data science possibilities w/ Python, R & Ruby</p>
         </footer>

         <div className='buttons'>
           <button type='button'>
             <img src={dislike} alt='Dislike' />
           </button>
           <button type='button'>
             <img src={like} alt='Like' />
           </button>
         </div>
       </li>

       <li>
         <img src='https://avatars1.githubusercontent.com/u/2723477?v=4' alt='Avatar' />
         <footer>
           <strong>Jonas Porto</strong>
           <p>Curious, self-starter, troubleshooter and team player. \r\nWorking w/ Cloud, Unix, Ruby, Javascript.\r\nExploring data science possibilities w/ Python, R & Ruby</p>
         </footer>

         <div className='buttons'>
           <button type='button'>
             <img src={dislike} alt='Dislike' />
           </button>
           <button type='button'>
             <img src={like} alt='Like' />
           </button>
         </div>
       </li>
     </ul>
   </div>
  )
}

export default Main;
