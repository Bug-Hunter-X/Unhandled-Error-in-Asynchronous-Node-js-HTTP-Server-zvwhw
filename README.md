# Unhandled Error in Asynchronous Node.js HTTP Server

This repository demonstrates a common error in asynchronous Node.js applications: improper handling of errors in asynchronous operations within an HTTP server.  The provided `bug.js` file shows an example where an asynchronous operation might throw an error, but the error isn't handled correctly, leading to a potential crash or unexpected behavior.

The solution, `bugSolution.js`, demonstrates how to properly handle the error and respond accordingly to the client.