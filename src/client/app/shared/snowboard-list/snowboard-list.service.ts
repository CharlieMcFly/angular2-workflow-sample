/**
 * Created by cquetstroey on 03-03-17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Snowboard} from "../../snowboards/snowboard";
// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class SnowboardListService {

  constructor(private http: Http) {}

  private snowboardsURL = "https://snowboards-a2.firebaseio.com/";

  get(): Observable<Snowboard[]> {
    const endPoint = "snowboards.json";

    return this.http.get(this.snowboardsURL + endPoint)
      .map((res: Response) => res.json())
      //              .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  /**
   * Handle HTTP error
   */
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
