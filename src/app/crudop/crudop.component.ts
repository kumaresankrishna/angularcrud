import { Component, OnInit } from '@angular/core';
import { CrudopService } from '../crudop.service';


@Component({
  selector: 'app-crudop',
  templateUrl: './crudop.component.html',
  styleUrls: ['./crudop.component.scss']
})
export class CrudopComponent implements OnInit {

  user={};
  userlist;
  isupdate:boolean;

  constructor( private crudservice:CrudopService ) { }

  ngOnInit(): void {
    this.getallusers()
  }
getallusers(){
  this.crudservice.getallusers().subscribe((datafromapi)=>{
    this.userlist=datafromapi;
  }
  )
}
adduser(){
  this.crudservice.adduser(this.user).subscribe((datafromapi)=>{
  this.userlist.push(datafromapi);
  this.user={}
  })
}
edituser(user){
this.isupdate=true;
this.user=JSON.parse(JSON.stringify(user))
}

update(){
  this.crudservice.update(this.user).subscribe((datafromapi)=>{
    this.user={};
    this.isupdate=false
  this.getallusers() })

 
}
Delete(user,index){
    this.crudservice.Delete(user['id']).subscribe((datafromapi)=>{
      this.userlist.splice(index,1);

    })
}

}
