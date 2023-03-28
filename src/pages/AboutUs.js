import {Banner2} from "../components/Banner/Banner";
import "../Styles/Aboutus.css";
import IMG1 from "../images/img1.png";
import IMG2 from "../images/img2.png";
import { GridImage } from "../components/Grids/Grids";
import { About } from "../components/Contents";
import { FlexGrid } from "../components/Flex/Flex";


const AboutUs = () => {
 
  return (
    <>
      <div className="Aboutus">
          <Banner2
            headerClass="blue-banner"
            headerTextClass="banner-title"
            headingText="About Us"
            subtitle="Welcome to TTLabs! We are a venture studio that helps founders at the pre-idea stage build to grow innovative startups. Our mission is to provide aspiring entrepreneurs with the resources and support they need to turn their startup dreams into a reality."
            img={IMG1}
          />
            <div className={`grids approach`}>
        <div>
          <p className="grid_title">Our Approach</p> 
          <div>
            <p className={`grid_subtitle`}>At TTLabs, we believe that the key to building successful startups is collaboration. We bring together founders with diverse backgrounds and skill sets to create a team that can tackle any challenge. We then provide in-house technical expertise to help them build their products or services more efficiently and effectively.</p>

            <p className={`grid_subtitle`}>Our team is made up of experienced entrepreneurs, engineers, and investors who are passionate about helping others succeed. We know what it takes to build successful startups, and we're committed to sharing our knowledge and expertise with the next generation of entrepreneurs.</p>
          </div>
        </div>
    </div>
    <FlexGrid flex="flexgrid" position="left" topic='Our Services' subtopic='We offer a range of services to help our founders build and grow successful startups, including:' bgColor="blue" data={About.flex} />

    <GridImage grid="grid gridImage" data={About.values} />

        </div>
    </>
  );
};

export default AboutUs;
