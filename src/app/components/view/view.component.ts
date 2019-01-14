import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';
import { User } from '../../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  users: User[];
  constructor( private _crudService: CrudService, private router: Router) { }

  ngOnInit() {
    this.readUsers();
  }

  readUsers() {
   this._crudService.readUsers().subscribe(
     data => {
        console.log(data);
        this.users = data['msg'];
     },
     error => {
       console.log(error);
     }
   );
  }

  update(user) {
  this._crudService.setter(user);
  this.router.navigate(['/createUpdate']);
  }

  delete(user) {
  this._crudService.deleteUser(user._id).subscribe(
    data => {
     this.users.splice(this.users.indexOf(user), 1);
    },
    error => {
      console.log(error);
    }
  );
  }




}
