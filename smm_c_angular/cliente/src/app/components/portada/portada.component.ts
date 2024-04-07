import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MenuItem } from 'primeng/api';
import { SessionState } from 'src/app/models/session-state.model';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/api.usuario.service';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css'],
})

export class PortadaComponent extends BaseComponent {
  modalForm: FormGroup
  modalOption = true // true = registro; false = login
  usuario = {} as Usuario
  sessionState = {} as SessionState

  constructor(
    private formBuilder: FormBuilder,
    activatedRoute: ActivatedRoute,
    private usuarioService: UsuarioService,
    private toastrService: ToastrService
  ) {
    super(activatedRoute)
    this.sessionState.userName = this.router.getCurrentNavigation()?.extras?.state?.['userName'];
    this.sessionState.loggedIn = this.router.getCurrentNavigation()?.extras?.state?.['loggedIn'];
    this.modalForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      contrasena: ['', Validators.required]
    })
  }

  openModel() {
    const modelDiv = document.getElementById('myModal')
    if (modelDiv != null) {
      modelDiv.style.display = 'block'
    }
  }

  closeModel() {
    const modelDiv = document.getElementById('myModal')
    if (modelDiv != null) {
      modelDiv.style.display = 'none'
    }
  }

  cambiaModalForm() {
    this.modalOption = !this.modalOption
  }

  acercaDe() {
    this.callBackForwardRouting(
      'acerca-de',
      this.sessionState,
      this.sessionState
    )
  }

  verDirectos() {
    this.callBackForwardRouting(
      'directos',
      this.sessionState,
      this.sessionState
    )
  }


  registrarUsuario() {
    this.usuarioService.registrarUsuario(this.usuario).subscribe((response) => {
      this.sessionState = response;
      this.callBackForwardRouting(
        'directos',
        this.sessionState,
        this.sessionState
      )
    }, error => {
      this.toastrService.error(error.error);
    })
  }

  loginUsuario() {
    this.usuarioService.loginUsuario(this.usuario).subscribe((response) => {
      this.sessionState = response;
      this.callBackForwardRouting(
        'directos',
        this.sessionState,
        this.sessionState
      )
    }, error => {
      this.toastrService.error(error.error);
    })
  }

  logoutUsuario() {
    this.usuarioService.logoutUsuario(this.sessionState).subscribe((response) => {
      this.sessionState = response;
    }, error => {
      this.toastrService.error(error.error);
    })
  }

}
