import React from "react";
import DescriptionIcon from "@material-ui/icons/Description";
import LabelIcon from "@material-ui/icons/Label";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import StorefrontIcon from "@material-ui/icons/Storefront";

import {
  InfoContainer,
  InfoLeftContainer,
  InfoRightContainer,
} from "./components";

export default function BusinessInfoItem({type, text}) {
  const renderIcon = () => {
    if (type == "name") return <StorefrontIcon style={{fontSize: 18}}/>;
    if (type == "description") return <DescriptionIcon style={{fontSize: 18}}/>;
    if (type == "address") return <LocationOnIcon style={{fontSize: 18}}/>;
    if (type == "phoneNumber") return <PhoneIcon style={{fontSize: 18}}/>;
    if (type == "category") return <LabelIcon style={{fontSize: 18}}/>;
  };

  return (
    <InfoContainer height={40}>
      <InfoLeftContainer>
	{renderIcon()}
      </InfoLeftContainer>
      <InfoRightContainer>{text}</InfoRightContainer>
    </InfoContainer>
  );
}
