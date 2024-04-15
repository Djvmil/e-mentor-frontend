import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Interview } from '../../model/interview.model';
import { User } from '../../model/user.model';
import { LoginResponse } from '../../model/login-response.mode';

const endpoint = 'http://51.75.27.211:8989/em/api';

const localUrl = 'assets/data/smartphone.json';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/xml',
    'Authorization': 'jwt-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  token?: string;

  constructor(private http: HttpClient) { }

  private extractData(res: Response): any {
    const body = res;
    return body || { };
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => 'Something bad happened; please try again later.');
  }

  signIn(user: User){
    return this.http.post<LoginResponse>(endpoint+"/login", user, {observe: 'response'})
  }

  getInterviewList(token: string): Observable<Interview[]>{

    let jwt = "Bearer "+token
    let httpHeaders = new HttpHeaders({"Authorization": jwt})

    console.log("Bearer "+token)
    return this.http.get<Interview[]>(endpoint+"/interviews", {headers: httpHeaders})
  }


  updateInterview(interview: Interview): Observable<Interview>{
    return this.http.put<Interview>(endpoint+"/interviews", interview, httpOptions)
  }



  // getSmartphone() {
  //   return this.http.get(localUrl);
  // }

  // getSmartphone(): Observable<HttpResponse<Smartphone[]>> {
  //   return this.http.get<Smartphone[]>(
  //     localUrl, { observe: 'response' });
  // }

  // getSmartphone(): Observable<any> {
  //   return this.http.get<Smartphone[]>(localUrl, httpOptions).pipe(
  //     retry(3), catchError(this.handleError));
  // }

  //getSmartphone(): Observable<any> {
  //  const stringparams = 'name=iphone';
  //  const params = new HttpParams({fromString: stringparams});
  //  const options = { params };
  //  return this.http.get<Smartphone[]>(localUrl, options).pipe(
  //    retry(3), catchError(this.handleError<Smartphone[]>('getSmartphone', [])));
  //}

  // getProducts(): Observable<any> {
  //   return this.http.get(endpoint + 'products').pipe(
  //     map(() => this.extractData),
  //     catchError(this.handleError)
  //   );
  // }

  // getProduct(id: string): Observable<any> {
  //   return this.http.get(endpoint + 'products/' + id).pipe(
  //     map(() => this.extractData),
  //     catchError(this.handleError)
  //   );
  // }

  /*
  getSmartphone(): Observable<any> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.get<Smartphone[]>(localUrl, httpOptions).pipe(
      retry(3), catchError(this.handleError));
  }

  getSmartphoneById(id: any): Observable<any> {
    return this.http.get<Smartphone>(localUrl + id).pipe(
      retry(3), catchError(this.handleError));
  }

  getProducts(): Observable<any> {
    return this.http.get<Product>(endpoint + 'products').pipe(
      catchError(this.handleError)
    );
  }

  getProduct(id: string): Observable<any> {
    return this.http.get<Product>(endpoint + 'products/' + id).pipe(
      catchError(this.handleError)
    );
  }

  addProduct(product: any): Observable<any> {
    return this.http.post(endpoint + 'products', product).pipe(
      catchError(this.handleError)
    );
  }

  updateProduct(id: string, product: Product): Observable<any> {
    return this.http.put<Product>(endpoint + 'products/' + id, product).pipe(
      catchError(this.handleError)
    );
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete<Product>(endpoint + 'products/' + id).pipe(
      catchError(this.handleError)
    );
  }*/
}
