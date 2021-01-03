import React from 'react';

const FRInput = React.forwardRef((props, ref) => {
  return (
    <div>
      <input tyoe="text" ref={ref} />
    </div>
  );
});

export default FRInput;
