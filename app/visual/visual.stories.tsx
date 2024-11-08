// app/visual/VisualPage.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import VisualPage from "./page";

export default {
  title: "Components/VisualPage",
  component: VisualPage,
} as Meta;

const Template: Story = () => <VisualPage />;

export const Default = Template.bind({});
