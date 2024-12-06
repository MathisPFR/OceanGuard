import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { ZmpService } from '../../services/zmp.service';

@Component({
  selector: 'app-update-zmp',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './update-zmp.component.html',
  styleUrl: './update-zmp.component.css'
})
export class UpdateZmpComponent implements OnInit {

  form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    superficie: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl('')
  });

  zmpId: string = ''; 

  constructor(
    private zmpService: ZmpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.zmpId = this.route.snapshot.paramMap.get('id') || '';

    // Charge les données du ZMP pour pré-remplir le formulaire
    this.zmpService.getZmpById(this.zmpId).subscribe((zmp) => {
      this.form.setValue({
        nom: zmp.nom,
        superficie: zmp.superficie,
        latitude: zmp.location.geo.coordinates[0],
        longitude: zmp.location.geo.coordinates[1]
      });
    });
  }


  onSubmit() { 
    const updatedData = {
      nom: this.form.value.nom,
      superficie: parseFloat(this.form.value.superficie),
      location: {
        geo: {
          type: 'point',
          coordinates: [parseFloat(this.form.value.latitude), parseFloat(this.form.value.longitude)] as [number, number] 
        }
      }
    };

    this.zmpService.updateZmp(this.zmpId, updatedData).subscribe({
      next: (response) => {
        console.log('ZMP mis à jour avec succès :', response);
        this.router.navigate(['/']); 
      },
      error: (err) => {
        console.error('Erreur lors de la mise à jour :', err);
      }
    });
  
  }

}
