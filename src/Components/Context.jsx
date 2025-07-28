import React from 'react'
import './Context.css'

const Context = () => {
  return (
    <div> <div id="Contact" className='py-10'>
        <div class="containerr pt-[5%] text-[#BFBFC6]">
            <div class="row">
                <div class="contact-left">
                    <h1 class="sub-titles">Contact Me</h1>
                    <a href="mailto:hasnainmohammad023@gmail.com"><p> <i class="fa-solid fa-paper-plane"></i> hasnainmohammad023@gmail.com</p></a>
                    <a href="tel:9643641854"><p><i class="fa-solid fa-phone"></i>9643641854</p></a>
                    <a href="https://www.google.com/maps/@28.4984858,77.4335947,12z?hl=en&entry=ttu&g_ep=EgoyMDI1MDcyMy4wIKXMDSoASAFQAw%3D%3D"><p><i class="fa-solid fa-location-dot"></i> India</p></a>

                    <div class="social-icons">
                        <a href="https://www.linkedin.com/in/mohd-hasnain-63789b297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://wa.me/9643641854"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="https://x.com/MohdHasnai45533"><i class="fa-brands fa-twitter"></i></a>
                        <a href="https://github.com/MohdHasnain"><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>
                <div class="contact-right">
                   
                    <form action="https://formspree.io/f/manqbbzv" method="POST">
                        <input type="text" name="Name" placeholder="Your Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button type="submit" class="btn btn2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default Context