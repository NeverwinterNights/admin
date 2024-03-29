import { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./avatar";

const meta = {
  title: "UI Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
export type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithUserPhoto: Story = {
  args: {
    size: 136,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-P8bA7CjEhkhrfV_4YB-nrGOFRs0gB4OOw&usqp=CAU",
  },
};

export const WithoutUserPhoto: Story = {
  args: {},
};
