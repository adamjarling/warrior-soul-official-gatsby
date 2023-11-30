import Album from "./albums/SingleAlbum";
import React from "react";
import albumClassics from "../images/album-classics.jpg";
import albumCocaine from "../images/cocaine-and-stuff.jpg";
import albumDisease from "../images/album-rnr-disease.jpg";
import albumDrugsGod from "../images/album-drugs-god-new-republic.jpg";
import albumLash from "../images/album-back-on-the-lash.jpg";
import albumLastDecade from "../images/album-last-decade-dead-century.jpg";
import albumOutOnBail from "../images/album-out-on-bail.jpg";
import albumPayback from "../images/album-paybacks-a-bitch.jpg";
import albumSalutations from "../images/album-salutations-ghetto-nation.jpg";
import albumSpaceAge from "../images/album-space-age-playboys.jpg";
import albumStiffMiddleFinger from "../images/album-stiff-middle-finger.jpg";
import albumWarMachine from "../images/album-destroy-the-war-machine.jpg";

const Albums = () => {
  return (
    <div id="albums">
      <div className="columns">
        <Album
          albumTitle="Out On Bail"
          albumImg={albumOutOnBail}
          recordLabel="Cargo Records UK / Livewire"
          released="March 2022"
          producers="Kory Clarke and Rune"
          url="https://www.amazon.com/Out-Bail-Warrior-Soul/dp/B09R3DHCHG"
          year="2022"
          iTunes="https://music.apple.com/us/album/out-on-bail/1607309289"
          spotify="https://open.spotify.com/album/1miCOPXXfyaSWdPFyTROJO"
          amazon="https://www.amazon.com/Out-Bail-Warrior-Soul/dp/B09R3DHCHG"
        />
        <Album
          albumTitle="Cocaine and Other Good Stuff"
          albumImg={albumCocaine}
          recordLabel="Cargo Records UK / Livewire"
          released="November 2020"
          url="https://cargorecordsdirect.co.uk/products/warrior-soul-back-on-the-lash"
          year="2020"
          iTunes="https://music.apple.com/us/album/cocaine-other-good-stuff/1533466463"
          spotify="https://open.spotify.com/album/3JMkRUjOZjMvrA1t48N7EM"
          amazon="https://www.amazon.com/Cocaine-Other-Good-Stuff-Warrior/dp/B08KJP4SWZ"
        />
      </div>
      <div className="columns">
        <Album
          albumTitle="Rock 'N Roll Disease"
          albumImg={albumDisease}
          recordLabel="Cargo Records UK / Livewire"
          released="June 2019"
          producers="Kory Clarke and Adam Arling"
          url="https://cargorecordsdirect.co.uk/products/warrior-soul-rock-n-roll-disease"
          year="2019"
          iTunes="https://music.apple.com/us/album/rock-n-roll-disease/1462066350"
          spotify="https://open.spotify.com/album/7hQ4aQk5Xv6XVRcAiHMjso?si=GqYeY9ZLTqGS94Wr3-WT4Q"
          amazon="https://www.amazon.com/Rock-Roll-Disease-Warrior-Soul/dp/B07R8BLQ7D"
        />
        <Album
          albumTitle="Back on the Lash"
          albumImg={albumLash}
          recordLabel="Cargo Records UK"
          released="December 2017"
          url="https://cargorecordsdirect.co.uk/products/warrior-soul-back-on-the-lash"
          year="2017"
          iTunes="https://itunes.apple.com/us/album/back-on-the-lash/1304258201"
          spotify=""
          amazon="https://music.amazon.com/albums/B0771SQFBQ?ref=dm_sh_9cc6-adb7-dmcp-49e2-f6f06&musicTerritory=US&marketplaceId=ATVPDKIKX0DER"
        />
      </div>
      <div className="columns">
        <Album
          albumTitle="Stiff Middle Finger"
          albumImg={albumStiffMiddleFinger}
          recordLabel="Livewire"
          released="October 22, 2012"
          url="https://cargorecordsdirect.co.uk/products/warrior-soul-stiff-middle-finger"
          producers="Kory Clarke"
          iTunes="https://itunes.apple.com/us/album/stiff-middle-finger/1033513683"
          spotify=""
          amazon="https://music.amazon.com/albums/B015KQ1E5S?ref=dm_sh_f5a1-7074-dmcp-68f2-c9efb&musicTerritory=US&marketplaceId=ATVPDKIKX0DER"
        />
        <Album
          albumTitle="Payback's a Bitch"
          albumImg={albumPayback}
          recordLabel="Livewire Records"
          released="October 7, 2014"
          producers="Kory Clarke &amp; Andre Indiana"
          url="https://cargorecordsdirect.co.uk/products/kory-clarke-payback-is-a-bitch"
          iTunes="https://itunes.apple.com/us/album/paybacks-a-bitch/1058696609"
          spotify=""
          amazon="https://music.amazon.com/albums/B017R2WQIW?ref=dm_sh_d9c0-6284-dmcp-6d7f-faa85&musicTerritory=US&marketplaceId=ATVPDKIKX0DER"
        />
      </div>

      <div className="columns">
        <Album
          albumTitle="Destroy The War Machine"
          albumImg={albumWarMachine}
          recordLabel="Acetate Records"
          released="July 14, 2009"
          url="https://www.discogs.com/Warrior-Soul-Destroy-The-War-Machine/master/685048"
          iTunes="https://itunes.apple.com/us/album/destroy-the-war-machine/319872923"
          spotify=""
          amazon="https://music.amazon.com/albums/B015JZO8L2?ref=dm_sh_6dae-93fa-dmcp-6d65-1d48c&musicTerritory=US&marketplaceId=ATVPDKIKX0DER"
        />
        <Album
          albumTitle="Classics"
          albumImg={albumClassics}
          recordLabel="Secret Records"
          released="2001"
          url=""
          iTunes="https://itunes.apple.com/us/album/classics/1037628156"
          spotify=""
          amazon=""
        />
      </div>

      <div className="columns">
        <Album
          albumTitle="The Space Age Playboys"
          albumImg={albumSpaceAge}
          recordLabel="Music For Nations, Mayhem"
          released="July 18, 1994"
          producers="Kory Clarke"
          iTunes="https://itunes.apple.com/us/album/the-space-age-playboys/1033512686"
          spotify=""
          amazon="https://music.amazon.com/albums/B002AB4LIY?ref=dm_sh_bfaf-e219-dmcp-bc23-6d8f5&musicTerritory=US&marketplaceId=ATVPDKIKX0DER"
        />
        <Album
          albumTitle="Salutations from the Ghetto Nation"
          albumImg={albumSalutations}
          recordLabel="DGC"
          released="October 13, 1992"
          producers="Kory Clarke"
          iTunes="https://itunes.apple.com/us/album/salutation-from-the-ghetto-nation/1037643494"
          spotify=""
          amazon="https://music.amazon.com/albums/B002AB4LIY?ref=dm_sh_bfaf-e219-dmcp-bc23-6d8f5&musicTerritory=US&marketplaceId=ATVPDKIKX0DER"
        />
      </div>

      <div className="columns">
        <Album
          albumTitle="Last Decade Dead Century"
          albumImg={albumLastDecade}
          recordLabel="Geffen"
          released="April 17, 1990"
          producers="Geoff Workman &amp; Kory Clarke"
          iTunes="https://itunes.apple.com/us/album/last-decade-dead-century/903110783"
          spotify=""
          amazon="https://music.amazon.com/albums/B002A7YFIO?ref=dm_sh_9497-435a-dmcp-cd2c-47fd6&musicTerritory=US&marketplaceId=ATVPDKIKX0DER"
        />
        <Album
          albumTitle="Drugs, God and the New Republic"
          albumImg={albumDrugsGod}
          recordLabel="Geffen"
          released="May 28, 1991"
          producers="Kory Clarke"
          iTunes="https://itunes.apple.com/us/album/drugs-god-and-the-new-republic/1033763136"
          spotify=""
          amazon="https://music.amazon.com/albums/B015KQ4086?ref=dm_sh_c95e-d367-dmcp-27e0-abbcd&musicTerritory=US&marketplaceId=ATVPDKIKX0DER"
        />
      </div>
    </div>
  );
};

export default Albums;
