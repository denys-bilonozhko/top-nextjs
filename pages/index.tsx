import React from 'react';
import { Title, Button, Text } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Title tag="h1">Title h1</Title>
      <Title tag="h2">Title h2</Title>
      <Title tag="h3">Title h3</Title>
      <Button appearance="primary" arrow="right">
        Primary
      </Button>
      <Button appearance="secondary" arrow="right">
        Secondary
      </Button>
      <Button appearance="secondary" arrow="down">
        Secondary
      </Button>
      <Text size="small">Text size 14</Text>
      <Text>Text size 16</Text>
      <Text size="large">Text size 18</Text>
    </>
  );
}
