import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(
    public http: HttpClient
  ) { }

  submitForm(body: any) {
    return this.http.post(`${environment.backendUrl}/survey/submit`, body).pipe(
      take(1)
    )
  }
}
