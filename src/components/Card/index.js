import React from "react";

import { Container, Label } from "./styles";

export default function Card() {
  return (
    <Container>
      <header>
        <Label color="#7159c1" />
      </header>
      <p>Fazer a migração completa do servidor</p>
      <img
        src="https://avatars1.githubusercontent.com/u/46832485?s=400&amp;v=4"
        alt=""
      />
    </Container>
  );
}
