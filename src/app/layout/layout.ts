import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  imports: [FormsModule, NgClass],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {

  public actor: string = '';
}
