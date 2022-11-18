import { SlEnvolope } from "react-icons/sl";
import { BsPeopleFill,BsFillQuestionCircleFill,BsFillTelephoneFill } from "react-icons/bs";
import { IoChatboxSharp } from "react-icons/io5";
import './App.css';
function Contact() {
    return(
        <>
        <div className="bg">
        <div className="container">
           <section >
           <div class="rounded-3 py-5 px-md-5 mb-5">
               <div class="text-center mb-5">
                  <div class="feature bg-primary bg-gradient text-white rounded-4 mb-3"><SlEnvolope/></div>
                  <h2 class="fw-bold text-black">How can we help?</h2>
                  <p class="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
               </div>
               <div class="row gx-5 justify-content-center">
                  <div class="col-lg-8 col-xl-6">
                     <form class="form-floating-space" method="post" id="contactForm" name="contactForm" novalidate="novalidate">
                        {/* <!-- Name input--> */}
                        <div class="form-floating mb-3 shadow-sm">
                           <input class="form-control" type="text" placeholder="Enter your name..." name="name" id="name"/>                          <label for="name">Full name</label>
                           
                        </div>
                        {/* <!-- Email address input--> */}
                        <div class="form-floating mb-3 shadow-sm">
                           <input class="form-control" name="email" id="email" type="email" placeholder="name@example.com"/>
                           <label for="email">Email address</label>
                          
                        </div>
                        {/* <!-- Phone number input--> */}
                        <div class="form-floating mb-3 shadow-sm">
                           <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required"/>
                           <label for="phone">Phone number</label>
                        </div>
                        {/* <!-- Message input--> */}
                        <div class="form-floating mb-3 shadow-sm">
                           <textarea class="form-control hight-auto" name="message" id="message" type="text" placeholder="Enter your message here..." rows="10"></textarea>
                           <label for="message">Message</label>
                        </div>
                        {/* <!-- Submit Button--> */}
                        <div class="d-grid">
                            
                             <input type="submit" value="Send Message" class="btn shadow-sm btn-danger fw-bold fs-7 rounded-3 border-0 px-4 py-3 text-uppercase"/>
                  <span class="submitting"></span>
                </div>
                     </form>
                     {/* <!-- an error submitting the form--> */}
                     <div id="form-message-warning mt-4"></div> 
              <div id="form-message-success">
                Your message was sent, thank you!
              </div>
                  </div>
               </div>
            </div>
           </section>
           <section>
           <div class="row gx-5 row-cols-2 row-cols-lg-4 py-5">
               <div class="col">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><IoChatboxSharp/></div>
                  <div class="h5 mb-2 fw-bold text-black">Chat with us</div>
                  <p class="text-muted mb-0">Chat live with one of our support specialists.</p>
               </div>
               <div class="col">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><BsPeopleFill/></div>
                  <div class="h5 fw-bold text-black">Ask the community</div>
                  <p class="text-muted mb-0">Explore our community forums and communicate with other users.</p>
               </div>
               <div class="col">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><BsFillQuestionCircleFill/></div>
                  <div class="h5 fw-bold text-black">Support center</div>
                  <p class="text-muted mb-0">Browse FAQ's and support articles to find solutions.</p>
               </div>
               <div class="col">
                  <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3"><BsFillTelephoneFill/></div>
                  <div class="h5 fw-bold text-black">Call us</div>
                  <p class="text-muted mb-0">Call us during normal business hours at (555) 892-9403.</p>
               </div>
            </div>
           </section>
           </div>
        </div>
        </>
    )
}
export default Contact;