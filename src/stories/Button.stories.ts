import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../components/v1/Button";

const meta: Meta<typeof Button> = {
  title: "Components/atoms/Button",
  component: Button,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
  },
};
