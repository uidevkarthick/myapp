import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private login: LoginService, private router:Router) { }

   models = [];


  ngOnInit():void {
  
      this.getEmp();

  }


  getEmp(){
      return this.login.fetchs().subscribe(data=>{

          this.models= data;

      })
  }


  onRegister(e){

    e.preventDefault();
    let target = e.target;
    let username = target.username.value;
    let email = target.email.value;
    let password =  target.pwd.value;

    console.log(password);

    if(username&&email&&password){

      let regAuth = {
        username:username,
        email :email,
        password: password
      }

      this.login.register(regAuth).subscribe(data=>{

          if(data.status != true){
            console.log('data not insterted');
          }else{
            
            window.location.reload();
      
          }


      })

      

    }

  }


 


}
