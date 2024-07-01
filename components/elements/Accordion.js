'use client'
import { useState } from 'react'

export default function Accordion() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <div className="accordion" id="faq-accordion">
                <div className="accordion-item">
                    <h5 className="accordion-header" onClick={() => handleClick(1)}>
                        <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} data-bs-toggle="collapse" data-bs-target="#collapseOne">
                            01.  What are the benefits of professional website development ?
                        </button>
                    </h5>
                    <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#faq-accordion">
                        <div className="accordion-body">
                            <p>Professional website development enhances your online presence, improves user experience, boosts credibility, and increases customer engagement. It also allows for customized features tailored to your business needs.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header" onClick={() => handleClick(2)}>
                        <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                            02. How can I benefit from your software development services ?
                        </button>
                    </h5>
                    <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#faq-accordion">
                        <div className="accordion-body">
                            <p>Our software development services are designed to create tailored solutions that streamline your business operations and enhance efficiency. Whether you need a custom application, integration solutions, or software maintenance, we ensure high-quality deliverables that meet your specific needs and objectives.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header" onClick={() => handleClick(3)}>
                        <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} data-bs-toggle="collapse" data-bs-target="#collapseThree">
                            03. Why wasn’t my submission showcased on your website ?
                        </button>
                    </h5>
                    <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#faq-accordion">
                        <div className="accordion-body">
                            <p>Submissions undergo a selection process based on relevance, quality, and alignment with our content guidelines. We strive to showcase a diverse range of submissions that best serve our audience’s interests.</p>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h5 className="accordion-header" onClick={() => handleClick(4)}>
                        <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} data-bs-toggle="collapse" data-bs-target="#collapseFour">
                            04. What essential aspects should I know about digital marketing strategies ?
                        </button>
                    </h5>
                    <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#faq-accordion">
                        <div className="accordion-body">
                            <p>Digital marketing strategies encompass SEO, content marketing, social media engagement, PPC advertising, and more. These tools are essential for increasing online visibility, driving traffic, and achieving business growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
