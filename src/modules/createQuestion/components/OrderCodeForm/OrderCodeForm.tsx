import React from 'react';
import { LinesDraggableList } from '../../../../shared/components/molecules';
import { CodeEditor } from '../../../../shared/components/organisms/CodeEditor';
import { useCreateQuestion } from '../../contexts/CreateQuestion.context';

// import { Container } from './styles';

const mockData = [
  { id: 1, content: 'var length = items.length;' },
  { id: 2, content: 'for (var i = 0; i < length; i++)' },
  { id: 3, content: 'for (var j = 0; j < (length - i - 1); j++)' },
  { id: 4, content: 'if(items[j] > items[j+1]) var tmp = items[j]' },
  { id: 5, content: '  items[j] = items[j+1]; items[j+1] = tmp' },
];

const OrderCodeForm = () => {
  const { codeEditorContent, setCodeEditorContent } = useCreateQuestion();

  return (
    <LinesDraggableList
      data={mockData}
      title="Ordene as linhas a fim de realizar uma implementação de classificação em bolha em JavaScript"
    />
  );
};

export { OrderCodeForm };
