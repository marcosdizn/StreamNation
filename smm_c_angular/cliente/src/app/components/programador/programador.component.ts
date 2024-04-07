import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-programador',
  templateUrl: './programador.component.html',
  styleUrls: ['./programador.component.css']
})
export class ProgramadorComponent extends BaseComponent {

  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute)
  }

  volver() {
    this.callBackReturnRouting();
  }
}
