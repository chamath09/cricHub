import { notFound } from "next/navigation";
import { Poppins } from "next/font/google";


// Load Poppins font with specified weights
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

interface Channel {
  id: string;
  name: string;
  link: string;
}

const channels: Channel[] = [
  {
    id: "skys2",
    name: "Sky Sports Cricket HD",
    link: "//stream.crichd.sc/update/skys2.php",
  },
  {
    id: "starsports",
    name: "Star Sports HD",
    link: "//stream.crichd.sc/update/star.php",
  },
  {
    id: "starsportshindi",
    name: "Star Sports HD Hindi",
    link: "//stream.crichd.sc/update/star1hi.php",
  },
  {
    id: "willow",
    name: "Willow Cricket HD",
    link: "//stream.crichd.sc/update/willowcricket.php",
  },
  { id: "ptv", name: "PTV Sports", link: "//stream.crichd.sc/update/ptv.php" },
  {
    id: "willowextra",
    name: "Willow Cricket Extra",
    link: "//stream.crichd.sc/update/willowextra.php",
  },
  {
    id: "asports",
    name: "A Sports HD",
    link: "//stream.crichd.sc/update/asportshd.php",
  },
  {
    id: "foxcricket",
    name: "Fox Cricket 501 HD",
    link: "//stream.crichd.sc/update/fox501.php",
  },
  {
    id: "supersport",
    name: "SuperSport Cricket",
    link: "//stream.crichd.sc/update/supersport.php",
  },
  { id: "ten1", name: "TEN 1", link: "//stream.crichd.sc/update/ten1.php" },
  {
    id: "tensportspk",
    name: "TEN Sports PK",
    link: "//stream.crichd.sc/update/tensp.php",
  },
];

interface ChannelPageProps {
  params: Promise<{ id: string }>; // Correctly type params as a Promise
}

export default async function ChannelPage({ params }: ChannelPageProps) {
  const { id } = await params; // Await params to resolve the Promise

  // Find the channel by ID
  const channel = channels.find((ch) => ch.id === id);

  // If the channel is not found, return a 404 page
  if (!channel) {
    notFound();
  }

  return (
    <div
      className={`w-[80%] mx-[10%] h-screen flex justify-center items-center ${poppins.className}`}
    >
      <iframe
        src={channel.link}
        width="100%"
        height="500px"
        marginHeight={0}
        marginWidth={0}
        scrolling="no"
        frameBorder={0}
        allowFullScreen
        allow="encrypted-media"
      />
    </div>
  );
}
