import React from "react";
import AvatarImg from '../../../assets/images/avatar.jpg'

const RecommendedCardItem = () => {
  return (
    <div className="recommended__tyleCard-item">
      <div className="wrapper">
        <div className="avatar">
          <img src={AvatarImg} alt="avatar" />
        </div>
        <p className="name">_phngoc06_</p>
        <span className="follow">Có hoang.trii theo dõi</span>
        <button className="btn btn-recommended--card">Theo dõi</button>
      </div>
    </div>
  );
};

export default RecommendedCardItem;
