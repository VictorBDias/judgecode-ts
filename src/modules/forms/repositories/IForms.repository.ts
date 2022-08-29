import { IForm } from '../interfaces/forms.interfaces';

export interface IFormsRepository {
  appendList: (data: IForm[]) => void;
  replaceList: (data: IForm[]) => void;
  destroy: (id: string) => void;
  create: (data: IForm) => void;
  update: (id: string, data: IForm) => void;
  forms: IForm[];
}
