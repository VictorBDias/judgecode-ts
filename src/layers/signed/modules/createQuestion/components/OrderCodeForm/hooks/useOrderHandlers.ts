export const useOrderHandlers = (setState: any) => {
  const NEW_LINE = 'newline#';

  const addLine = () => {
    setState((state: any) => {
      const lineId = state.linesCount + 1;

      const newLine = {
        id: lineId,
        name: `${NEW_LINE}${lineId}`,
      };

      state.linesCount += 1;
      state.lines = [...state.lines, newLine];

      return { ...state };
    });
  };

  const deleteLine = (lineId: number) => {
    setState((state: any) => {
      if (state.lines.length === 1) {
        // eslint-disable-next-line no-alert
        alert('Não é possivel excluir todas as linhas');
        return state;
      }

      const filteredArray = state.lines.filter(
        (line: any) => line.id !== lineId,
      );

      return { ...state, lines: filteredArray };
    });
  };

  const reorderLines = (sortedLines: any) => {
    const lines = sortedLines.map((sortedLine: any) => ({
      ...sortedLine,
      description: sortedLine.description,
    }));

    // API CALL

    setState((state: any) => ({
      ...state,
      lines,
    }));
  };
  return { addLine, deleteLine, reorderLines };
};
