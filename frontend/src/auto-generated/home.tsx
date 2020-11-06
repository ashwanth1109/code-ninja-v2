import React from 'react';
import { Paper } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { themeSelector } from '@state/theme.state';

const HomePageView = () => {
  const theme = useSelector(themeSelector);

  const handleClick = () => {
    console.log('Click');
  };

  return (
    <div>
      <Paper
        onClick={handleClick}
        className="p-4 mt-8 cursor-pointer"
        style={{ backgroundColor: theme.header.bg, color: theme.header.text }}
      >
        <div className="flex row justify-between items-center">
          <h2 className="text-2xl font-semibold">
            Demystifying JavaScript Closures
          </h2>
          <p className="text-lg my-0">7th November, 2020</p>
        </div>
        <p>Test Description</p>
      </Paper>

      <Paper
        onClick={handleClick}
        className="p-4 mt-8 cursor-pointer"
        style={{ backgroundColor: theme.header.bg, color: theme.header.text }}
      >
        <div className="flex row justify-between items-center">
          <h2 className="text-2xl font-semibold">Introduction to RxJS</h2>
          <p className="text-lg my-0">7th November, 2020</p>
        </div>
        <p>Test Description</p>
      </Paper>
    </div>
  );
};

export default HomePageView;
