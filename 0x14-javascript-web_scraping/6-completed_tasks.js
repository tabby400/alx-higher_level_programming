#!/usr/bin/node
// import request

const request = require('request');
request(process.argv[2], function (error, response, body) {
  if (!error) {
    const todos = JSON.parse(body);
    const completedTasks = {};
    todos.forEach((todo) => {
      if (todo.completed && completedTasks[todo.userId] === undefined) {
        completedTasks[todo.userId] = 1;
      } else if (todo.completed) {
        completedTasks[todo.userId] += 1;
      }
    });
    console.log(completedTasks);
  }
});
