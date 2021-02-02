import React from "react";

export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
  return (
    <>
      <footer
        className="page-footer"
        style={{ backgroundColor: "#3498db", marginBottom: 0 }}
      >
        <div className="container">
          <div className="row">
            <div className="col l4 s12">
              <h5>Join the discussion</h5>
              <p className="grey-text text-lighten-4">
                We have a facebook messenger chat group set up where you can
                talk directly with us. Come in and discuss new features, future
                goals, general problems or questions, or anything else you can
                think of.
              </p>
              <button
                className="btn waves-effect waves-white btn-flat"
                style={{ color: "white" }}
              >
                Join Chat
              </button>
              <div className="fixed-action-btn">
                <a className="btn-floating btn-large blue" href="#">
                  <img
                    className="icon icons8-Slide-Up"
                    width="30"
                    height="30"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAD+0lEQVRoQ92a61EUQRCAuyNQI1AjUCIQIlAjECMQIhAjUCJQIhAiECIQIhAiECJo67vqWef2NY+dgyumav/c7e7M1+/pWZVHMvSRcEgzEDN7KiJvROS1iOyKyAu/YlldiwjXuYhcisiFqt62EOZiEDP7ICLv/KpZ06mInKrqSc3D4ZlqEDP7LCL7PalfuLSR+K2qIvVumBnaQnNojAsNhoGmvqnqcQ1QMYiZsYDvEcAVC3CpFpmJmyPaPBCRVw4A0EdVRRjZowjEzL76pEwAwEHphFMrcwEhkACEdg5zSbJAXHK/3JHvRORIVZm0+TAztHMkIk88IOzlBIQkiNs1poR9o4X9vu23pvE5f7h28DNMbc3f+nPOgvQ0AcRujnRagPnc+AmmBsSsZlIgvyNN3BtEEEQfRlV3poQ0CWJm+MAnN6d7h5iAOVZVfGgwRkE8guDcODYQs/bZwpTm3uE+g5kRADCxQWieAvnjeeJwU9GpFN6jGeH/WlVfJp3dzAh9ZO0rVSVSbc0wMywD5x8IeKARMwvaGFXhQ1JFJj/QyhqImVE7kTO2ThuR8wetkFvINavRB6ESfesJqLupVgtRHuIVWRk6NVck7DNVpU5bB/FJ//rvz5Ymvl4y5bXJpJaC4P+pdXYaMTPofvpmhwq3eoxUBLwrK0PnTGpmhF+2AO9VFSv6b1pRtPqiqkSuqjFW1viLssuN1MRja401Eiiro9VcbVZaO83BjFlPDBLC7k5NJs8pMFvBeKanDrwM9VcMYitbU02W9n1p5UCEZxrCrK13MUgJREsYM2sHUgPRCqYZyBKIFjBzIHQvnotIlrObGWU++WbRzrHnM+equpcRfilmcfaulKoOv56UVj2qRlVA6IUlk3FUPNKpXN0fg4TyfVFCTEmzxf+phNisRGmx2ERCnC1RMJNmReOmYJJFo1eWTcv4TcAky3gHCRurLvVvYjFL3mlmoUU1vbFymBCGq4vHJQtN+AYRirB/o6qcv3RjbM9O34huxdZpJdJGuvnQ08o2toMG2ljLI7GaooTDeQcmtg0NOkyKyJrfoHOthJZpk712rd/0arqylmlU1IXWy4PA9AvTuYZhqhuPKpvttUu0UlpdJ3eDNYcuJQseu7fmcCkJ4v4Sa4YAwNFb1elrCtLMOMqggGXO7C1CFkjkMyEA8BN+Q3guOn2dAvFISf4KjfNJxx57RxGIa4fsSjuVTVgAApAWZs3xNC1aknAAuPFzyiIBFYNE2mFyrgDEX0werruJDwY4rAkfDMSbKAA4kq46La4GiYAoNNnLINmaceYfGyxqmi8GiYDCpxnxRzWxtrgV58X8wkc17NGLzHFKUs1AalTR8plHA/IPmftTUR0uABMAAAAASUVORK5CYII="
                  />
                </a>
              </div>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Follow us on</h5>
              <ul>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.facebook.com/sliitfoss"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.instagram.com/sliitfoss/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://twitter.com/fosssliit?lang=en"
                    target="_blank"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.linkedin.com/company/sliit-foss-community/posts/?feedView=all"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://www.youtube.com/channel/UCPPO-QR0Dv13ewjhPsc_I3w/featured"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            ©️ 2021 Chess Play. All right received
            {/* <a className="grey-text text-lighten-4 right tooltipped" href="http://chamodshehanka.com" target="_blank" data-position="top" data-delay="50" data-tooltip="Website author">
                    <img src="http://chamodshehanka.com/images/logo%20design.png?crc=3880735088" width="25px" height="25px">
                    Chamod Shehanka
                </a> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;