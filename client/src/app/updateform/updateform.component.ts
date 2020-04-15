import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {
  user:any;
  singleuser={
    name:"",address:"",pan:"",dob:""
  }
  constructor(private service:DataService,private router:Router) { }

  ngOnInit(): void {
    this.service.getSingleUser(parseInt(sessionStorage.getItem("id"))).subscribe((res)=>{
      console.log(res);
      this.user = res;
      this.singleuser=this.user;
    })
  }
  
  updateUser()
  {
    this.service.update(this.singleuser).subscribe((res)=>{
      console.log(res);
      alert("profile updated successfully");
      this.router.navigate(['/users']);
    })
  }

}
