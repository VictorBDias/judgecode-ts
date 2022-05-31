import { ReactNode, ReactElement } from 'react';

type Languages =
  | 'javascript'
  | 'java'
  | 'python'
  | 'xml'
  | 'ruby'
  | 'sass'
  | 'markdown'
  | 'mysql'
  | 'json'
  | 'html'
  | 'handlebars'
  | 'golang'
  | 'csharp'
  | 'elixir'
  | 'typescript'
  | 'css';

type Themes =
  | 'monokai'
  | 'github'
  | 'tomorrow'
  | 'twilight'
  | 'xcode'
  | 'textmate'
  | 'solarized_dark'
  | 'solarized_light'
  | 'terminal';

export interface CodeEditorProps {
  placeholder?: string;
  theme?: Themes;
  fontSize?: number;
  onChange: (value: string) => void;
  onLoad?: () => void;
  showLanguageOptions?: boolean;
  readOnly?: boolean;
  [x: string]: any;
}
