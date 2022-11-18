import { FaSearch,FaRegListAlt,FaRegIdBadge } from "react-icons/fa";
import { BsEmojiSmile,BsBookmarkHeart ,BsPersonCheck, BsLaptop,BsHandThumbsUp,BsPeople } from "react-icons/bs";
import { BiCircle } from "react-icons/bi";
function Home() {
    return (
        <>
            <section className="bg">
            <section>
                <div class="banner-search py-4">
         <div class="container">
            <div class="row flex-lg-row-reverse align-items-center">
               <div class="col-12 col-lg-6">
                  <img src={require('./image/asset 1.png')} class="img-fluid" alt="#" loading="lazy"/>
               </div>
               <div class="col-lg-6">
                  <h1 class="display-4 fw-bold lh-1 mb-3 text-body"><span class="text-primary">7-DEW</span> is a community for creative people.</h1>
                  <p class="lead fw-normal text-dark mb-0">Learn from expert professionals and<br/> join
                     the largest online community for creatives.
                  </p>
                  <form action="services.html" class="py-2">
                     <div class="d-flex my-4 shadow-sm bg-white rounded-3 align-items-center services-search-form">
                        <div class="form-floating services-search-form-service">
                           <input type="text" class="form-control" id="sservice" placeholder="Enter Service..."/>
                           <label for="sservice">What <span class="fw-bold text-body">courses</span> do you need?</label>
                        </div>
                        <div class="form-floating services-search-form-zip">
                           <input type="text" class="form-control" id="sservice" placeholder="Enter ZIP Code..."/>
                           <label for="sservice"><FaRegListAlt className='text-body fs-6 me-1'/> Areas</label>
                        </div>
                        <button class="btn btn-primary" type="button"><FaSearch/></button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
            </section>
            <section className="bg-white">
                <div className="container">
                    <h3 className="fw-bold">

                    </h3>
                </div>
            </section>
            <div class="feature-list d-none d-sm-block py-5 border-bottom bg-white">
         <div class="container py-4">
            <heading>
               <h3 class="text-center pb-4 mb-4 fw-bold text-black">What to expect from a 7-DEW course</h3>
            </heading>
            <div class="row">
               <div class="col-md-6 gap-4 d-flex">
                  <div><BsEmojiSmile className="display-6"/></div>
                  <div>
                     <h5 class="card-title fw-bold text-black">Learn at your own pace</h5>
                     <p class="fs-14 mb-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.
                     </p>
                  </div>
               </div>
               <div class="col-md-6 gap-4 d-flex">
                  <div><BsLaptop className="display-6"/></div>
                  <div>
                     <h5 class="card-title fw-bold text-black">Get front row seats</h5>
                     <p class="fs-14 mb-4">Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem.
                     </p>
                  </div>
               </div>
               <div class="col-md-6 gap-4 d-flex">
                  <div><BsHandThumbsUp className="display-6"/></div>
                  <div>
                     <h5 class="card-title fw-bold text-black">Learn from the best professionals</h5>
                     <p class="fs-14 mb-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.</p>
                  </div>
               </div>
               <div class="col-md-6 d-flex gap-4">
                  <div><BsPeople className="display-6"/></div>
                  <div>
                     <h5 class="card-title fw-bold text-black">Share knowledge and ideas</h5>
                     <p class="fs-14 mb-4">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                     </p>
                  </div>
               </div>
               <div class="col-md-6 d-flex gap-4">
                  <div><FaRegIdBadge className="display-6"/></div>
                  <div>
                     <h5 class="card-title fw-bold text-black">Meet expert instructors</h5>
                     <p class="fs-14 mb-4">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum.
                     </p>
                  </div>
               </div>
               <div class="col-md-6 d-flex gap-4">
                  <div><BiCircle className="display-6"/></div>
                  <div>
                     <h5 class="card-title fw-bold text-black">Connect with a global creative community</h5>
                     <p class="fs-14 mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dict.
                     </p>
                  </div>
               </div>
               <div class="col-md-6 d-flex gap-4">
                  <div><BsBookmarkHeart  className="display-6"/></div>
                  <div>
                     <h5 class="card-title fw-bold text-black">Earn a certificate with every course <span class="badge bg-primary">New</span></h5>
                     <p class="fs-14 mb-4">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                     </p>
                  </div>
               </div>
               <div class="col-md-6 d-flex gap-4">
                  <div><BsPersonCheck className="display-6"/></div>
                  <div>
                     <h5 class="card-title fw-bold text-black">Watch professionally produced courses</h5>
                     <p class="fs-14 mb-4">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system cupiditate non provident
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
            </section>
            <section>
            <div class="container py-4">
            <h3 class="pb-4 fw-bold text-black text-center">Courses By Category</h3>
            <div class="row gy-3 row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-2">
               <div class="col">
                  <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item cat-itemm">
                     <img src={require('./image/asset 2.jpeg')} class="img-fluid" />
                     <div class="card-body">
                        <h6 class="card-title m-0">illustration</h6>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item cat-itemm">
                     <img src={require('./image/asset 3.jpeg')} class="img-fluid" />
                     <div class="card-body">
                        <h6 class="card-title m-0">Craft</h6>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item cat-itemm">
                     <img src={require('./image/asset 4.jpeg')} class="img-fluid" />
                     <div class="card-body">
                        <h6 class="card-title m-0">Marketing &amp; business</h6>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item cat-itemm">
                     <img src={require('./image/asset 5.jpeg')} class="img-fluid" />
                     <div class="card-body">
                        <h6 class="card-title m-0">Photography and Video</h6>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item cat-itemm">
                     <img src={require('./image/asset 6.jpeg')} class="img-fluid" />
                     <div class="card-body">
                        <h6 class="card-title m-0">Design</h6>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item cat-itemm">
                     <img src={require('./image/asset 7.jpeg')} class="img-fluid" />
                     <div class="card-body">
                        <h6 class="card-title m-0">3D and Animation</h6>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item cat-itemm">
                     <img src={require('./image/asset 9.jpeg')} class="img-fluid" />
                     <div class="card-body">
                        <h6 class="card-title m-0">Web &amp; App Design</h6>
                     </div>
                  </div>
               </div>
               <div class="col">
                  <div class="card h-100 border-0 shadow-sm rounded-3 overflow-hidden video-card-item cat-itemm">
                     <img src={require('./image/asset 10.jpeg')} class="img-fluid" />
                     <div class="card-body">
                        <h6 class="card-title m-0">Writing</h6>
                     </div>
                  </div>
               </div>
            </div>
         </div>
            </section>
        </>
    )
}
export default Home;