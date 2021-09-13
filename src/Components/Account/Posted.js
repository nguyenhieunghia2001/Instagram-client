import React from "react";
import { Col, Container, Row } from "reactstrap";
import AplleImg from "../../assets/images/download-apple.png";
import CHPlayImg from "../../assets/images/download-chplay.png";
import PostImg from "../../assets/images/post.jpg";
import "./style.scss";

const Posted = () => {
  return (
    <div className="account__post">
      <div className="empty">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="left">
                <img src={PostImg} alt="post" height={380} />
              </div>
            </Col>
            <Col lg={6}>
              <div className="right">
                <h4>Bắt đầu ghi và chia sẻ khoảnh khắc của bạn.</h4>
                <span>
                  Tải ứng dụng để chia sẻ ảnh hoặc video đầu tiên của bạn.
                </span>
                <div className="download">
                  <img src={AplleImg} alt="apple-store" />
                  <img src={CHPlayImg} alt="chplay" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Posted;
