import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './home/home/home.component';
import { ChartComponent } from './chart/chart/chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxEchartsModule} from "ngx-echarts";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule} from "@angular/forms";
import {CommunicationService} from "./communication.service";
import { TableComponent } from './table/table/table.component';
import {MatTableModule} from "@angular/material/table";
import {MaterialModule} from "./material/material.module";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartComponent,
    // Работа с таблицей
     TableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    FormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MaterialModule
  ],
  providers: [CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
