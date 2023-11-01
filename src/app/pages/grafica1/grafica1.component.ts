import { Component, OnInit } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css'],
})
export class Grafica1Component {

  public labels1: string[] = ['Label1', 'Label2', 'Label3'];
  public data1: number[] = [500, 400, 100];
}
