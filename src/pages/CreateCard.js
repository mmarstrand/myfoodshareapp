import React from "react";
import styled from "styled-components";
import TextSize from "../components/TextSize";
import Button from "../components/Button";

const Form = styled.form`
  padding: 10px;
  display: grid;
  grid-gap: 5px;
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

const CreateButton = styled(Button)`
  width: 80px;
  height: 40px;
  margin-top: 20px;
  justify-self: center;
`;

function CreateCard({ onCreate, history }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;

    const description =
      form.description.value &&
      form.description.value.split(",").map(descItem => descItem.trim());

    const card = {
      name: form.name.value,
      title: form.title.value,
      description,
      location: form.location.value,
      time: form.time.value
    };
    console.log(card);
    onCreate(card);
    history.push("/marketplace");
  }

  return (
    <>
      <CreateTitle size="Large">Share your info</CreateTitle>
      <Form onSubmit={handleSubmit}>
        <InputTitle size="Medium">Your name</InputTitle>
        <Input name="name" placeholder="First name ex. Maria" />
        <InputTitle size="Medium">Title</InputTitle>
        <Input name="title" placeholder="Giving away due to holiday" />
        <InputTitle size="Medium">Description of food items</InputTitle>
        <Input
          name="description"
          placeholder="2 choclate bars, 1 kg strawberries"
        />
        <InputTitle size="Medium">Pick-up location</InputTitle>
        <Input
          name="location"
          placeholder="Your address or prefered meeting point"
        />
        <InputTitle size="Medium">Pick-up time</InputTitle>
        <Input name="time" placeholder=" Today between 10-12am or 5-8pm " />
        <CreateButton>Submit</CreateButton>
      </Form>
    </>
  );
}

export default CreateCard;
