// components
import { Navbar, Footer } from "@/components";
import "@fortawesome/fontawesome-free/css/all.min.css";

// sections
import Hero from "./hero";
import LatestBlogPosts from "./latest-blog-posts";
import { PsychotherapyInfo } from "./psychotherapy-info";
import FloatingWhatsAppButton from "@/components/floating-wpp-button";

export default function Campaign() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <LatestBlogPosts />
      <PsychotherapyInfo />
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}
