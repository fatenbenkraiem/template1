import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/admin/login/login.component';
import { AdminreserveComponent } from './components/admin/pages/adminreserve/adminreserve.component';
import { AdmincontactsComponent } from './components/admin/pages/admincontacts/admincontacts.component';
import { AdmineefComponent } from './components/admin/pages/admineef/admineef.component';
import { AdminresComponent } from './components/admin/pages/adminres/adminres.component';
import { ProfileComponent } from './components/admin/pages/profile/profile.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContenueFormationComponent } from './components/contenue-formation/contenue-formation.component';
import { ResComponent } from './components/res/res.component';
import { ExamenFrancaisComponent } from './components/examen-francais/examen-francais.component';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  { path: "", redirectTo: "EEF", pathMatch: "full" },
  { path: "EEF", component: ExamenFrancaisComponent },
  { path: "EVC", component: ResComponent },
    { path: "CF", component: ContenueFormationComponent },
  { path: "CONTACT", component: ContactComponent },
  /* Admin routes */
  { path: "admin/demandeur", component: AdmincontactsComponent    },
  { path: "admin/reserve", component: AdminreserveComponent   },
  { path: "admin/type", component: AdmineefComponent  },
  { path: "admin/res", component: AdminresComponent  },
  { path: "admin/edit", component: ProfileComponent  },
  { path: "admin/login", component: LoginComponent   },
  { path: "**", redirectTo: "EEF", pathMatch: "full"   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
