export interface Navbar {
  name: string;
  link: string;
  target: Target;
}

export enum Target {
  Blank = '_blank',
  None = ''
}
