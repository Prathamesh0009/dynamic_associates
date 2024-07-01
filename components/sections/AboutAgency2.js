

export default function AboutAgency2() {
    return (
        <>
            <section className="about-agency-area pt-135 rpt-100 rel z-1">
                <div className="container">
                    <div className="row pb-80 align-items-center">
                        <div className="col-lg-6 wow fadeInRight delay-0-2s">
                            <div className="about-agency-image rmb-55">
                                <img src="/assets/images/about/about-left.png" alt="About Agency" />
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInLeft delay-0-2s">
                            <div className="about-agency-content">
                                <div className="section-title mb-30">
                                    <span className="sub-title mb-15">Trusted Web & Software Development Agency</span>
                                    <h2>Why Choose Our IT Services and Consulting <span>Agency</span></h2>
                                </div>
                                <p>In today's digital age, a strong IT infrastructure is critical to business success. Our firm specializes in comprehensive IT solutions, such as cloud computing, cybersecurity, digital transformation, and IT consulting. Collaborate with us to improve efficiency, drive growth, and stay ahead of technological trends.</p>
                                <h5>Unparalleled IT solutions for your business growth</h5>
                                {/* <div className="skillbar" data-percent={88}>
                                    <span className="skillbar-title">Marketing</span>
                                    <div className="progress-bar-striped skillbar-bar progress-bar-animated" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}  style={{ width: "88%" }}>
                                        <span className="skill-bar-percent" /></div>
                                </div> */}
                                <div className="row justify-content-between pt-5">
                                    <div className="col-sm-6">
                                        <div className="service-stye-two">
                                            <div className="icon">
                                                <img src="/assets/images/icons/light.png" alt="Icon" />
                                            </div>
                                            <h6>Leader of development & marketing agency</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="service-stye-two">
                                            <div className="icon">
                                                <img src="/assets/images/icons/development.png" alt="Icon" />
                                            </div>
                                            <h6>Highest quality development & results</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
