// import TermsPDF from 'components/TermsPDF';
// import TermsHero from 'components/TermsHero';
// import TermsDescr from 'components/TermsDescr';
// import Footer from 'components/Footer';
// import DownloadMobileFooter from '../../components/DownloadMobileFooter';
// import MediaQuery from '../../components/MediaQuery';
// import TermsOfService from '../../PDF/SEEYOU_TERMS_OF_SERVICE.pdf';
import { ScrollToTop } from 'hooks/ScrollToTop';
import termsOfService from '../../PDF/SEEYOU_TERMS_OF_SERVICE.pdf';
const Terms = () => {
  ScrollToTop();
  window.location.replace(termsOfService);
  return (
    <>
    </>
  );
};

export default Terms;
