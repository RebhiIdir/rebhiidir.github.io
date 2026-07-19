// Certifications shown on the CV page.
//
// HOW TO ADD A CERTIFICATION PDF:
// 1. Put the PDF file in: public/documents/certifications/
//    (create that folder if it doesn't exist yet)
// 2. Set `url` below to "/documents/certifications/<your-file-name>.pdf"
// 3. If you also have an official online verification link (Credly, Cisco
//    Networking Academy profile, etc.), you can use that instead of the PDF path.
export interface Certification {
  title: string;
  titleFr: string;
  issuer: string;
  issuerFr: string;
  url: string;
}

export const certifications: Certification[] = [
  {
    title: "CCNA: Introduction to Networks",
    titleFr: "CCNA : Introduction to Networks",
    issuer: "Cisco Networking Academy",
    issuerFr: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/6bfde27a-4fec-4ae9-93f5-cdbefa6691d5/public_url",
  },
  {
    title: "Endpoint Security",
    titleFr: "Endpoint Security",
    issuer: "Cisco Networking Academy",
    issuerFr: "Cisco Networking Academy",
    url: "https://www.credly.com/badges/0e78a073-a7ff-4b67-a845-95c0c142f8a4/public_url",
  },
];
