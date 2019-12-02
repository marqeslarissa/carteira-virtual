import React, { PureComponent } from "react";
import { Container, Row, Col } from "reactstrap";
import DonutChart from "../../components/charts/DonutChart";
import ColumnChart from "../../components/charts/ColumnChart";
import InfoChart from "../../components/charts/InfoChart";

class Dashboard extends PureComponent {
  render() {
    return (
      <Container className="layout__container">
        <Row>
          <Col xs={12} sm={12} md={3} lg={3}>
            <InfoChart />
          </Col>
          <Col xs={12} sm={12} md={4} lg={4}>
            <DonutChart />
          </Col>
          <Col xs={12} sm={12} md={5} lg={5}>
            <ColumnChart />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Dashboard;
