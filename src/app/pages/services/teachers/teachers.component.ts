import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css'],
})
export class TeachersComponent implements OnInit, OnDestroy, AfterViewInit {
  isReload: boolean = false;
  isValid: boolean = false;
  isError: boolean = false;
  isSuccess: boolean = false;
  teacherForm: FormGroup;
  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Teachers-Service | TLH');
    this.initTeacherForm();
  }
  ngAfterViewInit(): void {
    window.scroll(0, 0);
  }

  private initTeacherForm() {
    this.teacherForm = this.fb.group({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phoneNo: [null, [Validators.required]],
      teachingExp: [null, [Validators.required]],
      message: [null],
    });
  }

  get Name(): any {
    return this.teacherForm.get('name') as FormArray;
  }

  get Email(): any {
    return this.teacherForm.get('email') as FormArray;
  }
  get PhoneNo(): any {
    return this.teacherForm.get('phoneNo') as FormArray;
  }
  get TeachingExp(): any {
    return this.teacherForm.get('teachingExp') as FormArray;
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

  onSubmit() {
    if (this.teacherForm.invalid) {
      this.isValid = true;
      this.isSuccess = false;
      this.isError = false;
    } else {
      this.isReload = true;
      this.appService
        .postTeachersContactForm({ ...this.teacherForm.value })
        .subscribe(
          (res) => {
            this.isSuccess = true;
            this.isValid = false;
            this.isError = false;
            this.isReload = false;
            this.teacherForm.reset();
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

  ngOnDestroy(): void {
    this.isError = false;
    this.isSuccess = false;
    this.isValid = false;
    this.isReload = false;
    this.teacherForm.reset();
  }
}
