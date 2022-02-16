import { ReactNode, TextareaHTMLAttributes } from 'react';

export interface TypographyProps
  extends TextareaHTMLAttributes<HTMLParagraphElement> {
  children: ReactNode | string | number;
  variant?: 'regular' | 'subTitle' | 'title' | 'whiteTitle' | 'whiteRegular' | 'whiteSubTitle';
  maxLines?: number;
  className?: string;
}
