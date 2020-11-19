import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';
import { AlertsService } from '../service/alerts.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-apoiadores',
  templateUrl: './apoiadores.component.html',
  styleUrls: ['./apoiadores.component.css']
})
export class ApoiadoresComponent implements OnInit {

  email     : string
  emailOk   : boolean = false

  constructor(
    private authService: AuthService,
    private alert: AlertsService
  ) { }

  ngOnInit() {
  }

  validaEmail(){
    const txtEmail = document.getElementById('txtEmail')

    if (this.email.indexOf('@') == -1 || this.email.indexOf('.') == -1) 
    {
        txtEmail.style.color = 'red'
        txtEmail.innerHTML = "Email inválido."
        this.emailOk = false
       
    }
    else
    {
        txtEmail.innerHTML = "Email válido."
        txtEmail.style.color = 'green'
        this.emailOk = true

    }
}
}
