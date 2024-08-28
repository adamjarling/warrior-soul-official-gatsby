import { Show, tourDates } from "@/app/tour/tourdates";

// Write a function which sorts the tour dates by datetime in ascending order,
// and takes a second argument for descending order.  The default should be ascending
// order.

// The function should return an array of Show objects.
export function sortTourDates(tourDates: Show[], descending = false): Show[] {
  return tourDates.sort((a, b) => {
    if (descending) {
      return Date.parse(b.datetime) - Date.parse(a.datetime);
    } else {
      return Date.parse(a.datetime) - Date.parse(b.datetime);
    }
  });
}

// Write a function which only returns tour dates which are occuring today or into the future
// The function should return an array of Show objects.
export function getUpcomingTourDates(tourDates: Show[]): Show[] {
  return tourDates.filter((show) => {
    return Date.parse(show.datetime) >= Date.now();
  });
}

// Write a function which only returns tour dates which are occuring in the past
// The function should return an array of Show objects.

export function getPastTourDates(tourDates: Show[]): Show[] {
  return tourDates.filter((show) => {
    return Date.parse(show.datetime) < Date.now();
  });
}
