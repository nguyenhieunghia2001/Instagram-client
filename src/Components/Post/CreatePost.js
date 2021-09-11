import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import CollectionImg from "../../assets/images/collection.png";
import AvatarImg from "../../assets/images/avatar-1.jpg";
import Avatar from "../common/Friend/Avatar";
import { Input } from "antd";
import Emoji from "../common/InputPlaholder/Emoji";
import ReviewImages from "../Home/ReviewImages";

const { TextArea } = Input;
const CreatePost = () => {
  const [files, setFiles] = useState([]);
  const [content, setContent] = useState("");

  const onChangesFile = (e) => {
    const filesFromLocal = e.target.files;
    var filesArr = Object.values(filesFromLocal)?.map((item) => URL.createObjectURL(item));

    setFiles((pre) => [...pre, ...filesArr]);
  };
  return (
    <div className="post__create">
      {files.length < 1 && (
        <div className="empty space-height">
          <img src={CollectionImg} alt="collection" accept="image/*" />
          <p>Kéo ảnh và video vào đây.</p>
          <label className="custom-file-upload">
            <input type="file" multiple onChange={onChangesFile} />
            <div className="btn btn-upload">Chọn từ máy tính</div>
          </label>
        </div>
      )}
      <div className="exist space-height">
        <Row style={{ height: "100%" }}>
          <Col lg={7} style={{ paddingRight: 0 }}>
            <ReviewImages files={files} setFiles={setFiles}/>
          </Col>
          <Col lg={5}>
            <div className="custom">
              <div className="myaccount">
                <Avatar img={AvatarImg} alt="avatar" size={28} />
                <p className="name">NghiaDX</p>
              </div>
              <TextArea
                value={content}
                onChange={({ target: { value } }) => setContent(value)}
                placeholder="Viết ghi chú..."
                autoSize={{ minRows: 7, maxRows: 7 }}
              />
              <div className="supportText">
                <Emoji />
                <span>0/2.200</span>
              </div>
              <div className="options">
                <h4 className="title">Cài đặt nâng cao</h4>
                <div className="options__item">
                  <p>Tắt tính năng bình luận</p>
                  <input type="checkbox" />
                  <span>
                    Về sau, bạn có thể thay đổi tùy chọn này bằng cách mở menu
                    ··· ở đầu bài viết.
                  </span>
                </div>
              </div>
              <div className="btn-box">
                <button className="btn btn-share">Chia sẻ</button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CreatePost;
