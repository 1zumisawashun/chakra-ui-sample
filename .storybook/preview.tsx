import type { Preview } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";

/** @see https://stackoverflow.com/questions/76933793/how-to-write-decorator-in-typescript-for-storybook */
import React from "react";

const preview: Preview = {
  decorators: (Story) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
