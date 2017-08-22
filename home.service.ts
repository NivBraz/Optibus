import { Injectable,EventEmitter} from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams, RequestOptionsArgs } from '@angular/http';
import { Drive } from '../models/drive.model';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {
  itemSelected = new EventEmitter<Drive>();
  private base_url: string = 'http://localhost:3000/driveData/getData';

  constructor(private http: Http) { }

  getData(): Promise<Drive[]> { 
    return this.http.get(this.base_url).toPromise().then((res) => res.json() as Drive[]);
  }

}
