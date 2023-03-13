import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./NavigationBar";
function Signin() {
  return (
    <div className="bg-dark text-white">
      {/* <NavigationBar /> */}
      {/* <h1 className="text-center p-3 font-italic">Ecommerce</h1> */}
      <div className="container mt-0">
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
                  className="form-control-sm rounded"
                  style={{ height: "10vh" }}
                  alt="logo"
                />
              </div>

              <div className="mb-3">
                {/* <label for="Email" className="form-label">Email address</label> */}
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  placeholder="email*"
                  required
                />
              </div>
              <div className="mb-3">
                {/* <label for="Password" className="form-label">Password</label> */}
                <input
                  type="password"
                  className="form-control"
                  placeholder="password*"
                  required
                />
              </div>
              {/* <div className="mb-3" form-check>
              <input type="checkbox" className="form-check-input" id="" />
              <label>Show password</label>
            </div> */}

              <button
                type="submit"
                className="btn btn-secondary btn-lg btn-block"
              >
                Login
              </button>

              <div className="mb-3">
                <a
                  href="./signup"
                  className=""
                  style={{ textDecoration: "none" }}
                >
                  <small className="text-muted">
                    Have you forgetten your password?
                  </small>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signin;
