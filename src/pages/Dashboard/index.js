import DashboardBox from "./components/dashboardBox";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { GiBeachBag } from "react-icons/gi";
import { GiStarsStack } from "react-icons/gi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import Button from '@mui/material/Button';
import { HiDotsVertical } from "react-icons/hi";
import { Chart } from "react-google-charts";

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FaEye } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';

export const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];
  
export const options = {
    'backgroundColor': 'transparent',
    'chartArea' : {'width': '100%', 'height': '100%'},
};

const Dashboard = ()=>{

    const [anchorEl, setAnchorEl] = useState(null);
    const [showBy, setshowBy] = useState('');
    const [catBy, setCatBy] = useState('');
    const open = Boolean(anchorEl);

    const ITEM_HEIGHT = 48;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className="right-content" style={{width: '100%'}}>
                <div className="row dashboardBoxWrapper">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper" style={{display: 'flex'}}>
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle/>} grow={true} />
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<IoMdCart/>} />
                            <DashboardBox color={["#2c78e5", "#60aff5"]} icon={<GiBeachBag/>} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<GiStarsStack/>} />
                        </div>
                    </div>
                    <div className="col-md-4" style={{paddingLeft: '0px'}}>
                        <div className="box">
                            <div className="dashboardBoxTes">
                                <div className="d-flex bottomEle" style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                                    <h6 style={{color: 'white', marginBottom: '0px', marginTop: '0px'}}>Total Sales</h6>
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
                                
                                <h3 className="" style={{fontWeight: 'bold', color: 'white'}}>$3,787,681.00</h3>
                                <p>$3,578.90 in last month</p>
                                
                                <Chart
                                    chartType="PieChart"
                                    width="100%"
                                    height="180px"
                                    data={data}
                                    options={options}
                                />

                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card" style={{border: '0px', padding: '3px', boxShadow: '0px 3px 0px #9E9E9E', backgroundColor: 'white', width: '100%'}}>
                            <h3 className="hd">Best Selling Products</h3>

                            <div className="row cardFilters" style={{marginLeft: '10px', marginTop: '3px'}}>
                                <div className="col-md-3">
                                    <h4>SHOW BY</h4>
                                    <FormControl size="small" style={{width: '100%'}}>
                                        <Select
                                            value={showBy}
                                            onChange={(e)=>setshowBy(e.target.value)}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            labelId="demo-select-small-label"
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>

                                <div className="col-md-3">
                                    <h4>CATEGORY BY</h4>
                                    <FormControl size="small" style={{width: '100%'}}>
                                        <Select
                                            value={catBy}
                                            onChange={(e)=>setCatBy(e.target.value)}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                            labelId="demo-select-small-label"
                                            >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div>
                            
                            <div className="table-responsive" style={{marginTop: '10px', marginLeft: '25px'}}>
                                <table className="table table-bordered v-align" style={{border: '1'}}>
                                    <thead className="thead-dark">
                                        <tr>
                                            <th>UID</th>
                                            <th style={{width: '300px'}}>PRODUCT</th>
                                            <th>CATEGORY</th>
                                            <th>BRAND</th>
                                            <th>PRICE</th>
                                            <th>STOCK</th>
                                            <th>RATING</th>
                                            <th>ORDER</th>
                                            <th>SALES</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex productBox" style={{display: 'flex', alignItems: 'center'}}>
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" style={{width: '100%'}} />
                                                        </div>
                                                    </div>
                                                    <div className="info" style={{paddingLeft: '0px'}}>
                                                        <h6>Tops and skirt set for female</h6>
                                                        <p>Women's exclusive summer Tops and skirt set for Female Top and skirt set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <div style={{width: '70px'}}>
                                                    <del className="old">$21.00</del>
                                                    <span className="new" style={{color: 'red'}}>$19.00</span>
                                                </div>
                                            </td>
                                            <td>30</td>
                                            <td>49(16)</td>
                                            <td>380</td>
                                            <td>$38</td>
                                            <td>
                                                <div className="actions" style={{display: 'flex', alignItems: 'center'}}>
                                                    <Button className="secondary" color="secondary">
                                                        <FaEye/>
                                                    </Button>
                                                    <Button className="success" color="success">
                                                        <FaPencilAlt/>
                                                    </Button>
                                                    <Button className="error" color="error">
                                                        <MdDelete/>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex productBox" style={{display: 'flex', alignItems: 'center'}}>
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" style={{width: '100%'}} />
                                                        </div>
                                                    </div>
                                                    <div className="info" style={{paddingLeft: '0px'}}>
                                                        <h6>Tops and skirt set for female</h6>
                                                        <p>Women's exclusive summer Tops and skirt set for Female Top and skirt set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <div style={{width: '70px'}}>
                                                    <del className="old">$21.00</del>
                                                    <span className="new" style={{color: 'red'}}>$19.00</span>
                                                </div>
                                            </td>
                                            <td>30</td>
                                            <td>49(16)</td>
                                            <td>380</td>
                                            <td>$38</td>
                                            <td>
                                                <div className="actions" style={{display: 'flex', alignItems: 'center'}}>
                                                    <Button className="secondary" color="secondary">
                                                        <FaEye/>
                                                    </Button>
                                                    <Button className="success" color="success">
                                                        <FaPencilAlt/>
                                                    </Button>
                                                    <Button className="error" color="error">
                                                        <MdDelete/>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex productBox" style={{display: 'flex', alignItems: 'center'}}>
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" style={{width: '100%'}} />
                                                        </div>
                                                    </div>
                                                    <div className="info" style={{paddingLeft: '0px'}}>
                                                        <h6>Tops and skirt set for female</h6>
                                                        <p>Women's exclusive summer Tops and skirt set for Female Top and skirt set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <div style={{width: '70px'}}>
                                                    <del className="old">$21.00</del>
                                                    <span className="new" style={{color: 'red'}}>$19.00</span>
                                                </div>
                                            </td>
                                            <td>30</td>
                                            <td>49(16)</td>
                                            <td>380</td>
                                            <td>$38</td>
                                            <td>
                                                <div className="actions" style={{display: 'flex', alignItems: 'center'}}>
                                                    <Button className="secondary" color="secondary">
                                                        <FaEye/>
                                                    </Button>
                                                    <Button className="success" color="success">
                                                        <FaPencilAlt/>
                                                    </Button>
                                                    <Button className="error" color="error">
                                                        <MdDelete/>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex productBox" style={{display: 'flex', alignItems: 'center'}}>
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" style={{width: '100%'}} />
                                                        </div>
                                                    </div>
                                                    <div className="info" style={{paddingLeft: '0px'}}>
                                                        <h6>Tops and skirt set for female</h6>
                                                        <p>Women's exclusive summer Tops and skirt set for Female Top and skirt set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <div style={{width: '70px'}}>
                                                    <del className="old">$21.00</del>
                                                    <span className="new" style={{color: 'red'}}>$19.00</span>
                                                </div>
                                            </td>
                                            <td>30</td>
                                            <td>49(16)</td>
                                            <td>380</td>
                                            <td>$38</td>
                                            <td>
                                                <div className="actions" style={{display: 'flex', alignItems: 'center'}}>
                                                    <Button className="secondary" color="secondary">
                                                        <FaEye/>
                                                    </Button>
                                                    <Button className="success" color="success">
                                                        <FaPencilAlt/>
                                                    </Button>
                                                    <Button className="error" color="error">
                                                        <MdDelete/>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex productBox" style={{display: 'flex', alignItems: 'center'}}>
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" style={{width: '100%'}} />
                                                        </div>
                                                    </div>
                                                    <div className="info" style={{paddingLeft: '0px'}}>
                                                        <h6>Tops and skirt set for female</h6>
                                                        <p>Women's exclusive summer Tops and skirt set for Female Top and skirt set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <div style={{width: '70px'}}>
                                                    <del className="old">$21.00</del>
                                                    <span className="new" style={{color: 'red'}}>$19.00</span>
                                                </div>
                                            </td>
                                            <td>30</td>
                                            <td>49(16)</td>
                                            <td>380</td>
                                            <td>$38</td>
                                            <td>
                                                <div className="actions" style={{display: 'flex', alignItems: 'center'}}>
                                                    <Button className="secondary" color="secondary">
                                                        <FaEye/>
                                                    </Button>
                                                    <Button className="success" color="success">
                                                        <FaPencilAlt/>
                                                    </Button>
                                                    <Button className="error" color="error">
                                                        <MdDelete/>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex productBox" style={{display: 'flex', alignItems: 'center'}}>
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" style={{width: '100%'}} />
                                                        </div>
                                                    </div>
                                                    <div className="info" style={{paddingLeft: '0px'}}>
                                                        <h6>Tops and skirt set for female</h6>
                                                        <p>Women's exclusive summer Tops and skirt set for Female Top and skirt set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <div style={{width: '70px'}}>
                                                    <del className="old">$21.00</del>
                                                    <span className="new" style={{color: 'red'}}>$19.00</span>
                                                </div>
                                            </td>
                                            <td>30</td>
                                            <td>49(16)</td>
                                            <td>380</td>
                                            <td>$38</td>
                                            <td>
                                                <div className="actions" style={{display: 'flex', alignItems: 'center'}}>
                                                    <Button className="secondary" color="secondary">
                                                        <FaEye/>
                                                    </Button>
                                                    <Button className="success" color="success">
                                                        <FaPencilAlt/>
                                                    </Button>
                                                    <Button className="error" color="error">
                                                        <MdDelete/>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex productBox" style={{display: 'flex', alignItems: 'center'}}>
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" style={{width: '100%'}} />
                                                        </div>
                                                    </div>
                                                    <div className="info" style={{paddingLeft: '0px'}}>
                                                        <h6>Tops and skirt set for female</h6>
                                                        <p>Women's exclusive summer Tops and skirt set for Female Top and skirt set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <div style={{width: '70px'}}>
                                                    <del className="old">$21.00</del>
                                                    <span className="new" style={{color: 'red'}}>$19.00</span>
                                                </div>
                                            </td>
                                            <td>30</td>
                                            <td>49(16)</td>
                                            <td>380</td>
                                            <td>$38</td>
                                            <td>
                                                <div className="actions" style={{display: 'flex', alignItems: 'center'}}>
                                                    <Button className="secondary" color="secondary">
                                                        <FaEye/>
                                                    </Button>
                                                    <Button className="success" color="success">
                                                        <FaPencilAlt/>
                                                    </Button>
                                                    <Button className="error" color="error">
                                                        <MdDelete/>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex productBox" style={{display: 'flex', alignItems: 'center'}}>
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" style={{width: '100%'}} />
                                                        </div>
                                                    </div>
                                                    <div className="info" style={{paddingLeft: '0px'}}>
                                                        <h6>Tops and skirt set for female</h6>
                                                        <p>Women's exclusive summer Tops and skirt set for Female Top and skirt set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <div style={{width: '70px'}}>
                                                    <del className="old">$21.00</del>
                                                    <span className="new" style={{color: 'red'}}>$19.00</span>
                                                </div>
                                            </td>
                                            <td>30</td>
                                            <td>49(16)</td>
                                            <td>380</td>
                                            <td>$38</td>
                                            <td>
                                                <div className="actions" style={{display: 'flex', alignItems: 'center'}}>
                                                    <Button className="secondary" color="secondary">
                                                        <FaEye/>
                                                    </Button>
                                                    <Button className="success" color="success">
                                                        <FaPencilAlt/>
                                                    </Button>
                                                    <Button className="error" color="error">
                                                        <MdDelete/>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>#1</td>
                                            <td>
                                                <div className="d-flex productBox" style={{display: 'flex', alignItems: 'center'}}>
                                                    <div className="imgWrapper">
                                                        <div className="img">
                                                            <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" style={{width: '100%'}} />
                                                        </div>
                                                    </div>
                                                    <div className="info" style={{paddingLeft: '0px'}}>
                                                        <h6>Tops and skirt set for female</h6>
                                                        <p>Women's exclusive summer Tops and skirt set for Female Top and skirt set</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Womans</td>
                                            <td>Richman</td>
                                            <td>
                                                <div style={{width: '70px'}}>
                                                    <del className="old">$21.00</del>
                                                    <span className="new" style={{color: 'red'}}>$19.00</span>
                                                </div>
                                            </td>
                                            <td>30</td>
                                            <td>49(16)</td>
                                            <td>380</td>
                                            <td>$38</td>
                                            <td>
                                                <div className="actions" style={{display: 'flex', alignItems: 'center'}}>
                                                    <Button className="secondary" color="secondary">
                                                        <FaEye/>
                                                    </Button>
                                                    <Button className="success" color="success">
                                                        <FaPencilAlt/>
                                                    </Button>
                                                    <Button className="error" color="error">
                                                        <MdDelete/>
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="d-flex tableFooter" style={{display: 'flex'}}>
                                    <p>showing <b>12</b> of <b>60</b> result</p>
                                    <Pagination count={10} color="primary" className="pagination" showFirstButton showLastButton />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Dashboard;