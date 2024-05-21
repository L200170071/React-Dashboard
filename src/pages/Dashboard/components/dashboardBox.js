import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { IoIosTimer } from "react-icons/io";

const DashboardBox=(props)=>{

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <Button className="dashboardBox" style={{backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`}}>
            {
                props.grow === true ?

                <span className="chart" style={{display:"flex", width: "100%"}}>
                    <TrendingUpIcon/>
                </span>

                :

                <span className="chart" style={{display:"flex", width: "100%"}}>
                    <TrendingDownIcon/>
                </span>
            }
            <div className="d-flex w-100" style={{display: 'flex', width: '100%'}}>
                <div className="col1">
                    <h4 style={{color: 'white', marginBottom: '0px'}}>Total Users</h4>
                    <span style={{color: 'white'}}>277</span>
                </div>

                <div style={{marginLeft: 'auto'}}>
                    {
                        props.icon ?

                        <span className="icon">
                            {props.icon ? props.icon : ''}
                        </span>

                        :

                        ''

                        
                    }
                    
                </div>
            </div>

            <div className="d-flex bottomEle" style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                <h6 style={{color: 'white', marginBottom: '0px', marginTop: '0px'}}>Last Month</h6>
                <div style={{marginLeft: 'auto'}}>
                    <Button className="ml-auto toggleIcon" style={{marginLeft: 'auto'}} onClick={handleClick}><HiDotsVertical/></Button>
                    <Menu
                        className="dropdown_menu"
                        MenuListProps={{
                        'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: '20ch',
                        },
                        }}
                    >
                        
                        <MenuItem onClick={handleClose}>
                            {handleClose}
                            <IoIosTimer /> Last Day
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            {handleClose}
                            <IoIosTimer /> Last Week
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            {handleClose}
                            <IoIosTimer /> Last Month
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            {handleClose}
                            <IoIosTimer /> Last Year
                        </MenuItem>
                        
                    </Menu>
                </div>
            </div>
        </Button>                    
    )
}

export default DashboardBox;