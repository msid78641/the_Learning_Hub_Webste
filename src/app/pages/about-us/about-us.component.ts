import { OwlOptions } from 'ngx-owl-carousel-o';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('About-us | TLH');
  }

  ngAfterViewInit(): void {
    window.scroll(0, 0);
  }
  testimonialCarouselCustomOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayMouseleaveTimeout: 800,
    dots: false,
    navSpeed: 1000,
    margin: 0,
    autoWidth: true,

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
}
