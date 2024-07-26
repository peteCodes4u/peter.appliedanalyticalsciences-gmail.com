import { useState } from 'react';

export default function Contact() {

    // track state for form data validation
    const [ formData, setFormData ] = useState({

        name: '',
        email: '',
        message: ''
    });

    // establish error state 
    const [ formErrors, setFormErrors ] = useState({
        name: '',
        email: '',
        message: ''
    });

    //  function to set states for target elements
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [ name ]: value
        });
    };

    // email validation function 
    const validateEmail = (email) => {
        const emalValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emalValidationRegex.test(email);
    }

    // use blur event to track and send error message when values are not supplied in the required fields
    const handleBlur = (event) => {
        const { name, value } = event.target;
        let error = '';

        if (value.trim() === '') {
            error = `😉 please provide ${name} as it is required, thank you`;
        } else if (name === 'email' && !validateEmail(value)) {
            error = '🤔 Sorry, that email address is not valid, please double check it and try again'
        }

        setFormErrors({
            ...formErrors,
            [ name ]: error
        });
    };

    // submit button
    const handleSubmit = (event) => {
        event.preventDefault();
        if(formData.name == '' || formData.email == '' || formData.message == '' ) {
            alert(`🙊 Please fill out the required fields and try again thank you`) 
        } else {
            alert(`🌠 Thank you ${formData.name}! We look forward to connecting 🛸✌️`)
        }
    }

    return (
        <div>
        <h2>Contact Me</h2>
        <form id="form">
            <br/>
            <label htmlFor="contact-name">Name</label>
            <section id="contact-name" className="form-group"> 
                <input type="text" placeholder="Enter Your Name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} required ></input>
                <br></br>
                {formErrors.name && <span className="error">{formErrors.name}</span>}
            </section>
            <br/>
            <label htmlFor="contact-email">Email</label>
            <section id="contact-email" className="form-group">
                <input placeholder="name@example.com" type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} ></input>
                <br></br>
                {formErrors.email && <span className="error">{formErrors.email}</span>}
            </section>
            <br/>
            <label htmlFor="contact-message">Message</label>
            <section id="contact-message" className="form-group">
                <textarea rows="3" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} ></textarea>
                <br></br>
                {formErrors.message && <span className="error">{formErrors.message}</span>}
            </section>
            <br/>
            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
    );
}