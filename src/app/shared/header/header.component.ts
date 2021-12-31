import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

declare const dropDown: Function;
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  mobileWidth = 992;
  cnt = 0;
  innerWidth = 0;
  constructor(private router: Router, private elemRef: ElementRef) {}
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }

  ngOnInit(): void {
    dropDown();

    this.router.events.subscribe((event) => {
      if (
        event instanceof NavigationStart &&
        this.innerWidth < this.mobileWidth
      ) {
        if (
          this.elemRef.nativeElement
            .querySelector('#mobileMenu')
            .classList.contains('show')
        ) {
          this.elemRef.nativeElement
            .querySelector('#nav-hamburger')
            .classList.add('collapsed');
          this.elemRef.nativeElement
            .querySelector('#mobileMenu')
            .classList.remove('show');
        }
      }
    });
  }

  ngAfterViewInit(): void {
    // const dropdownBtn = document.querySelector('.dropdown-btn');
    // dropdownBtn.addEventListener('click', () => {
    //   const ulElem = document.querySelector('.dropdown  ul');
    //   if (ulElem.classList.contains('.mobile-menu-show-dropdown')) {
    //     ulElem.classList.remove('.mobile-menu-show-dropdown');
    //     ulElem.classList.add('.mobile-menu-hide-dropdown');
    //   } else {
    //     ulElem.classList.remove('.mobile-menu-hide-dropdown');
    //     ulElem.classList.add('.mobile-menu-show-dropdown');
    //   }
    // });
  }
}
