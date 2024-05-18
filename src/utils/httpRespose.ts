function ok(data: any) {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
}

function badRequest(error: Error) {
  return {
    statusCode: 400,
    body: error.message,
  };
}

function serverError(error: Error) {
  return {
    statusCode: 500,
    body: error.message,
  };
}

export { ok, badRequest, serverError };