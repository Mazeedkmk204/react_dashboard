import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Header from "../../components/Header";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    address1: "",
    address2: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {
      firstName: formData.firstName ? "" : "required",
      lastName: formData.lastName ? "" : "required",
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
        ? ""
        : "invalid email",
      contact: /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/.test(
        formData.contact
      )
        ? ""
        : "Phone number is not valid",
      address1: formData.address1 ? "" : "required",
      address2: formData.address2 ? "" : "required",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formData);
      // Your submission logic goes here
    } else {
      console.error("Form validation failed");
    }
  };

  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />

      <form onSubmit={handleSubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
          }}
        >
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="First Name"
            onBlur={validateForm}
            onChange={handleInputChange}
            value={formData.firstName}
            name="firstName"
            error={!!errors.firstName}
            helperText={errors.firstName}
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Last Name"
            onBlur={validateForm}
            onChange={handleInputChange}
            value={formData.lastName}
            name="lastName"
            error={!!errors.lastName}
            helperText={errors.lastName}
            sx={{ gridColumn: "span 2" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Email"
            onBlur={validateForm}
            onChange={handleInputChange}
            value={formData.email}
            name="email"
            error={!!errors.email}
            helperText={errors.email}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Contact Number"
            onBlur={validateForm}
            onChange={handleInputChange}
            value={formData.contact}
            name="contact"
            error={!!errors.contact}
            helperText={errors.contact}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Address 1"
            onBlur={validateForm}
            onChange={handleInputChange}
            value={formData.address1}
            name="address1"
            error={!!errors.address1}
            helperText={errors.address1}
            sx={{ gridColumn: "span 4" }}
          />
          <TextField
            fullWidth
            variant="filled"
            type="text"
            label="Address 2"
            onBlur={validateForm}
            onChange={handleInputChange}
            value={formData.address2}
            name="address2"
            error={!!errors.address2}
            helperText={errors.address2}
            sx={{ gridColumn: "span 4" }}
          />
        </Box>
        <Box display="flex" justifyContent="end" mt="20px">
          <Button type="submit" color="secondary" variant="contained">
            Create New User
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Form;

