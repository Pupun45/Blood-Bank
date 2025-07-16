import React from "react";
import "../App.css";
import bannerImage from "../image/About.jpg";
import Photo from "../image/About-2nd.png";
import Box from "../image/AboutS3.webp";
import Box1 from "../image/AboutS32.png";
import Box2 from "../image/AboutS31.webp";
import Scroller from "../Extra-file/ScrollButtons";
const About = () => {
  return (
    <>
       <Scroller/>
      <div className="platelet-banner">
        <div className="platelet-text">
          <h2>
            Heroes Give Blood—So <br /> Children like Aanya
            <br /> Can Keep Smiling
          </h2>
          <p>Be that hero.</p>
        </div>
        <div className="platelet-image">
          <img src={bannerImage} alt="London, Cancer Survivor" />
        </div>
      </div>
      <>
        <img className="Photo" src={Photo} alt="image" />
      </>
      <>
        <div>
          <section className="bg-grey">
            <div id="return-one" className="section section-one">
              <div className="box1">
                <h1>Necessity of Blood Donation</h1>
                <p>
                  Blood is the part of life that is given to those who need it
                  by those who have the resource to satisfy the need. The love
                  of fellow human and a desire to share something of oneself is
                  what singles out a blood donor from the others. Emergencies
                  occur every minute.
                  <br />
                  <br /> For each patient requiring blood, it is an emergency
                  and the patients could have set back if blood is not
                  available. Your blood donation may be even more special than
                  you realize. A single donation from you can help one or more
                  patients. This is possible because whole blood is made up of
                  several useful components.
                  <br />
                  <br /> These components perform special functions in your body
                  and in the body of patients who receive your blood. The
                  various blood components are Red Blood Cells, White Blood
                  Cells, Platelets, Plasma and selected Plasma Proteins. Each of
                  these components can be separated from your donated volume of
                  blood and transfused into a specific patient requiring that
                  particular component. Thus, many can benefit from one unit of
                  blood.
                </p>
              </div>
              <div className="box2 thumbnail-component">
                <img
                  className="thumbnail-image"
                  src={Box}
                  alt="Image 1"
                />
              </div>
            </div>
          </section>
          <section className="bg-white">
            <div id="return-two" className="section section-two">
              <div className="box1">
                <h1>World Blood Donor Day 2025</h1>
                <p>
                  Take one famous song – ‘Give Blood’, by world renowned
                  musician and former member of the band ‘The Who’, Pete
                  Townshend.
                  <br />
                  <br /> Tweak the lyrics so it even better more powerfully
                  communicates the wonder of blood donation. Make multiple,
                  world-music, recordings by leading artists, singing their own
                  arrangements in multiple languages.
                  <br />
                  <br />
                  Set these songs to a bespoke, motivational video. Make these
                  materials available for blood services worldwide to use to
                  enhance their World Blood Donor Day celebrations.
                </p>
              </div>
              <div className="box2 thumbnail-component">
                <img
                  className="thumbnail-image"
                  src={Box1}
                  alt="Image 2"
                />
              </div>
            </div>
          </section>
          <section className="bg-grey">
            <div id="return-three" className="section section-three">
              <div className="box1">
                <h1>Initiatives to encourage blood donation</h1>
                <p>
                  Encouraging blood donation is essential for ensuring a steady
                  and safe blood supply. Various initiatives have been
                  implemented to promote this cause. Public awareness campaigns
                  play a significant role by educating people about the
                  importance and life-saving impact of blood donation. Mobile
                  blood donation camps are frequently organized in workplaces,
                  colleges, and community areas to make the process more
                  accessible and convenient.<br /><br /> Donors are often motivated through
                  incentives such as certificates, appreciation messages, and
                  public recognition. Collaboration with non-governmental
                  organizations and corporate entities helps expand the reach of
                  these efforts. Technology also supports these initiatives
                  through apps and websites that allow users to register,
                  schedule donations, receive reminders, and track their
                  contribution history.
                </p>
              </div>
              <div className="box2 thumbnail-component">
                <img
                  className="thumbnail-image"
                  src={Box2} height={"400px"} width={"500px"}
                  alt="Image 3"
                />
              </div>
            </div>
          </section>
        </div>
      </>
    </>
  );
};

export default About;
