'use strict';

let dispatch = (event, context, callback) => {
  console.log(JSON.stringify(event));
  context.succeed(event);
};

module.exports.dispatch = dispatch;
