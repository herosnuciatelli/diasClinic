import React from "react";
import styled from "styled-components";

import ComponentStyle from "./Style";
import {Whatsapp} from "../../content/json/components-mock.json"


export default function ServiceCard(props) {

  return (
    <ComponentStyle.ServiceContainerCard>
      <ComponentStyle.CardImg $background={props.background}/>
      <ComponentStyle.TimeContainer>
        <ComponentStyle.Time>{props.time}</ComponentStyle.Time>
      </ComponentStyle.TimeContainer>
      <ComponentStyle.InfoContainer>
        <ComponentStyle.CardTitle>{props.cardTitle}</ComponentStyle.CardTitle>
        <ComponentStyle.CardPrice>{props.price}</ComponentStyle.CardPrice>
        <ComponentStyle.CardContent>
          <ComponentStyle.Description>
            {props.description}
          </ComponentStyle.Description>
          <ComponentStyle.Benefits>
            <ComponentStyle.ContentTitle>Benefits</ComponentStyle.ContentTitle>
            {props.benefits.map((benefitArray) => (
              <ComponentStyle.Benefit key={benefitArray.benefit}>
                <ComponentStyle.ArrowIcon src={ComponentStyle.Arrow} alt="icon" /> {benefitArray.benefit}
              </ComponentStyle.Benefit>
            ))}
          </ComponentStyle.Benefits>
        </ComponentStyle.CardContent>
        <a href={Whatsapp.link} target="_blanket">
          <ComponentStyle.CardButton>Book Now</ComponentStyle.CardButton>
        </a>
      </ComponentStyle.InfoContainer>
    </ComponentStyle.ServiceContainerCard>
  );
}
