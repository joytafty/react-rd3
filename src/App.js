import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
import rd3 from 'rd3';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

/* 2nd component - barChart*/
var barData = [
  {
    "name": "91130",
    "values": [
      { "x": 10000, "y":  191},
      { "x": 20000, "y": 390},
      { "x": 30000, "y": 725},
      { "x": 40000, "y": 512},
      { "x": 50000, "y": 110},
    ]
  },
  {  
    "name": "94190",
    "values": [
      { "x": 10000, "y":  9},
      { "x": 20000, "y": 190},
      { "x": 30000, "y": 125},
      { "x": 40000, "y": 215},
      { "x": 50000, "y": 30},
    ]
  },
  {  
    "name": "94110",
    "values": [
      { "x": 10000, "y":  91},
      { "x": 20000, "y": 290},
      { "x": 30000, "y": 125},
      { "x": 40000, "y": 15},
      { "x": 50000, "y": 210},
    ]
  }
];

var BarChart = rd3.BarChart;

var BarComp = React.createClass({
  render: function() {
    return  (
      <BarChart
      data={barData}
      width={500}
      height={300}
      title="Price Histogram"
      xAxisLabel="Price Bins"
      yAxisLabel="No. Properties"
      />
  )}
});

ReactDOM.render(
  <BarComp />,
  document.getElementById('bar-chart')
);


/* 3rd component */
var ScatterChart = rd3.ScatterChart;

    var scatterData = [
      {
        name: "series1",
        values: [ { x: 110, y: 20 }, { x: 150, y: 71 }, { x: 800, y: 32 }, { x: 1300, y: 33 }, { x: 1200, y: 10 }, { x: 1310, y: 15 }, { x: 2410, y: 18 }, { x: 2510, y: 15 }, { x: 1610, y: 12 }, { x: 1630, y: 32 }, { x: 1930, y: 30 }, { x: 1477, y: 30 }]
      },
      {
        name: "series2",
        values: [ { x: 400, y: 30 }, { x: 350, y: 37 }, { x: 480, y: 37 }, { x: 1380, y: 33 }, { x: 5200, y: 60 }, { x: 5110, y: 55 }, { x: 5410, y: 48 }, { x: 4510, y: 45 }, { x: 4610, y: 50 }, { x: 6630, y: 55 }, { x: 3930, y: 36 }, { x: 5450, y: 38 }]
      },
      {
        name: "series3",
        values: [ { x: 800, y: 78 }, { x: 7100, y: 158 }, { x: 780, y: 68 }, { x: 1810, y: 47 },{ x: 7200, y: 70 }, { x: 7000, y: 88 }, { x: 8110, y: 110 }, { x: 9210, y: 90 }, { x: 8110, y: 72 }, { x: 9930, y: 95 }, { x: 6730, y: 81 }, { x: 9630, y: 78 }]
      }
    ];

var ScatterComp = React.createClass({
  render: function() {
    return  (
      <ScatterChart
        data={scatterData}
        width={500}
        height={400}
        title="Scatter Chart"
        xAxisLabel="Price ($K)"
        yAxisLabel="Area (Sqrt Ft)"
        domain={{x:[-15,], y:[-15,]}}
      />
  )}
});

ReactDOM.render(
  <ScatterComp />,
  document.getElementById('scatter-chart')
);
export default App;
