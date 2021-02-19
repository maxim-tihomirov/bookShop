export interface IBook {
  name: string;
  description: string;
  price: number;
  category: Category;
  createDate: number;
  isAvailable: boolean;
}

export const enum Category {
  Horror = 'Horror',
  Detective = 'Detective',
  Fantasy = 'Fantasy',
  Business = 'Business & Finance',
  Novel = 'Novel',
}
