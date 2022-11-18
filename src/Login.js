function Login(params) {
    return(
        <>
        <div class="bg bg-gradient">
         {/* <!-- Login --> */}
         <div class="container py-5 login">
            {/* <!-- Login --> */}
            <div id="login">
               <div class="m-auto bg-white shadow-sm p-5 rounded-3 text-center col-md-4 mx-auto">
                  <h3 class="fw-bold text-black mb-2">Log in to <span class="text-primary">7-DEW</span></h3>
                  <p class="text-muted fw-light">Connect with the best professionals</p>
                  <form action="index.html" class="text-start pt-4">
                     <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label small text-muted">E-Mail Address <small class="text-danger">*</small></label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com"/>
                     </div>
                     <div class="mb-3">
                        <label for="exampleInputNumber1" class="form-label small text-muted">Password <small class="text-danger">*</small></label>
                        <input type="password" class="form-control" id="exampleInputNumber1" placeholder="Enter Password"/>
                     </div>
                     <div class="d-flex justify-content-between">
                        <div class="mb-3 form-check">
                           <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                           <label class="form-check-label small text-muted" for="exampleCheck1">Remember me</label>
                        </div>
                        <div>
                           <a href="forgot.html" class="text-mdinfo small text-decoration-none">Forgot password?</a>
                        </div>
                     </div>
                     <button type="button" class="btn btn-dark fw-bold fs-7 rounded-3 shadow-sm w-100 border-0 px-4 py-3 text-uppercase">Sign In</button>
                  </form>
                  <div class="d-flex align-items-center justify-content-between divide my-3">
                     <hr class="w-100"/>
                     <span class="text-muted small px-2">OR</span>
                     <hr class="w-100"/>
                  </div>
                  <div class="social-btn">
                     <a href="#" class="text-decoration-none text-dark fw-bold">
                        <div class="d-flex align-items-center py-3 px-3 border rounded-3 mb-3">
                           <img src={require('./image/google.png')} class="img-fluid" alt="sikshaa"/>
                           <p class="mb-0 mx-auto">Continue with Google</p>
                        </div>
                     </a>
                     <a href="#" class="text-decoration-none text-dark fw-bold">
                        <div class="d-flex align-items-center py-3 px-3 border rounded-3 mb-3">
                           <img src={require('./image/facebook.png')} class="img-fluid" alt="sikshaa"/>
                           <p class="mb-0 mx-auto">Continue with Facebook</p>
                        </div>
                     </a>
                  </div>
                  <p class="text-muted mb-0">Don’t have an account? <a href="signup.html" class="text-mdinfo text-decoration-none">Sign Up</a></p>
               </div>
               <p class="mb-0 text-center small text-primary my-5">Having trouble loginng in? <a href="contact.html" class="text-decoration-underline text-Primary">Learn from our Knowledge Base</a></p>
            </div>
         </div>
      </div>
        </>
    )
}
export default Login