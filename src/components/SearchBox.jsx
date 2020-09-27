import React, { useState } from "react";
import {
  Box,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/core";

const SearchBox = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (e) => {
    onSearch(search);
    e.preventDefault();
    setSearch("");
  };

  return (
    <Box m={{ sm: "2rem" }} w="20rem">
      <form>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Enter Movie"
            value={search}
            onChange={handleChange}
          />
          <InputRightElement width="4.5rem">
            <Button type="submit" h="1.75rem" size="sm" onClick={handleClick}>
              Search
            </Button>
          </InputRightElement>
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchBox;
