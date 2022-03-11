import { Component, OnInit } from '@angular/core';
import { FormBuilder, Form, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
register:any=FormBuilder;
submitted:boolean=false;
id:number=4;
  constructor(private fb:FormBuilder,private router:Router,private auth:AuthserviceService) { }

  ngOnInit(): void {
    this.register=this.fb.group({
      name:['',Validators.compose([Validators.required,Validators.pattern('[a-zA-Z]+$')])],
      email:['',Validators.compose([Validators.required,Validators.email])],
      password:['',Validators.compose([Validators.required,Validators.pattern("^[a-z0-9._%+-]{8,16}")])],
      mobilenumber:['',Validators.compose([Validators.required,Validators.pattern('[0-9]{10}$')])],
    })
  }

  get name()
  {
    return this.register.get('name')
  }

get email()
{
  return this.register.get('email')
}

get mobilenumber()
{
  return this.register.get('mobilenumber')
}


get password()
{
  return this.register.get('password')
}

  registerSubmit(item:any)
  {
    
    console.log(item);
    // let dataToPass={
    //   name:data.name,
    //   email:data.email,
    //   password:data.password,
    //   mobilenumber:data.mobilenumber,
    //   id:this.id++

    // }
  
      this.auth.addUser(item).subscribe((data:any)=>
      {
        console.log(data);
        // this.submitted=true;
      })
    
      
    
    
  }

  goToLogin()
  {
    this.router.navigate(['login']);
  }


}
