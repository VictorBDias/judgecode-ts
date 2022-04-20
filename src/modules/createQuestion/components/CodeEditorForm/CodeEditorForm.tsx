import React from 'react';
import { CodeEditor } from '../../../../shared/components/organisms/CodeEditor';
import { useCreateQuestion } from '../../contexts/CreateQuestion.context';

// import { Container } from './styles';

const CodeEditorForm = () => {
  const { codeEditorContent, setCodeEditorContent } = useCreateQuestion();

  return (
    <CodeEditor
      mode="javascript"
      value={codeEditorContent}
      onChange={(value) => setCodeEditorContent(value)}
    />
  );
};

export { CodeEditorForm };
