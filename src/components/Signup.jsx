import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./NavigationBar";
function Signup() {
  return (
    <div className="bg-dark text-white">
      {/* <NavigationBar /> */}
      {/* <h1 classNameName="text-center p-3 font-italic">Ecommerce</h1> */}

      <div className="container mt-5">
        <div className="row">
          <div className="col m-2">
            <video
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
              className="rounded"
              style={{ height: "50vh", objectFit: "cover", width: "50vh" }}
            >
              <source
                src="https://ecommerceimagesnextjs.s3.eu-west-2.amazonaws.com/videosThreeJs/squareColor.mov"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="col m-2">
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
                {/*  <label for="fullname" className="form-label">Full name</label>  */}
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="full name"
                  required
                />
              </div>

              <div className="mb-3">
                {/*  <label for="Email" className="form-label">Email address</label> */}
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="email*"
                  required
                />
              </div>
              <div className="mb-3">
                {/*  <label for="Password" className="form-label">Password</label> */}
                <input
                  type="password"
                  className="form-control"
                  placeholder="password*"
                  required
                />
              </div>
              <div className="mb-3" form-check>
                <input type="checkbox" className="form-check-input" id="" />
                <label className="text-muted">Show password</label>
              </div>

              <button
                type="submit"
                className="btn btn-outline-secondary btn-lg btn-block"
              >
                Create Account
              </button>

              <div className="mb-3">
                <a
                  href="./signin"
                  className=""
                  style={{ textDecoration: "none" }}
                >
                  <small className="text-muted">Already have an account?</small>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
