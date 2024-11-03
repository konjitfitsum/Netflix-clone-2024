import React from 'react'
import './Header.css'
import NetflixLogo from '../../assets/7124274_Netflix_Logo_icon.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationIcon from '@mui/icons-material/Notifications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropdownIcon from '@mui/icons-material/ArrowDropDown';
const Header = () => {
  return (
    <div className='header_outer_container'>
        <div className="header_container">
            <div className="header_left">
                <ul>
                  <li><img src={NetflixLogo} alt="Netflix logo" width={100 } /></li>
                    <li>Netflix</li>
                    <li>Home</li>
                    <li>TvShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyList</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
         <div className="header_right">
            <ul>
                  <li><SearchIcon/></li> 
                <li><NotificationIcon/></li>
                <li><AccountBoxIcon/></li>
                <li><ArrowDropdownIcon/></li> 
            </ul>
        </div>       
            
        </div>

    </div>
  )
}

export default Header