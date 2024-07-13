// app/page.tsx
"use client";
import { Link as RowLink } from "@chakra-ui/next-js";

export const Link: React.FC = () => {
  return (
    <RowLink href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
      About
    </RowLink>
  );
};
