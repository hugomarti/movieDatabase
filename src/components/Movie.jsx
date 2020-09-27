import React, { useState } from "react";
import { Box, Image, Flex, Text, Collapse } from "@chakra-ui/core";
import { MdStar } from "react-icons/md";
import { IMGPATH } from "./apis";

const Movie = ({ movie: { title, poster_path, overview, vote_average } }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <Box
      flex="1 1 17rem"
      p="1rem"
      mx="2rem"
      mt="2rem"
      bg="white"
      rounded="md"
      cursor="pointer"
      onClick={() => setShowDescription(!showDescription)}
    >
      {poster_path === null ? (
        <Image rounded="md" src="https://i.ibb.co/jfSGRyT/dog.jpg" />
      ) : (
        <Image rounded="md" src={IMGPATH + poster_path} />
      )}

      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {title}
      </Text>
      <Flex mt={2} align="center">
        <Box as={MdStar} color="orange.400" />
        <Text ml={1} fontsize="sm">
          <b>{vote_average}</b>
        </Text>
      </Flex>
      <Collapse mt={4} isOpen={showDescription}>
        {overview}
      </Collapse>
    </Box>
  );
};

export default Movie;
