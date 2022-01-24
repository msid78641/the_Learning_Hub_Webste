import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit, AfterViewInit {
  accordionItemNo: number = 1;
  constructor(
    private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('FAQs | TLH');
    // document.getElementById('enrollment-faq').scrollIntoView();
  }

  ngAfterViewInit(): void {
    window.scroll(0, 0);
  }

  onShowDetailsOfFounder() {
    this.router.navigate(['/about-us'], {
      relativeTo: this.activatedRoute,
      queryParams: { showFounderDetails: true },
    });
  }

  onShowAccordion(accordionNo: number) {
    if (this.accordionItemNo == accordionNo) this.accordionItemNo = 0;
    else this.accordionItemNo = accordionNo;
  }
}
