import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EspeceService } from '../../services/espece.service';
import { ZmpService } from '../../services/zmp.service';
import { CreateEspece } from '../../services/espece.model';
import { Zmp } from '../../services/zmp.model';

@Component({
  selector: 'app-add-espece',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './add-espece.component.html',
  styleUrls: ['./add-espece.component.css']
})
export class AddEspeceComponent {
  nom: string = '';
  description: string = '';
  tailleMin: number = 0;
  poidsMin: number = 0;
  zmpId: string[] = [];
  zmpList: Zmp[] = [];

  constructor(
    private especeService: EspeceService,
    private zmpService: ZmpService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadZmps();
  }

  loadZmps(): void {
    this.zmpService.getZmp().subscribe({
      next: (zmps) => {
        this.zmpList = zmps;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des ZMPs:', error);
      }
    });
  }

  onSubmit(): void {
    const newEspece: CreateEspece = {
      nom: this.nom,
      description: this.description,
      tailleMin: this.tailleMin,
      poidsMin: this.poidsMin,
      zmpId: this.zmpId
    };

    this.especeService.createEspece(newEspece).subscribe({
      next: () => {
        console.log('Espèce créée avec succès');
        this.router.navigate(['/especes']);
      },
      error: (error) => {
        console.error('Erreur lors de la création:', error);
      }
    });
  }

  onZmpChange(zmpId: string, event: any): void {
    if (event.target.checked) {
      this.zmpId.push(zmpId);
    } else {
      this.zmpId = this.zmpId.filter(id => id !== zmpId);
    }
  }
}
