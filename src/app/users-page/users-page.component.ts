import { Component, OnInit} from '@angular/core';
import { GitHubService } from '../gitHub.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http';
import { User } from '../user.model';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})

export class UsersPageComponent implements OnInit {
  users: User[];
  errorMessage: any;
  limit = 5;

  constructor(private githubservice: GitHubService, private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/users/mojombo']);
    this.githubservice.getUsers().subscribe(
      users => this.users = users,
      error => this.errorMessage = <any> error
    )
  }

  loadMore(): void {
    this.limit += 5;
  }



}
