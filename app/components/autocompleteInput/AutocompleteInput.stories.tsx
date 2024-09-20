import type { Meta, StoryObj } from "@storybook/react";
import { AutocompleteInput } from "./AutocompleteInput";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Box } from "@chakra-ui/react";

const meta = {
  title: "AutocompleteInput",
  component: AutocompleteInput,
} satisfies Meta<typeof AutocompleteInput>;

export default meta;
type Story = StoryObj<typeof meta>;

const schema = z.object({
  text: z.string(),
});

const Render: React.FC = () => {
  const {
    control,
    watch,
    formState: { dirtyFields },
  } = useForm({
    mode: "onTouched",
    resolver: zodResolver(schema),
    defaultValues: {
      text: "JavaScript",
    },
  });

  return (
    <Box>
      <Box as="p">{watch("text") ? watch("text") : "-----"}</Box>
      <Controller
        control={control}
        name="text"
        render={({ field: { onChange, ...rest } }) => (
          <AutocompleteInput
            onChange={onChange}
            isDirty={dirtyFields.text}
            {...rest}
          />
        )}
      />
    </Box>
  );
};

export const Default: Story = {
  args: {
    onChange: () => {},
  },
  render: () => <Render />,
};
