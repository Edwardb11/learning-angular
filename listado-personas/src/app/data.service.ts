import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  // inicializando el servicio de httpclient
  constructor(private http: HttpClient) {}
}
