import React from "react";
import Button, { ButtonProps } from "./Button";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const handleClick = () => {
  console.log("!");
};

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "My Button",
  backgroundColor: "#a123",
  onClick: handleClick,
};
