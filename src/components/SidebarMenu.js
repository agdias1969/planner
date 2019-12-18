import React  from 'react'
import { Link } from 'react-router-dom'

function  SidebarMenu() {

        return (
          <div className='sidebar'>
               <li><Link to='/'>home</Link></li>
               <li><Link to='/tasks'>my tasks</Link></li>
               <li><Link to='/inbox'>inbox</Link></li>
               <li><Link to='/portfolios'>portfolios</Link></li>

          </div>
        )
    
}

export default SidebarMenu;