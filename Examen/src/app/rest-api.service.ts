import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl:string = "http://192.168.43.198:3000/";
@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<any> {
    return  this.http.post(apiUrl + 'login/', user)
  }

  public registrar(user: User): Observable<any>{
    const url = `${apiUrl}signup` 
    return this.http.post(url, httpOptions).pipe(
      map(this.extractData), catchError(this.handleError)
    );
  }

  public getLocations(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData), catchError(this.handleError)
    );
  }

  public createLocation(location: Location): Observable<any> {
    return this.http.post(apiUrl, httpOptions).pipe(
      map(this.extractData), catchError(this.handleError)
    );
  }

  public getLocationById(locationId:string): Observable<any> {
    const url = `${apiUrl}/${locationId}`;
    console.log(url);
    return  this.http.get(url, httpOptions).pipe(
      map(this.extractData), catchError(this.handleError)
    );
  }

  // public updateLocation(location: Location): Observable<Location> {
  //   return  this.http.put(this.apiUrl + '/locations/' + location.id, location)
  // }

  public deleteLocationById(locationId: number) {
    const url = `${apiUrl}/${locationId}`;
    return  this.http.delete(url, httpOptions).pipe(
      map(this.extractData), catchError(this.handleError)
    );;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}

export class User {
  name: string;
  last_name: string;
  mothers_last_name: string;
  email: string;
  password: string;
  matricula: string;
  tipo: string;

  constructor(values:any ={}){
    this.name = values.name;
    this.last_name = values.last_name;
    this.mothers_last_name = values.mothers_last_name;
    this.password = values.password;
    this.email = values.email;
    this.tipo = values.tipo;
  }
}

export class Location {

  id: number;
  name: string;
  description: string;
  lat: number;
  lng: number;
  constructor(values: any = {}) {
    this.id = values.id;
    this.name = values.name;
    this.description = values.description;
    this.lat = values.lat;
    this.lng = values.lng;
    }
}
