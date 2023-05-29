const repl = require('node:repl');
const msg = "message";
const hw = "Hello World!";

const r = repl.start('> ');
r.context.m = msg;
r.context.h = hw;