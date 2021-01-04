import React from 'react';

function Title() {
  console.log('rendering title');
  return <div>usecallBack hook</div>;
}

export default React.memo(Title);
