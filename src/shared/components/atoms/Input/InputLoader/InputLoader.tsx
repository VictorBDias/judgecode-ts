import React from 'react';
import PropTypes from 'prop-types';
import ContentLoader from 'react-content-loader';
import { ThemeContext } from 'styled-components';
import { InputLoaderProps } from './inputLoader.interfaces';

export const InputLoader = ({
  width = 80,
  height = 300,
  ...rest
}: InputLoaderProps) => {
  const { colors } = React.useContext(ThemeContext);
  return (
    <ContentLoader
      speed={2}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor={colors.contentLoaderBackground}
      foregroundColor={colors.contentLoaderForeground}
      {...rest}
    >
      <rect x="0" y="-116" rx="16" ry="16" width={width} height="48" />
      <rect x="0" y="20" rx="4" ry="4" width={width} height="48" />
      <circle cx="185" cy="127" r="26" />
      <circle cx="109" cy="284" r="9" />
      <circle cx="117" cy="289" r="21" />
      <rect x="0" y="0" rx="4" ry="4" width="100" height="10" />
    </ContentLoader>
  );
};

InputLoader.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

InputLoader.defaultProps = {
  width: 300,
  height: 80,
};
