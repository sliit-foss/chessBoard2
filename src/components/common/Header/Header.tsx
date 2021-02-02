import React from "react";

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <>
      <header id="header">
        <div className="row">
          <div className="col-md-3">
            <h1 id="logo-text">Chess Board</h1>
          </div>

          {/* <div className="col-md-6">
            <div className="btn-header" onClick={}>Home</div>
            <div className="btn-header" onClick={}>Play</div>
            <div className="btn-header">Blog</div>
            <div className="btn-header" onClick={}>Shop</div>
            <div className="btn-header" onClick={}>Follow</div>
        </div> */}

          <div className="col-md-3">
            <a
              id="menu"
              className="waves-effect waves-light"
              style={{ float: "right" }}
            >
              <i className="material-icons"></i>
            </a>

            <div
              className="tap-target"
              data-activates="menu"
              style={{ backgroundColor: "#3498db" }}
            >
              <div className="tap-target-content">
                <h5 style={{ padding: "200px", color: "white" }}>Follow via</h5>
                <br />
                <div id="social-icons-container">
                  <a
                    href="https://www.facebook.com/chamodshehanka"
                    target="_blank"
                  >
                    <img
                      src="https://png.icons8.com/facebook/color/24"
                      title="Facebook"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/chamodshehanka/"
                    target="_blank"
                  >
                    <img
                      src="https://png.icons8.com/instagram/color/24"
                      title="Instagram"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a href="https://twitter.com/chamodhshehanka" target="_blank">
                    <img
                      src="https://png.icons8.com/twitter/color/24"
                      title="Twitter"
                      width="40"
                      height="40"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/chamod-shehanka-a61583136?trk=hp-identity-name"
                    target="_blank"
                  >
                    <img
                      src="https://png.icons8.com/linkedin/color/24"
                      title="LinkedIn"
                      width="40"
                      height="40"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
