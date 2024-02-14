const ContactComp =() =>{
    return(
        <div className="contactUs">
            <div className="form">
                <div className="formData">
                <input type="text" placeholder="Type Your Query Here...." className="form-control"></input>
                <input type="" placeholder="Your Email...." className="form-control"></input>
                <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control"></input>
                <input type="submit" value='submit' className="btn btn-primary form-control"></input>
                </div>
            </div>
        </div>
    )
}
export default ContactComp;