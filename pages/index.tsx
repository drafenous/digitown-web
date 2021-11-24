import { H1, H2, Row, Col } from "@bootstrap-styled/v4";
import { NextPage } from "next";
import { Layout } from "../components";

const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <H2>Entradas hoje</H2>
            <H2>321</H2>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <H2>Saídas hoje</H2>
            <H2>321</H2>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <H2>Visitas agendadas hoje</H2>
            <H2>321</H2>
          </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </>
    </Layout>
  );
};

export default Home;
