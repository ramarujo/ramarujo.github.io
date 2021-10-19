import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

`

const Box = () => (
  <Container>
  <h1>EXPERIÊNCIA</h1>
    <div class="box">
      <h2 class="mt42">Desenvolvedora Front-end Júnior</h2>
      <div class="company">
        <h3>SOCIAL MINER</h3>
        <h4>Abril 2019 - Atual</h4>
      </div>
      <p>
        Desenvolvimento e manutenção das aplicações web que compõem o
        ecossistema SAAS da Social Miner, utilizando framework SCRUM e
        desenvolvendo conhecimentos em Angular e ReactJs.
      </p>
    </div>
    <div class="box">
      <h2 class="mt42">Estágio em Desenvolvimento</h2>
      <div class="company">
        <h3>SOCIAL MINER</h3>
        <h4>Maio 2018 - Abril 2019</h4>
      </div>
      <p>
        Auxílio na manutenção das aplicações e manutenção do site da
        empresa. Auxílio na interação da área de produto realizando testes
        manuais das features entregues pelos desenvolvedores e com a área de
        desenvolvimento relacionando toda regra de negócio da empresa.
      </p>
    </div>
    <div class="box">
      <h2 class="mt42">Programadora Trainee</h2>
      <div class="company">
        <h3>ASSECONT TECNOLOGIA</h3>
        <h4>Outubro 2017 - Abril 2018</h4>
      </div>
      <p>
        Prestar manutenção em sistema de controle de atendimento, auxiliar
        na manutenção no site da empresa e adaptar comunicadores de relógio
        de ponto para funcionamento dentro do sistema de tratamento de
            ponto.
      </p>
    </div>
    <Link to="/interests">INTERESSES</Link>
  </Container>
)

export default Box