import { Component, OnInit } from '@angular/core';
import { UserdetailsService } from '../userdetails.service';
import { FormGroup, Validators, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  users:any={};
    ans:any={};
  name:string="njxjs";
  formSubmitted:boolean=false;
  lastval:any={};
  
    ngOnInit(): void {
    }
    //get data
    constructor(private _userDetails:UserdetailsService)
    {
    
      this._userDetails.users().subscribe((data:any)=>
      {
        this.users=data;
        console.log(data)
        this.lastval=this.users[this.users.length-1];
        console.log(this.lastval);
        
      })
    }
    //post data
    getUserDetails(item:any)
    {

      this.formSubmitted=true;
      console.log(item)
      this._userDetails.saveUser(item).subscribe((data:any)=>
      {
        window.location.reload();
        console.log(data)
       
      })
    }
  
  
    // getUserDetails(data:NgForm)
    // {
    //   this.formSubmitted=true;
    //  this.ans=data;
    // }
  
  //delete data
  
  deleteData(item:any) {
  
    console.log(item)
    this._userDetails.deleteUser(item).subscribe((data:any) => {
      window.location.reload();
      console.log(data)
    })
    // alert('deleted successfully')
  }

  
  
    
  }
  