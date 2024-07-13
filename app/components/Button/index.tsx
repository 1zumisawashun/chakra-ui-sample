"use client";
import { Button as RowButton, ButtonProps } from "@chakra-ui/react";

export const Button: React.FC<ButtonProps> = (props) => {
  return <RowButton {...props} />;
};
