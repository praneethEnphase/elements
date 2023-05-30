import React, { useState } from 'react';

const RandomNumbers = () => {
  const [count, setCount] = useState<number>(3);

  const onChange = x => {
    setCount(x.target.value);
  };

  return (
    <div>
      <input onChange={onChange} defaultValue={0} value={count} />
      {count + 10}
    </div>
  );
};

export default RandomNumbers;
