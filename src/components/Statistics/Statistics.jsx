import React from 'react';
import { List, List1, List2 } from './Statistics.styles';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <List2>Good : {good}</List2>
      <List2>Neutral : {neutral}</List2>
      <List2>Bad : {bad}</List2>
      <List>Total : {total}</List>
      <List1>Positive Percentage : {positivePercentage}%</List1>
    </>
  );
};

export default Statistics;
