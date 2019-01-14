import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../crud.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private crudservice: CrudService) { }

  ngOnInit() {
  }

  createUser() {
    this.crudservice.setter(new User());
    this.router.navigate(['/createUpdate']);
  }

}
