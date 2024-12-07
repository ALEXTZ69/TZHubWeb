import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
    signInForm: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService) {
        this.signInForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit() {
        if (this.signInForm.valid) {
            const { email, password } = this.signInForm.value;
            this.authService.signIn(email, password).subscribe(
                success => {
                    // Handle successful sign-in
                },
                error => {
                    // Handle sign-in error
                }
            );
        }
    }
}