import * as I from '../interfaces';

export interface ListQuery {
  page?: number;
  count?: number;
  sort?: string;
  dir?: 'desc' | 'asc' | 'DESC' | 'ASC';
  q?: string;
}

export interface FindAllProductQuery extends ListQuery {
  category: I.ProductCategory;
}
