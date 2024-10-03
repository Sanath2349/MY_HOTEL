import React from "react";
import style from "./Contactus.module.css";

const Contactus = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className={style.herosection}>
                <div className={style.herocontent}>
                    <h1 className={style.herotitle}>Contact Us</h1>
                    <p className={style.herosubtitle}>
                        The elegant luxury bedrooms in this gallery showcase custom interior
                        designs & decorating ideas. View pictures and find your perfect
                        luxury bedroom design.
                    </p>
                </div>
            </section>

            <div className={style.contactform}>
                <section className={style.contactus}>
                    <div className={style.row}>
                        <div className={style.inputGroup}>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" id="fullname" placeholder="e.g John Becker" className={style.inputField} />
                        </div>
                        <div className={style.inputGroup}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="johnbecker@gmail.com" className={style.inputField} />
                        </div>
                    </div>
                    <div className={style.inputGroupFull}>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="message" className={style.textareaField}></textarea>
                    </div>
                </section>
            </div>

            <div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30444.318246656832!2d78.39416320000001!3d17.481727999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1727933451394!5m2!1sen!2sin"
                    width="1500"
                    height="350"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Contactus;
