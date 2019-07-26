import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.scss']
})

export class PieChartComponent implements OnInit {

    statistics: any = {
        labels: [],
        datasets: [],
        backgroundColor: [],
    };

    data: any = [
        {
            digital: "209:55",
            hours: 209,
            minutes: 55,
            name: "JavaScript",
            percent: 28.4,
            text: "209 hrs 55 mins",
            total_seconds: 755742.289462,
            background_colour: 'rgb(240, 219, 79)'
        },
        {
            digital: "178:38",
            hours: 178,
            minutes: 38,
            name: "PHP",
            percent: 24.17,
            text: "178 hrs 38 mins",
            total_seconds: 643108.863906,
            background_colour: 'rgb(71, 74, 138)'
        },
        {
            digital: "131:31",
            hours: 131,
            minutes: 31,
            name: "Vue.js",
            percent: 17.79,
            text: "131 hrs 31 mins",
            total_seconds: 473518.149795,
            background_colour: 'rgb(65, 184, 131)'
        },
        {
            digital: "89:55",
            hours: 89,
            minutes: 55,
            name: "HTML",
            percent: 12.16,
            text: "89 hrs 55 mins",
            total_seconds: 323713.054958,
            background_colour: 'rgb(241, 101, 41)'
        },
        {
            digital: "70:39",
            hours: 70,
            minutes: 39,
            name: "TypeScript",
            percent: 9.56,
            text: "70 hrs 39 mins",
            total_seconds: 254391.478872,
            background_colour: 'rgb(0, 122, 204)'
        },
    ]

    constructor() { }

    ngOnInit() {
        let defaultDataSet = this.getDefaultDataSet();

        for(let i = 0; i < this.data.length; i++) {

            this.statistics.labels.push(this.data[i].name);
            defaultDataSet.data.push(this.data[i].hours); 
            defaultDataSet.backgroundColor.push(this.data[i].background_colour);
        }
        this.statistics.datasets.push(defaultDataSet);          

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
        const ctx = document.getElementById('myChart');
        return new Chart(ctx, {
            type: 'pie',
            data: this.statistics,
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
