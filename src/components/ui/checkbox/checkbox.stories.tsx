import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "./index";

const meta = {
  title: "UI Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: [""],
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/M7753HAzy0tm9rQWyRBrnI/Inctagram?type=design&node-id=5783-12902&mode=dev",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Main: Story = {
  render: () => {
    const [value, setValue] = useState(false);
    const onChange = (value: boolean) => {
      setValue(value);
    };

    return <Checkbox label="Click me" checked={value} onChange={onChange} />;
  },
  args: { label: "Click me" },
};
export const CheckboxControlled: Story = {
  render: () => {
    const [value, setValue] = useState(false);
    const onChange = (value: boolean) => {
      setValue(value);
    };

    return <Checkbox checked={value} onChange={onChange} />;
  },
  args: {},
};

export const CheckboxControlledWithLabel: Story = {
  render: () => {
    const [value, setValue] = useState(true);
    const onChange = (value: boolean) => {
      setValue(value);
    };

    return (
      <Checkbox
        errorMessage="Error message"
        label="Click me"
        checked={value}
        onChange={onChange}
      />
    );
  },
  args: {},
};
