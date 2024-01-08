import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ComponentStyle from "../Style";
import { Slide, Slider } from "../../../components/Slider/Index";
import "./style.css";

import { Feedbacks as FeedbacksData } from "../../../content/json/components-mock.json";
import FeedbackComponent from "./Feedback";

const FeedbacksContainer = styled.section`
  padding: var(--padding-section-global);
  background-color: var(--secundary-color);
`;

export default function Feedbacks() {
  const [slidesPerView, setSlidesPerView] = useState(2);

  const settings = {
    slidesPerView: slidesPerView,
    loop: true,
    navigation: true,
  };

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setSlidesPerView(1);
    }
  }, [window.innerWidth]);

  return (
    <FeedbacksContainer>
      <ComponentStyle.SectionTitle style={{ color: "#fff" }}>
        WHAT OUR CLIENTS SAY
      </ComponentStyle.SectionTitle>

      <Slider settings={settings}>
        {FeedbacksData.map((feedback) => (
          <Slide style={{ padding: "0 20px" }} key={feedback.name}>
            <FeedbackComponent
              name={feedback.name}
              photo={feedback.photo}
              date={feedback.date}
              feedback={feedback.feedback}
            />
          </Slide>
        ))}
      </Slider>
    </FeedbacksContainer>
  );
}
