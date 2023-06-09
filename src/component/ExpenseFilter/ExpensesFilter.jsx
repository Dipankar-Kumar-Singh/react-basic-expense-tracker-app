import React from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = ({onExpenseFilerChnage}) => {

  const downpDownSelectHanlder =  (e)=>{
    // load the data to pass it to the parent 
    onExpenseFilerChnage(e.target.value) ;
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={downpDownSelectHanlder}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;