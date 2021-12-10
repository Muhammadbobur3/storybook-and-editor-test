import React from "react";

import { Anchor } from "./Anchor";

export default {
  title: "Example/Link",
  component: Anchor,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Anchor {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
