import Header from 'components/astoms/header';
import { Route } from 'react-router-dom';
import routes from './routes';
import Footer from 'components/astoms/footer';

const routeElements = () => routes.map(({
  LoadComponent,
  path,
  title,
  ...rest
}) => {
  return (
    <Route key={path} path={`${path}`} {...rest}>
      <Header></Header>
      <LoadComponent />
      <Footer></Footer>
    </Route>
  );
});

export default routeElements;
