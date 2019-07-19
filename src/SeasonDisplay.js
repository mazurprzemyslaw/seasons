import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: "it's warm",
    iconName: "sun"
  },
  winter: {
    text: "it's chilly",
    iconName: "snowflake"
  }
};

const getSeason = (latitude, month) => {
  if (latitude > 0 && month > 2 && month < 9) {
    return "summer";
  } else {
    return "winter";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`${iconName} icon icon-left massive`} />
      <h1 className="">{text}</h1>
      <i className={`${iconName} icon icon-right massive`} />
    </div>
  );
};

export default SeasonDisplay;
