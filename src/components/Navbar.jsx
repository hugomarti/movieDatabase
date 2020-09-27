import React from "react";
import { Flex, List, ListItem, Link, Icon } from "@chakra-ui/core";

const Navbar = () => (
  <Flex bg="gray.700" color="white">
    <Flex
      w="90%"
      m="auto"
      minH="7vh"
      align="center"
      justifyContent="space-between"
    >
      <Icon name="spinner" size="2rem" />
      <List>
        <ListItem>
          <Link>Login</Link>
        </ListItem>
      </List>
    </Flex>
  </Flex>
);

export default Navbar;
