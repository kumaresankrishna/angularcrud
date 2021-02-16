import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CrudopService {

  constructor(private httpclient:HttpClient) { }


  getallusers(){
    return this.httpclient.get( environment.appurl+"users")
  }
  adduser(userdata){
    return this.httpclient.post (environment.appurl+"users",userdata)
  }
  update(userdata){
    return this.httpclient.put (environment.appurl+`users/${userdata['id']}`,userdata)
  }
  Delete(userid){
    return this.httpclient.delete (environment.appurl+`users/${userid}`)
  }
}
