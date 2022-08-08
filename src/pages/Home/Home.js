import Hero from 'components/Home/Hero/Hero';
import Toolbar from 'components/Home/Toolbar/Toolbar';
import Conference from 'components/Home/Conference/Conference';
import Support from 'components/Home/Support/Support';
import Provider from 'components/Home/Providers/Providers'
import { ScrollToTop } from 'hooks/ScrollToTop';

const Home = () => {
  ScrollToTop();
  return (
    <>
      <main>
        <Hero />
        <Provider />
        <Toolbar />
        {/* <MediaQuery device={'mobile'}>
          <FeaturesAccordion />
        </MediaQuery>
        <MediaQuery device={'tablet'}>
          <FeaturesTabs />
        </MediaQuery> */}

        <Conference />

        {/* <MediaQuery device={'mobile'}>
          <DownloadMobileFooter />
        </MediaQuery> */}
      </main>
      <Support />
    </>
  );
};
export default Home;
