export type ICategory = {
  id: string;
  name: string;
  description?: string;
};

export type IRole = {
  deletable: boolean;
  description: string;
  id: string;
  is_active: boolean;
  slug: string;
};

export type IOwner = {
  id: string;
  first_name: string;
  last_name?: string;
  username?: string;
  email: string;
  full_name: string;
  is_online: boolean;
  remember_me_token: any;
  roles: IRole[];
};

export type IQuestion = {
  id: string;
  title: string;
  body: string;
  language: string;
  owner_id: string;
  category_id: string;
  owner?: IOwner;
  category?: ICategory;
};
