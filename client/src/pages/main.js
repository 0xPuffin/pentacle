import React from "react";
import Layout from "../components/layout";
import FeaturesSmlLayout from "../components/features/features-small";
import Header from "../components/header/Header";
import FeatureMainLayout from "../components/features/feature-main";
import FeaturesMidLayout from "../components/features/feature-mid";
import FeaturesXsmlLayout from "../components/features/features-xmall";
import { SearchProvider } from '../providers/search-provider';
import { TitleProvider } from '../providers/title-provider';

export const Main = () => {
  return (
    <div>
      <SearchProvider>
        <TitleProvider>
          <Header />
          <Layout>
            <FeatureMainLayout />
            <FeaturesMidLayout />
            <FeaturesXsmlLayout />
            <FeaturesSmlLayout />
          </Layout>
        </TitleProvider>
      </SearchProvider>
    </div>
  )
}
