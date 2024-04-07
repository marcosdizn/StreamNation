import { Component, Inject, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'base-component',
  template: '',
  styles: []
})
export class BaseComponent {

  protected activatedRoute: ActivatedRoute | undefined;
  protected router: Router;

  #routeData: any;
  #callBackRouting: any;

  constructor(
    @Inject(ActivatedRoute) activatedRoute?: ActivatedRoute,
  ) {
    this.activatedRoute = activatedRoute;
    this.router = inject(Router);
    this.#routeData = this.router.getCurrentNavigation()?.extras?.state;
    this.#callBackRouting = this.#routeData?.callBackRouting;
  }

  callBackForwardRouting(
    forwardRoute: string,
    forwardRouteState?: { [key: string]: any },
    callBackRouteState?: { [key: string]: any }
  ) {

    const callBackRouting = this.#callBackRouting ? { callBackRouting: { ...this.#callBackRouting } } : undefined;
    this.router.navigate(
      [forwardRoute],
      {
        state: {
          ...forwardRouteState,
          callBackRouting: {
            route: this.router.url,
            state: { ...callBackRouteState, ...callBackRouting },
          }
        }
      }
    );
  }

  callBackReturnRouting() {
    if (!this.#callBackRouting) {
      throw new Error('No se dispone de información para realizar el enrutado CallBack.');
    }
    this.router.navigate(
      [this.#callBackRouting.route],
      {
        state: this.#callBackRouting.state
      }
    );
  }

}
