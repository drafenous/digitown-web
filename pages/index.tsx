import {
  Col, H2, Row, Table, Tbody,
  Td, Th, Thead,
  Tr
} from "@bootstrap-styled/v4";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { Layout } from "../components";
import httpClient from "../services/httpClient";

const Home: NextPage = () => {
  const [requestScheduleData, setRequestScheduleData] = useState<any[]>();
  const [requestScheduleCount, setRequestScheduleCount] = useState(0);
  const [requestPendingData, setRequestPendingData] = useState<any[]>();
  const [requestPendingCount, setRequestPendingCount] = useState(0);
  const [requestEntranceData, setRequestEntranceData] = useState<any[]>();
  const [requestEntranceCount, setRequestEntranceCount] = useState(0);

  const requestSchedule = async (userData: any) => {
    const res = await httpClient.get('/dashboard/todaySchedule', { params: { companyName: userData.enterpriseName } })
    setRequestScheduleData(Object.values(res.data));
    setRequestScheduleCount(Object.keys(res.data).length)
  }

  const requestPending = async (userData: any) => {
    const res = await httpClient.get('/dashboard/todayPending', { params: { companyName: userData.enterpriseName } })
    setRequestPendingData(Object.values(res.data));
    setRequestPendingCount(Object.keys(res.data).length)
  }

  const requestEntrance = async (userData: any) => {
    const res = await httpClient.get('/dashboard/todayEntrance', { params: { companyName: userData.enterpriseName } })
    setRequestEntranceData(Object.values(res.data));
    setRequestEntranceCount(Object.keys(res.data).length)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const ls = localStorage.getItem("auth")
      const userData = ls && JSON.parse(ls);
      requestSchedule(userData);
      requestPending(userData);
      requestEntrance(userData);
    }
  }, [])

  return (
    <Layout>
      <>
        <Row style={{ marginTop: '5rem' }}>
          <Col style={{ textAlign: "center" }}>
            <H2>Agendamentos hoje</H2>
            <H2>{requestScheduleCount}</H2>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <H2>Entradas Pendentes hoje</H2>
            <H2>{requestPendingCount}</H2>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <H2>Entradas hoje</H2>
            <H2>{requestEntranceCount}</H2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table style={{ backgroundColor: '#fff', borderRadius: '3px', marginTop: '5rem' }}>
              <Thead>
                <Tr>
                  <Th>Nome Completo</Th>
                  <Th>Data</Th>
                  <Th>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                {requestScheduleData?.map((schedule, i) => (
                  <Tr key={i}>
                    <Td>{schedule.fullName}</Td>
                    <Td>{schedule.datetime}</Td>
                    <Td>{schedule.status === 0 ? 'Pendente' : 'Entrou'}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Col>
          <Col>
            <Table style={{ backgroundColor: '#fff', borderRadius: '3px', marginTop: '5rem' }}>
              <Thead>
                <Tr>
                  <Th>Nome Completo</Th>
                  <Th>Data</Th>
                </Tr>
              </Thead>
              <Tbody>
                {requestPendingData?.map((schedule, i) => (
                  <Tr key={i}>
                    <Td>{schedule.fullName}</Td>
                    <Td>{schedule.datetime}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Col>
          <Col>
            <Table style={{ backgroundColor: '#fff', borderRadius: '3px', marginTop: '5rem' }}>
              <Thead>
                <Tr>
                  <Th>Nome Completo</Th>
                  <Th>Data</Th>
                </Tr>
              </Thead>
              <Tbody>
                {requestEntranceData?.map((schedule, i) => (
                  <Tr key={i}>
                    <Td>{schedule.fullName}</Td>
                    <Td>{schedule.datetime}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Col>
        </Row>
      </>
    </Layout>
  );
};

export default Home;
