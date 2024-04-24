import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';

@Component({
    selector: 'auth-component',
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.css'
})

export class AuthComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    public auth: Auth={
        user: '',
        password: ''
    }
    Login(){
  
        this.router.navigate(['/dashboard']);
    }
}