import React from "react";
import styled from "styled-components";
import TextSize from "../components/TextSize";

const Form = styled.form`
  padding: 10px;
  display: grid;
  grid-gap: 10px;
`;
const Input = styled.input`
  border: 2px solid #163a5f;
  padding: 18px;
  border-radius: 20px;
  margin: 0px 20px 10px 20px;
`;

const InputTitle = styled(TextSize)`
  margin-left: 35px;
  margin-top: 20px;
`;

const CreateTitle = styled(TextSize)`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

function CreateCard() {
  return (
    <>
      <CreateTitle size="Large">Share your info</CreateTitle>
      <Form>
        <InputTitle size="Medium"> Your name</InputTitle>
        <Input placeholder="First name ex. Maria" />
        <InputTitle size="Medium">Title</InputTitle>
        <Input placeholder="Giving away due to holiday" />
        <InputTitle size="Medium">Description of food items</InputTitle>
        <Input placeholder="2 choclate bars, 1 kg strawberries" />
        <InputTitle size="Medium">Pick-up location</InputTitle>
        <Input placeholder="Your address or prefered meeting point" />
        <InputTitle size="Medium">Pick-up time</InputTitle>
        <Input placeholder=" Today between 10-12am or 5-8pm " />
      </Form>
    </>
  );
}

export default CreateCard;
