import { Metadata } from "next";
import HomeFourPage from "./home/page";

export const metadata: Metadata = {
  title: "Zado - Home Page",
};

export default function Home() {
  return (
    <>
      <HomeFourPage />
    </>
  );
}
