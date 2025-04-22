import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Modal",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div
        style={{
          minHeight: "60vh",
          padding: "20px",
          background: "#f0f0f0",
        }}
      >
        <Story />
      </div>
    ),
  ],
  argTypes: {
    isOpen: {
      control: "boolean",
      description: "Determines weather Modal is open or not",
    },
    children: {
      description: "ReactNode inside the component",
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["default", "info", "alert"] },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    onClose: () => alert("Modal closed"),
    children: (
      <div>
        <h2>Default Modal Style</h2>
        <p>
          This is a default Modal.
          lorem ipsem lorem ipsem lorem ipsem lorem ipsem lorem ipsem{" "}
        </p>
      </div>
    ),
  },
};

export const Info: Story = {
  args: {
    isOpen: true,
    onClose: () => alert("Modal closed"),
    size: "md",
    variant: "info",
    children: (
      <div>
        <h2>Info Modal Style</h2>
        <p>
          This is an Info Modal <br /> lorem ipsem lorem ipsem lorem ipsem lorem
          ipsem lorem ipsem{" "}
        </p>
      </div>
    ),
  },
  parameters: {
    
  },
};
