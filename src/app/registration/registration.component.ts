import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { emailExistsValidator } from './custom-validators/email-exists.validator';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  userdataForm!: FormGroup;
  selectedFile?: File;
  private router = inject(Router);
  private auth = inject(AuthService);
  serverError: string ='';

  constructor(private fb: FormBuilder) {
    this.userdataForm = this.fb.group({
       firstName: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
     lastName: ['', [Validators.required, Validators.pattern(/^[A-Za-z\s]+$/)]],
      email: ['', [Validators.required, Validators.email], [emailExistsValidator(this.auth)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      dob: ['1995-07-01', [Validators.required, this.ageValidator]],
      profileImage: [null, Validators.required],
    });
  }

  ageValidator(control: any) {
    const dob = new Date(control.value);
    const age = new Date().getFullYear() - dob.getFullYear();
    return age >= 18 ? null : { ageInvalid: true };
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.selectedFile = file;
      this.userdataForm.get('profileImage')?.setValue(file);
    } else {
      this.userdataForm.get('profileImage')?.setErrors({ invalidType: true });
    }
  }

  get firstName() {
    return this.userdataForm.get('firstName');
  }

  get lastName() {
    return this.userdataForm.get('lastName');
  }

  get email() {
    return this.userdataForm.get('email');
  }

  get password() {
    return this.userdataForm.get('password');
  }

  get mobile() {
    return this.userdataForm.get('mobile');
  }

  get dob() {
    return this.userdataForm.get('dob');
  }

  get profileImage() {
    return this.userdataForm.get('profileImage');
  }

isSubmitting = false;

private async registerUser(formData: FormData) {
  this.isSubmitting = true;
  try {
    await lastValueFrom(this.auth.register(formData));
    this.router.navigate(['/login']);
  } catch (error) {
  } finally {
    this.isSubmitting = false;
  }
}


private createUserFormData(): FormData {
  const formData = new FormData();
  const formValue = this.userdataForm.value;

  for (const key in formValue) {
    if (key !== 'profileImage' && formValue[key] != null) {
      formData.append(key, String(formValue[key]));
    }
  }

  if (this.selectedFile) {
    formData.append('profileImage', this.selectedFile);
  }

  return formData;
}


  submit() {
    if (this.userdataForm.invalid) return;
    const formData = this.createUserFormData();
    this.registerUser(formData);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
