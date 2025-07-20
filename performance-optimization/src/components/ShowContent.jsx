import React from 'react'

 function ShowContent({title, count}) {
    console.log(`rendering ${title}`);
    
  return (
    <>
      <p>
        {title} value is {count}
      </p>
    </>
  );
}

export default React.memo(ShowContent)