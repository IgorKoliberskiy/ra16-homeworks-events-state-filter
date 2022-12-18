import React from 'react';

export default class Toolbar extends React.Component {
  render() {
    const { filters, selected, onSelectFilter } = this.props;
    
    return (
      <div className = 'filters'>
        {filters.map(el => <button className={selected === el ? 'active filter': 'filter'} onClick={() => onSelectFilter(el)} key={el}>{el}</button>)}
      </div>
    );
  }
}