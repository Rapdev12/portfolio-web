import HeaderNav from './component/layaout/HeaderNav';
import Footer from './component/layaout/Footer';
import MyRoutes from './router/MyRoutes';
import './App.css';

function App() {
  return (
    <div className="layaout">
      <HeaderNav />
      <section className="content">
        <MyRoutes />
      </section>
      <Footer />
    </div>
  );
}

export default App;
