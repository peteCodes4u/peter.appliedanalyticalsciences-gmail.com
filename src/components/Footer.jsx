import footerIcon1 from '../assets/linkedin-svgrepo-com.svg';
import footerIcon2 from '../assets/github-svgrepo-com.svg';
import footerIcon3 from '../assets/dev-svgrepo-com.svg';

function Footer() {
    return (
        <footer id="footer">
            <section>
                <ul id="footer-links" className="">
                    <section className="footer-item">
                    <a href="https://www.linkedin.com/in/peter-smith-117ba91a4/">
                    <img className="logos" src={footerIcon1}></img>
                    <h3>LinkedIn</h3>
                    </a>
                    </section>
                    <section className="footer-item">
                    <a href="https://github.com/peteCodes4u">
                    <img className="logos" src={footerIcon2}></img>
                    <h3>GitHub</h3>
                    </a>
                    </section>
                    <section className="footer-item">
                    <a href="https://dev.to/petecodes4u">
                    <img className="logos" src={footerIcon3}></img>
                    <h3>dev.to</h3>
                    </a>
                    </section>
                </ul>
            </section>
        </footer>
    )
}

export default Footer;