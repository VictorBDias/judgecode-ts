import { useApiStatus } from 'shared/hooks/useApiStatus';
import { usePagination } from 'shared/hooks/usePagination';
import { useQuestionsRepository } from '../repositories/implementations/questions.repository';
import { useQuestionsController } from '../useCases/listQuestions/listQuestions.controller';

export const useQuestions = () => {
  const repository = useQuestionsRepository();
  const { page, lastPage, replacePagination } = usePagination();
  const { status, changeStatus } = useApiStatus();

  const listController = useQuestionsController({
    changeStatus,
    repository,
    replacePagination,
  });

  return {
    questions: repository.questions,
    listQuestions: listController.handle,
    status,
    page,
    lastPage,
  };
};
