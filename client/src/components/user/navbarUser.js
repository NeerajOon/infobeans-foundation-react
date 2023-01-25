import React from 'react'
import { Outlet } from 'react-router-dom'

export default function NavbarUser() {
  return (
    <div>
      <header className="site-header">
        <div className="container-fluid">
            <div className="row">

                <div className="col-lg-8 col-12 d-flex flex-wrap">
                    <p className="d-flex me-4 mb-0">
                        <i className="bi-geo-alt me-2"></i>
                        Akershusstranda 20, 0150 Oslo, Norway
                    </p>

                    <p className="d-flex mb-0">
                        <i className="bi-envelope me-2"></i>

                        <a href="mailto:info@company.com">
                            info@company.com
                        </a>
                    </p>
                </div>

                <div className="col-lg-3 col-12 ms-auto d-lg-block d-none">
                    <ul className="social-icon">
                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-twitter"></a>
                        </li>

                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-facebook"></a>
                        </li>

                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-instagram"></a>
                        </li>

                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-youtube"></a>
                        </li>

                        <li className="social-icon-item">
                            <a href="#" className="social-icon-link bi-whatsapp"></a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </header>

    <nav className="navbar navbar-expand-lg bg-light shadow-lg">
        <div className="container">
            <a className="navbar-brand" href="index.html">
                <img src="images/logo.png" className="logo img-fluid" alt="Kind Heart Charity"/>
                <span>
                    Kind Heart Charity
                    <small>Non-profit Organization</small>
                </span>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link click-scroll" href="#top">Home</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link click-scroll" href="#section_2">About</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link click-scroll" href="#section_3">Causes</a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link click-scroll" href="#section_4">Volunteer</a>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link click-scroll dropdown-toggle" href="#section_5"
                            id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">News</a>

                        <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                            <li><a className="dropdown-item" href="news.html">News Listing</a></li>

                            <li><a className="dropdown-item" href="news-detail.html">News Detail</a></li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link click-scroll" href="#section_6">Contact</a>
                    </li>

                    <li className="nav-item ms-3">
                        <a className="nav-link custom-btn custom-border-btn btn" href="donate.html">Donate</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

<Outlet/>


    </div>
  )
}
