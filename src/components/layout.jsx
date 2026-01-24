import { Link } from 'react-router-dom';
import '../style/layout.css'
import { BikeIcon } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/login', label: 'Login', icon: '🔐' },
    { path: '/signup', label: 'Sign Up', icon: '✍️' },
    { path: '/trips', label: 'My Trips', icon: '✈️' },
    { path: '/driver-panel', label: 'Driver Panel', icon: '🚗' },
    { path: '/upgrade', label: 'Upgrade', icon: '⬆️' },
  ];

function Layout({children}){
    const [clicked,setClicked]=useState(null);
    return(
        <div className="wrapper">
           <div className="sidebar">
            <div className="logo">
                <BikeIcon size={60} color='black'/>
                SwiftRide
            </div>
            
            {
                navLinks.map((item,index)=>(
                    <Link key={index} to={item.path} className={`nav-link ${clicked===item.path?  "active":""}`} onClick={()=>setClicked(item.path)}>
                        <span className='nav-icon'>{item.icon}</span>
                        {item.label} 
                    </Link>
                ))
            }
           </div>
           <div className="content">
            {children}
           </div>
        </div>
    );
}
export default Layout;