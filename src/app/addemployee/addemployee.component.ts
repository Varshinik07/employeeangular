import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }
employeename=""
employeecode=""
address=""
salary=""
companyname=""
doj=""

readValues=()=>{
let data={
  "employeename":this.employeename,
  "employeecode":this.employeecode,
  "address":this.address,
  "salary":this.salary,
  "companyname":this.companyname,
  "doj":this.doj
}
console.log(data)
this.myapi.addemployee(data).subscribe(
  (response)=>{
    alert("addes successfully")
  }
)
}



  ngOnInit(): void {
  }

}
