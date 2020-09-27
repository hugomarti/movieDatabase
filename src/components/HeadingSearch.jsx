import React from "react";
import { Flex, Icon, Heading } from "@chakra-ui/core";

import SearchBox from "./SearchBox";

const HeadingSearch = ({ search, backToPopular, handleSearch }) => {
  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <Flex m="2rem" justifyContent="space-between" alignItems="center">
      <Heading color="white">
        {search ? (
          <Flex alignItems="center">
            <Icon
              mr="1rem"
              name="arrow-back"
              cursor="pointer"
              onClick={backToPopular}
            />
            {capitalize(search)}
          </Flex>
        ) : (
          "Popular"
        )}
      </Heading>
      <SearchBox onSearch={handleSearch} />
    </Flex>
  );
};

export default HeadingSearch;
