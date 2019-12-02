import React, { PureComponent } from 'react';
import Chart from "react-apexcharts";
import { Grommet, Box } from "grommet";
import { Row } from 'reactstrap';
import Typography from "@material-ui/core/Typography";

const colorschart = ['#abeb65', '#a565ea'];

class DonutChart extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      series: [10, 70],
      options: {
        labels: ['Brita', 'Bitcoin'],
        colors: colorschart,
        legend: {
          position: 'bottom',
          fontSize: '14px'
        },
        chart: {
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true
            }
          }
        },
        plotOptions: {
          pie: {
            donut: {
              size: '55%'
            },
            customScale: 0.8 //tamanho do donut
            // size: 100
          },
        },
        tooltip: {
          style: {
            fontSize: '18px'
          },
        },
        dataLabels: {
          style: {
            fontSize: '15px',
            colors: ['#000']
          },
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 80,
              height: 200
            },
          }
        }],
        fill: {
          opacity: 1
        },
      }
    }
  }
  render() {
    return (
      <Grommet>
        <div id="chart" className="grommet__container">
          <Box pad="small" elevation="medium">
            <div className="title-chart">
              <Row>
                <Typography variant="h6">Seus Investimentos</Typography>
              </Row>
              <Typography variant="subtitle1">Em porcentagem</Typography>
            </div>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="donut"
              height="300"
            />
          </Box>
        </div>
      </Grommet>
    );
  }
}
export default DonutChart;