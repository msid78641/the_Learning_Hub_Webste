import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Parallax from 'parallax-js';

declare const Parallax: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const scene = document.getElementsByClassName('parallax-scene-2')[0];
    var parallaxInstance = new Parallax(scene);
  }
}
