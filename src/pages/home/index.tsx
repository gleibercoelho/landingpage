import About from "../../components/about/about";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import Service from "../../components/service/service";
import Loading from "../../components/loading/loading";
import RealFooter from "../../components/realfooter/realfooter";



const Home = () => {




  return (
  
    <div style={{padding:"0", margin: "0", boxSizing: "border-box"}}>
    
      <Header/>   
      <About/>        
      <Service/>        
      <Footer/>
      <Loading/>
      <RealFooter/>       

   </div>
  );
};

export default Home;
