import React from 'react';
import './navigation.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Navigation extends React.Component {

  render() {
    return (

        <div id="sidebar-wrapper">
         <ul className="sidebar-nav">

           <li className="sidebar-brand">
              <Link to='/home'>JobSeekrs</Link>
           </li>
           <li>

         </li>
           <li>
              <Link to='/search'>Search</Link>
           </li>
           <li>
              <Link to='/enter-a-job'>Enter a Job</Link>
           </li>
           <li>
           </li>

       </ul>
       </div>


    );
  }
}




export default Navigation;
