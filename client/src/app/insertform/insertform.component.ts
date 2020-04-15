import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
// import * as $ from '../../../node_modules/jquery/dist/jquery.min.js';
@Component({
  selector: 'app-insertform',
  templateUrl: './insertform.component.html',
  styleUrls: ['./insertform.component.css']
})
export class InsertformComponent implements OnInit {
  user = {
    name: "",
    address: "",
    pan: "",
    dob: ""
  }
  constructor(private service: DataService,private router:Router) { }

  ngOnInit(): void {
    // $( document ).ready(function() {
    //   $( "#datepicker" ).datepicker();
    // });
  }

  addUser() {
    this.service.insertUser(this.user).subscribe((res) => {
      console.log(res);
    })
    alert("User Inserted Successfully!")
    this.router.navigate(['/users']);
  }
}
