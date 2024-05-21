import { useContext, useEffect, useState } from 'react';
import Logo from '../../assets/images/logo.webp';
import patern from '../../assets/images/pattern.webp';
import { MyContext } from '../../App';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import google from '../../assets/images/google.png';

const Login = ()=>{

    const [inputIndex, setInputIndex] = useState(null);
    const context = useContext(MyContext)

    useEffect(()=>{
        context.setisHideSidebarAndHeader(true);
    },[]);

    const focusInput=(index)=>{
        setInputIndex(index);
    }

    return(
        <>
            <img src={patern} className='loginPatern' />
            <section className="loginSection">
                <div className="loginBox">
                    <div className='logo text-center' style={{textAlign: 'center'}}>
                        <img src={Logo} width="60px" />
                        <h5 className='font-weight-bold' style={{fontWeight: 'bold'}}>Login to Hotash</h5>
                    </div>

                    <div className='wrapper mt-3 card border p-4'>
                        <form>
                            <div className={`form-group position-relative ${inputIndex===0 && 'focus'}`}>
                                <span className='icon'><MdEmail/></span>
                                <input type='text' className='form-control' placeholder='enter your email' onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)}/>
                            </div>

                            <div className={`form-group position-relative ${inputIndex===1 && 'focus'}`}>
                                <span className='icon'><RiLockPasswordFill/></span>
                                <input type='password' className='form-control' placeholder='enter your password' onFocus={()=>focusInput(1)} onBlur={()=>setInputIndex(null)}/>
                            </div>

                            <div className='form-group'>
                                <Button className="btn-blue btn-lg w-100 btn-big" style={{width: '100%'}}>Sign In</Button>
                            </div>

                            <div className='form-group'>
                               <center><Link to={'/forgot-password'} className="link text-center">FORGOT PASSWORD</Link></center>
                               <div className='d-flex align-items-center justify-content-center or mt-3' style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px'}}>
                                    <span className='line'></span>
                                    <span className='txt'>or</span>
                                    <span className='line'></span>
                               </div>

                                <Button variant="outlined" className='w-100 btn-lg btn-big loginWithGoogle' style={{width: '100%', marginTop: '20px'}}>
                                    <img src={google} width="20px" /> &nbsp; Sign In with Google
                                </Button>
                            </div>
                        </form>
                    </div>

                    <div className='wrapper mt-3 card border footer'>
                        <center>
                            <span className='text-center'>
                                Don't have an account?
                                <Link to={'/signUp'} className='link color'>Register</Link>
                            </span>
                        </center>
                    </div>
                </div>
            </section>
        </>
        
    )
}

export default Login;