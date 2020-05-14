import React from "react"
import promoPic1 from "../images/3.16.19-offer-1.jpg"
import promoPic2 from "../images/3.16.19-offer-2.jpg"
import promoPic3 from "../images/3.16.19-offer-3.jpg"
import rnrDisease from "../images/album-rnr-disease.jpg"

const styles = {
  preOrderHeadline: {
    color: "#fff",
  },
}

const PreSale = () => {
  return (
    <>
      <h2
        className="title is-2 has-text-centered"
        style={styles.preOrderHeadline}
      >
        Pre-Order the new album,{" "}
        <span className="chaos-font">"Rock'N Roll Disease"</span> now!
      </h2>

      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-image">
              <img src={rnrDisease} alt="Rock N Roll Disease Album" />
            </div>
            <div className="card-content content">
              <h3 className="title">Release Date June 7, 2019 on Cargo UK/Livewire</h3>
              <h4 className="subtitle">Pre-Release Reviews!</h4>
              <p>
                <span className="is-italic">
                  "Approach with care, and be warned: the hangover here is going
                  to be vicious."
                </span>{" "}
                - Maximum Volume Music
              </p>
              <p>
                <span className="is-italic">
                  "A little metal, a little punk and a lot of just straight
                  ahead rock n’ roll. If it’s an epidemic you’re looking for,
                  you’ve found it and then some with the excellent “Rock n’ Roll
                  Disease” by Warrior Soul."
                </span>{" "}
                - XS Rock
              </p>
              <p>
                <span className="is-italic">
                  "This is low down and dirty Rock and Roll of the highest
                  order."
                </span>{" "}
                - The Rockpit
              </p>
            </div>
          </div>
        </div>
        <div className="column">
          <img src={promoPic1} alt="Rock N Roll Disease Pre Sale Poster" />
        </div>
      </div>

      <section className="section">
        <p className="has-text-centered is-size-2 is-size-4-mobile">
          To order, email{" "}
          <a href="mailto:warriorsoulmgmt@gmail.com">
            warriorsoulmgmt@gmail.com
          </a>
        </p>
      </section>

      <div className="columns">
        <div className="column">
          <img src={promoPic2} alt="Rock N Roll Disease Pre Sale Poster" />
        </div>
        <div className="column">
          <img src={promoPic3} alt="Rock N Roll Disease Pre Sale Poster" />
        </div>
      </div>
    </>
  )
}

export default PreSale
