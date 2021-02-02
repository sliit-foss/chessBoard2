import React from "react";
// import Header from "./components/common/Header/Header";
// import Footer from "./components/common/Footer/Footer";
import chess from "../../images/chess.png";
import impressionCrop from "../../images/impression1-croped.png";

export interface BodyProps {}

const Body: React.SFC<BodyProps> = () => {
  return (
    <>
      <body>
        {/* <!--Pre loader--> */}
        <div className="spinner-wrapper">
          <h1 id="spinner-logo">CHESS BOARD</h1>
          <p style={{ alignContent: "center" }}>
            <img src={chess} width="300px" height="300px" />
            <br />
          </p>
        </div>

        {/* <!--Bouncing arrow--> */}
        <i className="arrow bounce"></i>
        {/* <!--End bouncing arrow--> */}
      </body>
    </>
  );
};

export default Body;
