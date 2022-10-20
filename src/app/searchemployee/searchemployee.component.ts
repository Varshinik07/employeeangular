import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  employeename=""

  readValues=()=>{
    let data={
      "employeename":this.employeename
    }
    console.log(data)
    this.myapi.serachemployee(data).subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
  data:any=[]
  ngOnInit(): void {
  }

}
