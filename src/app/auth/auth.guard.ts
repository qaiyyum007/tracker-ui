import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
const router = inject(Router);
  const token = sessionStorage.getItem('token');
  if (token) {
    router.navigate(['/dashboard']);
    return false;
  }

  return true;
};

