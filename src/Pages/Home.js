import React from "react";

const Home = () => {
  return (
    <React.StrictMode>
      <div className="main-page-content">
        <div id="home">
          <div id="particles-js"></div>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">
                      <h1 className="cd-headline clip is-full-width">
                        <span
                          className="cd-words-wrapper"
                          style={{ width: "266px", overflow: "hidden" }}
                        >
                          <b className="is-hidden">Wall-ARt</b>
                          <b className="is-hidden">
                            Art meets Augmented Reality
                          </b>
                          <b className="is-visible">Explore the World</b>
                        </span>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Description</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Wall-ARt is an Android-based mobile application that
                        allows artists to showcase their art in Augmented
                        Reality. Wall-ARt allows artists to upload their
                        artworks for regular users to view on the streets, using
                        Augmented Reality technology. Our application was
                        designed with the idea of discovering the works of
                        artists in a local area. This means that users can view
                        only the artworks that are in their vicinity. We believe
                        that this adds value to artists, and promotes
                        exploration of surroundings in a new way.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".1s">
                      <i
                        className="fa fa-pencil-square-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Working Hard</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Always believe in hard-work in my profession</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".3s">
                      <i
                        className="fa fa-file-image-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>UI/UX Design</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Love to do UI/UX design for new product</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".2s">
                      <i
                        className="fa fa-globe love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Web Design</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Passionate about Web Design from start</p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".4s">
                      <i className="fa fa-cog love-icon" aria-hidden="true"></i>
                      <h3>Web Development</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>Created all types of modern web development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-back"></div>
            <div className="me-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                    <div className="about-image">
                      <img
                        src="assets/img/about-image.jpeg"
                        alt="Wall-ARt"
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                    <div className="about-details wow fadeIn">
                      <div className="main-title left-title text-left wow fadeIn">
                        <h3>Hello! We are Team Wall-ARt!</h3>
                        <div className="underline1 no-margin"></div>
                        <div className="underline2 no-margin"></div>
                      </div>
                      <p className="wow fadeIn">
                        We are 5 Computer Engineering students who teamed up,
                        with the aim of creating a platform for artists and art
                        lovers in our sights. We started our journey with the
                        idea of street artists expressing their art freely. This
                        idea grew on us quickly, and we decided to provide an
                        application that would make the world around people more
                        colourful.{" "}
                        <a className="underline2" href="#contact">
                          {" "}
                          Link example.
                        </a>{" "}
                        <br></br>
                        <br></br>
                        We worked on our application with passion, and we are
                        proud of the result. We hope you will enjoy it as much
                        as we do.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ Skill =============================== --> */}

        <div id="skill">
          <div className="skill-main">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>Wall-ARt Poster</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>Here be the poster.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ RESUME =============================== --> */}

        <div id="resume">
          <div className="resume-content">
            <div className="resume-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Preview</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <iframe
                        width="892"
                        height="502"
                        src="https://www.youtube.com/embed/VQH8ZTgna3Q"
                        title="Arctic Monkeys - R U Mine? (Official Video)"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".2s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-home resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>School</h3>
                        <h2>2010-2017</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Completed my school life from Haludbari High School
                          (H.S.), Khejuri, West Bengal, India.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".3s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Graduation</h3>
                        <h2>2017-2020</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Achieved my Graduation Degree from{" "}
                          <a
                            href="https://www.cclms.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            CCLMS (Contai College of Learning and Management
                            Science)
                          </a>
                          , Contai, West Bengal, India.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".4s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Training &amp; Skill</h3>
                        <h2>2022-2022</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Currently learning Full-Stack Web Development from{" "}
                          <a
                            href="https://masaischool.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Masai School
                          </a>
                          , Bengaluru, India.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ============================================== Technology ===================================================== --> */}

        <div id="service">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Technology</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I always want to make things that make a difference.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="https://www.vectorlogo.zone/logos/firebase/firebase-ar21.svg"
                          width="auto"
                          height="160px"
                          alt="design-development"
                        />
                      </div>
                      <div className="service-bottom">
                        <h3>Firebase</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Clean, modern designs - optimized for performance,
                          search engines, and converting users to customers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="https://cdn.worldvectorlogo.com/logos/google-arcore.svg"
                          width={320}
                          height={160}
                          alt="e-commarce"
                        />
                      </div>
                      <div className="service-bottom">
                        <h3>ARCore</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Integration of eCommerce platforms, payment gateways,
                          custom product templates, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/1024px-Google_Maps_Logo_2020.svg.png?20200329030310"
                          width="auto"
                          height="160px"
                          alt="analytics"
                        />
                      </div>
                      <div className="service-bottom">
                        <h3>Google Maps</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Get insights into who is browsing your site so that
                          you can make smarter business decisions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ CONTACT ========================== --> */}

        <div id="contact">
          <div className="contact-content">
            <div className="text-grid">
              <div className="text-grid-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="main-title text-center wow fadeIn">
                        <h3>Contact Us</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          We're always open to suggestions and improvements on
                          our product.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                  <div className="row contact-info-row text-center wow fadeIn">
                    <div className="col-md-2 col-sm-4">
                      <div className="resume-details" data-wow-delay=".3s">
                        <div className="resume-hover"></div>
                        <div className="resume-main">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                          <h3>Halit Oğuztüzün</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <img
                            src="/assets/img/halitoguztuzun.jpeg"
                            width="70"
                            height="auto"
                          ></img>
                          <p>
                            <a
                              href="https://www.linkedin.com/in/halitoguztuzun/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Group Advisor
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-4">
                      <div className="resume-details" data-wow-delay=".3s">
                        <div className="resume-hover"></div>
                        <div className="resume-main">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                          <h3>Halit Erkan Görgülü</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <img
                            src="/assets/img/halitgorglu.jpeg"
                            width="70"
                            height="auto"
                          ></img>
                          <p>
                            <a
                              href="https://www.linkedin.com/in/halit-erkan-gorgulu-0a612b1ba/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Group Member
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-4">
                      <div className="resume-details" data-wow-delay=".3s">
                        <div className="resume-hover"></div>
                        <div className="resume-main">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                          <h3>Yılmaz Nergiz</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>
                            <a
                              href="https://www.linkedin.com/in/yilmaz-nergiz/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Group Member
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-4">
                      <div className="resume-details" data-wow-delay=".3s">
                        <div className="resume-hover"></div>
                        <div className="resume-main">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                          <h3>Alper Gülşen</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <img
                            src="/assets/img/alpergulsen.jpeg"
                            width="70"
                            height="auto"
                          ></img>
                          <p>
                            <a
                              href="https://www.linkedin.com/in/alpergulsen/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Group Member
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-4">
                      <div className="resume-details" data-wow-delay=".3s">
                        <div className="resume-hover"></div>
                        <div className="resume-main">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                          <h3>Mustafa Akyazıcı</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <img
                            src="/assets/img/mustafaakyazici.jpeg"
                            width="70"
                            height="auto"
                          ></img>
                          <p>
                            <a
                              href="https://www.linkedin.com/in/mustafacanakyaz%C4%B1c%C4%B1/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Group Member
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2 col-sm-4">
                      <div className="resume-details" data-wow-delay=".3s">
                        <div className="resume-hover"></div>
                        <div className="resume-main">
                          <i className="fa fa-linkedin" aria-hidden="true"></i>
                          <h3>Mehmet Tekin</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <img
                            src="/assets/img/mehmettekin.jpeg"
                            width="70"
                            height="auto"
                          ></img>
                          <p>
                            <a
                              href="https://www.linkedin.com/in/mehmet-tekin-7137101a0/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Group Member
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default Home;
