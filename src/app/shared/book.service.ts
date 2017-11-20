import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { Book } from './book';
import { ApiSend } from './apiSend';
import { ApiResponse } from './apiResponse';
import { GenericPost } from './genericPost';


@Injectable()
export class BookService {
    
    private baseUrl = 'http://michb.net/webAPI/generic/v1/Generic/';

    constructor(private http: Http) {
    }
    apiSend: ApiSend = new ApiSend();
   

    getBook(Id: number): Observable<Book> {
        var url = "http://michb.net/webAPI/generic/v1/Generic/api/Generic/getItemsSQL";
        var values = new ApiSend();
        values.p_entity = "tblBook";
        values.p_sqlWhere = "Id = " + Id;
        values.p_entity_sql = "tblBook";
        values.p_sqlOrder = " Order By Id";

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        var param = JSON.stringify(values);
        options.body = param;


        var ret = this.http.post(url, param, options)
            .map(this.extractDataPost)
            .do(data => console.log('get: '))
            .catch(this.handleError);
        var test2 = ret;
        return ret;

    }

    getBooks(): Observable<Book[]> {

        var url = "api/Generic/getItems?entName=tblBook";
        var ret = this.http.get(this.baseUrl+url)
            .map(this.extractData)
            .do(data => console.log('getBooks: '))
            .catch(this.handleError);

        return ret;
    }
    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

    private extractData(response: Response) {
        let body = response.json();
        var test = JSON.parse(body);
        return test || {};

    }
    private extractDataPost(response: Response) {
        let body = response.json();
        var test2 = body.Data[0];
        return test2 || {};
    }
}
