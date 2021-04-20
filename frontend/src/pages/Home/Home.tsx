import React, { useState, useEffect } from 'react';

import { Container, Header, Content } from './Home.styles';

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <Container>
      <Header>Projetos de software</Header>
      <Content></Content>
    </Container>
  );
}
