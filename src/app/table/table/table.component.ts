import {Component, Input} from '@angular/core';
//import {Post} from "../../app.component";

export interface Data {
  id: number;
  name: string;
  value: number;
  time: number;
  indexOfValues: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

//родительский элемент
const ELEMENT_DATA: Data[] = [
  {id: 1, name: 'I', value: 5, time: 154,indexOfValues: 1},
  {id: 2, name: 'I', value: 5, time:154,indexOfValues: 2}
];

export class TableComponent {
  //не получилось
 // @Input('post') posts: Post[];
  @Input('post') posts: any;

  displayedColumns: string[] = ['id', 'name', 'value', 'time', 'indexOfValues'];
  dataSource = ELEMENT_DATA;
}
