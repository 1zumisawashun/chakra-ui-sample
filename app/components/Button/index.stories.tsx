import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";
import { ComponentProps } from "react";
import { HStack } from "@chakra-ui/react";

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const Render = (props: ComponentProps<typeof Button>) => {
  return (
    <HStack>
      <Button {...props}>default</Button>
      <Button id="hover" {...props}>
        hover
      </Button>
      <Button id="active" {...props}>
        active
      </Button>
      <Button id="focus-visible" {...props}>
        focus-visible
      </Button>
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
