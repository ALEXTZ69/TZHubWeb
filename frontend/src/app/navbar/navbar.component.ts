import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentTheme: string;

  constructor(private translate: TranslateService) {
    this.currentTheme = localStorage.getItem('theme') || 'light-theme';
    document.body.className = this.currentTheme;
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    document.body.className = this.currentTheme;
    localStorage.setItem('theme', this.currentTheme);
  }

  changeLanguage(event: any) {
    const selectedLanguage = event.target.value;
    this.translate.use(selectedLanguage);
    console.log('Idioma seleccionado:', selectedLanguage);
  }
  
}