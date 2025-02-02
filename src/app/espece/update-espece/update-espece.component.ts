import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { EspeceService } from '../../services/espece.service';
import { ZmpService } from '../../services/zmp.service';
import { Espece } from '../../services/espece.model';
import { Zmp } from '../../services/zmp.model';

@Component({
  selector: 'app-update-espece',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './update-espece.component.html',
  styleUrls: ['./update-espece.component.css']
})
export class UpdateEspeceComponent implements OnInit {
  espece: Espece = {
    id: '',
    nom: '',
    description: '',
    tailleMin: 0,
    poidsMin: 0,
    zmpId: []
  };
  zmpList: Zmp[] = [];

  constructor(
    private especeService: EspeceService,
    private zmpService: ZmpService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.loadEspece(id);
    this.loadZmps();
  }

  loadEspece(id: string): void {
    this.especeService.getEspeceById(id).subscribe({
      next: (espece) => {
        this.espece = espece;
      },
      error: (error) => {
        console.error('Erreur lors du chargement de l\'espèce:', error);
      }
    });
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

  onZmpChange(zmpId: string, event: any): void {
    if (event.target.checked) {
      this.espece.zmpId.push(zmpId);
    } else {
      this.espece.zmpId = this.espece.zmpId.filter(id => id !== zmpId);
    }
  }

  isZmpSelected(zmpId: string): boolean {
    return this.espece.zmpId.includes(zmpId);
  }

  onSubmit(): void {
    this.especeService.updateEspece(this.espece.id, this.espece).subscribe({
      next: () => {
        console.log('Espèce mise à jour avec succès');
        this.router.navigate(['/especes']);
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour:', error);
      }
    });
  }
}
