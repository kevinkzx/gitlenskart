import './App.css';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';

import CategoriesPage from "./pages/CategoriesPage";
import ProductPage from "./pages/ProductPage";
import SingleProductPage from "./pages/SingleProductPage";
import {ProductProvider} from "./context/ProductContext";
import {createBrowserHistory} from "history";

const App = () => {
  const browserHistory = createBrowserHistory();

  return (
    <>
      <ProductProvider>
        <Router history={browserHistory}>
            <Switch>
              <Route path="/"
                component={CategoriesPage}
                exact/>
              <Route path="/products/:id"
                component={ProductPage}
                exact/>
              <Route path="/single/:id"
                component={SingleProductPage}
                exact/>
            </Switch>
          </Router>
      </ProductProvider>
    </>
  );
}

export default App;
