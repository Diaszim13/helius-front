import { Injectable } from '@angular/core';
import { Role } from '../role';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserRole()
  {
    return Role.ADMIN;
  }

}
