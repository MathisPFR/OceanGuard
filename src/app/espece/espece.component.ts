import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EspeceService } from '../services/espece.service';
import { ZmpService } from '../services/zmp.service';
import { Espece } from '../services/espece.model';
import { Zmp } from '../services/zmp.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-espece',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './espece.component.html',
  styleUrls: ['./espece.component.css']
})
export class EspeceComponent implements OnInit {
  especeList: Espece[] = [];
  zmpList: Zmp[] = [];

  constructor(
    private especeService: EspeceService,
    private zmpService: ZmpService
  ) {}

  ngOnInit(): void {
    this.loadEspeces();
    this.loadZmps();
  }

  loadEspeces(): void {
    this.especeService.getEspeces().subscribe({
      next: (especes) => {
        this.especeList = especes;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des espèces:', error);
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

  getZmpName(zmpId: string): string {
    const zmp = this.zmpList.find(z => z.id === zmpId);
    return zmp ? zmp.nom : 'ZMP inconnue';
  }

  deleteEspece(id: string): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette espèce ?')) {
      this.especeService.deleteEspece(id).subscribe({
        next: () => {
          console.log('Espèce supprimée avec succès');
          this.especeList = this.especeList.filter(e => e.id !== id);
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
        }
      });
    }
  }
}
