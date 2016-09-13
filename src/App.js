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

/* 1st component - message*/
var HelloMessage = React.createClass({
  render: function() {
    return <h1>Hello {this.props.name}</h1>;
  }
});

ReactDOM.render(
  <HelloMessage name="Joy" />,
  document.getElementById('example')
);

/* 2nd component - barChart*/
var barData = [
  {
    "name": "Series A",
    "values": [
      { "x": 1, "y":  91},
      { "x": 2, "y": 290},
      { "x": 3, "y": -25},
    ]
  },
  {  
    "name": "Series B",
    "values": [
      { "x": 1, "y":  9},
      { "x": 2, "y": 49},
      { "x": 3, "y": -20},
    ]
  },
  {  
    "name": "Series C",
    "values": [
      { "x": 1, "y":  14},
      { "x": 2, "y": 77},
      { "x": 3, "y": -70},
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
      title="Bar Chart"
      xAxisLabel="Value"
      yAxisLabel="Label"
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
        values: [ { x: 0, y: 20 }, { x: 5, y: 7 }, { x: 8, y: 3 }, { x: 13, y: 33 }, { x: 12, y: 10 }, { x: 13, y: 15 }, { x: 24, y: 8 }, { x: 25, y: 15 }, { x: 16, y: 10 }, { x: 16, y: 10 }, { x: 19, y: 30 }, { x: 14, y: 30 }]
      },
      {
        name: "series2",
        values: [ { x: 40, y: 30 }, { x: 35, y: 37 }, { x: 48, y: 37 }, { x: 38, y: 33 }, { x: 52, y: 60 }, { x: 51, y: 55 }, { x: 54, y: 48 }, { x: 45, y: 45 }, { x: 46, y: 50 }, { x: 66, y: 50 }, { x: 39, y: 36 }, { x: 54, y: 30 }]
      },
      {
        name: "series3",
        values: [ { x: 80, y: 78 }, { x: 71, y: 58 }, { x: 78, y: 68 }, { x: 81, y: 47 },{ x: 72, y: 70 }, { x: 70, y: 88 }, { x: 81, y: 90 }, { x: 92, y: 80 }, { x: 81, y: 72 }, { x: 99, y: 95 }, { x: 67, y: 81 }, { x: 96, y: 78 }]
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
        domain={{x:[-15,], y:[-15,]}}
      />
  )}
});

ReactDOM.render(
  <ScatterComp />,
  document.getElementById('scatter-chart')
);
export default App;
