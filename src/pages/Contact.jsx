export default function Contact() {
    return (
        <div>
        <h2>Contact Me</h2>
        <form id="form" className="">
            <br/>
            <label htmlFor="contact-name">Name</label>
            <section id="contact-name" className="form-group"> 
                <input type="text" id="cName" className="" placeholder="Enter Your Name"></input>
            </section>
            <br/>
            <label htmlFor="contact-email">Email</label>
            <section id="contact-email" className="form-group">
                <input type="text" id="cEmail" className="" placeholder="name@example.com"></input>
            </section>
            <br/>
            <label htmlFor="contact-message">Message</label>
            <section id="contact-message" className="form-group">
                <textarea id="cMessage" className="form-control" aria-label="Message" rows="3"></textarea>
            </section>
            <br/>
            <button className="btn btn-primary">Submit</button>
        </form>
        </div>
    );
}