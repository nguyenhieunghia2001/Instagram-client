import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";

const ImageSlide = ({ src, size }) => {
  return (
    <div className="review__img">
      <img src={src} alt="post img" width={size} height={size} />
    </div>
  );
};

const ReviewImages = ({ files, setFiles }) => {
  const [imgReview, setImgReview] = useState();
  useEffect(() => {
    if (files) setImgReview(files[0]);
  }, []);

  const onChangeImgReview =(file) => {
    setImgReview(file)
  }

  return (
    <div className="reviewimages">
      <div className="reviewimages__review">
        <div className="review__img">
          <ImageSlide src={imgReview} size={430}/>
        </div>
      </div>
      <div className="reviewimages__slide">
        {files &&
          files.length > 0 &&
          files.map((item, index) => (
            <div className="wrapper-img" onClick={() => onChangeImgReview(item)}>
              <ImageSlide src={item} size={45} key={index} />
            </div>
          ))}
        <label className="upload-file-custom">
          <input type="file" />
          <div className="btn-upload">
            <BsPlus />
          </div>
        </label>
      </div>
    </div>
  );
};

export default ReviewImages;
