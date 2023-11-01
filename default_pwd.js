const bcrypt = require("bcryptjs");
console.log(bcrypt.hashSync("<XW9Mbc>", bcrypt.genSaltSync(12)));

//algorithm password
