import React, { PureComponent } from 'react';
import { Grid } from "@material-ui/core";
import { Grommet, Box } from "grommet";
import { Row, Col } from 'reactstrap';
import Typography from "@material-ui/core/Typography";

class DonutChart extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      saldo: 100,
    };
  }
  render() {
    return (
      <Grommet>
        <div id="chart" className="grommet__container">
          <Box pad="small" elevation="medium">
            <Row>
              <Col lg="12">
                <Typography
                  className="title-chart"
                  variant="h5"
                  align="center"
                  component="p"
                >
                  CARTEIRAL VIRTUAL
              </Typography>
              </Col>
            </Row>
            <Row>
              <Col>
                <Typography
                  className="title-chart"
                  variant="h6"
                  align="center"
                  component="p"
                >
                  Informações
              </Typography>
              </Col>
            </Row>
            <br />
            <Grid item align="center">
            </Grid>
            <Grid item align="center">
              <Typography>R$ {this.state.saldo}</Typography>
              <Typography
                variant="subtitle1"
                component="p"
              >
                Seu saldo atual
            </Typography>
            </Grid>
            <br />
            <Grid item align="center">
              <Typography variant="h6">$ 9.000,00</Typography>
              <Typography
                variant="subtitle1"
                component="p"
              >
                Cotação Bitcoin
            </Typography>
            </Grid>
            <br />
            <Grid item align="center">
              <Typography variant="h6">$ 4,12</Typography>
              <Typography
                variant="subtitle1"
                component="p"
              >
                Cotação Brita
            </Typography>
            </Grid>
          </Box>
        </div>
      </Grommet >
    );
  }
}
export default DonutChart;