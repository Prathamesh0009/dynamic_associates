
import Link from "next/link"

export default function LetsTalk2() {
    return (
        <>
            <div className="lets-talk-area text-center pb-90">
                <div className="container">
                    <Link href="/contact" className="lets-talk-text mb-50 wow zoomIn delay-0-2s">Let’s <span>Talk</span> <i className="fal fa-arrow-right" /></Link>
                    <h5 className="talk-to-email"><Link href="/contact">Contact us</Link> or send an Email on <Link href="mailto:Hemant.chauhan@dynamicassociatessoftwaresolution.com">Hemant.chauhan@dynamicassociatessoftwaresolution.com</Link><br /></h5>
                </div>
            </div>
        </>
    )
}