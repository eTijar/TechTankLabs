import { Banner } from "../components/Banner/Banner";
import { GridImage, GridText } from "../components/Grids/Grids";
import "../Styles/Home.css"
import { Home } from "../components/Contents";
import { Flex } from "../components/Flex/Flex";
import { WaitList } from "../components/Form/Form";

const Index = () => {

  return (
    <div className="home">
      <Banner
        headerClass="blue-banner"
        headerTextClass="banner-title"
        headingText="Welcome to TTLabs- Meet Innovators, Investors and Start-up experts."
        subtitle="Are you an entrepreneur, an engineer or a brilliant operator who wants to build the next big thing? Join TTLabs today and let’s get to work."
        link="https://zk4a3x2uygz.typeform.com/to/FCgD2Wx2"
      />
      <GridText bgColor="adjustMarginB" grid="grid" launchSpace='launch_space' data={Home.lauch} />
      <Flex data={Home.flex} />
      <GridImage grid="grid gridImage" bgColor="brown" data={Home.manifesto} />


      <div className={`community`}>
        <div>
          <p className="text">Join our newsletter</p>
          <p className="small-text">Stay up to date with our latest programmes</p>
          <WaitList />
        </div>
      </div>

      <div className={`grids choose`}>
        <div>
          <p className="grid_title">Why Choose TTLabs?</p>
          <div className="grid">
            <p className={`grid_subtitle`}>We're dedicated to helping you find the perfect co-founder for your startup. Our platform is designed to connect you with like-minded individuals who share your passion for entrepreneurship and innovation. We provide in-house technological expertise to help you build your product or service more efficiently and effectively. Our network of investors and mentors can provide the resources you need to grow and scale your business.</p>
            <p className={`grid_subtitle`}>We're committed to your success. We work closely with our founders to ensure they have the support and guidance they need to achieve their goals. Whether you're a first-time founder or an experienced entrepreneur, TTLabs has everything you need to turn your startup dreams into a reality. So why wait? Join our community today and start building the next big thing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
