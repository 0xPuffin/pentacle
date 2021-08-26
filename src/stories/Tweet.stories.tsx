import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Tweet from '../components/tweet';
import { mockTweet, mockTweetWithPhotos } from './mock-tweet';
export default {
  title: 'Components/Tweet',
  component: Tweet,
} as ComponentMeta<typeof Tweet>;

const Template: ComponentStory<typeof Tweet> = (args) => <div style={{maxWidth: 500}}>
  <Tweet {...args} />
</div>;

export const Regular = Template.bind({});
Regular.args = {
  ...mockTweet
};

export const WithPhotos = Template.bind({});
WithPhotos.args = {
  ...mockTweetWithPhotos
};