import { Component, OnInit } from '@angular/core';
//import { ToastrService } from 'ngx-toastr';
import { ActualitesType } from 'src/app/model/actualite-type';
import { ExamenService } from 'src/app/services/examen.service';

import { Router } from '@angular/router';
//import { isDefined } from '@angular/compiler/src/util';

@Component({
  selector: 'app-admineef',
  templateUrl: './admineef.component.html',
  styleUrls: ['./admineef.component.css']
})
export class AdmineefComponent implements OnInit {

  actualiteEF: ActualitesType= new ActualitesType();

  actualitesType!: ActualitesType[];

  totalActualites!: number;
  addFormVisible: boolean = false;
  editFormVisible: boolean = false;
  constructor(
    private examenEfService: ExamenService,
   // private toastr: ToastrService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    this.getActualites();
    
  }

  redirectToList(){
    this.router.navigate(['/admin/type'])
  }

  createActualiteEF(){
    this.examenEfService.createActualite(this.actualiteEF).subscribe(data=>{
      console.log(data)
     // this.toastr.success("Actualité publié avec succès!")
      this.getActualites()
      this.redirectToList()
    }, error=>{
      //this.toastr.error("Erreur, Serveur ne répond pas!")
    });
  }
  
  getActualites(){
    this.actualiteEF = new ActualitesType();
    this.examenEfService.getAll().subscribe(data => {
      if(data != null){
        console.log(data.length)
        this.actualitesType = data;
        this.totalActualites = data.length;
        this.hideAddForm();
        this.hideEditForm();
      }else{
        this.totalActualites = 0;
        this.actualitesType = [];
      }
    }, error => {
     // this.toastr.warning("Serveur ne répond pas!")
    });
  }

  deleteActualite(id:number) {
    //var id= Object.values(act)[0];
    console.log(id)
    this.examenEfService.deleteActualite(id).subscribe(data => {
      //this.toastr.warning("L'actualité supprimée!")
      this.getActualites();
      this.redirectToList()
      
    }, error => {
      //this.toastr.error("Error, server not responding!")
      console.log(error)
    })
  }

  editActualite(act: ActualitesType) {
    var id= Object.values(act)[0];

    this.examenEfService.findActualiteById(id).subscribe(data=>{
      this.actualiteEF = data;
    });
  }
  showAddForm() {
    this.addFormVisible = true;
  }
  hideAddForm() {
    this.addFormVisible = false;
  }

  showEditForm() {
    this.editFormVisible = true;
  }
  hideEditForm() {
    this.editFormVisible = false;
  }

  

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
