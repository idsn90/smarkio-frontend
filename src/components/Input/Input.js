import React from "react";
import { FiSearch } from "react-icons/fi";

import { Container } from "./Input.styles";

const Input = ({ onChange }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onChange(value);
  };

  return (
    <Container>
      <FiSearch size={20} />
      <input
        type="text"
        autoComplete="off"
        id="search"
        name="search"
        maxLength={30}
        onChange={handleChange}
      />
    </Container>
  );
};

export default Input;
