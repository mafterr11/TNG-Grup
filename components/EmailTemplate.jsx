import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const EmailTemplate = ({
  nume,
  prenume,
  email,
  telefon,
  constructie,
  judet,
  inceput,
  mesaj,
}) => {

  return (
    <Html>
      <Head />
      <Preview>Solicitare noua de oferta - TNG GRUP</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={global.defaultPadding}>
            <Heading style={global.heading}>
              Solicitare noua de oferta - TNG 
            </Heading>
            <Text style={global.text}>
              Nume complet: {nume} {prenume}
            </Text>
            <Text style={{ ...global.text, marginTop: 4 }}>Email: {email}</Text>
            <Text style={{ ...global.text, marginTop: 4 }}>
              Telefon: {telefon}
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={{ ...global.text }}>
              Tipul de construcție: {constructie}
            </Text>
            <Text style={{ ...global.text }}>În ce județ: {judet}</Text>
            <Text style={{ ...global.text }}>
              Când vrem să începem: {inceput}
            </Text>
          </Section>
          <Hr style={global.hr} />
          <Section style={global.defaultPadding}>
            <Text style={track.number}>Mesaj: {mesaj}</Text>
            <Text style={track.number}>
              Odată cu primirea acestui email, utilizatorul {nume} {prenume}{" "}
              declară că este de acord cu GDPR-ul.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;

const paddingX = {
  paddingLeft: "40px",
  paddingRight: "40px",
};

const paddingY = {
  paddingTop: "22px",
  paddingBottom: "22px",
};

const paragraph = {
  margin: "0",
  lineHeight: "2",
};

const global = {
  paddingX,
  paddingY,
  defaultPadding: {
    ...paddingX,
    ...paddingY,
  },
  paragraphWithBold: { ...paragraph, fontWeight: "bold" },
  heading: {
    fontSize: "32px",
    lineHeight: "1.3",
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: "-1px",
  },
  text: {
    ...paragraph,
    color: "#747474",
    fontWeight: "500",
  },
  button: {
    border: "1px solid #929292",
    fontSize: "16px",
    textDecoration: "none",
    padding: "10px 0px",
    width: "220px",
    display: "block",
    textAlign: "center",
    fontWeight: 500,
    color: "#000",
  },
  hr: {
    borderColor: "#E5E5E5",
    margin: "0",
  },
};

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "10px auto",
  width: "600px",
  maxWidth: "100%",
  border: "1px solid #E5E5E5",
};

const track = {
  container: {
    padding: "22px 40px",
    backgroundColor: "#F7F7F7",
  },
  number: {
    margin: "12px 0 0 0",
    fontWeight: 500,
    lineHeight: "1.4",
    color: "#6F6F6F",
  },
};

const messageStyle = {
  padding: "40px 74px",
  textAlign: "center",
};
