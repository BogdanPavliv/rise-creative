import SectionTop from "../../modules/MainPage/SectionTop";
import SectionAbout from "../../modules/MainPage/SectionAbout";
import SectionWhyChoose from "../../modules/MainPage/SectionWhyChoose";
import SectionOurServices from "../../modules/MainPage/SectionOurServices";
import SectionReadyToUse from "../../modules/MainPage/SectionReadyToUse";
import SectionClientsKind from "../../modules/MainPage/SectionClientsKind";
import SectionOurContacts from "../../modules/MainPage/SectionOurContacts";

const MainPage = () => {
  return (
    <main className="main">
      <SectionTop />
      <SectionAbout />
      <SectionWhyChoose />
      <SectionOurServices />
      <SectionReadyToUse />
      <SectionClientsKind />
      <SectionOurContacts />
    </main>
  );
};

export default MainPage;
