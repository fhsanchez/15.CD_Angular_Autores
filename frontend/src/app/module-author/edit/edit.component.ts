import { Component, OnInit } from '@angular/core';
import { AuthorsService } from 'src/app/services/authors.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  parametros: any;
  author_id: any;
  //author!: any;

  author: any = ({_id:'', name:''});

  constructor(private _authorservices: AuthorsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }


  ngOnInit(): void {
    this.parametros = this._activatedRoute.params;
    this.author_id = this.parametros._value;
    this.getAuthorById(this.author_id.id);

  }

  getAuthorById(id: String) {

    //console.log(id);
    let observable = this._authorservices.getAuthorById(id);

    observable.subscribe(data => {
      //console.log("Got  authors!", data);
      this.author = data;
      //console.log(data);

    });
  }

}
