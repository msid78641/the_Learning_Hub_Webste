import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
})
export class FaqComponent implements OnInit, AfterViewInit {
  accordionItemNo: number = 1;
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('FAQs | TLH');
    // document.getElementById('enrollment-faq').scrollIntoView();
  }

  ngAfterViewInit(): void {
    window.scroll(0, 0);
  }

  onShowAccordion(accordionNo: number) {
    if (this.accordionItemNo == accordionNo) this.accordionItemNo = 0;
    else this.accordionItemNo = accordionNo;
  }
}
