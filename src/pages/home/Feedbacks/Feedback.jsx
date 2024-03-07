import React, { useState } from "react";
import Star from "../../../assets/star.svg";
import styled from "styled-components";
import ComponentStyle from "../Style";

const Feedback = styled.div``;
const FeedbackContent = styled.div`
  background-color: var(--primary-color);
  padding: 30px;
  @media (max-width: 768px) {
    padding-top: 0;
  }
`;
const ProfileContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ProfileImg = styled.div.attrs((props) => ({
  $background: props.$background,
}))`
  width: 80px;
  height: 80px;
  background: url(${(props) => props.$background});
  border-radius: 100%;
  background-position: top;

  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: -40px;
  }
`;
const ProfileContent = styled.div`
  display: grid;
  align-content: center;
`;
const Rate = styled.img`
  width: 15px;
`;
const Name = styled.span`
  font-weight: 300;
  font-size: 18px;
`;

const Content = styled.div`
  height: 120px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 20px;
  }
`;

export default function FeedbackComponent(props) {
  return (
    <Feedback>
      <FeedbackContent>
        <ProfileContainer>
          <ProfileImg $background={props.photo}></ProfileImg>
          <ProfileContent>
            <div>
              {Array.from({ length: 5 }).map((_,i) => {
                return <Rate src={Star} key={i + 'star'} />;
              })}
            </div>

            <Name>{props.name}</Name>
          </ProfileContent>
        </ProfileContainer>
        <Content>
          <ComponentStyle.DescriptionLight>
            {props.feedback}
          </ComponentStyle.DescriptionLight>
        </Content>
      </FeedbackContent>
    </Feedback>
  );
}
