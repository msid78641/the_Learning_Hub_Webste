import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    return this.http.post(
      'https://tlh-website-api-nodejs.herokuapp.com/teachers/contact-form',
      {
        ...formData,
      },
      { withCredentials: true }
    );
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
    return this.http.post(
      'https://tlh-website-api-nodejs.herokuapp.com/students/contact-form',
      {
        ...formData,
      },
      { withCredentials: true }
    );
  }

  postCourseContactForm(formData: {
    email: string;
    enquiryFor: string;
    message: string;
    name: string;
    phoneNo: any;
  }) {
    return this.http.post(
      'https://tlh-website-api-nodejs.herokuapp.com/courses/contact-form',
      {
        ...formData,
      },
      { withCredentials: true }
    );
  }

  postContactForm(formData: {
    altPhoneNo: any;
    email: string;
    message: string;
    name: string;
    phoneNo: any;
  }) {
    return this.http.post(
      'https://tlh-website-api-nodejs.herokuapp.com/contact-form',
      {
        ...formData,
      },
      { withCredentials: true }
    );
  }

  bookFreeDemo(formData: { mobNo: string }) {
    return this.http.post<{ isOk: boolean; message: string }>(
      'https://tlh-website-api-nodejs.herokuapp.com/book-free-demo',
      {
        ...formData,
      },
      { withCredentials: true }
    );
  }
}
