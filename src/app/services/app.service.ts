import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private http: HttpClient) {}

  postTeachersContactForm(formData: {
    email: string;
    message: string;
    name: string;
    phoneNo: any;
    teachingExp: any;
  }) {
    return this.http
      .post(
        `${environment.baseUrl}/teachers/contact-form`,
        {
          ...formData,
        },
        { withCredentials: true }
      )
      .pipe(retry(3), catchError(this.handleError));
  }

  postStudentContactForm(formData: {
    address: string;
    altPhoneNo: any;
    email: string;
    name: string;
    phoneNo: any;
    studentname: string;
    timeSlot: string;
  }) {
    return this.http
      .post(
        `${environment.baseUrl}/students/contact-form`,
        {
          ...formData,
        },
        { withCredentials: true }
      )
      .pipe(retry(3), catchError(this.handleError));
  }

  postCourseContactForm(formData: {
    email: string;
    enquiryFor: string;
    message: string;
    name: string;
    phoneNo: any;
  }) {
    return this.http
      .post(
        `${environment.baseUrl}/courses/contact-form'`,
        {
          ...formData,
        },
        { withCredentials: true }
      )
      .pipe(retry(3), catchError(this.handleError));
  }

  postContactForm(formData: {
    altPhoneNo: any;
    email: string;
    message: string;
    name: string;
    phoneNo: any;
  }) {
    return this.http
      .post(
        `${environment.baseUrl}/contact-form`,
        {
          ...formData,
        },
        { withCredentials: true }
      )
      .pipe(retry(3), catchError(this.handleError));
  }

  bookFreeDemo(formData: { mobNo: string }) {
    return this.http
      .post<{ isOk: boolean; message: string }>(
        `${environment.baseUrl}/book-free-demo`,
        {
          ...formData,
        },
        { withCredentials: true }
      )
      .pipe(retry(3), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      return throwError('An error occured with status code ' + error.status);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      if (error.status == 400) {
        return throwError(
          error.status +
            ' Bad request, lacking required request body or parameter '
        );
      } else if (error.status == 404) {
        return throwError(
          error.status + ' The requested resource does not exist '
        );
      } else if (error.status == 500) {
        return throwError(error.status + ' Internal server error ');
      } else if (error.status == 503) {
        return throwError(
          error.status +
            ' The requested service is unavailable, please try again later. '
        );
      }
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
