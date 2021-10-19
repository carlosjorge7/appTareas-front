import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UsersService} from '../../services/users.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = {
    _id: '',
    name: '',
    email: '',
    password: ''
  }

  update: boolean = false;

  constructor(private usersService: UsersService,
              private activedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params; // aqui va el id
    const idUser = params.id; // params['id']
    if(idUser) {
      this.usersService.getUser(idUser)
        .subscribe((res: any) => {
          this.user = res;
          console.log(this.user)
          this.update = true;
        }, err => console.log(err))
    }
  }

  createUser() {
    if(this.user.name == ''){
      Swal.fire('El campo nombre es obligatorio');
    }
    else{
      this.usersService.createUser(this.user)
      .subscribe((res: any) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Usuario creado',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/users']);
      }, err => console.log(err))
    }
  }

  updateUser() {
    this.usersService.updateUser(this.user._id, this.user)
      .subscribe((res: any) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: res['message'],
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/users']);
    })
  }

}
