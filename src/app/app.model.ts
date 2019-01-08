export interface MeniuStandard {
  id: string;
  Descriere: string;
  Ciorba: Fel;
  felPrincipal: Fel;
  img: string;
  nume: string;
  pret: string;
}

export interface Fel {
  descriere: string;
  nume: string;
  photoURL: string;
  pret: number;
  categorie: string;
}


