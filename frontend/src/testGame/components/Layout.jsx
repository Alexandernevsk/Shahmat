import React from "react";
import "../style/layout-styles.css";

export const Layout = ({ Image, Content }) => {
  return (
    <div className="container">
      <div className="shahmat">Shahmat</div>
      <div className="flex">
        <Image />
        <div className="content">
          <Content />
        </div>
      </div>
    </div>
  );
};
