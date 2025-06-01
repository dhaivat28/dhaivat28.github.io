import { DateTime } from "luxon";

export const formatYearMonth = (isoYearMonth: string) =>
  DateTime.fromISO(isoYearMonth).toFormat("LLL yyyy");

export const getExperienceDuration = (
  startDate: string,
  endDate: string | null
) => {
  const start = DateTime.fromISO(startDate);
  const end = endDate ? DateTime.fromISO(endDate) : DateTime.now();
  const diff = end.diff(start, ["years", "months"]).toObject();
  const years = Math.floor(diff.years ?? 0);
  const months = Math.floor(diff.months ?? 0);
  const yearStr = years > 0 ? `${years} Year${years > 1 ? "s" : ""}` : "";
  const monthStr = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";
  return [yearStr, monthStr].filter(Boolean).join(" ");
};
