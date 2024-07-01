import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true, // default, module if false
  templateUrl: './header.component.html', // can do inline html but not recommended
  styleUrl: './header.component.css', // style property would be an inline css property
})
export class HeaderComponent {}
