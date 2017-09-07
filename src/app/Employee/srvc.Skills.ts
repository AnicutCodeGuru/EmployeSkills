import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SkillService {
  constructor (
    private http: Http
  ) {}

  getSkillsList() {
    return this.http.get("http://localhost:3000/data/skills.json")
    .map((res:Response) => res.json());
  }
}