import React from 'react';

function ErrorMessage({error}) {
  return (
    <>
    {error && <p className="text-danger">{error}</p>}
    </>
  );
}

export default ErrorMessage;