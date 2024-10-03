import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";
import { ComponentProps } from "react";
import { HStack } from "@chakra-ui/react";

const meta = {
  title: "Popover",
  component: Popover,
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

const Render = () => {
  return (
    <HStack>
      <Popover></Popover>
    </HStack>
  );
};
export const Default: Story = {
  args: {
    children: "Button",
    colorScheme: "blue",
  },
  parameters: {
    pseudo: {
      hover: "#hover",
      active: "#active",
      focusVisible: "#focus-visible",
    },
  },
  render: Render,
};
