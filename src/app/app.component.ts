import {Component, OnInit} from '@angular/core';
import {CommunicationService} from "./communication.service";

export interface Post {
  id: number;
  name: string;
  value: number;
  time: number;
  indexOfValues: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public posts: Post[]=[];

  constructor(private communicationService: CommunicationService) { }
  ngOnInit(): void {
    this.communicationService.getPosts().subscribe((data: Post[])=>{
    //  console.log(data);
      this.posts=data;
    })
  }
}
