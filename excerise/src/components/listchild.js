import React from 'react';

function ListChild({ count, userName }) {
  return (
    <div>
      <p>Số lượng: {count}</p>
      <p>Tên người dùng: {userName}</p>
    </div>
  );
}

export default ListChild;
