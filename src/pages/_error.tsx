// It will be used in production env only
const Error = ({ statusCode }: any): unknown => {
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}</p>;
};

Error.getInitialProps = ({ res, err }: any): unknown => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
