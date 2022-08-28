import { findDocuments } from '../../mongo/methods/findDocuments';
import { getCollection } from '../../mongo/methods/getCollection';
import { convertDbToDto } from '../../mongo/utils/convertDbToDto';

export const getUsers = async () => {
 const response = await findDocuments({ collectionName: 'Users' })

 return response
};