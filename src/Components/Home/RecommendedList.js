import React from "react";
import RecommendedTyleListItem from "../common/Recommended/RecommendedItem";

const RecommendedListTyleList = () => {
  return (
    <div className="recommendedlist-typelist">
      <ul>
        <li>
          <RecommendedTyleListItem
            size="32"
            button={{ text: "Theo dõi", type: "text" }}
          />
        </li>
        <li>
          <RecommendedTyleListItem
            size="32"
            button={{ text: "Theo dõi", type: "text" }}
          />
        </li>
        <li>
          <RecommendedTyleListItem
            size="32"
            button={{ text: "Theo dõi", type: "text" }}
          />
        </li>
      </ul>
    </div>
  );
};

export default RecommendedListTyleList;
