import { useRouteError, isRouteErrorResponse } from "react-router-dom"
import Container from 'react-bootstrap/Container'

const containerStyle = { maxWidth: '40em' }

export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

  let errorMessage: string;

  if(isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <Container style={containerStyle} className='d-flex flex-column justify-content-center align-items-center vw-100 vh-100'>
      <h1 className='display-1'>Oops!</h1>
      <p className='mb-4'>
        {errorMessage}
      </p>
    </Container>
  );
}