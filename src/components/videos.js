import React from "react"
import Video from "./videos/Video"

const Videos = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <Video
            videoTitle="Punk And Belligerent (live on Mad TV Greece)"
            videoSource="https://www.youtube.com/embed/3wpXpg3IPkc"
          />
          <Video
            videoTitle="Love Destruction"
            videoSource="https://www.youtube.com/embed/iT1muWE8RzA"
          />
        </div>

        <div className="columns">
          <Video
            videoTitle="The Drug"
            videoSource="https://www.youtube.com/embed/QbIYaFvId5Q"
          />
          <Video
            videoTitle="We Cry Out"
            videoSource="https://www.youtube.com/embed/zT-DBDhEBCE"
          />
        </div>

        <div className="columns">
          <Video
            videoTitle="I Wanna Get Some"
            videoSource="https://www.youtube.com/embed/3apLLIaULD8"
          />
          <Video
            videoTitle="Rotten Soul Live - Dynamo '95"
            videoSource="https://www.youtube.com/embed/i10laVcSuAg"
          />
        </div>

        <div className="columns">
          <Video
            videoTitle="Downtown"
            videoSource="https://www.youtube.com/embed/4nurQy-oyZg"
          />
          <Video
            videoTitle="Lullaby"
            videoSource="https://www.youtube.com/embed/kM9WusAG854"
          />
        </div>

        <div className="columns">
          <Video
            videoTitle="The Wasteland (with intro)"
            videoSource="https://www.youtube.com/embed/hdhZdO8rt5Y"
          />
          <Video
            videoTitle="Lets Get Wasted"
            videoSource="https://www.youtube.com/embed/_IPUaeXJifY"
          />
        </div>

        <div className="columns">
          <Video
            videoTitle="Losers"
            videoSource="https://www.youtube.com/embed/GaDsh0IZ020"
          />
          <Video
            videoTitle="The Fourth Reich"
            videoSource="https://www.youtube.com/embed/R3xAlsKeDzA"
          />
        </div>
      </div>
    </section>
  )
}

export default Videos
