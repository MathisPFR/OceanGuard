export interface Geo {
    type: string;
    coordinates: [number, number]; 
  }

  export interface Location {
    geo: Geo; 
  }


export interface Zmp {
    id: string;
    nom: string;
    superficie: number;
    location: Location;
}

