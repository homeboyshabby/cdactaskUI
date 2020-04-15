import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showlist',
  templateUrl: './showlist.component.html',
  styleUrls: ['./showlist.component.css']
})
export class ShowlistComponent implements OnInit {
  allUsers:any;
  updateId = {
    id:"",
  }
  constructor(private service:DataService,private router:Router) { }

  ngOnInit(): void {
    this.service.showUsers().subscribe((res)=>{
      console.log(res);
      this.allUsers = res;
    })
  }

  updateUser(id)
  {
    // alert(id);
    sessionStorage.setItem("id",id);
    this.router.navigate(['/update'])
    
  }

  deleteUser(id)
  {
    this.service.deleteUser(id).subscribe((res)=>{
      console.log(res);
    })
    alert("User deleted!")
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/users']);
    });
  }

}
