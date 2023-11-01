"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DURATION_LIMIT_IN_SECONDS = exports.DURATION_LIMIT_IN_HOURS = exports.MINUTES_TO_SECONDS = exports.HOUR_TO_MINUTES = void 0;
const utils_1 = require("./utils");
exports.HOUR_TO_MINUTES = 60;
exports.MINUTES_TO_SECONDS = 60;
exports.DURATION_LIMIT_IN_HOURS = 8;
exports.DURATION_LIMIT_IN_SECONDS = (0, utils_1.fromHoursTOSeconds)(exports.DURATION_LIMIT_IN_HOURS);
