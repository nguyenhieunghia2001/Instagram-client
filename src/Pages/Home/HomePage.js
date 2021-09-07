import React from "react";
import { Col, Container, Row } from "reactstrap";
import CardItem from "../../Components/Post/Card";
import "./style.scss";

const HomePage = () => {
  return (
    <Container>
      <div className="homepage">
        <Row>
          <Col lg={2}></Col>
          <Col lg={6}>
            <CardItem />
          </Col>
          <Col lg={2}></Col>
          <Col lg={2}></Col>
        </Row>
      </div>
    </Container>
  );
};

export default HomePage;
