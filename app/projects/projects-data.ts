export interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  mobileImageSrc?: string;
  isVideo?: boolean;
  videoSrc?: string;
  position: 'left' | 'right';
  actionLink?: string;
  actionText?: string;
}

export const projects: Project[] = [
  {
    id: "western-sydney-airport",
    title: "Western Sydney Airport",
    description: "Surface and Civil Alignment Works",
    imageSrc: "", // Placeholder for image
    isVideo: true,
    videoSrc: "/videos/WesternSydneyAirportSCAW.mp4",
    position: 'left',
    actionLink: "#",
    actionText: "Watch More"
  },
  {
    id: "founders-lane",
    title: "Founders Lane",
    description: "Urban precinct in Braddon, ACT",
    imageSrc: "/images/projects/FOUNDERSLANE1.jpeg",
    position: 'right'
  },
  {
    id: "midnight",
    title: "Midnight",
    description: "1 Elouera Street, Braddon",
    imageSrc: "/images/projects/midnight1.jpg",
    position: 'left'
  },
  {
    id: "anu-sa8",
    title: "Australian National University SA8",
    description: "ANU's Largest residence",
    imageSrc: "/images/projects/ANU3.jpg",
    position: 'right'
  },
  {
    id: "castle-residences",
    title: "Castle Residences",
    description: "Luxury apartments and hotel in Sydney's CBD",
    imageSrc: "/images/projects/CASTLE2.jpg",
    position: 'left'
  },
  {
    id: "king-street",
    title: "160 King Street",
    description: "Architecturally striking residences in Sydney's CBD with panoramic views of Hyde Park",
    imageSrc: "/images/projects/KING6.jpg",
    position: 'right'
  },
  {
    id: "marrickville-community-hub",
    title: "Marrickville Community Hub",
    description: "A collection of residential towers, library, auditorium and more",
    imageSrc: "/images/projects/MARRICK2.jpeg",
    position: 'left'
  },
  {
    id: "penny-place",
    title: "Penny Place",
    description: "A collection of apartments in the heart of Adelaide",
    imageSrc: "/images/projects/PENNY1.jpg",
    position: 'right'
  },
  {
    id: "omega-apartments",
    title: "Omega Apartments",
    description: "61 Brookes Street, Bowen Hills",
    imageSrc: "/images/projects/OMEGA3.webp",
    position: 'left'
  },
  {
    id: "george-street",
    title: "220 George Street",
    description: "102m tall office tower located in Sydney's CBD.",
    imageSrc: "/images/projects/GEORGE2.jpeg",
    position: 'right'
  },
  {
    id: "quay-quarter",
    title: "Quay Quarter",
    description: "50 Bridge Street, Sydney",
    imageSrc: "/images/projects/QUAY1.jpg",
    position: 'left'
  },
  {
    id: "macquarie-street",
    title: "79 Macquarie Street",
    description: "Prominent new development in busy Circular Quay",
    imageSrc: "/images/projects/MAC2.webp",
    mobileImageSrc: "/images/projects/MAC.webp",
    position: 'right'
  },
  {
    id: "goulburn-hospital",
    title: "Goulburn Hospital",
    description: "This recent redevlopment delivered a new Clinical Services Building",
    imageSrc: "/images/projects/HOSPITAL2.jpg",
    position: 'left'
  },
  {
    id: "imperial-orchards",
    title: "Imperial, The Orchards",
    description: "Fitted with the world's largest residential rooftop solar panel system",
    imageSrc: "/images/projects/ORCHARDS2.avif",
    position: 'right'
  },
  {
    id: "miller-street",
    title: "221 Miller Street",
    description: "Retail plaza and pedestrian through site link with a 16 level 180 apartment residential tower above",
    imageSrc: "/images/projects/MILLER1.jpeg",
    position: 'left'
  },
  {
    id: "waterline-place",
    title: "Waterline Place",
    description: "Master-planned community, nestled in the captivating bayside suburb of Williamstown",
    imageSrc: "/images/projects/WATERLINE2.jpg",
    mobileImageSrc: "/images/projects/WATERLINE1.jpg",
    position: 'right'
  },
  {
    id: "botanic-melbourne",
    title: "Botanic Melbourne",
    description: "Luxurious apartments in Melbourne's Royal Botanic Gardens precinct with uninterrupted city and garden views",
    imageSrc: "/images/projects/BOTANIC.png",
    position: 'left'
  },
  {
    id: "bunnings-mercure",
    title: "Bunnings Mercure",
    description: "A 183-room Mercure hotel built above a double-storey Bunning's store in Doncaster.",
    imageSrc: "/images/projects/MERCURE1.png",
    position: 'right'
  },
  {
    id: "nextdc",
    title: "NEXTDC",
    description: "Data centre for the largest listed developer and operator in Australia.",
    imageSrc: "/images/projects/NEXTDC.jpg",
    position: 'left'
  },
  {
    id: "veron-street",
    title: "49-51 Veron Street",
    description: "32 residential lots in Wentworthville, NSW",
    imageSrc: "/images/projects/VERON2.jpg",
    mobileImageSrc: "/images/projects/VERON.jpg",
    position: 'right'
  },
  {
    id: "bondi-central",
    title: "Bondi Central",
    description: "Two residential towers connected at the lower levels via a walk-through atrium.",
    imageSrc: "/images/projects/BONDI2.jpg",
    mobileImageSrc: "/images/projects/BONDI.jpg",
    position: 'left'
  },
  {
    id: "cabrini-hospital",
    title: "Cabrini Hospital",
    description: "Redevlopment which includes a new multi level building, 88 single-bed ensuite rooms and a cancer research facility",
    imageSrc: "/images/projects/CABRINI.jpg",
    position: 'right'
  },
  {
    id: "the-courtyard",
    title: "The Courtyard",
    description: "Ongoing development of luxury apartments in Doncaster",
    imageSrc: "/images/projects/COURTYARD.jpg",
    position: 'left'
  },
  {
    id: "new-charsfield",
    title: "New Charsfield",
    description: "478 St Kilda Rd, Melbourne",
    imageSrc: "/images/projects/CHARSFIELD.jpeg",
    position: 'right'
  },
  {
    id: "west-side-place",
    title: "West Side Place",
    description: "Melbourne's largest residential development to date, with 2895 apartments, a diverse retail precinct and home to the emblematic Ritz-Carlton and Dorsett hotels.",
    imageSrc: "/images/projects/WESTSIDE.webp",
    position: 'left'
  },
  {
    id: "victoria-police-centre",
    title: "Victoria Police Centre",
    description: "This office tower serves as the headquarters for Victoria Police and is an eco-icon in Melbourne, being awarded a GBCA 6 Star Green Star rating",
    imageSrc: "/images/projects/VICPOL.jpg",
    position: 'right'
  },
  {
    id: "embassy",
    title: "Embassy",
    description: "A contemporary and truly original architectural statement in the heart of Richmond",
    imageSrc: "/images/projects/EMBASSY.webp",
    position: 'left'
  },
  {
    id: "scape-student-living",
    title: "Scape Student Living",
    description: "99 Franklin Street, Melbourne",
    imageSrc: "/images/projects/SCAPE.jpg",
    position: 'right'
  },
  {
    id: "victoria-university-city",
    title: "Victoria University City",
    description: "In the heart of Melbourne's legal and commercial district.",
    imageSrc: "/images/projects/VICUNI2.jpg",
    position: 'left'
  },
  {
    id: "home-southbank",
    title: "Home Southbank",
    description: "260 City Road, Southbank",
    imageSrc: "/images/projects/HOME.jpg",
    position: 'right'
  },
  {
    id: "uno-melbourne",
    title: "UNO Melbourne",
    description: "The 210m tower offers panoramic city views",
    imageSrc: "/images/projects/UNO.jpg",
    position: 'left'
  },
  {
    id: "frankston-hospital",
    title: "Frankston Hospital",
    description: "The largest ever health infrastructure investment in Melbourne's south-east.",
    imageSrc: "/images/projects/FRANKSTON.jpg",
    position: 'right'
  },
  {
    id: "geelong-convention-centre",
    title: "Geelong Convention & Event Centre",
    description: "1000-seat venue, exhibition spaces, a 200-room Crowne Plaza hotel, and a public plaza. Supported by local partnerships, it aims to create over 1,450 jobs during construction and 700 ongoing roles",
    imageSrc: "/images/projects/GEELONG3.jpg",
    mobileImageSrc: "/images/projects/GEELONG.jpg",
    position: 'left'
  },
  {
    id: "albert-fields",
    title: "Albert Fields",
    description: "100% fossil fuel free, and is targeting certified 5 Star Green Star Buildings",
    imageSrc: "/images/projects/ALBERT.webp",
    position: 'right'
  },
  {
    id: "sky-square",
    title: "Sky Square",
    description: "A vibrant three-level food and retail precinct in Box Hill",
    imageSrc: "/images/projects/SKYSQR2.webp",
    position: 'right'
  },
  {
    id: "m12-motorway",
    title: "M12 Motorway",
    description: "ASI, as part of a joint venture, has been selected by the NSW Government to fabricate steel for the M12 Motorway.",
    imageSrc: "/images/projects/m12.jpg",
    position: 'left'
  }
]; 