import React, { useState } from "react";
import styled from "styled-components";
import TextSize from "../components/TextSize";
import Button from "../components/Button";
import axios from "axios";
import Input from "../components/Input";

const Form = styled.form`
  padding: 10px;
  display: grid;
  grid-gap: 5px;
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
  const [errors, setErrors] = React.useState({});
  const [formValues, setFormValues] = React.useState({
    name: "",
    title: "",
    description: "",
    location: "",
    time: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  function validate() {
    const errors = {};

    if (formValues.name.trim() === "") {
      errors.name = "Please fill in your name";
    }
    if (formValues.title.trim() === "") {
      errors.title = "Please fill in your decription title";
    }
    if (formValues.description.trim() === "") {
      errors.description = "Please fill in your description of food items";
    }
    if (formValues.location.trim() === "") {
      errors.location = "Please fill in your prefered pick-up location";
    }
    if (formValues.time.trim() === "") {
      errors.time = "Please fill in your prefered pick-up time";
    }

    return Object.keys(errors).length === 0 ? null : errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validate();

    if (errors) {
      setErrors(errors);
      return;
    }

    //const form = event.target;
    const description =
      formValues.description &&
      formValues.description.split(",").map(descItem => descItem.trim());

    const card = {
      name: formValues.name,
      title: formValues.title,
      description,
      location: formValues.location,
      time: formValues.time,
      image: image
    };

    //console.log(card);
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
        <Input
          name="name"
          placeholder="First name is sufficient"
          value={formValues.name}
          onChange={handleChange}
          error={errors.name}
        />
        <InputTitle size="Medium">Description title</InputTitle>
        <Input
          name="title"
          placeholder="Giving away due to holiday"
          value={formValues.title}
          onChange={handleChange}
          error={errors.title}
        />
        <InputTitle size="Medium">Description of food items</InputTitle>
        <Input
          name="description"
          placeholder="2 choclate bars, 1 kg strawberries"
          value={formValues.description}
          onChange={handleChange}
          error={errors.description}
        />
        <InputTitle size="Medium">Upload image (optional)</InputTitle>
        <Input
          type="file"
          name="image"
          onChange={upload}
          placeholder="If no image is uploaded, a stock image will be shown"
        />
        <InputTitle size="Medium">Pick-up location</InputTitle>
        <Input
          name="location"
          placeholder="Your address or prefered meeting point"
          value={formValues.location}
          onChange={handleChange}
          error={errors.location}
        />
        <InputTitle size="Medium">Pick-up time</InputTitle>
        <Input
          name="time"
          placeholder=" Today between 10-12am or 5-8pm "
          value={formValues.time}
          onChange={handleChange}
          error={errors.time}
        />
        <CreateButton>Submit</CreateButton>
      </Form>
    </>
  );
}

export default CreateCard;
