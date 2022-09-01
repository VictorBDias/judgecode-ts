export type IRole = {
  deletable: boolean;
  description: string;
  id: string;
  is_active: boolean;
  slug: string;
};

export type IUser = {
  id: string;
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  full_name: string;
  password: string;
  password_confirmation: string;
  roles: IRole[];
  is_online: boolean;
};

export type IToken = {
  type: string;
  token: string;
  expires_at: string;
};
