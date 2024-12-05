import { Component, OnInit } from '@angular/core';
import { Zmp } from '../../services/zmp.model';
import { ZmpService } from '../../services/zmp.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zmp',
  imports: [CommonModule],
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
}
