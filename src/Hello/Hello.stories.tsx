import React from 'react';
import Hello from './Hello';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|basic|Hello', // Group & Path
  component: Hello,
  decorators: [withKnobs], // apply addon
  parameters: {
    componentSubtitle: 'Hello Components' // Component Subtitle
  }
};

export const hello = () => {
  const big = boolean('big', false);
  const name = text('name', 'Storybook');
  return (
    <Hello
      name={name}
      big={big}
      onHello={action('onHello')}
      onBye={action('onBye')}
    />
  );
};

hello.story = {
  name: 'Default'
};

export const standard = () => <Hello name="Storybook" />;
export const big = () => <Hello name="Storybook" big />;
