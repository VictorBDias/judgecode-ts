import React from 'react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash.debounce';

// CUSTOM IMPORTS
import { CodeEditor } from '../../shared/components/organisms/CodeEditor';

const CreateQuestion = () => {
  const navigate = useNavigate();

  const debouncedOnChange = debounce((newValue: string) => {
    console.log('change', newValue);
  }, 500);

  return <CodeEditor mode="javascript" onChange={debouncedOnChange} />;
};
export { CreateQuestion };
