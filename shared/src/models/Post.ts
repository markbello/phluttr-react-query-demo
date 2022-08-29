export interface Comment {
  _id?: string;
  id?: string;
  userId: string;
  text: string;
  createdAt: string;
}

export interface Post {
  _id?: string;
  id?: string;
  userId: string;
  text: string;
  comments: Comment[];
  createdAt: string;
}