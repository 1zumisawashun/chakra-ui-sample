"use client";
import { Link as RowLink, LinkProps } from "@chakra-ui/next-js";

export const Link: React.FC<LinkProps> = (props) => {
  return <RowLink {...props} color="blue.400" _hover={{ color: "blue.500" }} />;
};
