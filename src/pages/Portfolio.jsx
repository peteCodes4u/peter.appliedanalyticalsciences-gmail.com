import grfxDxnrGif from '../assets/grafxDznr_p_gif.gif';
import worXpaceGif from '../assets/worXpace_p_gif.gif';
import teqTokGif from '../assets/teqTok_p_gif.gif';
import snipItGif from '../assets/snipIt_p_gif.gif';
import evangelosGif from '../assets/evangelos_p_gif.gif'
import aeolusGif from '../assets/ask-aeolus_p_gif.gif'

export default function Portfolio() {
  return (

    <div id="portfolio-bucket">
    <h2 className="page-title">Portfolio</h2>
    <br></br>
    <section className="portfolio-topics">
    <a>
    <h4>👽 TeqTok - CMS-style blog site</h4>
    <img className="portfolio-item" src={teqTokGif}></img>
    <section className="portfolio-links">
    <a href="https://github.com/peteCodes4u/TeqTok">GitHub</a> 
    <a href="https://teqtok.onrender.com/"> Deployed Project</a>
    </section>
    </a>
    
    <a>
    <h4>🛸 worXpace - pSQL data mgmt framework</h4>
    <img className="portfolio-item" src={worXpaceGif}></img>
    <section className="portfolio-links">
    <a  href="https://github.com/peteCodes4u/worXpace">GitHub</a> 
    {/* <a href=""> Deployed Project</a> */}
    </section>
    </a>

    <a>
    <h4>🥑 grfxDznr - node.js svg generator</h4>
    <img className="portfolio-item" src={grfxDxnrGif}></img>
    <section className="portfolio-links">
    <a href="https://github.com/peteCodes4u/grfxDznr">GitHub</a> 
    {/* <a href=""> Deployed Project</a> */}
    </section>
    </a>
    </section>
    <br></br>
    <section className="portfolio-topics">
    <a>
    <h4>👾 snip-it - Progressive Web Application</h4>
    <img className="portfolio-item" src={snipItGif}></img>
    <section className="portfolio-links">
    <a href="https://github.com/peteCodes4u/snip-it">GitHub</a> 
    <a href="https://snip-it-wwqw.onrender.com/"> Deployed Project</a>
    </section>
    </a>
    <a>
    <h4>🚀 evangelos - NoSQL API framework</h4>
    <img id="" className="portfolio-item" src={evangelosGif}></img>
    <section className="portfolio-links">
    <a href="https://github.com/peteCodes4u/evangelos">GitHub</a> 
    {/* <a href=""> Deployed Project</a> */}
    </section>
    </a>
    <a>
    <h4>☄️ Ask-Aeolus - Weather forecasting app</h4>
    <img id="" className="portfolio-item" src={aeolusGif}></img>
    <section className="portfolio-links">
    <a href="https://github.com/peteCodes4u/Ask-Aeolus">GitHub</a> 
    <a href="https://petecodes4u.github.io/Ask-Aeolus/"> Deployed Project</a>
    </section>
    </a>
    </section>
    </div>
  )
}