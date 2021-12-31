import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit, OnDestroy, AfterViewInit {
  isReload: boolean = false;
  isValid: boolean = false;
  isError: boolean = false;
  isSuccess: boolean = false;
  courseForm!: FormGroup;
  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Courses-Service | TLH');
    this.initCourseForm();
  }

  ngAfterViewInit(): void {
    window.scroll(0, 0);
  }

  private initCourseForm() {
    this.courseForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phoneNo: [null, [Validators.required]],
      enquiryFor: ['0', [Validators.required]],
      message: [null],
    });
  }

  get Name(): any {
    return this.courseForm.get('name') as FormArray;
  }
  get Email(): any {
    return this.courseForm.get('email') as FormArray;
  }
  get PhoneNo(): any {
    return this.courseForm.get('phoneNo') as FormArray;
  }
  get EnquiryFor(): any {
    return this.courseForm.get('enquiryFor') as FormArray;
  }

  onSubmit() {
    if (this.courseForm.invalid) {
      this.isValid = true;
      this.isSuccess = false;
      this.isError = false;
    } else {
      this.isReload = true;
      this.appService
        .postCourseContactForm({ ...this.courseForm.value })
        .subscribe(
          (res) => {
            this.isSuccess = true;
            this.isValid = false;
            this.isError = false;
            this.isReload = false;
            this.courseForm.reset();
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
    this.courseForm.reset();
  }
}
