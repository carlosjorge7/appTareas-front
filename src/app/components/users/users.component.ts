import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.usersService.getUsers()
      .subscribe(res => {
        this.users = res;
        console.log(this.users)
    }, err => console.log(err))
  }

  deteleUser(id: any) {
    Swal.fire({
      title: '¿eliminar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.usersService.deleteUser(id)
            .subscribe((res: any) => {
              console.log(res)
              Swal.fire(
                'Borrado!',
                res['message'],
                'success'
              );
              this.getUsers();
          })
        }
    });
    
  }

}
