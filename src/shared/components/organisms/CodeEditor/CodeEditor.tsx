import React, { useState } from 'react';
import AceEditor from 'react-ace';

// IMPORT LANGUAGES
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-xml';
import 'ace-builds/src-noconflict/mode-ruby';
import 'ace-builds/src-noconflict/mode-sass';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-handlebars';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-csharp';
import 'ace-builds/src-noconflict/mode-elixir';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/mode-css';

// IMPORT THEMES
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/theme-twilight';
import 'ace-builds/src-noconflict/theme-xcode';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-solarized_dark';
import 'ace-builds/src-noconflict/theme-solarized_light';
import 'ace-builds/src-noconflict/theme-terminal';

import debounce from 'lodash.debounce';
import { useCreateQuestion } from 'modules/createQuestion/contexts/CreateQuestion.context';
import { CodeEditorProps } from './codeEditor.interfaces';
import { Container } from './codeEditor.styles';
import { Select } from '../../atoms/Select';

const languageOptions = [
  {
    id: 1,
    label: 'javascript',
    value: 'javascript',
  },
  {
    id: 2,
    label: 'java',
    value: 'java',
  },
  {
    id: 3,
    label: 'python',
    value: 'python',
  },
  {
    id: 4,
    label: 'ruby',
    value: 'ruby',
  },
  {
    id: 5,
    label: 'sass',
    value: 'sass',
  },
  {
    id: 6,
    label: 'markdown',
    value: 'markdown',
  },
  {
    id: 7,
    label: 'mysql',
    value: 'mysql',
  },
  {
    id: 8,
    label: 'json',
    value: 'json',
  },
  {
    id: 9,
    label: 'html',
    value: 'html',
  },
  {
    id: 10,
    label: 'handlebars',
    value: 'handlebars',
  },
  {
    id: 11,
    label: 'golang',
    value: 'golang',
  },
  {
    id: 12,
    label: 'csharp',
    value: 'csharp',
  },
  {
    id: 13,
    label: 'elixir',
    value: 'elixir',
  },
  {
    id: 14,
    label: 'typescript',
    value: 'typescript',
  },
  {
    id: 15,
    label: 'css',
    value: 'css',
  },
];

const CodeEditor = ({
  placeholder = '',
  theme = 'monokai',
  fontSize = 14,
  onLoad,
  onChange,
  value,
  showLanguageOptions = true,
  readOnly = false,
  initialData,
  ...rest
}: CodeEditorProps) => {
  const { language, setLanguage } = useCreateQuestion();

  const debouncedOnChange = debounce((newValue: string) => {
    if (onChange) onChange(newValue);
  }, 500);
  return (
    <Container>
      {showLanguageOptions && (
        <Select
          options={languageOptions}
          value={language}
          onChange={(e: any) => setLanguage(e.target.value)}
        />
      )}
      <AceEditor
        {...rest}
        style={{
          width: 600,
          marginTop: 24,
          borderRadius: 8,
        }}
        placeholder={placeholder}
        mode={language}
        theme={theme}
        name="blah2"
        onLoad={onLoad}
        onChange={debouncedOnChange}
        fontSize={fontSize}
        showPrintMargin
        showGutter
        highlightActiveLine
        value={value}
        readOnly={readOnly}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 4,
        }}
      />
    </Container>
  );
};
export { CodeEditor };
