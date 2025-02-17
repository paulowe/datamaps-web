import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Spring, config } from "react-spring";
import ActionButton from "../actionButton";

const Banner = () => (
  <Container
    fluid
    className="bannerCont"
    style={{ marginTop: "100px", marginBottom: "30px", maxWidth: "1200px" }}
  >
    <Row>
      <Spring
        config={{ delay: 100, ...config.slow }}
        from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
        to={{ opacity: 100, transform: "translate3d(0,0px,0)" }}
      >
        {props => (
          <Col md="7" style={{ ...props, paddingTop: 5 }}>
            <img src="/static/images/banner_sample.svg" />
          </Col>
        )}
      </Spring>
      <Col md="5">
        <Spring
          config={{ delay: 450, ...config.slow }}
          from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
          to={{ opacity: 100, transform: "translate3d(0,0px,0)" }}
        >
          {props => (
            <div style={props} id="homepage-main-headline">
              <h1>Software for Open Education </h1>
            </div>
          )}
        </Spring>
        <Spring
          config={{ delay: 450, ...config.slow }}
          from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
          to={{ opacity: 100, transform: "translate3d(0,0px,0)" }}
        >
          {props => (
            <div style={props} id="homepage-sub-headline">
              <p>
                DataMaps is an open source project founded at York University,
                with partner institutions across the world. We collaborate with
                universities and other socially responsible organizations to
                develop software that meets the important need to reimagine what
                education can look like by making educational resources
                available to colleagues and students—in an accessible,
                inclusive, free and collaborative way.
              </p>
            </div>
          )}
        </Spring>
        <div>
          <Spring
            config={{ delay: 500, ...config.slow }}
            from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
            to={{ opacity: 100, transform: "translate3d(0,0px,0)" }}
          >
            {props => (
              <ActionButton style={props} link="/about" text="Learn More" />
            )}
          </Spring>
          <Spring
            config={{ delay: 550, ...config.slow }}
            from={{ opacity: 0, transform: "translate3d(-100px,0,0)" }}
            to={{ opacity: 100, transform: "translate3d(0,0px,0)" }}
          >
            {props => (
              <ActionButton
                white
                link="/apply"
                text="Apply"
                style={{ marginLeft: "20px", ...props }}
              />
            )}
          </Spring>
        </div>
      </Col>
    </Row>
    <style jsx>
      {`
        @media (max-width: 768px) {
          .banner-section {
            background-size: contain;
          }
        }
        .bannerCont {
          max-width: 1500px;
          margin: 0px;
          color: #fff !important;
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          margin-top: 30px;
        }
        .banner-img {
          width: 100%;
          height: auto;
        }
        .banner-section {
          height: 650px;
          padding-top: 150px;
          background-size: cover;
        }

        .cta-box {
          padding-top: 7px;
          align-content: left;
        }

        #main-banner-headline {
          margin-bottom: 24px;
          font-family: "Chivo", sans-serif;
        }

        #homepage-main-headline h1 {
          font-size: 60px !important;
          font-weight: 600;
          color: #323648;
          font-family: "Chivo", sans-serif;
        }
        #sub-headline {
          max-width: 600px;
          margin: 0 auto;
        }

        #homepage-sub-headline {
          max-width: 600px;
          margin: 0 auto;
        }

        #homepage-sub-headline p {
          font-size: 17px;
          margin-bottom: 28px auto;
          color: #323648;
          font-weight: 350;
        }
      `}
    </style>
  </Container>
);

export default Banner;
