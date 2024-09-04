import { useState } from "react";

//import { jsx } from "@emotion/react";

import {
  AtlassianNavigation,
  Create,
  Help,
  ProductHome,
  PrimaryButton,
} from "@atlaskit/atlassian-navigation";
import noop from "@atlaskit/ds-lib/noop";
import { ConfluenceIcon, ConfluenceLogo } from "@atlaskit/logo";
import { ButtonItem, MenuGroup, Section } from "@atlaskit/menu";
import Popup from "@atlaskit/popup";
import {
  Header,
  NavigationHeader,
  NestableNavigationContent,
  NestingItem,
  SideNavigation,
} from "@atlaskit/side-navigation";

import {
  Content,
  LeftSidebar,
  Main,
  PageLayout,
  TopNavigation,
} from "@atlaskit/page-layout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function ProductLayout() {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <PageLayout>
      <TopNavigation
        isFixed={true}
        id="confluence-navigation"
        skipLinkTitle="Confluence Navigation"
      >
        <TopNavigationContents />
      </TopNavigation>
      <Content testId="content">
        {location.pathname === "/calculadora" ? (
          <LeftSidebar
            isFixed={true}
            width={450}
            id="project-navigation"
            skipLinkTitle="Project Navigation"
            testId="left-sidebar"
            resizeGrabAreaLabel="Resize Current project sidebar"
            resizeButtonLabel="Current project sidebar"
            valueTextLabel="Width"
          >
            <SideNavigationContent />
          </LeftSidebar>
        ) : (
          ""
        )}
        <Main id="main-content" skipLinkTitle="Main Content">
          <Outlet />
        </Main>
      </Content>
    </PageLayout>
  );
}

function TopNavigationContents() {
  const navigate = useNavigate();
  return (
    <AtlassianNavigation
      label="site"
      moreLabel="More"
      renderProductHome={ProductHomeTC}
      renderCreate={DefaultCreate}
      renderHelp={HelpPopup}
      primaryItems={[
        <PrimaryButton key="1" onClick={() => navigate("/calculadora")}>
          Calculadora
        </PrimaryButton>,
        <PrimaryButton key="2" onClick={() => navigate("/modelos")}>
          Modelos
        </PrimaryButton>,
      ]}
    />
  );
}

const SideNavigationContent = () => {
  return (
    <SideNavigation label="Project navigation" testId="side-navigation">
      <NavigationHeader>
        <Header description="Sidebar header description">Sidebar Header</Header>
      </NavigationHeader>
      <NestableNavigationContent initialStack={[]}>
        <Section>
          <NestingItem id="1" title="Nested Item">
            <Section title="Group 1">
              <ButtonItem>Item 1</ButtonItem>
              <ButtonItem>Item 2</ButtonItem>
            </Section>
          </NestingItem>
        </Section>
      </NestableNavigationContent>
    </SideNavigation>
  );
};

/*
 * Components for composing top and side navigation
 */

export const DefaultCreate = () => (
  <Create
    buttonTooltip="Create"
    iconButtonTooltip="Create"
    onClick={noop}
    text="Create"
  />
);

function ProductHomeTC() {
  const navigate = useNavigate();

  return (
    <ProductHome
      onClick={() => navigate("/")}
      icon={ConfluenceIcon}
      logo={ConfluenceLogo}
      siteTitle="Product"
    />
  );
}

export const HelpPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <Popup
      placement="bottom-start"
      content={HelpPopupContent}
      isOpen={isOpen}
      onClose={onClose}
      trigger={(triggerProps) => (
        <Help
          isSelected={isOpen}
          onClick={onClick}
          tooltip="Help"
          {...triggerProps}
        />
      )}
    />
  );
};

const HelpPopupContent = () => (
  <MenuGroup>
    <Section title={"Menu Heading"}>
      <ButtonItem>Item 1</ButtonItem>
      <ButtonItem>Item 2</ButtonItem>
      <ButtonItem>Item 3</ButtonItem>
      <ButtonItem>Item 4</ButtonItem>
    </Section>
    <Section title="Menu Heading with separator" hasSeparator>
      <ButtonItem>Item 5</ButtonItem>
      <ButtonItem>Item 6</ButtonItem>
    </Section>
  </MenuGroup>
);
