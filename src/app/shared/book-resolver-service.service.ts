import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { Book } from '../shared/book';
import { BookService } from '../shared/book.service';
import { ApiSend } from './apiSend';
import { ApiResponse } from './apiResponse';
import { GenericPost } from './genericPost';

@Injectable()
export class BookResolverServiceService implements Resolve<Book> {

    constructor(private http: Http, private bookService: BookService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Book> {

        let Id = +route.paramMap.get('id');
        var ret = this.bookService.getBook(Id);
        return ret;
    }

    private handleError(error: Response): Observable<any> {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
