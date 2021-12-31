import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit, OnDestroy, AfterViewInit {
  isReload: boolean = false;
  isValid: boolean = false;
  isError: boolean = false;
  isSuccess: boolean = false;
  contactForm: FormGroup;

  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Contact-us | TLH');
    this.initcontactForm();
  }

  ngAfterViewInit(): void {
    window.scroll(0, 0);
  }
  private initcontactForm() {
    this.contactForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phoneNo: [null, [Validators.required]],
      altPhoneNo: [null],
      message: [null],
    });
  }

  get Name(): any {
    return this.contactForm.get('name') as FormArray;
  }
  get Email(): any {
    return this.contactForm.get('email') as FormArray;
  }
  get PhoneNo(): any {
    return this.contactForm.get('phoneNo') as FormArray;
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.isValid = true;
      this.isSuccess = false;
      this.isError = false;
    } else {
      this.isReload = true;
      this.appService.postContactForm({ ...this.contactForm.value }).subscribe(
        (res) => {
          this.isSuccess = true;
          this.isValid = false;
          this.isError = false;
          this.isReload = false;
          this.contactForm.reset();
        },
        (err) => {
          this.isError = true;
          this.isSuccess = false;
          this.isValid = false;
          this.isReload = false;
        }
      );
    }
  }

  onClose(alerNo: number) {
    if (alerNo == 1) {
      this.isValid = false;
    } else if (alerNo == 2) {
      this.isError = false;
    } else if (alerNo == 3) {
      this.isSuccess = false;
    }
  }

  ngOnDestroy(): void {
    this.isError = false;
    this.isSuccess = false;
    this.isValid = false;
    this.isReload = false;
    this.contactForm.reset();
  }
}
