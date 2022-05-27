import React from 'react';
import { CodeEditor } from '../../../../shared/components/organisms/CodeEditor';
import { useCreateQuestion } from '../../contexts/CreateQuestion.context';

// import { Container } from './styles';

const mockData = {
  'line-1': { id: 1, content: 'linha 1' },
  'line-2': { id: 1, content: 'linha 1' },
  'line-3': { id: 1, content: 'linha 1' },
  'line-4': { id: 1, content: 'linha 1' },
};

const OrderCodeForm = () => {
  const { codeEditorContent, setCodeEditorContent } = useCreateQuestion();

  return (
    <CodeEditor
      mode="javascript"
      value={codeEditorContent}
      onChange={(value) => setCodeEditorContent(value)}
    />
  );
};

export { OrderCodeForm };
