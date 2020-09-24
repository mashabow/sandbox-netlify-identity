exports.handler = function (event, context, callback) {
  console.log(
    "identity-signup",
    JSON.stringify(
      {
        context,
        event,
        env: process.env,
      },
      null,
      2
    )
  );

  callback(null, {
    statusCode: 200,
    body: "OK",
  });
};
