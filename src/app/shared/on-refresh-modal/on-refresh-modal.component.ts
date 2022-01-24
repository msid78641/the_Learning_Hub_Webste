import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-on-refresh-modal',
  templateUrl: './on-refresh-modal.component.html',
  styleUrls: ['./on-refresh-modal.component.css'],
})
export class OnRefreshModalComponent implements OnInit {
  form!: FormGroup;
  isReload: boolean = false;
  isError: boolean = false;
  isSuccess: boolean = false;

  error: string = '';
  constructor(private fb: FormBuilder, private appService: AppService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      mobNo: [null, [Validators.required]],
    });
  }

  get PhoneNo(): any {
    return this.form.get('mobNo') as FormArray;
  }

  onClose(idNo: any) {
    if (idNo === 1) {
      this.isError = false;
    } else if (idNo === 2) {
      this.isSuccess = false;
    }
  }

  onSubmit() {
    this.isReload = true;
    this.isError = false;
    this.isSuccess = false;
    if (this.form.valid) {
      this.appService.bookFreeDemo(this.form.value).subscribe(
        (res) => {
          this.isSuccess = true;
          this.form.reset();
          this.isReload = false;
        },
        (err: HttpErrorResponse) => {
          this.isError = true;
          this.error = err.message;
          this.isReload = false;
        }
      );
    }
  }
}
