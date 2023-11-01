import { HOUR_TO_MINUTES, MINUTES_TO_SECONDS } from "../const";

export const fromHoursTOSeconds = (numberOfHours: number) =>
  (numberOfHours = HOUR_TO_MINUTES * MINUTES_TO_SECONDS);
