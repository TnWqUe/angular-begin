import { Component, Input} from '@angular/core';
import {EChartsOption} from "echarts";
import {Post} from "../../app.component";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  options: EChartsOption
  @Input('post') post: Post[];
  //mypost: Post[]=[]
  constructor() {
    if ( typeof this.post !== undefined) {
      //  this.mypost = this.post;
      console.log(this.post);
      const xAxisData = [];
      const data1 = [];
       for (let i = 0; i < this.post.length; i++) {
           xAxisData.push(this.post[i].indexOfValues);
           data1.push(this.post[i].value);
        }
/*
      this.options = {
        legend: {
          data: ['bar', 'bar2'],
          align: 'left',
        },
        tooltip: {},
        xAxis: {
          data: xAxisData
        },
        yAxis: {},
        series: [
          {
            name: 'line 1',
            type: 'line',
            data: data1
            // animationDelay: (idx) => idx * 10,
          }

        ],
        animationEasing: 'elasticOut'//,
          animationDelayUpdate: (idx) => idx * 5,
      }*/
    }
  }
}

