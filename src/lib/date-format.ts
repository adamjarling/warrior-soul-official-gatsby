export function formatDate(date: string) {
  // Format the date like "July 10, 2024 8:00 PM"
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(date));
}
