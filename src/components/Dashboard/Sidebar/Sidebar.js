import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            
            <ul>
                <li>
                    order
                </li>
                <li>
                  <Link to='/serviceList'>service list</Link>  
                </li>
                <li>
                   <Link to='/review'> Review </Link> 
                </li>
            </ul>
            
            
        </div>
    );
};

export default Sidebar;