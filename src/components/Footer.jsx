import footerIcon1 from '../assets/linkedin-svgrepo-com.svg';
import footerIcon2 from '../assets/github-svgrepo-com.svg';
import footerIcon3 from '../assets/dev-svgrepo-com.svg';

function Footer() {
    return (
        <footer id="footer">
            <section>
                <ul id="footer-links" className="">
                    <h2 className="footer-item">
                        <img className="logos" src={footerIcon1}></img>
                        <a href="https://www.linkedin.com/in/peter-smith-117ba91a4/">LinkedIn</a>
                    </h2>
                    <h2 className="footer-item">
                        <img className="logos" src={footerIcon2}></img>
                        <a href="https://github.com/peteCodes4u">GitHub</a>
                    </h2>
                    <h2 className="footer-item">
                        <img className="logos" src={footerIcon3}></img>
                        <a href="https://dev.to/petecodes4u">dev.to</a>
                    </h2>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;