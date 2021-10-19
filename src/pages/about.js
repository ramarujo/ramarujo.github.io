import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

const Box = () => (
  <Container>
    <h1>Oi, eu sou a Rayssa Araújo</h1>
    <h3>29 ANOS, SÃO PAULO - SP</h3>
    <div class="box">
      <p class="about">
        Dev apaixonada por tecnologia, café e gatinhos 😸
      </p>
      <p class="about">
        ~2 anos de experiência em desenvolvimento front-end, formada em
        análise e desenvolvimento de sistemas 👩🏻‍💻
      </p>
      <a href="https://github.com/ramarujo" target="_blank"
        ><img width="64" src="/home/tag/github/ramarujo.github.io/src/images/linkedin.svg" alt="Linkedin" title="Linkedin"
      /></a>
      <a href="https://github.com/ramarujo" target="_blank"
        ><img width="64" src="./assets/img/github.svg" alt="GitHub" title="GitHub"
      /></a>
      <a href="mailto: rayssa.marujo@gmail.com" target="_blank"
        ><img width="64" src="./assets/img/gmail.svg" alt="E-mail" title="E-mail"
      /></a>
      <a href="./Rayssa Maria de Araújo Neves.pdf" download="CV - Rayssa Araújo.pdf" target="_blank"
        ><img width="64" src="./assets/img/download.svg" alt="Currículo" title="Currículo"
      /></a>
    </div>
    <Link to="/education">EDUCACAO</Link>
  </Container>
)

export default Box

