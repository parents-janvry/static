import React from 'react'
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Row,
  Section,
  Text,
} from '@react-email/components'

import style from '../style'

const columns: React.CSSProperties = {
  paddingTop: '16px',
}

const column: React.CSSProperties = {
  width: '30%',
}

const columnImg: React.CSSProperties = {
  maxWidth: '80%',
  maxHeight: '160px',
}

const columnText: React.CSSProperties = {
  color: '#677876',
  margin: '8px 0',
}

const columnTextLatest: React.CSSProperties = {
  color: '#677876',
  margin: '0',
  marginBottom: '16px',
}

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
              Il est composé de la directrice, des enseignants, de Monsieur le
              Maire, du Conseiller municipal élu ainsi que les représentants des
              parents d'élèves. Cette assemblée prend des décisions importantes
              au sujet l'organisation de l'école (composition, fonctionnement,
              décisions).
            </Text>
            <Text style={style.paragraph}>
              C'est pourquoi nous vous demandons de nous transmettre avant jeudi
              19 Octobre en réponse à ce mail toute question concernant l'école
              ou le périscolaire que vous auriez.
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
