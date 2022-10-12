import { useApiStatus } from 'shared/hooks/useApiStatus';
import { usePagination } from 'shared/hooks/usePagination';
import { useFormsRepository } from '../repositories/implementations/forms.repository';
import { useCreateFormsController } from '../useCases/createForms/createQuestions.controller';
import { useDeleteFormsController } from '../useCases/deleteForms/deleteForms.controller';
import { useFormsController } from '../useCases/listForms/listForms.controller';
import { useUpdateFormsController } from '../useCases/updateForms/updateForms.controller';

export const useForms = () => {
  const repository = useFormsRepository();
  const { page, lastPage, replacePagination } = usePagination();
  const { status, changeStatus } = useApiStatus();

  const listFormController = useFormsController({
    changeStatus,
    repository,
    replacePagination,
  });

  const createFormController = useCreateFormsController(
    repository,
    changeStatus,
  );

  const updateFormController = useUpdateFormsController(
    repository,
    changeStatus,
  );

  const deleteFormController = useDeleteFormsController(
    repository,
    changeStatus,
  );

  return {
    forms: repository.forms,
    listForms: listFormController.handle,
    createForm: createFormController.handle,
    updateForm: updateFormController.handle,
    deleteForm: deleteFormController.handle,
    status,
    changeStatus,
    page,
    lastPage,
  };
};
