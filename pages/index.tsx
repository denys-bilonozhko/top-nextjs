import React from 'react';
import { Title, Button } from '../components';

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
    </>
  );
}
