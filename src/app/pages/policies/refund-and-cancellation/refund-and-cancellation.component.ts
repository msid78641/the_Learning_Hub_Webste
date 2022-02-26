import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-refund-and-cancellation',
  templateUrl: './refund-and-cancellation.component.html',
  styleUrls: ['./refund-and-cancellation.component.css'],
})
export class RefundAndCancellationComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('Refund & cancellation | TLH');
  }
}
