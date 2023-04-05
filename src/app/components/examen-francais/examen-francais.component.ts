import { Component, OnInit } from '@angular/core';
import { ActualitesType } from 'src/app/model/actualite-type';
import { ExamenService } from 'src/app/services/examen.service';
import { Observable,Subscription, interval  } from 'rxjs';

@Component({
  selector: 'app-examen-francais',
  templateUrl: './examen-francais.component.html',
  styleUrls: ['./examen-francais.component.css']
})
export class ExamenFrancaisComponent implements OnInit {

  actualitesExamen!: ActualitesType[]
  hasAtualites = false;

  updateSubscription!: Subscription

  constructor(
    private examenEfService: ExamenService,
  ) { }
  mydate (act :ActualitesType): String {

  return  Object.values(act)[1]
  }


 
getAllActualites(){
 
  this.examenEfService.getAll().subscribe(data=> {
    console.log(data);
    if (data !=null )
    {
      this.hasAtualites = true;
      this.actualitesExamen = data;
    }
   
  }, error=>console.log("here "+error))
}
  ngOnInit(): void {
 
    this.gotoTop();
    this.getAllActualites();

this.updateSubscription = interval(5000).subscribe((data) =>{
  this.getAllActualites();

 })
  }



  gotoTDetails() {
    window.scroll({ 
      top: 1000, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

}

