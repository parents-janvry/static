import React from 'react'
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Row,
  Section,
  Text,
} from '@react-email/components'

import style from '../style'

const Conseil = () => {
  return (
    <Html>
      <Head />
      <Body style={style.body}>
        <Container style={style.container}>
          <Section style={style.section}>
            <Row>
              <Column align='center'>
                <Img
                  src='https://parents-janvry.github.io/static/header.png'
                  style={style.headerImg}
                  alt='entête'
                />
              </Column>
            </Row>
            <Text style={style.title}>Conseil d'école</Text>
            <Hr style={style.line} />
            <Text style={style.paragraph}>Chers Parents,</Text>
            <Text style={style.paragraph}>
              Le premier Conseil d'école de l'année se déroulera jeudi 9
              Novembre au sein de l'école.
            </Text>
            <Text style={style.paragraph}>
              Seront présents la directrice, les enseignants, Monsieur le Maire,
              le Conseiller municipal élu aux affaires scolaires ainsi que les
              représentants des parents d'élèves. Cette assemblée prend des
              décisions importantes au sujet de l'organisation de l'école
              (composition, fonctionnement, ...).
            </Text>
            <Text style={style.paragraph}>
              C'est pourquoi nous vous demandons de nous transmettre avant jeudi
              19 Octobre en réponse à ce mail toute question ou remarque
              concernant l'école ou le périscolaire que vous auriez.
            </Text>
            <Text style={style.paragraph}>
              Le compte-rendu du conseil d'école sera disponible dans les jours
              suivant.
            </Text>
            <Text style={style.paragraph}>A bientôt.</Text>
            <Text style={style.paragraph}>Les parents délégués.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default Conseil
