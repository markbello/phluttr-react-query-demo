export interface Comment {
  createdBy: string;
  text: string;
  createdAt: string;
}
export interface Like {
  createdBy: string;
  createdAt: string;
}

export interface Post {
  _id?: string;
  id?: string;
  createdBy: string;
  text: string;
  comments: Comment[];
  createdAt: string;
  likes: Like[]
}