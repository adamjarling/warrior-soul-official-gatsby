import React from "react";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";

const DatesRow = (props) => {
  const { date, venueUrl, venue, location, ticketUrl, fbUrl } = props;
  return (
    <tr>
      <td>{date}</td>
      <td>
        {venueUrl ? (
          <a href={venueUrl} target="_blank" rel="noopener noreferrer">
            {venue}
          </a>
        ) : (
          venue
        )}
      </td>
      <td>{location}</td>

      <td className="align-right text-center">
        {fbUrl && (
          <a href={fbUrl} target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare /> Event
          </a>
        )}
      </td>
      <td className="align-right">
        {ticketUrl && (
          <a
            className="button"
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Tickets
          </a>
        )}
      </td>
    </tr>
  );
};

const TourTable = (props) => {
  const { tourDates } = props;

  return (
    <table className="table is-fullwidth is-size-4-desktop is-responsive is-hidden-touch">
      <thead>
        <tr>
          <th>Date</th>
          <th>Venue</th>
          <th>Location</th>
          <th />
          <th />
        </tr>
      </thead>
      <tbody>
        {tourDates.map((tourDate, i) => (
          <DatesRow
            key={i}
            date={tourDate.date}
            venueUrl={tourDate.venueUrl}
            venue={tourDate.venue}
            location={tourDate.location}
            ticketUrl={tourDate.ticketUrl}
            fbUrl={tourDate.fbEventUrl}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TourTable;
