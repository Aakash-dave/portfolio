import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutdev',
  templateUrl: './aboutdev.component.html',
  styleUrls: ['./aboutdev.component.css']
})
export class AboutdevComponent implements OnInit {

  constructor() { }

  // @HostListener('window:resize') screenResize() {
  //   let div = <HTMLElement>document.getElementsByClassName('parent-container')[0];
  //   div.style.height = window.innerHeight.toString().concat('px');
  //   div.style.width = window.innerWidth.toString().concat('px');
  // }

  ngOnInit(): void {
  }

}
