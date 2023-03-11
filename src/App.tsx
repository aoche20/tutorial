import React from "react";

import { Refine, GitHubBanner } from "@pankod/refine-core";

import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

function App() {
  return (
    <>
      <GitHubBanner />

      <Refine
        routerProvider={routerProvider}
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      />
    </>
  );
}

export default App;
