import React from "react";
import {
  Icone,
  PageContainer,
  PageSection,
  Text404,
  TextH2,
  TextLink,
} from "./notFoundElements";
import { IoIosArrowBack } from "react-icons/io";
const Page404 = () => {
  return (
    <>
      <PageSection>
        <PageContainer>
          <Text404>404</Text404>
          <TextH2>OOPS!!! THE PAGE YOU ARE LOOKING FOR CAN'T BE FOUND!</TextH2>
          <TextLink to="/">
            <Icone>
              <IoIosArrowBack />
            </Icone>
            Return To Homepage
          </TextLink>
        </PageContainer>
      </PageSection>
    </>
  );
};

export default Page404;
