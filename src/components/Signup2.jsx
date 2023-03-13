import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./NavigationBar";
function Signup2() {
  return (
    <div className="bg-dark text-white">
      {/* <NavigationBar /> */}
      <header
        style={{
          position: "relative",
          backgroundColor: "black",
          height: "75vh",
          minHeight: "25rem",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "black",
            opacity: 0.3,
            zIndex: 1,
          }}
        ></div>
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            minWidth: "100%",
            minHeight: "100%",
            width: "auto",
            height: "auto",
            zIndex: "0",
            "-ms-transform": "translateX(-50%) translateY(-50%)",
            "-moz-transform": "translateX(-50%) translateY(-50%)",
            "-webkit-transform": "translateX(-50%) translateY(-50%)",
            transform: "translateX(-50%) translateY(-50%)",
          }}
        >
          <source
            src="https://ecommerceimagesnextjs.s3.eu-west-2.amazonaws.com/videosThreeJs/redFabric.mov"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* <!-- header content --> */}
        <div
          className="container h-100"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="container h-100">
            <div className="d-flex h-100 text-center align-items-center">
              <div className="w-100 text-white">
                <form className="container">
                  <div className="text-center m-3">
                    <img
                      src="https://bootstraploginregister.s3.eu-west-2.amazonaws.com/logo2.png"
                      className="form-control-sm "
                      style={{ height: "10vh" }}
                      alt="logo"
                    />
                  </div>
                  <p className="mb-3 font-italic">Personal details</p>
                  <div className="mb-3">
                    {/* <!-- <label for="fullname" className="form-label">Full name</label> --> */}
                    <input
                      type="text"
                      className="form-control"
                      id="fullname"
                      placeholder="full name"
                    />
                  </div>

                  <div className="mb-3">
                    {/* <!-- <label for="Email" className="form-label">Email address</label> --> */}
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      placeholder="email"
                    />
                  </div>
                  <div className="mb-3">
                    {/* <!-- <label for="Password" className="form-label">Password</label> --> */}
                    <input
                      type="password"
                      className="form-control"
                      placeholder="password"
                    />
                  </div>
                  <div className="mb-3" form-check>
                    <input type="checkbox" className="form-check-input" id="" />
                    <label className="text-muted">Show password</label>
                  </div>

                  <button
                    type="button"
                    className="btn btn-outline-secondary btn-lg btn-block"
                    style={{ color: "whitesmoke" }}
                  >
                    Create Account
                  </button>

                  <div className="mb-3">
                    <a
                      href="../signIn/signin.html"
                      className=""
                      style={{ textDecoration: "none" }}
                    >
                      <small className="text-muted">
                        Already have an account?
                      </small>
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Signup2;
