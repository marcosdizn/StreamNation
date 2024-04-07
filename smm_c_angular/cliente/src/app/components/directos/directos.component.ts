import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base/base.component';


@Component({
  selector: 'app-directos',
  templateUrl: './directos.component.html',
  styleUrls: ['./directos.component.css']
})
export class DirectosComponent extends BaseComponent {

  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute)
  }

  verDirecto() {
    this.callBackForwardRouting(
      'directo'
    )
  }

  verDirectoKarlos() {
    this.callBackForwardRouting(
      'karlos'
    )
  }

  verDirectoProgramador() {
    this.callBackForwardRouting(
      'programador'
    )
  }

  volver() {
    this.callBackReturnRouting();
  }
}
