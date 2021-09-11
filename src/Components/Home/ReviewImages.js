import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

const ImageSlide = ({ src, size }) => {
  return (
    <div className="review__img">
      <img src={src} alt="post img" width={size} height={size} />
    </div>
  );
};

const ReviewImages = ({ files, setFiles }) => {
  const [imgReview, setImgReview] = useState({});
  useEffect(() => {
    setImgReview({ file: files[0], index: 0 });
  }, []);

  const onChangeImgReview = (file, index) => {
    setImgReview({ file, index });
  };
  const handleRemoveImg = () => {
    const index = imgReview?.index;

    setFiles((pre) => {
      return [...pre.slice(0, index), ...pre.slice(index + 1, pre.length)];
    });

    if (files.length > 1)
      setImgReview({
        index: index === 0 ? index + 1 : index - 1,
        file: files[index === 0 ? index + 1 : index - 1],
      });
  };

  const addFile = (e) => {
    const [fileLocal] = e.target.files;
    if (fileLocal) setFiles((pre) => [...pre, URL.createObjectURL(fileLocal)]);
  };
  return (
    <div className="reviewimages">
      <div className="reviewimages__review">
        <div className="review__img-inner" onClick={handleRemoveImg}>
          <ImageSlide src={imgReview?.file} size={430} />
          <div className="control-remove">
            <AiFillDelete />
          </div>
        </div>
      </div>
      <div className="reviewimages__slide">
        {files &&
          files.length > 0 &&
          files.map((item, index) => (
            <div
              className="wrapper-img"
              onClick={() => onChangeImgReview(item, index)}
              key={index}
            >
              <ImageSlide src={item} size={45} />
            </div>
          ))}
        <label className="upload-file-custom">
          <input type="file" onChange={addFile} />
          <div className="btn-upload">
            <BsPlus />
          </div>
        </label>
      </div>
    </div>
  );
};

export default ReviewImages;
