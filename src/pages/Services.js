import "../Styles/Services.css";
import {Banner2} from "../components/Banner/Banner";
import { HowItWorks } from "../components/Contents";
import { FlexGrid } from "../components/Flex/Flex";
import { GridImage } from "../components/Grids/Grids";
import IMG1 from "../images/works.png";

const Services = () => {

  return (
    <div className="service">
       <Banner2
            headerClass="brown-banner"
            headerTextClass="brown-title"
            headingText="How it Works"
            subtitle="At TTLabs, we believe that building a successful startup requires a strong team with diverse skills and perspectives. That's why we're dedicated to helping aspiring entrepreneurs meet their co-founders and build the teams they need to succeed."
            img={IMG1}
            imgClass='howBanner'
          />
    <FlexGrid flex="flexgrid" imgSize="imgSize" position="left" topic="Here's how TTLabs can help you meet your co-founders and build a great company:" data={HowItWorks.flex} />
    <GridImage grid="grid gridImage" bgColor='brown' data={HowItWorks.values} />
  
    </div>
  );
};

export default Services;
