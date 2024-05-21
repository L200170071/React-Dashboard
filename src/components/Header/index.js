import React,{useContext, useState} from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.webp';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import { IoShieldHalfSharp } from "react-icons/io5";
import { MyContext } from '../../App';

const Header = ()=>{
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpennotificationsDrop, setisOpennotificationsDrop] = useState(false);
    const open = Boolean(anchorEl);
    const openNotifications = Boolean(isOpennotificationsDrop);

    const [isLogin, setIsLogin] = useState(false);

    // merubah submenu ketika diklik
    const context = useContext(MyContext);
    // end merubah

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
        setAnchorEl(null);
    };

    const handleOpennotificationsDrop = () => {
        setisOpennotificationsDrop(true);
    };

    const handleClosenotificationsDrop = () => {
        setisOpennotificationsDrop(false);
    };

    return(
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                    <div className="row d-flex align-items-center">
                        {/* logo */}
                        <div className="col-sm-2 part1">
                            <Link to={'/'} className="d-flex align-items-center">
                                <img src={logo} className="logo" style={{marginTop: '15px'}} />
                                <span className="ml-2" style={{color: '#000', fontWeight: 'bold', fontSize: '24px'}}>&nbsp;HOTASH</span>
                            </Link>
                        </div>

                        <div className="col-sm-3 d-flex align-item-center part2" style={{marginTop: '20px'}}>
                            <table>
                                <tr>
                                    <td>
                                        <Button className="rounded-circle" style={{marginRight: '20px'}} sx={{borderRadius: 50}} onClick={()=>context.setisToggleSidebar(!context.isToggleSidebar)}>
                                            {
                                                context.isToggleSidebar===false ? <MdMenuOpen/> : <MdOutlineMenu/>
                                            }
                                        </Button>
                                    </td>
                                    <td><SearchBox /></td>
                                </tr>
                            </table>
                            
                        </div>

                        <div className="col-sm-7 d-flex align-item-center part3" style={{marginTop: '20px'}}>
                            <div className="page3baru">
                                <Button className="rounded-circle" style={{marginRight: '20px'}} sx={{borderRadius: 50}}><MdOutlineLightMode/></Button>
                                <Button className="rounded-circle" style={{marginRight: '20px'}} sx={{borderRadius: 50}}>
                                    <IoCartOutline/>
                                </Button>
                                <Button className="rounded-circle" style={{marginRight: '20px'}} sx={{borderRadius: 50}}>
                                    <MdOutlineMailOutline/>
                                </Button>
                                
                                <div className='dropdownWrapper position-relative'>
                                    <Button onClick={handleOpennotificationsDrop} className="rounded-circle" style={{marginRight: '20px'}} sx={{borderRadius: 50}}>
                                        <FaRegBell/>
                                    </Button>

                                    <Menu
                                        anchorEl={isOpennotificationsDrop}
                                        className='notifications dropdown_list'
                                        id="notifications"
                                        open={openNotifications}
                                        onClose={handleClosenotificationsDrop}
                                        onClick={handleClosenotificationsDrop}
                                        transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}>
                                        <div className='menuAnom'>
                                            <div className='head' style={{paddingLeft: '15px'}}>
                                                <h4>Orders (12)</h4>
                                            </div>

                                            <Divider style={{marginBottom: '5px'}} />

                                            <div className='scroll'>
                                                <MenuItem>
                                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                                        <span>
                                                            <img style={{borderRadius: '50%', width: '40px', height: '40px', border: '2px solid #0858f7', objectFit: 'cover', marginBottom: '20px'}} src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>

                                                    <div className='dropdowninfo'>
                                                        <h4>
                                                            <span>
                                                                <b>Mahmudul </b> 
                                                                added to his favorite list
                                                                <b> Leather belt steve madden</b>
                                                            </span>
                                                        </h4>
                                                        <p className='text-sky'>
                                                            few seconds ago
                                                        </p>
                                                    </div>

                                                </MenuItem>

                                                <MenuItem>
                                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                                        <span>
                                                            <img style={{borderRadius: '50%', width: '40px', height: '40px', border: '2px solid #0858f7', objectFit: 'cover', marginBottom: '20px'}} src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>

                                                    <div className='dropdowninfo'>
                                                        <h4>
                                                            <span>
                                                                <b>Mahmudul </b> 
                                                                added to his favorite list
                                                                <b> Leather belt steve madden</b>
                                                            </span>
                                                        </h4>
                                                        <p className='text-sky'>
                                                            few seconds ago
                                                        </p>
                                                    </div>

                                                </MenuItem>

                                                <MenuItem>
                                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                                        <span>
                                                            <img style={{borderRadius: '50%', width: '40px', height: '40px', border: '2px solid #0858f7', objectFit: 'cover', marginBottom: '20px'}} src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>

                                                    <div className='dropdowninfo'>
                                                        <h4>
                                                            <span>
                                                                <b>Mahmudul </b> 
                                                                added to his favorite list
                                                                <b> Leather belt steve madden</b>
                                                            </span>
                                                        </h4>
                                                        <p className='text-sky'>
                                                            few seconds ago
                                                        </p>
                                                    </div>

                                                </MenuItem>

                                                <MenuItem>
                                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                                        <span>
                                                            <img style={{borderRadius: '50%', width: '40px', height: '40px', border: '2px solid #0858f7', objectFit: 'cover', marginBottom: '20px'}} src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>

                                                    <div className='dropdowninfo'>
                                                        <h4>
                                                            <span>
                                                                <b>Mahmudul </b> 
                                                                added to his favorite list
                                                                <b> Leather belt steve madden</b>
                                                            </span>
                                                        </h4>
                                                        <p className='text-sky'>
                                                            few seconds ago
                                                        </p>
                                                    </div>

                                                </MenuItem>

                                                <MenuItem>
                                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                                        <span>
                                                            <img style={{borderRadius: '50%', width: '40px', height: '40px', border: '2px solid #0858f7', objectFit: 'cover', marginBottom: '20px'}} src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>

                                                    <div className='dropdowninfo'>
                                                        <h4>
                                                            <span>
                                                                <b>Mahmudul </b> 
                                                                added to his favorite list
                                                                <b> Leather belt steve madden</b>
                                                            </span>
                                                        </h4>
                                                        <p className='text-sky'>
                                                            few seconds ago
                                                        </p>
                                                    </div>

                                                </MenuItem>

                                                <MenuItem>
                                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                                        <span>
                                                            <img style={{borderRadius: '50%', width: '40px', height: '40px', border: '2px solid #0858f7', objectFit: 'cover', marginBottom: '20px'}} src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                                        </span>
                                                    </div>

                                                    <div className='dropdowninfo'>
                                                        <h4>
                                                            <span>
                                                                <b>Mahmudul </b> 
                                                                added to his favorite list
                                                                <b> Leather belt steve madden</b>
                                                            </span>
                                                        </h4>
                                                        <p className='text-sky'>
                                                            few seconds ago
                                                        </p>
                                                    </div>

                                                </MenuItem>
                                            </div>

                                            <div style={{paddingLeft: '10px', paddingRight: '10px', paddingTop: '10px'}}>
                                                <Button className='btn-blue w-100'>View all notifications</Button>
                                            </div>

                                        </div>
                                    </Menu>
                                    
                                </div>

                                {
                                    context.isLogin!==true ? 
                                    <Link to={'/login'}><Button className="btn-blue btn-lg btn-round">Sign In</Button></Link>
                                    :

                                    <div>
                                        <Button onClick={handleOpenMyAccDrop} style={{marginTop: '-5px'}}>
                                            <div className="myAccWrapper">
                                                <img style={{borderRadius: '50%', width: '40px', height: '40px', border: '2px solid #0858f7', objectFit: 'cover', marginBottom: '20px'}} src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" />
                                            </div> 
                                            <div className="userInfo" style={{marginTop: '-15px'}}>
                                                <h4>Rinku Verma</h4>
                                                <p>@rincku37</p>
                                            </div>  
                                        </Button>

                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleCloseMyAccDrop}
                                            onClick={handleCloseMyAccDrop}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
                                            <div className='menuAnom'>
                                                <MenuItem onClick={handleCloseMyAccDrop}>
                                                    <ListItemIcon>
                                                        <PersonAdd />
                                                    </ListItemIcon>
                                                    My Account
                                                </MenuItem>
                                                <MenuItem onClick={handleCloseMyAccDrop}>
                                                    <ListItemIcon>
                                                        <IoShieldHalfSharp />
                                                    </ListItemIcon>
                                                    Reset Password
                                                </MenuItem>
                                                <MenuItem onClick={handleCloseMyAccDrop}>
                                                <ListItemIcon>
                                                    <Logout />
                                                </ListItemIcon>
                                                Logout
                                                </MenuItem>
                                            </div>
                                        </Menu>
                                    </div>
                                }
                                  
                            </div>
                        </div>

                    </div>
                </div>
            </header> 
        </>
    )
}

export default Header;