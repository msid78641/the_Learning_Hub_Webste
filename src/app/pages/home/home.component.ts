import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Parallax from 'parallax-js';

declare const Parallax: any;

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  accordionItemNo: number = 1;
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Home | TLH');
    window.scroll(0, 0);
  }

  ngAfterViewInit(): void {
    // const scene = document.getElementsByClassName('parallax-scene-1')[0];
    // var parallaxInstance = new Parallax(scene);
  }

  onShowAccordion(accordionNo: number) {
    if (this.accordionItemNo == accordionNo) this.accordionItemNo = 0;
    else this.accordionItemNo = accordionNo;
  }

  homeCarouselCustomOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 0,
    navText: [
      '<span class="flaticon-back-1"></span>',
      '<span class="flaticon-right-arrow-angle"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 1,
      },
      940: {
        items: 1,
      },
    },
    nav: true,
  };

  servicesCarouselCustomOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 1000,
    margin: 10,
    navText: [
      '<span class="flaticon-back-1"></span>',
      '<span class="flaticon-right-arrow-angle"></span>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
      1024: {
        items: 3,
      },
    },
    nav: true,
  };

  // testimonialCarouselCustomOptions: OwlOptions = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: false,
  //   autoplay: true,
  //   autoplayHoverPause: true,
  //   autoplayMouseleaveTimeout: 800,
  //   dots: false,
  //   navSpeed: 1000,
  //   margin: 0,
  //   autoWidth: true,

  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     400: {
  //       items: 1,
  //     },
  //     740: {
  //       items: 1,
  //     },
  //     940: {
  //       items: 1,
  //     },
  //   },
  //   nav: true,
  // };
}
