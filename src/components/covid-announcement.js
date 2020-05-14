import React from "react";
import { Link } from "gatsby";

const CovidAnnouncement = ({ showButton }) => {
  return (
    <section className="hero is-warning">
      <div className="hero-body">
        <div className="container content">
          <div className="columns is-centered">
            <div className="column is-8">
              <h2 className="title is-size-2">Covid 19 Tour Dates Update</h2>
              <h3 className="subtitle">Fall 2020 Date Announcement</h3>
              <p>
                Warrior Soul friends and fans, we have been working hard on
                moving our tour dates from March, April and May to September,
                October and November 2020!
              </p>
              {showButton && (
                <Link to="/tour-dates" className="button is-primary">
                  View Re-scheduled Tour Dates
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CovidAnnouncement;
