import { useApiStatus } from 'shared/hooks/useApiStatus';
import { usePagination } from 'shared/hooks/usePagination';
import { useQuestionsRepository } from '../repositories/implementations/questions.repository';
import { useCreateQuestionsController } from '../useCases/createQuestions/createQuestions.controller';
import { useDeleteQuestionsController } from '../useCases/deleteQuestions/deleteQuestions.controller';
import { useQuestionsController } from '../useCases/listQuestions/listQuestions.controller';
import { useUpdateQuestionsController } from '../useCases/updateQuestions/updateQuestions.controller';

export const useQuestions = () => {
  const repository = useQuestionsRepository();
  const { page, lastPage, replacePagination } = usePagination();
  const { status, changeStatus } = useApiStatus();

  const listQuestionController = useQuestionsController({
    changeStatus,
    repository,
    replacePagination,
  });

  const createQuestionController = useCreateQuestionsController(
    repository,
    changeStatus,
  );

  const updateQuestionController = useUpdateQuestionsController(
    repository,
    changeStatus,
  );

  const deleteQuestionController = useDeleteQuestionsController(
    repository,
    changeStatus,
  );

  return {
    questions: repository.questions,
    listQuestions: listQuestionController.handle,
    createQuestion: createQuestionController.handle,
    updateQuestion: updateQuestionController.handle,
    deleteQuestion: deleteQuestionController.handle,
    status,
    page,
    lastPage,
  };
};
