import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthServiceService } from '../auth/auth-service.service';

export const CanActivateChildExample: CanActivateChildFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ) => {
    return inject(AuthServiceService).authenticated()
    ? true
    : inject(Router).createUrlTree(['/login']);
  };
  