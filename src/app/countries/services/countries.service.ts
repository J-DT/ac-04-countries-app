import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, map, Observable, of, tap} from "rxjs";
import {Country} from "../interfaces/country";

@Injectable({providedIn: 'root'})
export class CountriesService {

  private apiUrl:   string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }

  searchByCapital(term:string): Observable<Country[]>{
    const url: string = `${ this.apiUrl }/capital/${ term }`;
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => of([]) )
      );
  }

  searchByCountry(term:string): Observable<Country[]>{
    const url: string = `${ this.apiUrl }/name/${ term }`;
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => of([]) )
      );
  }

  searchByRegion(term:string): Observable<Country[]>{
    const url: string = `${ this.apiUrl }/region/${ term }`;
    return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => of([]) )
      );
  }

}
