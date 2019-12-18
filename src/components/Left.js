import React from 'react';
import { Link } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import SidebarHeader from './SidebarHeader';

function Left (props) {
    return (
        <div className='left'>
         <SidebarHeader />
          <SidebarMenu />
        </div>
    )
}

export default Left;