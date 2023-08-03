import React from 'react';

const Exhibit = ({ title, children }) => {
  return (
    <div className="card mb-4">
      <div className="card-header">
        <h5 className="mb-0">{title}</h5>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Exhibit;
