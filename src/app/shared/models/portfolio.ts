export interface Portfolio {
  id_projeto: number;
  url_site_projeto: string;
  galerias: Galeria[];
}

export interface Galeria {
  url_galeria: string;
}
