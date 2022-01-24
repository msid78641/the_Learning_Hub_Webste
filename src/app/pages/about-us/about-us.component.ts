import { OwlOptions } from 'ngx-owl-carousel-o';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  isScrollToFounders = false;
  constructor(
    private titleService: Title,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
      this.isScrollToFounders =
        queryParams.showFounderDetails === 'true' ? true : false;

    });

    this.titleService.setTitle('About-us | TLH');
  }

  ngAfterViewInit(): void {
    if (this.isScrollToFounders === true) {
      document.querySelector('#founderSection').scrollIntoView();
    } else {
      
      document.querySelector('.page-title').scrollIntoView();
    }
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
    autoWidth: false,

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
