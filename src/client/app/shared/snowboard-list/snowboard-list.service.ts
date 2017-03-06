/**
 * Created by cquetstroey on 03-03-17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Snowboard } from '../../snowboards/snowboard';
// import 'rxjs/add/operator/do';  // for debugging

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class SnowboardListService {

  constructor(private http: Http) {}

  private snowboardsURL = "http://localhost:8080/snowboards";

  get(): Observable<Snowboard[]> {

    return this.http.get(this.snowboardsURL)
      .map((res: Response) => res.json())
      // .do(data => console.log('server data:', data))  // debug
      .catch(this.handleError);
  }

  getById(id: number): Observable<Snowboard>{
    return this.http.get(this.snowboardsURL +"/"+ id)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  post(body : Snowboard) : Observable<Snowboard> {
    return this.http.post(this.snowboardsURL, body)
      .map((res: Response) => res.json())
      // .do(data => console.log('server data:', data))
      .catch(this.handleError);

  }

  delete(id : number ) : Observable<Snowboard[]> {

    return this.http.delete(this.snowboardsURL +"/"+ id)
      .map((res: Response) => res.json())
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
