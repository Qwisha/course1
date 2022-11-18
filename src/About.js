function About() {
    return(
        <>
        <section>
        <header class="py-5">
         <div class="container px-4">
            <div class="row justify-content-center">
               <div class="col-lg-8">
                  <div class="text-center my-5">
                     <h1 class="display-4 fw-bold text-body mb-3">What is <span class="text-primary">7-DEW?</span></h1>
                     <p class="lead fw-normal text-muted mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
                     <a class="btn btn-primary fw-bold fs-7 rounded-3 shadow-none border-0 px-4 py-3 text-uppercase" href="#scroll-target">Read Our Story</a>
                  </div>
               </div>
            </div>
         </div>
      </header>
        </section>
        <section>
        <section class="py-5 bg-light" id="scroll-target">
         <div class="container my-5">
            <div class="row gx-5 align-items-center">
               <div class="col-lg-6"><img class="img-fluid rounded-3 mb-5 mb-lg-0" src={require('./image/about 1.jpeg')} alt="..."/></div>
               <div class="col-lg-6 ps-lg-5">
                  <div class="ps-lg-5">
                     <h2 class="fw-bold mb-3 text-body">Our Vision</h2>
                     <p class="lead fw-normal text-muted mb-0">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </section>
        <section>
        <section class="py-5">
         <div class="container my-5">
            <div class="row gx-5 align-items-center">
               <div class="col-lg-6 order-first order-lg-last"><img class="img-fluid rounded-3 mb-5 mb-lg-0" src={require('./image/about 2.jpeg')} alt="..."/></div>
               <div class="col-lg-6">
                  <div class="pe-lg-5">
                     <h2 class="fw-bold mb-3 text-body">Our Mission</h2>
                     <p class="lead fw-normal text-muted mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
        </section>
        </>
    )
}
export default About;