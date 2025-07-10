export const timeConvert = (time: string) => {
  const date = new Date(time);

  const humanReadable = date.toLocaleString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return humanReadable;
};

export const midtransTimeConvert = (time: string) => {
  const match = time.match(/^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})/);
  if (!match) return "Invalid date";

  const cleanDateStr = match[1].replace(" ", "T") + "Z";
  const date = new Date(cleanDateStr);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const hours = String(date.getUTCHours()).padStart(2, "0");
  const minutes = String(date.getUTCMinutes()).padStart(2, "0");

  return `${day}/${month}  ${hours}:${minutes}`;
};
