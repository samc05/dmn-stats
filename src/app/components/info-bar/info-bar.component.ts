import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-bar',
  templateUrl: './info-bar.component.html',
  styleUrls: ['./info-bar.component.scss']
})
export class InfoBarComponent implements OnInit {
    otherLanguages: any = [
        {
            digital: "17:45",
            hours: 17,
            minutes: 45,
            name: "JSON",
            percent: 2.4,
            text: "17 hrs 45 mins",
            total_seconds: 63942.244038
        },
        {
            digital: "17:34",
            hours: 17,
            minutes: 34,
            name: "SCSS",
            percent: 2.38,
            text: "17 hrs 34 mins",
            total_seconds: 63261.108243
        },
        {
            digital: "7:34",
            hours: 7,
            minutes: 34,
            name: "Smarty",
            percent: 1.02,
            text: "7 hrs 34 mins",
            total_seconds: 27267.475635
        },
        {
            digital: "5:10",
            hours: 5,
            minutes: 10,
            name: "Blade Template",
            percent: 0.7,
            text: "5 hrs 10 mins",
            total_seconds: 18624.734148
        },
        {
            digital: "4:04",
            hours: 4,
            minutes: 4,
            name: "YAML",
            percent: 0.55,
            text: "4 hrs 4 mins",
            total_seconds: 14656.908299
        }
    ]
    constructor() { }

    ngOnInit() {
    }

}
