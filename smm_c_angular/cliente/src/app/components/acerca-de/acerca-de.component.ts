import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionState } from 'src/app/models/session-state.model';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent extends BaseComponent {
  sessionState = {} as SessionState

  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute)
  }

  volver() {
    this.callBackReturnRouting();
  }
}
