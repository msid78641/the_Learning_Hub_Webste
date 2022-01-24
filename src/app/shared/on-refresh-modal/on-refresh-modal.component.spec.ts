import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnRefreshModalComponent } from './on-refresh-modal.component';

describe('OnRefreshModalComponent', () => {
  let component: OnRefreshModalComponent;
  let fixture: ComponentFixture<OnRefreshModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnRefreshModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnRefreshModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
