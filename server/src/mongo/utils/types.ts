import { Binary } from 'bson';

export interface _Id {
  _id: Binary;
}
export interface Id {
  id: string;
}

export type Query = { [key: string]: any }[];
export type Matches = { [key: string]: any }[];
export type Sort = { [key: string]: number };