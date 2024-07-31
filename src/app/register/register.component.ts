import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { username: '', email: '', password: '', role: '' };

  constructor(private authService: AuthService , router:Router,private route: ActivatedRoute) { }

  register() {
    this.authService.register(this.user).subscribe(response => {
      console.log(response);
    }, error => {
      console.error(error);
    });
    
  }
}
