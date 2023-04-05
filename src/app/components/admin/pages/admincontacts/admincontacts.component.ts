import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { Demandeur } from 'src/app/model/Demandeur';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-admincontacts',
  templateUrl: './admincontacts.component.html',
  styleUrls: ['./admincontacts.component.css']
})
export class AdmincontactsComponent implements OnInit {
  Demandeur  :Demandeur = new Demandeur();
  Demandeurs: Demandeur[] = [];
  totalDemandeurs!: number;
  addFormVisible: boolean = false;
  editFormVisible: boolean = false;
  constructor(private contactservice :ContactService,
   /* private toastr: ToastrService,*/
    private router: Router){ }

    editdemandeur(demandeur: Demandeur){
    var id= Object.values(demandeur)[0]
      this.gotoTop();
      this.showAddForm();
      console.log(this. addFormVisible)
  
      this.contactservice.findcontactById(id).subscribe(data=>{
        this. Demandeur = data;
      });
   
  
    }

    deletedemandeur (demandeur: Demandeur){
      var id= Object.values(demandeur)[0]
      
  this.contactservice.deletecontact(id).subscribe(response => {
      if (response == null) {
        //this.toastr.success("candidat supprimée avec succès");
        this.getDemandeurs();
          this.redirectToList()
      }
    })
  
    }
    updatedemandeur(){
    
    
      this.contactservice.create(this.Demandeur).subscribe(data=>{
        console.log(data)
          //this.toastr.success("candidat Modifier  avec succès!")
          this.getDemandeurs()
          this.redirectToList()
        }, error=>{
          console.log(error);
          //this.toastr.error("Erreur, Serveur ne répond pas!")
         
        });
        this.Demandeur=new Demandeur();
       
      
      }
    getDemandeurs() {
      console.log("ff")
      this.contactservice.getcontact().subscribe(data => {
        if (data != null) {
          this. Demandeurs = data;
          this.totalDemandeurs = data.length;
          console.log(data.length)
        } else {
          this.totalDemandeurs = 0;
          this.Demandeurs = []
        }
      })
    }
  ngOnInit(): void {
    this.getDemandeurs();
  }
  showAddForm() {
    this.addFormVisible = true;
  }
  hideAddForm() {
    this.addFormVisible = false;
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  gotoTDetails() {
    window.scroll({ 
      top: 700, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
  redirectToList(){
    this.router.navigate(['/admin/demandeur'])
  }
}
