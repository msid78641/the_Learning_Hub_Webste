import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit, OnDestroy, AfterViewInit {
  isReload: boolean = false;
  isValid: boolean = false;
  isError: boolean = false;
  isSuccess: boolean = false;
  studentForm!: FormGroup;
  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private appService: AppService
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Courses-Service | TLH');
    this.initStudentForm();
  }

  private initStudentForm() {
    this.studentForm = this.fb.group({
      name: [null, [Validators.required]],
      studentname: [null, [Validators.required]],
      timeSlot: ['0', [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      phoneNo: [null, [Validators.required]],
      altPhoneNo: [null, [Validators.required]],
      address: [null, [Validators.required]],
    });
  }

  get Name(): any {
    return this.studentForm.get('name') as FormArray;
  }
  get Studentname(): any {
    return this.studentForm.get('studentname') as FormArray;
  }
  get TimeSlot(): any {
    return this.studentForm.get('timeSlot') as FormArray;
  }
  get Email(): any {
    return this.studentForm.get('email') as FormArray;
  }
  get PhoneNo(): any {
    return this.studentForm.get('phoneNo') as FormArray;
  }
  get AltPhoneNo(): any {
    return this.studentForm.get('altPhoneNo') as FormArray;
  }

  get Address(): any {
    return this.studentForm.get('address') as FormArray;
  }

  ngAfterViewInit(): void {
    window.scroll(0, 0);
  }

  onSubmit() {
    if (this.studentForm.invalid) {
      this.isValid = true;
      this.isSuccess = false;
      this.isError = false;
    } else {
      this.isReload = true;
      this.appService
        .postStudentContactForm({ ...this.studentForm.value })
        .subscribe(
          (res) => {
            this.isSuccess = true;
            this.isValid = false;
            this.isError = false;
            this.isReload = false;
            this.studentForm.reset();
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
    this.studentForm.reset();
  }
}
