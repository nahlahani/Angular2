import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {User} from './user.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService {
    private apiUrl = 'https://api.github.com/users';

    constructor(private http: Http) {}

    getUsers(): Observable<User[]> {
        return this.http.get(this.apiUrl)
                .map(this.extractUsers)
                .catch(this.handleError);
    }

    getUser(username): Observable<User> {
        const url = this.apiUrl + '/' + username;
        return this.http.get(url)
                .map(this.extractData)
                .catch(this.handleError);
    }

    private extractUsers(res: Response) {
        const users: User[] = [];
        const body = res.json();
        body.map(user => {
            users.push(new User({
                id: user.id,
                login: user.login
            }))
        })
        return users;
    }

    private extractData(res: Response) {
        const body = res.json();

        return new User({
            id: body.id,
            login: body.login,
            created_at: body.created_at,
            avatar_url: body.avatar_url,
            name: body.name
        });
    }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }
}
