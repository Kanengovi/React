import React, { useState } from 'react';
import ListChild from './listchild';
function State(props) {
  const [count, setCount] = useState(0);
  const [userName, setUserName] = useState('Dong');

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Tăng count</button>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Nhập tên người dùng"
      />
      <ListChild count={count} userName={userName} />
    </div>
  );
}

export default State;
