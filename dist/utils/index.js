"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromHoursTOSeconds = void 0;
const const_1 = require("../const");
const fromHoursTOSeconds = (numberOfHours) => (numberOfHours = const_1.HOUR_TO_MINUTES * const_1.MINUTES_TO_SECONDS);
exports.fromHoursTOSeconds = fromHoursTOSeconds;
