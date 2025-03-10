import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">DNR Embroidery & Digital Printing!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in the North of Pretoria, DNR Embroidery & Printing  provides a trained staff and equipment ready to meet your embroidery and printing needs.</p>
                <address className="public__addr">
                    DNR Embroidery & Digital Printing<br />
                    310 Unit 25<br />
                    Ga-Rankuwa, PTA 0208<br />
                    <a href="tel:+15555555555">(067) 103-3257</a>
                </address>
                <br />
                <p>Owner: LR Modiba</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public
