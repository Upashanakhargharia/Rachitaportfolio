import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import section1bg from "../images/section1-bg.png";
import rachita from "../images/rachita-profile.png";
const Home = () => {
  return (
    <div class="main-content">
      <section
        class="firstsec"
        style={{ backgroundImage: `url(${section1bg})` }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src={rachita} />
            </div>
            <div class="col-md-6 padding-card">
              <h2>Rachita Sharma</h2>
              <h3>CEO & Co-Founder of Girl Power Talk</h3>
              <p>
                Rachita Sharma is a technology entrepreneur, financial literacy
                advocate and gender rights activist. Rachita is the CEO of Girl
                Power Talk, based in India, a purpose driven organization.
              </p>
              <div class="planebtn">
                <a
                  class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-square vc_btn3-style-flat vc_btn3-color-grey"
                  href="/about"
                >
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="row">
          <section class="secondsec">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-8 padding-card">
                <h2>Starting a Movement</h2>
                <p>
                  Girl Power Talk was founded on the idea that young India needs
                  an innovative new work culture that equally harnesses people’s
                  talents, irrespective of their gender. Girl Power Talk is more
                  than a company. We are a movement rooted in empowerment,
                  professional ambition, and social impact. For generations,
                  women have been relegated to secondary roles, and the youth
                  exploited for their energy and inexperience. We are a culture
                  that will make history by changing this dynamic and writing
                  the beautiful next chapter in this story.
                </p>
                <div class="planebtn">
                  <a
                    class="vc_general vc_btn3 vc_btn3-size-md vc_btn3-shape-square vc_btn3-style-flat vc_btn3-color-grey"
                    href="/about"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
