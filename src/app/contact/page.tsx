
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Contact(){
    return(
        <main className="container">
            <h2 className="contact">Contact me!</h2>

            <form className="form">
                
            <label >Name:</label>
            <input type="text" id="name" required />

            <label>Email:</label>
            <input type="email" id="email" required />

            <label>Message:</label>
            <textarea name="meassage" id="message" rows={2} required></textarea>

            <button type="submit">Send</button>
           
           
            </form>

            <div>

                <h3>Alternatively,you can reach me at:</h3>
                <p>Email: <a href="mailto:Mrspraise786@gmail.com">Mrspraise786@gmail.com</a></p>

             <div className="social-links">
                <a href="https://www.facebook.com">   Facebook
                <FaFacebook /></a>
                <a href="https://www.linkedin.com"> Linkedin
                <FaLinkedin /></a>
                </div>
            </div>

        
        </main>
    )
};