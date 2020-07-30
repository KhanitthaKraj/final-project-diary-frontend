import React, { Component } from 'react'
import {Bar} from 'react-chartjs-2';

const moodsURL = 'http://localhost:3000/moods';

export default class MoodsChart extends Component {
    state = {
        labels: [],
        datasets: [
          {
            backgroundColor: 'lightgray',
            borderColor: 'none',
            borderWidth: 2,
            data: [18, 20, 18, 5, 8, 2, 25, 30]
          }
        ]
    }

    componentDidMount() {
        fetch(moodsURL)
          .then((response) => response.json())
          .then((moodsListData) => this.setState({ labels: moodsListData.map((mood) => mood.mood_name)}));
    }

    render() {
        return (
            <div>
                <Bar
                    width={70}
                    height={40}
                    data={this.state}
                    options={{
                        legend:{
                            display:false
                        },
                        scales: {
                            yAxes: [{
                                stacked: true,
                                ticks: {
                                  min: 1,
                                  beginAtZero: false,
                                //   display: false
                                },
                                gridLines: {
                                    // display: false
                                  }
                            }],
                            xAxes: [{
                                stacked: true,
                                gridLines: {
                                  display: false
                                }
                            }]
                          }
                    }}                    
                />
            </div>
        )
    }
}