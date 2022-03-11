import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:any=FormGroup;
users:any=[];
submitted:boolean=false;
  constructor(private fb:FormBuilder,private router:Router,private auth:AuthserviceService) {
   
   }

  ngOnInit(): void {
    this.login=this.fb.group({
      name:['',Validators.required],
 password:['',Validators.required]
    })
    this.auth.getUser().subscribe((data:any)=>
    {
       this.users=data;
    })
  }

  loginSubmit(data:any)
  {
    this.submitted=true;
    if(data.name)
    {
      this.users.forEach((item:any) => {
        // console.log(item)
        if(item.name === data.name && item.password === data.password)
        {
          localStorage.setItem("isLoggedIn","true");
          this.router.navigate(['home'])
        }  
        // else{
        //  localStorage.clear();
        // }
      });
  }
  console.log(this.submitted)
  }
  

  goToSignup()
  {
     this.router.navigate(['signup']);
  }

}
