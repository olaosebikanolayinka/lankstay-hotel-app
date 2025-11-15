import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import MostPicked from "./Components/MostPicked";
import Search from "./Components/Search";
import RoomRegisterPage from "./Components/RoomRegisterPage";
import Housecard from "./house/layout";
import BookingPage from "./paymentpage1/page";
import DocumentDashboard from "./documentdashboard/page";
import DocumentLayout from "./documentdashboard/Layout";
import Dashboard from "./dashboard/page";
import Bookingdocument from "./bookingdocument/page";
import { Link } from "lucide-react";
import Button from "./Components/Button";
import Navbar from "./Components/Navbar";
import House from "./house/page";


export default function Home() {
  return (
      <>
      <Navbar />
      <Hero />
      <Search />
      <MostPicked />
      <House />
      <Footer />
      
         
      </>
  );
}
