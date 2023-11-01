import { fromHoursTOSeconds } from "./utils/fromHoursToSeconds";

export const HOUR_TO_MINUTES = 60;
export const MINUTES_TO_SECONDS = 60;

export const DURATION_LIMIT_IN_HOURS = 8;

export const DURATION_LIMIT_IN_SECONDS = fromHoursTOSeconds(
  DURATION_LIMIT_IN_HOURS
);
