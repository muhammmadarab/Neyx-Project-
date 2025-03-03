import React from "react";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import GetAppIcon from "@material-ui/icons/GetApp";
import WebAssetOutlinedIcon from "@material-ui/icons/WebAssetOutlined";
import CheckIcon from "@material-ui/icons/Check";
import LaptopMacOutlinedIcon from "@material-ui/icons/LaptopMacOutlined";
import LibraryAddCheckOutlinedIcon from "@material-ui/icons/LibraryAddCheckOutlined";
import { Link } from "react-router-dom";
function Solution() {
  return (
    <div className="solution">
      <h1>Explore Our Solution </h1>
      <div className="solution__heading">
        <h3>Industry </h3>
        <p> Technology Category</p>
      </div>
      <div className="solution__cards">
        <div className="solution__card">
          <CheckIcon />
          <h3>We are introducing NeyX</h3>
          <p>
            one bot to solve all of thes It is going to revolutionize online
            shopping experience and make it even more affordable and fun
          </p>
        </div>
        <div className="solution__card">
          <ChatOutlinedIcon />
          <h3>NeyX, bargain master</h3>
          <p>
            A smart bot, can negotiate. Bargain with the customer to satisfy
            both buyer and seller A smart bot, can negotiate. Bargain with the
            customer to satisfy both buyer and seller
          </p>
        </div>
        <div className="solution__card">
          <GetAppIcon />
          <h3>NeyX, Easy Installation</h3>
          <p>
            It can be easily installed in every e-commerce websites, apps and
            let your customer bargain with you and reduce a huge load of human
            resource.
          </p>
        </div>
        <div className="solution__card">
          <LaptopMacOutlinedIcon />
          <h3>NeyX, safe and fun</h3>
          <p>
            It will provide customised price tag for each individual customer
            according to their preference and respects every user’s privacy.
          </p>
        </div>
        <div className="solution__card">
          <WebAssetOutlinedIcon />
          <h3>NeyX, new era of shopping</h3>
          <p>
            It is going to revolutionize online shopping experience and make it
            even more affordable and fun, say goodbye to old boring fixed price
            system.
          </p>
        </div>
        <div className="solution__card">
          <LibraryAddCheckOutlinedIcon />
          <h3>NeyX, bargain master</h3>
          <p>
            A smart bot, can negotiate. Bargain with the customer to satisfy
            both buyer and seller A smart bot, can negotiate.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Solution;
