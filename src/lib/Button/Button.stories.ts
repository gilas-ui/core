import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta = {
  title: "Example/Button",
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Create New Account",
  },
};

export default meta;
