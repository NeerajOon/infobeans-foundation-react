import React, { Component, useEffect } from 'react'
import $ from 'jquery'; 
import { Link, Outlet } from 'react-router-dom';

export default function Navbar() {
  
    const changeSideBar = ()=>{
        window.jQueryCode();
    }
  return (
    <>
       {/* <!-- Sidebar Start --> */}
        <div  className="sidebar pe-4 pb-3">
            <nav className="navbar bg-light navbar-light">
                <a href={process.env.PUBLIC_URL +'/logo.png'} className="navbar-brand mx-4 mb-3">
                    <img src={process.env.PUBLIC_URL + '/logo.png'} height='60px'/>
                    <h3 className='text-danger' > &nbsp; InfoBeans</h3>
                  <h3 className='text-danger' style={{lineHeight:'15px'}}>&ensp;Foundation</h3>
                </a>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: '40px', height: '40px'}}/>
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">Nitesh Bagora </h6>
                      <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">

                <Link to="/admin" className="nav-item nav-link "><i className="fa fa-tachometer-alt me-2"></i>Admin Home</Link>
                     <Link to="studentTable" className="nav-item nav-link "><i className="fa fa-tachometer-alt me-2"></i>Student Details</Link>
                  
                    {/* <div className="nav-item dropdown">
                        <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Elements</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="button.html" className="dropdown-item">Buttons</Link>
                            <Link to="typography.html" className="dropdown-item">Typography</Link>
                            <Link to="element.html" className="dropdown-item">Other Elements</Link>
                        </div>
                    </div> */}
                     <Link to="forms" className="nav-item nav-link "><i className="fa fa-tachometer-alt me-2"></i>Updates Form</Link>
                     <Link to="message" className="nav-item nav-link"><i className="fa fa-tachometer-alt me-2"></i>Student Details</Link>
                     <Link to="/" className="nav-item nav-link"><i className="fa fa-tachometer-alt me-2"></i>Logout</Link>
                   
                    
                </div>
            </nav>
        </div>
        {/* <!-- Sidebar End --> */}

        {/* <div className="content"> */}
        <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
                <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
                    <h2><i className="fa fa-hashtag"></i></h2>
                </a>
                <a href='#' onClick={changeSideBar} className="sidebar-toggler flex-shrink-0">
                    <i className="fa fa-bars"></i>
                </a>
                <form className="d-none d-md-flex ms-4">
                    <input className="form-control border-0" type="search" placeholder="Search"/>
                </form>
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-envelope me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Message</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: '40px', height: '40px'}}/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: '40px', height: '40px'}}/>
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/user.jpg" alt="" style={{width: '40px', height: '40px'}}/>
                                    <div className="ms-2">
                                        <a className="fw-normal mb-0">Jhon send you a message</a>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item text-center">See all message</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-bell me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">Notificatin</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item">
                                <h6 className="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr className="dropdown-divider"/>
                            <a href="#" className="dropdown-item text-center">See all notifications</a>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img className="rounded-circle me-lg-2" src="img/user.jpg" alt="" style={{width: '40px', height: '40px'}}/>
                            <span className="d-none d-lg-inline-flex">John Doe</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">My Profile</a>
                            <a href="#" className="dropdown-item">Settings</a>
                            <a href="#" className="dropdown-item">Log Out</a>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                
        </nav>
        {/* </div> */}

        <Outlet/>

    </>

  
  )
}
