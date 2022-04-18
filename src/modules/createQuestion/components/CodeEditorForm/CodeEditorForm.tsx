import React from 'react';
import { CodeEditor } from '../../../../shared/components/organisms/CodeEditor';

// import { Container } from './styles';

const CodeEditorForm = () => {
  return (
    <CodeEditor mode="javascript" onChange={(value) => console.log(value)} />
  );
};

export { CodeEditorForm };
