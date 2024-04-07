import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-directo',
  templateUrl: './directo.component.html',
  styleUrls: ['./directo.component.css']
})
export class DirectoComponent extends BaseComponent {

  constructor(activatedRoute: ActivatedRoute) {
    super(activatedRoute)
  }

  volver() {
    this.callBackReturnRouting();
  }
}
