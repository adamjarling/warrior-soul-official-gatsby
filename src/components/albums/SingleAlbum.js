import React from "react";
import { FaItunes } from "@react-icons/all-files/fa/FaItunes";
import { FaSpotify } from "@react-icons/all-files/fa/FaSpotify";
import { FaAmazon } from "@react-icons/all-files/fa/FaAmazon";

const SingleAlbum = (props) => {
  const {
    albumTitle,
    albumImg,
    released,
    recordLabel,
    producers = "Kory Clarke / Warrior Soul",
    url,
    iTunes,
    spotify,
    amazon,
  } = props;
  const altText = `Album - ${albumTitle}`;

  return (
    <div className="column">
      <div className="card">
        <div className="card-image">
          {url ? (
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={albumImg} alt={altText} />
            </a>
          ) : (
            <img src={albumImg} alt={altText} />
          )}
        </div>
        <div className="card-content content">
          <h3 className="title is-3">{albumTitle}</h3>
          <dl className="is-size-5">
            <dt>
              <strong>Released</strong>
            </dt>
            <dd>{released}</dd>
            <dt>
              <strong>Record Label</strong>
            </dt>
            <dd>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {recordLabel}
              </a>
            </dd>
            <dt>
              <strong>Produced By</strong>
            </dt>
            <dd>{producers}</dd>
          </dl>
          {url && (
            <a className="button is-primary is-fullwidth" href={url}>
              Buy The Album
            </a>
          )}

          <div className="level is-mobile" style={{ marginTop: "1rem" }}>
            <a
              href={iTunes}
              target="_blank"
              rel="noopener noreferrer"
              className="is-size-3 level-item"
            >
              <FaItunes />
            </a>
            <a
              href={spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="is-size-3 level-item"
            >
              <FaSpotify />
            </a>
            <a
              href={amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="is-size-3 level-item"
            >
              <FaAmazon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleAlbum;
