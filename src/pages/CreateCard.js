import React, { useState } from "react";
import styled from "styled-components";
import TextSize from "../components/TextSize";
import Button from "../components/Button";
import axios from "axios";

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
  ::placeholder {
    font-size: 12px;
    color: grey;
  }
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

const CLOUDNAME = process.env.REACT_APP_CLOUDINARY_CLOUDNAME;
const PRESET = process.env.REACT_APP_CLOUDINARY_PRESET;

function CreateCard({ onCreate, history }) {
  const [image, setImage] = useState("");

  console.log(image);

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
      time: form.time.value,
      image: image
    };

    console.log(card);
    onCreate(card);
    history.push("/marketplace");
  }

  function upload(event) {
    const url = `https://api.cloudinary.com/v1_1/${CLOUDNAME}/upload`;

    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", PRESET);

    axios
      .post(url, formData, {
        headers: {
          "Content-type": "multipart/form-data"
        }
      })
      .then(onImageSave)
      .catch(err => console.error(err));
  }

  function onImageSave(response) {
    console.log(response);
    setImage(response.data.url);
  }

  return (
    <>
      <CreateTitle size="Large">Share your info</CreateTitle>
      <Form onSubmit={handleSubmit}>
        <InputTitle size="Medium">Your name</InputTitle>
        <Input name="name" placeholder="First name is sufficient" />
        <InputTitle size="Medium">Description title</InputTitle>
        <Input name="title" placeholder="Giving away due to holiday" />
        <InputTitle size="Medium">Description of food items</InputTitle>
        <Input
          name="description"
          placeholder="2 choclate bars, 1 kg strawberries"
        />{" "}
        <InputTitle size="Medium">Upload image (optional)</InputTitle>
        <Input type="file" name="image" onChange={upload} />
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
