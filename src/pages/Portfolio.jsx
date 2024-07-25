import grfxDxnrGif from '../assets/grafxDznr_p_gif.gif';
import worXpaceGif from '../assets/worXpace_p_gif.gif';
import teqTokGif from '../assets/teqTok_p_gif.gif';
import snipItGif from '../assets/snipIt_p_gif.gif';

export default function Portfolio() {
  return (

    <div id="portfolio-bucket">
    <h2 className="page-title">Portfolio</h2>
    <br></br>
    <section className="portfolio-topics">
    <a href="https://github.com/peteCodes4u/grfxDznr">
    <img id="" className="portfolio-item" src={teqTokGif}></img>
    <h4>👽 TeqTok - CMS-style blog site</h4>
    </a>
    <a href="https://github.com/peteCodes4u/worXpace">
    <img id="" className="portfolio-item" src={worXpaceGif}></img>
    <h4>🛸 worXpace - postgres data mgmt framework</h4>
    </a>
    <a href="https://github.com/peteCodes4u/grfxDznr">
    <img id="" className="portfolio-item" src={grfxDxnrGif}></img>
    <h4>🥑 grfxDznr - node.js svg generator</h4>
    </a>
    </section>
    <section className="portfolio-topics">
    <a href="https://github.com/peteCodes4u/snip-it">
    <img id="" className="portfolio-item" src={snipItGif}></img>
    <h4>👾 snip-it - Progressive Web Application</h4>
    </a>
    <a href="https://github.com/peteCodes4u/grfxDznr">
    <img id="" className="portfolio-item" src={grfxDxnrGif}></img>
    <h4>🚀 grfxDznr - node.js svg generator</h4>
    </a>
    <a href="https://github.com/peteCodes4u/grfxDznr">
    <img id="" className="portfolio-item" src={grfxDxnrGif}></img>
    <h4>☄️ grfxDznr - node.js svg generator</h4>
    </a>
    </section>
    </div>
    
    // <section id="portfolio-bucket">
    //   <section id="page-title">
    //   <h2>Portfolio</h2>
    //   </section> 
    //   <section className="portfilio-cards">
    //     <a id="" className="" href="">
    //       <section className="card">
    //         <h3>👽 - Example 1 </h3>
    //       </section>
    //     </a>
    //     <a id="" className="" href="">
    //       <section className="card">
    //         <h3>🛸 - Example 2 </h3>
    //       </section>
    //     </a>
    //     <a id="" className="" href="">
    //       <section className="card">
    //         <h3>💀 - Example 3  </h3>
    //       </section>
    //     </a>
    //     <a id="" className="" href="">
    //       <section className="card">
    //         <h3>🥑 - Example 4 </h3>
    //       </section>
    //     </a>
    //     <a id="" className="" href="">
    //       <section className="card">
    //         <h3>👾 - Example 5 </h3>
    //       </section>
    //     </a>
    //     <a id="" className="" href="">
    //       <section className="card">
    //         <h3>🌌 - Example 6 </h3>
    //       </section>
    //     </a>
    //   </section>
    // </section>
  )
}