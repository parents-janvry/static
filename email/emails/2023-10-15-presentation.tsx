import React from 'react'
import {
  Body,
  Column,
  Container,
  Head,
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

const Presentation = () => {
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
            <Text style={style.paragraph}>Chers Parents,</Text>
            <Text style={style.paragraph}>
              Cette semaine, vous avez été conviés à élire l'équipe des parents
              délégués qui vous accompagneront durant cette année scolaire. Le
              dépouillement à eu lieu ce vendredi et vous nous avez choisi (Le
              choix était difficile 😀) pour vous représenter.
            </Text>
            <Text style={style.paragraph}>
              Voici une petite présentation de l'équipe pour que vous puissiez
              nous identifier facilement. N'hésitez surtout pas à nous
              solliciter par{' '}
              <Link style={style.link} href='mailto:parents.janvry@gmail.com'>
                email
              </Link>{' '}
              ou directement devant le portail de l'école.
            </Text>
            <Section style={columns}>
              <Row>
                <Column style={column} align='center' valign='top'>
                  <Img
                    src='https://parents-janvry.github.io/static/narimane.png'
                    alt='narimane'
                    style={columnImg}
                  />
                  <Text style={columnText}>Narimane DJEBIRET</Text>
                  <Text style={columnTextLatest}>Lila (CE2), Largo (PS)</Text>
                </Column>
                <Column style={column} align='center' valign='top'>
                  <Img
                    src='https://parents-janvry.github.io/static/magali.png'
                    alt='magali'
                    style={columnImg}
                  />
                  <Text style={columnText}>Magali BEAUMONT</Text>
                  <Text style={columnTextLatest}>Enola (CE1), Maeli (CP)</Text>
                </Column>
                <Column style={column} align='center' valign='top'>
                  <Img
                    src='https://parents-janvry.github.io/static/esma.png'
                    alt='esma'
                    style={columnImg}
                  />
                  <Text style={columnText}>Esma BENTCHIKOU</Text>
                  <Text style={columnTextLatest}>Elea (CM2), Fanny (CP)</Text>
                </Column>
              </Row>
              <Row>
                <Column style={column} align='center' valign='top'>
                  <Img
                    src='https://parents-janvry.github.io/static/stephanie.png'
                    alt='stephanie'
                    style={columnImg}
                  />
                  <Text style={columnText}>Stéphanie ZOPPELLO</Text>
                  <Text style={columnTextLatest}>Stella (CE2)</Text>
                </Column>
                <Column style={column} align='center' valign='top'>
                  <Img
                    src='https://parents-janvry.github.io/static/audrey.png'
                    alt='audrey'
                    style={columnImg}
                  />
                  <Text style={columnText}>Audrey GERAULT</Text>
                  <Text style={columnTextLatest}>Simon (GS)</Text>
                </Column>
                <Column style={column} align='center' valign='top'>
                  <Img
                    src='https://parents-janvry.github.io/static/celine.png'
                    alt='celine'
                    style={columnImg}
                  />
                  <Text style={columnText}>Céline HAAS</Text>
                  <Text style={columnTextLatest}>Livia (CE1), Enzo (MS)</Text>
                </Column>
              </Row>
            </Section>
            <Text style={style.paragraph}>
              Vous recevrez lorsqu'il sera nécessaire une "Lettre d'information"
              pour vous communiquer les événements, activités ou informations
              qui auront lieu tout au long de l'année.
            </Text>
            <Text style={style.paragraph}>Passez une excellente semaine!</Text>
            <Text style={style.paragraph}>Les parents délégués.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

export default Presentation
