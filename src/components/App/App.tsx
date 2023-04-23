import React from 'react';
import { Card } from '../Card/Card';

export function App() {
  return <>
    <Card symbol='dragon' value={5} />
    <Card symbol='dark' value={5} />
    <Card symbol='electric' value={5} />
    <Card symbol='dragon' value={5} />
    <Card symbol='dragon' value={5} />
  </>;
}