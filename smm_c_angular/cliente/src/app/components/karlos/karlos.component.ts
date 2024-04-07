import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-karlos',
  templateUrl: './karlos.component.html',
  styleUrls: ['./karlos.component.css']
})
export class KarlosComponent extends BaseComponent {

  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute)
  }

  volver() {
    this.callBackReturnRouting();
  }
}
