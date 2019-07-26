import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

    barChartData = {
        labels: ['Javascript', 'PHP', 'Vue.js', 'TypeScript'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: 'rgb(241, 101, 41)',
            data: [
                1,2,3,4
            ]
        }, {
            label: 'Dataset 2',
            backgroundColor: 'rgb(71, 74, 138)',
            data: [
                1,2,3,4
            ]
        }, {
            label: 'Dataset 3',
            backgroundColor: 'rgb(240, 219, 79)',
            data: [
                1,2,3,4
            ]
        }]
    };

    constructor() { }

    ngOnInit() {
        // let defaultDataSet = this.getDefaultDataSet();

        // for(let i = 0; i < this.data.length; i++) {

        //     this.statistics.labels.push(this.data[i].name);
        //     defaultDataSet.data.push(this.data[i].hours); 
        //     defaultDataSet.backgroundColor.push(this.data[i].background_colour);
        // }
        // this.statistics.datasets.push(defaultDataSet);          

        let chart = this.prepareChart();
    }

    getDefaultDataSet() {
        return {
            labels: [],
            data: [],
            backgroundColor: [],
        }
    }

    prepareChart() {
        const ctx = document.getElementById('barChart');
        return new Chart(ctx, {
            type: 'bar',
            data: this.barChartData,
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    }
}
