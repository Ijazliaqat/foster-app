import { format, getTime, formatDistanceToNow, parseISO, differenceInYears } from "date-fns";

// ----------------------------------------------------------------------

export function fDate(date: string) {
  return format(new Date(date), "dd MMMM yyyy");
}

export function fDateTime(date: string) {
  return format(new Date(date), "dd MMM yyyy p");
}

export function fTimestamp(date: string) {
  return getTime(new Date(date));
}

export function fDateTimeSuffix(date: string) {
  return format(new Date(date), "dd/MM/yyyy hh:mm p");
}

export function fToNow(date: string) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
}
export function calculateISOAge(dob: string) {
  const age = differenceInYears(new Date(), parseISO(dob));
  return age;
}

export function parseToTimeStamp(date: string) {
  return new Date(date);
}

// export function parseDatesToTimeStamp(obj: any) {
//   for(const key in obj){
//     const item = obj[key]

//     if(typeof item === 'object' && !Array.isArray(item)) parseDatesToTimeStamp(item)
//     else if(typeof item === 'object')
//   }
// }

export function parseDatesToTimeStampByKey(obj: any) {
  for (const key in obj) {
    const item = obj[key];
    if (typeof item === "object" && !Array.isArray(item)) parseDatesToTimeStampByKey(item);
    else if (typeof item === "string") {
      if (
        ["date", "time", "duration"].some((timeKey) => {
          return key.toLowerCase().includes(timeKey);
        })
      )
        obj[key] = parseToTimeStamp(obj[key]);
    }
  }
}
