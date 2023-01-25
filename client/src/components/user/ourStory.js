import React from 'react'

export default function OurStory() {
  return (
    <div>
       <section className="section-padding">
            <div className="container">
                <div className="row">

                    <div className="col-lg-10 col-12 text-center mx-auto">
                        <h2 className="mb-5">Welcome to Kind Heart Charity</h2>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="featured-block d-flex justify-content-center align-items-center">
                            <a href="donate.html" className="d-block">
                                <img src="images/icons/hands.png" className="featured-block-image img-fluid" alt=""/>

                                <p className="featured-block-text">Become a <strong>volunteer</strong></p>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                        <div className="featured-block d-flex justify-content-center align-items-center">
                            <a href="donate.html" className="d-block">
                                <img src="images/icons/heart.png" className="featured-block-image img-fluid" alt=""/>

                                <p className="featured-block-text"><strong>Caring</strong> Earth</p>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0 mb-md-4">
                        <div className="featured-block d-flex justify-content-center align-items-center">
                            <a href="donate.html" className="d-block">
                                <img src="images/icons/receive.png" className="featured-block-image img-fluid" alt=""/>

                                <p className="featured-block-text">Make a <strong>Donation</strong></p>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 mb-4 mb-lg-0">
                        <div className="featured-block d-flex justify-content-center align-items-center">
                            <a href="donate.html" className="d-block">
                                <img src="images/icons/scholarship.png" className="featured-block-image img-fluid" alt=""/>

                                <p className="featured-block-text"><strong>Scholarship</strong> Program</p>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>

{/* about us */}

<section className="section-padding section-bg" id="section_2">
            <div className="container">
                <div className="row">

                    <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                        <img src="images/group-people-volunteering-foodbank-poor-people.jpg"
                            className="custom-text-box-image img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-6 col-12">
                        <div className="custom-text-box">
                            <h2 className="mb-2">Our Story</h2>

                            <h5 className="mb-3">Kind Heart Charity, Non-Profit Organization</h5>

                            <p className="mb-0">This is a Bootstrap 5.2.2 CSS template for charity organization websites.
                                You can feel free to use it. Please tell your friends about TemplateMo website. Thank
                                you.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="custom-text-box mb-lg-0">
                                    <h5 className="mb-3">Our Mission</h5>

                                    <p>Sed leo nisl, posuere at molestie ac, suscipit auctor quis metus</p>

                                    <ul className="custom-list mt-2">
                                        <li className="custom-list-item d-flex">
                                            <i className="bi-check custom-text-box-icon me-2"></i>
                                            Charity Theme
                                        </li>

                                        <li className="custom-list-item d-flex">
                                            <i className="bi-check custom-text-box-icon me-2"></i>
                                            Semantic HTML
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="custom-text-box d-flex flex-wrap d-lg-block mb-lg-0">
                                    <div className="counter-thumb">
                                        <div className="d-flex">
                                            <span className="counter-number" data-from="1" data-to="2009"
                                                data-speed="1000"></span>
                                            <span className="counter-number-text"></span>
                                        </div>

                                        <span className="counter-text">Founded</span>
                                    </div>

                                    <div className="counter-thumb mt-4">
                                        <div className="d-flex">
                                            <span className="counter-number" data-from="1" data-to="120"
                                                data-speed="1000"></span>
                                            <span className="counter-number-text">B</span>
                                        </div>

                                        <span className="counter-text">Donations</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </div>
  )
}