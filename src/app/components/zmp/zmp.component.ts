import { Component, OnInit } from '@angular/core';
import { Zmp } from '../../services/zmp.model';
import { ZmpService } from '../../services/zmp.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-zmp',
  imports: [CommonModule, RouterLink],
  templateUrl: './zmp.component.html',
  styleUrl: './zmp.component.css'
})
export class ZmpComponent implements OnInit {
  zmpList: Zmp[] = [];


  constructor(private zmpService: ZmpService) {}

  ngOnInit(): void {
    this.fetchZmp();
  }

  fetchZmp(): void {
    this.zmpService.getZmp().subscribe({
      next: (data: Zmp[]) => {
        this.zmpList = data;
        console.log('Données reçues:', data); 
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des ZMP:', err);
      }
    });
  }

  onDelete(id: string): void {
    if (confirm('Voulez-vous vraiment supprimer ce ZMP ?')) {
      this.zmpService.deleteZmp(id).subscribe({
        next: () => {
          console.log(`ZMP avec l'ID ${id} supprimé.`);
          this.zmpList = this.zmpList.filter((zmp) => zmp.id !== id); 
        },
        error: (err) => {
          console.error('Erreur lors de la suppression :', err);
        }
      });
    }
  }
}
