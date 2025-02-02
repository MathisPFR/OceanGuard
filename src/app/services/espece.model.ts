export interface Espece {
    id: string;
    nom: string;
    description: string;
    tailleMin: number;
    poidsMin: number;
    zmpId: string[];
}

// Types utilitaires pour les opérations CRUD
export type CreateEspece = Omit<Espece, 'id'>;
export type UpdateEspece = Partial<Omit<Espece, 'id'>>; 