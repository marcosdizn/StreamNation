import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { SessionState } from '../models/session-state.model';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  readonly endpoint = "http://localhost:4500/usuarios/"

  constructor(private http: HttpClient) { }

  registrarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.endpoint + 'register', usuario)
  }

  loginUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.endpoint + 'login', usuario)
  }

  logoutUsuario(sessionState: SessionState): Observable<any> {
    return this.http.post(this.endpoint + 'logout', sessionState)
  }
}