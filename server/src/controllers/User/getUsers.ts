import { findDocuments } from '../../mongo/methods/findDocuments';
import { getCollection } from '../../mongo/methods/getCollection';

export const getUsers = async () => {
 const response = await findDocuments({ collectionName: 'Users' })

 return response
};