import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Web3 from "web3";
import routeElements from "./router/routeElements";

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}
const App: React.FC = () => {
  // const [loadding, setLoadding] = useState(true);
  // useEffect(() => {
  //   setLoadding(false);
  // }, [])
  return (
    <Web3ReactProvider getLibrary={() => new Web3()}>
      {/* <div className={`${loadding ? 'loadding' : ''}`}></div> */}
      <Suspense fallback={null}>
        <Router>
          <Switch>
            {routeElements()}
            <Route>
              <div>404</div>
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </Web3ReactProvider>
  );
};

export default App;
