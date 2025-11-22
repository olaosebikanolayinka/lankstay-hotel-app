import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MostPicked from "./components/MostPicked";
import Search from "./components/Search";
import RoomRegisterPage from "./components/RoomRegisterPage";
import Housecard from "./house/layout";
import BookingPage from "./paymentpage1/page";
import DocumentDashboard from "./documentdashboard/page";
import DocumentLayout from "./documentdashboard/Layout";
import Dashboard from "./dashboard/page";
import Bookingdocument from "./bookingdocument/page";
import { Link } from "lucide-react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import House from "./house/page";


export default function Home() {
  return (
      <>
      <Navbar />

      <Hero />

    {/*search component*/}
      <Search />

    {/* room register component*/}
      <MostPicked />

     {/* booking page component*/}
      <House />

     

      {/*footer*/}
      <Footer />

      
         
      </>
  );
}
