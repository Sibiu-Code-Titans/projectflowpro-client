import { ClassValue, clsx } from "clsx";
import { format, isDate } from "date-fns";
import { ro } from "date-fns/locale";
import { twMerge } from "tailwind-merge";
import { DATE_FORMAT } from "./constants";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getFormattedDateOrValue = (value: string) => {
  // Will throw Invalid Date exception if not date, that's why catch returns unparsed value
  try {
    if (isDate(new Date(value))) {
      return format(new Date(value), DATE_FORMAT, { locale: ro });
    }
  } catch (error) {
    return value;
  }
};
