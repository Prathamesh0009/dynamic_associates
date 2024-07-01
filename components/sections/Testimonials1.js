'use client'
import Slider from "react-slick"

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 600,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
}

export default function Testimonials1() {
    return (
        <>
            <section className="testimonials-area py-145 rpy-100 rel z-1">
                <div className="container">
                    <div className="row gap-140 align-items-center">
                        <div className="col-lg-5 wow fadeInRight delay-0-2s">
                            <div className="testimonials-image rmb-55">
                                <img src="/assets/images/testimonials/testimonials-left.png" alt="Testimonials" />
                            </div>
                        </div>
                        <div className="col-lg-7 wow fadeInLeft delay-0-2s">
                            <div className="testimonials-content">
                                <div className="section-title mb-35">
                                    <span className="sub-title mb-15">know what our client’s says</span>
                                    <h2>made the biggest <span>players</span> happy</h2>
                                </div>
                                <Slider {...settings} className="testimonials-active">
                                    <div className="testimonial-item">
                                        <div className="author-speech">
                                            <p>Our digital presence has improved since working with this agency. Their innovative strategies and hands-on approach have greatly improved our online visibility and customer engagement. We could not be happier.</p>
                                        </div>
                                        <div className="testimonial-footer">
                                            <div className="testimonial-author">
                                                {/* <div className="author-image">
                                                    <img src="/assets/images/testimonials/author1.png" alt="Author Image" />
                                                </div> */}
                                                <div className="author-info">
                                                    <h6>Cameron Williamson</h6>
                                                    <span className="designation">Working For Digital Marketing Service</span>
                                                </div>
                                            </div>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="author-speech">
                                            <p>The web development team outperformed our expectations. They designed a sleek, user-friendly website that enhanced our customer experience and increased online sales. Their professionalism and expertise are unparalleled.</p>
                                        </div>
                                        <div className="testimonial-footer">
                                            <div className="testimonial-author">
                                                {/* <div className="author-image">
                                                    <img src="/assets/images/testimonials/author1.png" alt="Author Image" />
                                                </div> */}
                                                <div className="author-info">
                                                    <h6>John Smith</h6>
                                                    <span className="designation">Working For Web Development Service</span>
                                                </div>
                                            </div>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="author-speech">
                                            <p>We required a custom software solution to streamline our operations, and this agency delivered flawlessly. Their developers were attentive to our requirements and delivered robust, efficient software that has significantly increased our productivity.</p>
                                        </div>
                                        <div className="testimonial-footer">
                                            <div className="testimonial-author">
                                                {/* <div className="author-image">
                                                    <img src="/assets/images/testimonials/author1.png" alt="Author Image" />
                                                </div> */}
                                                <div className="author-info">
                                                    <h6>Odion Zulu</h6>
                                                    <span className="designation">Working For Software Development Service</span>
                                                </div>
                                            </div>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="author-speech">
                                            <p>Our WordPress website required an entire redesign and this company did an excellent job. They updated our website with a modern look and optimized it for performance. Our website now runs smoothly, and our visitors enjoy it.</p>
                                        </div>
                                        <div className="testimonial-footer">
                                            <div className="testimonial-author">
                                                {/* <div className="author-image">
                                                    <img src="/assets/images/testimonials/author1.png" alt="Author Image" />
                                                </div> */}
                                                <div className="author-info">
                                                    <h6>Aniket Kalamkar</h6>
                                                    <span className="designation">Working For Wordpress Development Service</span>
                                                </div>
                                            </div>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
