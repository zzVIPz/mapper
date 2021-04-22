import React from 'react';
import { connect } from 'react-redux';

import Filter from '../filter';
import DataPicker from '../data-picker';
import Row from '../row';

import {
  setPriorityFilter,
  setStatusFilter,
  setDateFilter,
} from '../../redux/actions/jobs';

import {
  PRIORITY_LABEL,
  PRIORITY_SELECT_VALUES,
  STATUS_LABEL,
  STATUS_SELECT_VALUES,
} from './const';

import './sidebar.css';

function Sidebar({
  handlePriorityChange,
  handleStatusChange,
  handleDateChange,
}) {
  return (
    <div className="sidebar__container">
      <h1 className="sidebar__title">Job Filters</h1>
      <Row>
        <Filter
          title={PRIORITY_LABEL}
          options={PRIORITY_SELECT_VALUES}
          onChange={(key) => handlePriorityChange(key)}
        />
      </Row>
      <Row>
        <Filter
          title={STATUS_LABEL}
          options={STATUS_SELECT_VALUES}
          onChange={(key) => handleStatusChange(key)}
        />
      </Row>
      <Row>
        <DataPicker onChangeDate={(key) => handleDateChange(key)} />
      </Row>
    </div>
  );
}

function SidebarContainer({ onPriorityFilter, onStatusFilter, onDateFilter }) {
  const handlePriorityChange = (key) => {
    onPriorityFilter(key);
  };

  const handleStatusChange = (key) => {
    onStatusFilter(key);
  };

  const handleDateChange = (key) => {
    onDateFilter(key);
  };

  return (
    <Sidebar
      handlePriorityChange={handlePriorityChange}
      handleStatusChange={handleStatusChange}
      handleDateChange={handleDateChange}
    />
  );
}

export default connect(null, {
  onPriorityFilter: setPriorityFilter,
  onStatusFilter: setStatusFilter,
  onDateFilter: setDateFilter,
})(SidebarContainer);
