import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ZmpService } from '../../services/zmp.service';

@Component({
  selector: 'app-post-zmp',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './post-zmp.component.html',
  styleUrl: './post-zmp.component.css'
})
export class PostZmpComponent {

  form: FormGroup = new FormGroup({
    nom: new FormControl(''),
    superficie: new FormControl(''),
    latitude: new FormControl(''),
    longitude: new FormControl('')
  });

  constructor(private zmpService: ZmpService) {}

  onSubmit() {
    const formData = this.form.value;

    const newZmp = {
      nom: formData.nom,
      superficie: parseFloat(formData.superficie),
      location: {
        geo: {
          type: 'point',
          coordinates: [parseFloat(formData.latitude), parseFloat(formData.longitude)] as [number, number] 
        }
      }
    };

    this.zmpService.postZmp(newZmp).subscribe({
      next: (response) => {
        console.log('ZMP ajouté avec succès :', response);
        alert("le zmp à été ajouté");
        this.form.reset(); 
      },
      error: (err) => {
        console.error('Erreur lors de l\'ajout du ZMP :', err);
      }
    });
    }


    }
 
  


