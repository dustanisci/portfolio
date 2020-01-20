export interface Technologies {
  type: Technology;
  names: string[];
}

export enum Technology {
  Frontend = 0,
  Backend = 1,
  Others = 2,
  Database = 3,
  Test = 4
}