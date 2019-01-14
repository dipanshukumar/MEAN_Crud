import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../../crud.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {

  user: User;
  constructor(private router: Router, private crudservice: CrudService) { }

  ngOnInit() {
    this.user = this.crudservice.getter();
  }

  createorUpdate() {
    if (this.user._id === undefined) {
      this.crudservice.createUser(this.user).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        }
      );
    } else {
      this.crudservice.editUser(this.user).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
