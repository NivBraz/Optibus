import { Component, OnInit } from '@angular/core';
import { DrivesData } from "../data/jsonData";
import { Drive } from '../models/drive.model';
import { HomeService } from "./home.service"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   public hours:Array<number> = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
   public data:Array<Drive> = [];
   private length = 25;

   constructor(private dynamicData:HomeService,
               private staticData:DrivesData) { }

   ngOnInit() {
        this.data = this.staticData.generateArray();
        this.setHours();
   }

   public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
   };
   //
   public barChartLabels:string[] = ['01:00', '02:00', '03:00', '04:00','05:00', '06:00', '07:00','08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'];
   public barChartType:string = 'bar';    
   public barChartLegend:boolean = true;
 
   public barChartData:any[] = [
    {data: this.hours, label: 'Bus Info'}
   ];
 
   // events
   public chartClicked(e:any):void {
    console.log(e);
   }
 
   public chartHovered(e:any):void {
    console.log(e);
   }
 
   public refresh():void {
    this.dynamicData.getData().then((dat) => {
      this.data = dat;
      this.setHours();
    });
    //let clone = JSON.parse(JSON.stringify(this.barChartData));
    let foo:any[]=[this.barChartData[0]]
    
    //clone[0].data = this.hours;
    this.barChartData = foo;
  }

  public setHours():void {
    for(let j in this.hours){
      this.hours[j]=0;
    }
    for(let i of this.data){
          let sTime =  new Date(i.startTime);
          let eTime =  new Date(i.endTime);
          let s = sTime.getUTCHours();
          let e = eTime.getUTCHours();
        do {
           this.hours[s-1]++;
           s++;
        }
        while (s <= e);          
      }
  }

}
