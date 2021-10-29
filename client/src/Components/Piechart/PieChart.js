import React from 'react';
import {Pie} from 'react-chartjs-2';

const state = {
  labels: ['Food','Shopping','Gifts'],
  datasets: [
    {
      label: 'Expenses',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      ],
      data: [65, 59, 80,4,4,2]
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          options={{
            title:{
              display:true,
              text:'Expenses in a month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}