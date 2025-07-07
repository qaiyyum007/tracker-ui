import { AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../../service/auth.service';

export function emailExistsValidator(authService: AuthService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    if (!control.value) {
      return of(null);
    }
    return authService.checkEmailExists(control.value).pipe(
      map((exists: boolean) => (exists ? { emailTaken: true } : null)),
      catchError(() => of(null))
    );
  };
}