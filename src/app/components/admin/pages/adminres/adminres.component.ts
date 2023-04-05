import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { ToastrService } from 'ngx-toastr';
import { ActualiteRes } from 'src/app/model/actualite-res';
import { ExamenevcService } from 'src/app/services/examenevc.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-adminres',
  templateUrl: './adminres.component.html',
  styleUrls: ['./adminres.component.css']
})
export class AdminresComponent implements OnInit {

  actualiteRes: ActualiteRes= new ActualiteRes();

  actualitesRes!: ActualiteRes[];

  totalActualites!: number;
   
  constructor(
    private fileUploadService: ImageService,
    private examenEvcService: ExamenevcService,
  //  private toastr: ToastrService,
    private router: Router
    
  ) { }

  ngOnInit(): void {
    this.getActualitesadmin();
  }

  redirectToList(){
    this.router.navigate(['/admin/evc'])
  }

  createActualite(){
    
    
  this.examenEvcService.createActualite(this.actualiteRes).subscribe(data=>{
      console.log(data)
    //  this.toastr.success("Actualité publié avec succès!")
      this.getActualitesadmin()
      this.redirectToList()
    }, error=>{
      console.log(error);
      //this.toastr.error("Erreur, Serveur ne répond pas!")
    });
    this.actualiteRes=new ActualiteRes();
    

  }

  getActualitesadmin(){
    this.actualiteRes = new ActualiteRes();
    this.examenEvcService.getoffresAll().subscribe(data => {
      if(data != null){
        console.log(data.length)
        this.actualitesRes = data;
        this.totalActualites = data.length;
      }else{
        this.totalActualites = 0;
        this.actualitesRes = [];
      }
    }, error => {
    //  this.toastr.warning("Serveur ne répond pas!")
    });
  }

  
  deleteActualite(act: ActualiteRes) {
    
 var id= Object.values(act)[0]

    this.examenEvcService.deleteActualite(id).subscribe(data => {
      //this.toastr.warning("L'actualité supprimée!")
      console.log(data);
      this.getActualitesadmin();
      this.redirectToList()
      
    }, error => {
     // this.toastr.error("Error, server not responding!")
      console.log(error)
    })
  }

  editActualite(act: ActualiteRes) {
    var id= Object.values(act)[0]
    this.examenEvcService.findActualiteById(id).subscribe(data=>{
      this.actualiteRes = data;
    });
  }
  


imagePath !:String;
selectedfile :any ;
imgURL: any;
  UploadFile(): void {
   
    if (this.selectedfile !=null)
    {
    
    const formData = new FormData();
    formData.append('text',"actuailitesres")
    formData.append('files', this.selectedfile, this.selectedfile.name); 
    this.fileUploadService.saveImage(formData).subscribe(
      event => {
        console.log(event);
      
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
    }
  }
 dispaly(event: any) :void
{
  this.selectedfile = event.target.files[0];
  var reader = new FileReader();
  this.imagePath = this.selectedfile;
  reader.readAsDataURL(this.selectedfile); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
  this.actualiteRes.image=this.actualiteRes.image.substring(this.actualiteRes.image.lastIndexOf("\\"))

}

}
