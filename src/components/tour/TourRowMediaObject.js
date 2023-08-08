import ExternalLink from "../external-link";
import React from "react";
import moment from "moment";

const TourRowMediaObject = ({ dates }) => {
  return dates.map((date) => {
    const { datetime, description, id, lineup, title, url, venue } = date;

    return (
      <article key={id} className="notification is-dark">
        <h3 className="title">
          {moment(datetime).format("dddd MMMM D, YYYY")}
        </h3>
        <h4 className="subtitle has-text-warning">{title}</h4>
        <div className="columns">
          <div className="column one-third">
            <p className="is-size-5">
              {venue.city}, {venue.country}
            </p>
          </div>
          <div className="column one-third">
            <ExternalLink href={url} className="is-size-5">
              {venue.name}
            </ExternalLink>
          </div>
          <div className="column one-third">
            <div className="buttons is-right">
              <ExternalLink href={url} className="button">
                Tickets
              </ExternalLink>
              {/* <ExternalLink
                href={url}
                className="button is-primary is-outlined"
              >
                Notify Me
              </ExternalLink> */}
            </div>
          </div>
        </div>
        <h5 className="is-uppercase is-size-7 has-text-warning">Line up</h5>
        {lineup.map((item) => (
          <p>{item}</p>
        ))}
        <div className="is-hidden-touch">
          <h5
            className="is-uppercase is-size-7 has-text-warning"
            style={{ paddingTop: "1rem" }}
          >
            Description
          </h5>
          <p>{description}</p>
        </div>
      </article>
    );
  });
};

export default TourRowMediaObject;
