import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { GitHubService } from '../gitHub.service';
import { User } from '../user.model';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

id: string;
errorMessage: any;
user: User;

  constructor( private route: ActivatedRoute,
               private router: Router,
               private githubservice: GitHubService ) { }

  ngOnInit() {
      this.route.params
      .switchMap((params: Params) => this.githubservice.getUser(params['id']))
      .subscribe((user) => this.user = user);
    }

}
