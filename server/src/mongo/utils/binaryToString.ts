import MUUID from 'uuid-mongodb';
import { Binary, ObjectId } from 'mongodb';

export function binaryToString(_id: null | undefined | Binary): string;
export function binaryToString(_id: Binary[]): string[];

export function binaryToString(_id: null | undefined | Binary | Binary[]) {
  if (!_id) return '';
  if (Array.isArray(_id)) return _id.map<string>(binaryToString);
  return ObjectId.isValid(_id as any) ? _id.toString() : MUUID.from(_id).toString(); // ex: Binary => 'e45b-34a…defc'
}
