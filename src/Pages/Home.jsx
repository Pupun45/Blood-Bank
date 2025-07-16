import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaUser, FaGift, FaGlobe, FaHandHoldingHeart } from "react-icons/fa";
import crousel from "../image/Banner4.webp";
import crouse2 from "../image/banner2.webp";
import crouse3 from "../image/blood-donation-wallpaper-preview.jpg";
import "../App.css";
import DonationInfo from "../Extra-file/Doner"; //Donation file JSX
import Blood from "../image/video.mp4";
import ImageSlider from "../Extra-file/slider"; //slider file JSX
import Serivice from "../image/Serbice3.png";
import Serivice1 from "../image/Serivice2.webp";
import Serivice4 from "../image/service2.png";
import Serivice2 from "../image/service3.png";
import Serivice3 from "../image/service4.png";
import Donation from "../image/Donation.avif";
import Fundrising from "../image/Fundrising.png";
import Volunteer from "../image/Become A Volunteer.png";
import Scroller from "../Extra-file/ScrollButtons";

const Home = () => {
  return (
    <>
    <Scroller/>
      <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block"
            src={crouse2}
            style={{ height: "80vh", width: "100%" }}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={crousel}
            style={{ height: "80vh", width: "100%" }}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block "
            src={crouse3}
            style={{ height: "80vh", width: "100%" }}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <>
        <section className="promo-section bd-bottom">
          <div className="promo-wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-4 col-sm-6 xs-padding">
                  <div className="promo-content">
                    <img className="promo-wr" src={Donation} alt="prmo icon" />
                    <h3>Make Donetion</h3>
                    <p>
                      Help today because tomorrow you may be the one who needs
                      helping!
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 xs-padding">
                  <div className="promo-content">
                    <img
                      className="promo-wr"
                      src={Fundrising}
                      alt="prmo icon"
                    />
                    <h3>Fundrising</h3>
                    <p>
                      Help today because tomorrow you may be the one who needs
                      helping!
                    </p>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6 xs-padding">
                  <div className="promo-content">
                    <img className="promo-wr" src={Volunteer} alt="prmo icon" />
                    <h3>Become A Volunteer</h3>
                    <p>
                      Help today because tomorrow you may be the one who needs
                      helping!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <>
        <div className="Text-size">
          <h3 className="hd" data-title="YOUR BLOOD, THEIR LIFE">
            YOUR BLOOD, THEIR LIFE
          </h3>
          <div className="sep"></div>
          <div className="sep2"></div>
        </div>
      </>
      <>
        <div className="flex-grid">
          <div
            className="page-heading wow fadeInUp animated text-color-p"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            <h2 className="fon">Let It Flow—Be the Lifeline</h2>
            <p className="fonn">
              Donating blood is one of the most powerful acts of kindness a
              person can do. With just one unit of donated blood, you can save
              up to three lives.
              <br /> Every day, countless people rely on blood transfusions for
              survival—accident victims, patients undergoing surgery, and those
              battling serious diseases like cancer or anemia. Blood cannot be
              manufactured; it can only come from generous donors.
              <br /> By becoming a blood
              donor, you're joining a life-saving mission. It’s safe, simple,
              and takes only a little time, but the impact is enormous. Be a
              hero. Donate blood. Save lives.
              <br />
              🩸 One donation can save up to three lives.<br /> ❤️ Blood cannot be
              manufactured—it can only come from donors. <br />⏱️ The process takes
              just 15–20 minutes, but its impact lasts a lifetime.<br /> 🚑 Donated
              blood is crucial for surgeries, cancer treatment, trauma care, and
              childbirth. <br />🌍 Every two seconds, someone in the world needs
              blood. <br />💪 Donating blood can improve your own heart health and
              reduce harmful iron stores. <br />👨‍⚕️ Safe and sterile—each donation is
              done using new, disposable equipment.
            </p>
          </div>
          <video
            className="video-playear"
            src={Blood}
            loop
            controls
            autoPlay
          ></video>
        </div>
      </>
      <>
        <div className="Text-size">
          <h3 className="hd" data-title="OUR SERIVICES">
            OUR SERIVICES
          </h3>
          <div className="sep"></div>
          <div className="sep2"></div>
        </div>
      </>
      <>
        <div className="card-row">
          <div className="card">
            <img src={Serivice1} className="card-img" alt="img" />
            <h5 className="card-title">Blood Avalibality</h5>
          </div>
          <div className="card">
            <img src={Serivice2} className="card-img" alt="img" />
            <h5 className="card-title">Blood Center Direction</h5>
          </div>
          <div className="card">
            <img src={Serivice} className="card-img" alt="img" />
            <h5 className="card-title">Blood Donation Camp</h5>
          </div>
          <div className="card">
            <img src={Serivice3} height={'195px'} className="card-img" alt="img" />
            <h5 className="card-title">Donor Login</h5>
          </div>
          <div className="card">
            <img src={Serivice4} height={'195px'} className="card-img" alt="img" />
            <h5 className="card-title">Blood Bank</h5>
          </div>
        </div>
      </>
      <>
        <div className="Text-size">
          <h3 className="hd" data-title="LEARN ABOUT BLOOD DONATION">
            LEARN ABOUT BLOOD DONATION
          </h3>
          <div className="sep"></div>
          <div className="sep2"></div>
        </div>
      </>
      <>
        <DonationInfo />
      </>
      <>
        <>
          <div className="Text-size">
            <h3 className="hd" data-title="HOW OPEN AREMS WORK">
              HOW OPEN AREMS WORK
            </h3>
            <div className="sep"></div>
            <div className="sep2"></div>
          </div>
        </>
        <div className="open-arms-section">
          <div className="steps-container">
            <div className="step">
              <FaUser className="iconn" />
              <p>
                A donor regularly gives blood
                <br />
                at their local blood center.
              </p>
            </div>
            <div className="arrow">→</div>
            <div className="step">
              <FaGift className="iconn" />
              <p>
                The blood center thanks donor
                <br />
                with an appreciation gift.
              </p>
            </div>
            <div className="arrow">→</div>
            <div className="step">
              <FaGlobe className="iconn" />
              <p>
                The donor can choose to forgo
                <br />
                gift for a donation to GBF.
              </p>
            </div>
            <div className="arrow">→</div>
            <div className="step">
              <FaHandHoldingHeart className="iconn" />
              <p>
                Donors <em>give twice</em> by helping
                <br />
                people locally and globally.
              </p>
            </div>
          </div>
        </div>
      </>
         <>
          <ImageSlider />
        </>
      </>
  );
};

export default Home;
