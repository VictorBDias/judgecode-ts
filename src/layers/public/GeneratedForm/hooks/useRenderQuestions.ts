import React from 'react';

export const useFormatQuestions = (questions: any) =>
  questions.map((question: any) => {
    const { type } = question;
    switch (type) {
      case 'codeEditor':
        return type;

      case 'orderCode':
        return type;

      case 'test':
        return type;
      default:
        return null;
    }
  });
