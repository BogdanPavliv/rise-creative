import React from "react";
import "./Main.scss";

import Top from "../Top/Top";
import About from "../About/About";
import WhyChoose from "../WhyChoose/WhyChoose";
import OurServices from "../OurServices/OurServices";
import ReadyToUse from "../ReadyToUse/ReadyToUse";
import ClientsKind from "../ClientsKind/ClientsKind";
import OurContacts from "../OurContacts/OurContacts";

export const Main = () => {
  return (
    <main className="main">
       <Top/>
       <About/>
       <WhyChoose/>
       <OurServices/>
       <ReadyToUse/>
       <ClientsKind/>
       <OurContacts/>
    </main>
  )
};