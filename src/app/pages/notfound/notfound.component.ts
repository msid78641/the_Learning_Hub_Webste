import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css'],
})
export class NotfoundComponent implements OnInit, AfterViewInit {
  constructor(private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle('404 | TLH');
  }

  ngAfterViewInit(): void {
    window.scroll(0, 0);
  }
}
