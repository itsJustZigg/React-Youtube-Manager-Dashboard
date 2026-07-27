import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


export default function Sidebar(){
    
    const [sidebarClassName, setSidebarClassName] = useState("sidebar-close")


    function handleSidebarClose(){
        if(sidebarClassName === "sidebar-open"){
            setSidebarClassName("sidebar-close")
        }
        else if(sidebarClassName === "sidebar-close"){
            setSidebarClassName("sidebar-open")
        }
    }

    

    return(
        <>
        <nav className={sidebarClassName}>
            <div className='logo-container'>
               {sidebarClassName === "sidebar-open" && <h1>YT Project Manager</h1>}<MenuOutlinedIcon onClick={handleSidebarClose}/>
            </div>
        <ul>
            <li className='item'>
                <NavLink to="/home"
                    aria-label="Home"
                    className={({isActive}) =>
                    isActive ? 'sidebar-item-container-selected':'sidebar-item-container'
                }
            >
                    <HomeIcon sx={{margin: "15px 5px 15px 5px"}}/>
                    { sidebarClassName === 'sidebar-open' && (
                        <span>Home</span>
                    )}
                    </NavLink>
            </li>
            
            <li className='item'>
                <NavLink to="/projects"
                    aria-label='Projects'
                    className={({isActive}) =>
                    isActive ? 'sidebar-item-container-selected':'sidebar-item-container'
                }
            >
                    <WorkIcon sx={{margin: "15px 5px 15px 5px"}}/>
                    { sidebarClassName === 'sidebar-open' && (
                        <span>Projects</span>
                    )}
                    </NavLink>
            </li>

            <li className='item'>
                <NavLink to="/calendar"
                aria-label='Calendar'
                    className={({isActive}) =>
                    isActive ? 'sidebar-item-container-selected':'sidebar-item-container'
                }
            >
                    <CalendarMonthIcon sx={{margin: "15px 5px 15px 5px"}}/>
                    { sidebarClassName === 'sidebar-open' && (
                        <span>Calendar</span>
                    )}
                    </NavLink>
            </li>

            <li className='item'>
                <NavLink to="/help"
                aria-label='help'
                    className={({isActive}) =>
                    isActive ? 'sidebar-item-container-selected':'sidebar-item-container'
                }
            >
                    <HelpCenterIcon sx={{margin: "15px 5px 15px 5px"}}/>
                    { sidebarClassName === 'sidebar-open' && (
                        <span>Help</span>
                    )}
                    </NavLink>
            </li>

            <li className='item'>
                <NavLink to="/settings"
                aria-label='settings'
                    className={({isActive}) =>
                    isActive ? 'sidebar-item-container-selected':'sidebar-item-container'
                }
            >
                    <SettingsIcon sx={{margin: "15px 5px 15px 5px"}}/>
                    { sidebarClassName === 'sidebar-open' && (
                        <span>Settings</span>
                    )}
                    </NavLink>
            </li>

            <li className='item'>
                <NavLink to="/logout"
                aria-label='logout'
                    className={({isActive}) =>
                    isActive ? 'sidebar-item-container-selected':'sidebar-item-container'
                }
            >
                    <LogoutIcon sx={{margin: "15px 5px 15px 5px"}}/>
                    { sidebarClassName === 'sidebar-open' && (
                        <span>Logout</span>
                    )}
                    </NavLink>
            </li>
        </ul>
        </nav>
        </>
    )
}