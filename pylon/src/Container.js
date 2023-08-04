import React from 'react';

const Container = ({ title, children }) => {
  return (
    <div style={styles.container}>
      <h2>{title}</h2>
      <div style={styles.content}>{children}</div>
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '16px',
    margin: '16px 0',
  },
  content: {
    marginTop: '10px',
  },
};

export default Container;
