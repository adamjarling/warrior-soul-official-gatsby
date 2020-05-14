import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import NewAlbumFeature from "../components/albums/new-album-feature";

const PressKit = ({ data }) => (
  <div>
    <SEO
      title="Press Kit - Warrior Soul - Official Band Website - Kory Clarke"
      keywords={[
        `Warrior Soul press kit`,
        `Kory Clarke press kit`,
        `Warrior Soul epk`,
        `Kory Clarke epk`,
      ]}
    />
    <Layout>
      <section className="hero is-large has-background">
        <Img
          fluid={data.heroImg.childImageSharp.fluid}
          className="hero-background"
        />
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-uppercase">Press Kit</h1>
            <h2 className="subtitle">Bio, reviews and promo materials </h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="is-size-4">
            Warrior Soul is a Hard Rock Band originally from New York City, with
            Band members from Scotland, UK and Scandinavia. The band is lead by
            Singer Songwriter and Producer from Detroit and New York Kory
            Clarke.
          </p>
        </div>
      </section>

      <section className="hero is-info">
        <div className="hero-body">
          <div className="container content">
            <h2 className="title is-size-2">KORY CLARKE/WARRIOR SOUL</h2>
            <h3 className="subtitle">
              by Sleazegrinder (Classic Rock Magazine UK)
            </h3>
            <figure className="image is-pulled-left" style={{ width: "300px" }}>
              <Img fluid={data.beerInHand.childImageSharp.fluid} />
            </figure>
            <p>
              We live on credit, we live on dope/ There's no promises When
              you're livin' on hope” - Blown Away (lyrics by Kory Clarke)
            </p>
            <p>
              There's been a lot of speculation lately about the “death of the
              rock star”. We keep losing them, but we don't make any new ones.
              Part of the reason is that there just isn't a million-dollar
              infrastructure to create megawatt stars anymore, at least not the
              kind that have long hair and play distorted guitars, and part of
              it is just a radical shift in the culture towards quieter, more
              insulated lifestyles.
            </p>

            <p>
              You mighta had dope, guns, and fucking in the streets, but your
              kids have smartphones and Netflix and they could not care less
              about your cyclops revolution. Which is a bit of a nightmare for
              the last true rock star, a mouthy wild-card from the streets of
              Detroit named Kory Clarke who built his reputation on being the
              baddest motherfucker in all of Badsville, a pill-shoveling he-dog
              Earth mutha with an incendiary socio-political agenda and a
              roar-for-war that rattled mountains.
            </p>

            <p>
              If you were lucky enough to catch his band Warrior Soul on a
              particularly fired-up night in the 90's, you might not even hear a
              stick of music. You might just get two straight hours of their
              front man eviscerating you for your complacence, a wild-eyed,
              fully zonked rock'n'roll machine gun blasting holes in the fabric
              of reality with verbal tirades about the inexorable rise of the
              neo-cons and the hidden agendas of your neighbourhood cops and
              clergy. Warrior Soul shows aren't just gigs, man. They are profane
              sermons delivered with high velocity and maximum volume.
            </p>
            <figure
              className="image is-pulled-right"
              style={{ width: "300px" }}
            >
              <Img fluid={data.rockingStage.childImageSharp.fluid} />
            </figure>
            <p>
              But let's back up a moment. In the beginning, there was The Trial,
              a rock'n'roll band from Detroit featuring drummer, Kory Clarke.
              Funded by Clarke's drug dealer buddy Charlie (later memorialized
              on Warrior Soul's Charlie's Out of Prison) and produced by
              villainous opportunist Kim Fowley, The Trial was too volatile to
              exist, really, and it imploded in a sticky mess of drugs,money,
              and jail.
            </p>
            <p>
              Clarke got the fuck out of town and landed in New York City in the
              late 80s where he fit right in with the death-tripping
              film/spoken-word underground (Zedd, Kern, Carroll) as well as the
              burgeoning sleaze-metal scene (Circus of Power, Cycle Sluts from
              Hell, Freaks, Monster Magnet, White Zombie). The band initially
              started out as Kory Clarke/Warrior Soul and was simply Clarke
              barking out fire-breathing spoken-word poetry, sometimes putting a
              gun to his own head as part of the performance. It eventually
              struck him that a band might have more impact, and within three
              months of forming, Warrior Soul signed a million-dollar contract
              with Geffen.
            </p>
            <p>
              They did not know what they were buying. The first album took two
              years to release. During that time, the label tried to get their
              head around what they had purchased. In the press, Clarke went to
              war with everybody, from tourmates Danzig to label-mates Guns N'
              Roses. The label pleaded with him to stop with the fucking poetry
              on stage and maybe cut out all the inflammatory political
              rhetoric, hut he wouldn't. He just wouldn't.
            </p>
            <figure className="image is-pulled-left" style={{ width: "300px" }}>
              <Img fluid={data.lastDecade.childImageSharp.fluid} />
            </figure>
            <p>
              Last Decade Dead Century hit the bins in 1990 and was so angry,
              bleak, and uncompromising in tone that it made early Black Sabbath
              sound like The Sweet. It was so perfectly fucked-up in every way
              that it practically demanded you take sides. Sleaze metal had
              always been darker than traditional glam metal, more grounded in
              the gritty, bitter realities of addiction and working class
              street-life, but Warrior Soul took it all the way, man. This was a
              declaration of war from the back-alleys of the toughest ghettos in
              America. And if you couldn't handle that, man, then stay the fuck
              away.
            </p>
            <p>
              And honestly, a lot of people did. Geffen poured more money into
              Warrior Soul and stuck with 'em for three more albums and five
              more years, but they never managed to crack cult status. There is
              a sense among Warrior Soul faithful that the band woulda-coulda
              been as big as Metallica or Guns N' Roses if only Kory kept his
              big fat trap shut once in awhile, but I doubt that, man. Axl is
              probably an even more paranoid lunatic then Clarke, and its only
              helped his career.
            </p>
            <p>
              The truth is, even at their most commercial, Warrior Soul sounded
              like some black market, underworld operation, shadowy insiders in
              something too weird and too heavy to let the ham &amp; eggers in
              on it. They still do. It's sleazy New York rock'n'roll with its
              finger on the nuclear panic button. It's the last sound you'd hear
              before the big one drops on us all. Warrior Soul is the panicked
              wail of the warning sirens high atop the skyscrapers, it is the
              flaming napalm that burns us to cinders.
            </p>
            <figure
              className="image is-pulled-right"
              style={{ width: "400px" }}
            >
              <Img fluid={data.cool.childImageSharp.fluid} />
            </figure>
            <p>
              Nobody knows this more than Clarke does. It's been his burden to
              bear for almost thirty years now. He keeps trying to escape it –
              he does solo records, formed a trucker metal band (Dirty Rig),
              joined doom-metal legends (Trouble) and fitfully attempts to get
              back to painting and leave the goddamn rock'n'roll alone, but he
              can't. Kory Clarke IS Warrior Soul, and someday it will kill him.
              And hopefully save a few lives before it does.
            </p>
            <p>
              For some people music is the means to an end. They simply want
              fame and adulation. They're fully paid up members of the cult of
              celebrity and units sold is more important than the ability to
              create anything that can touch people.
            </p>
            <p>
              For others music is a compulsion. You may as well ask them to stop
              breathing than try and stop them submitting to their creative
              impulses.
            </p>
            <p>Kory Clarke is one of the latter.</p>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <h2 className="title is-2">Electronic Press Kit PDF</h2>
          <a
            href="../images/warrior-soul-epk-v2.pdf"
            target="_blank"
            className="button is-primary is-medium"
          >
            Download the EPK
          </a>
        </div>
      </section> */}

      <NewAlbumFeature />

      <section className="section">
        <div className="container">
          <h2 className="title is-2">Promotional Graphics</h2>
          <div className="columns is-centered">
            <div className="column is-two-thirds">
              <Img fluid={data.logoOldSkool.childImageSharp.fluid} />
              <p>&nbsp;</p>
              <Img fluid={data.logoClassic.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  </div>
);

export default PressKit;

export const pageQuery = graphql`
  query PressPageQuery {
    file(relativePath: { eq: "kory-rocking-the-stage.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 412) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    beerInHand: file(relativePath: { eq: "portfolio/16591_artist.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    rockingStage: file(relativePath: { eq: "kory-rocking-the-stage.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cool: file(relativePath: { eq: "portfolio/kory-singing-live.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lastDecade: file(
      relativePath: { eq: "album-last-decade-dead-century.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoClassic: file(relativePath: { eq: "warrior-soul-logo-white.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logoOldSkool: file(
      relativePath: { eq: "warrior-soul-logo-full-white.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    heroImg: file(
      relativePath: { eq: "portfolio/metal-invader-kory-interview.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
