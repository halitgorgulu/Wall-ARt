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
                  <div className="col-md-4 col-sm-6">
                    <div className="love-details" data-wow-delay=".1s">
                      <i
                        class="fa fa-cloud-upload love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Upload artworks to cloud</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Artists can upload their artworks to our database hosted
                        by Firebase, and associate a specific location to it. By
                        attaching the image of a wall, they can guide users to
                        the exact location.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="love-details" data-wow-delay=".3s">
                      <i
                        className="fa fa-globe love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Locate nearby artworks on map</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Regular users will be able to view the locations of
                        nearby artworks as markers on a map. They can then
                        navigate to the location, and locate the wall that the
                        artist intended their artwork to be displayed on.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="love-details" data-wow-delay=".2s">
                      <i class="fa fa-camera love-icon" aria-hidden="true"></i>
                      <h3>Switch to AR mode</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        Users can switch to Augmented Reality when there is an
                        artwork nearby. They can then view the artwork on the
                        wall, and take pictures of it.
                      </p>
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
                        src="https://venturebeat.com/wp-content/uploads/2020/01/mark.jpg?fit=400%2C239&strip=all"
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
                        colourful. <br></br>
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
                        width="669"
                        height="502"
                        src="https://www.youtube.com/embed/VwUOBsKYH0Q"
                        title="Levent Yüksel - Tuana ( Sana Söz Yine Baharlar Gelecek)"
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
                          class="fa fa-paint-brush resume-icon"
                          aria-hidden="true"
                        ></i>

                        <h3>The world is your canvas</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Artists can express their art freely on any wall,
                          without any restrictions. There is no limit to the
                          number of artworks that can be displayed on a wall.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".3s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          class="fa fa-street-view resume-icon"
                          aria-hidden="true"
                        ></i>

                        <h3>Explore your surroundings</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Users can see which artworks are nearby, and make
                          their way to a desired artwork. They can walk around,
                          and gain access to displaying artworks in Augmented
                          Reality.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".4s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          class="fa fa-picture-o resume-icon"
                          aria-hidden="true"
                        ></i>

                        <h3>Imagine the world with AR</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          By switching to Augmented Reality view, users can see
                          the artworks in real-life size. They can also take
                          photos in front of artworks.
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
                      <h3>Technologies We Use</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        We make use of a variety of technologies to provide
                        services in our application.
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
                          Firebase is a platform developed by Google which
                          offers various services to facilitate mobile and web
                          application development. We use Firebase Database for
                          storing user-specific data, Firebase Storage for
                          storing artworks and wall images, and Firebase
                          Authentication for user authentication.
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
                          ARCore is a Software Development Kit developed by
                          Google which offers various tools for developing
                          Augmented Reality applications. We primarily use
                          ARCore for displaying artworks with Augmented Reality
                          technology in outdoor environments.
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
                          Google Maps is a mapping service developed by Google.
                          We use Google Maps to integrate a virtual map in our
                          application, for showing the locations of nearby
                          artworks and allowing users to navigate their way to a
                          selected artwork.
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
                          <img
                            src="/assets/img/yilmaznergiz.jpeg"
                            width="70"
                            height="auto"
                          ></img>
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
