import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Button, ButtonProps } from './index';

export default {
    component: Button,
    title: 'Atoms/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'Button',
    primary: true,
};
