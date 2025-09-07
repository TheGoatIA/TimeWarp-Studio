import React from 'react';

// A generic component for all icons to pass props like className
const Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  />
);

export const Icons = {
  Download: (props: React.SVGProps<SVGSVGElement>) => (
    <Icon {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></Icon>
  ),
  Share: (props: React.SVGProps<SVGSVGElement>) => (
    <Icon {...props}><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></Icon>
  ),
  Play: (props: React.SVGProps<SVGSVGElement>) => (
    <Icon {...props}><polygon points="5 3 19 12 5 21 5 3"></polygon></Icon>
  ),
  Pause: (props: React.SVGProps<SVGSVGElement>) => (
    <Icon {...props}><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></Icon>
  ),
  BookOpen: (props: React.SVGProps<SVGSVGElement>) => (
    <Icon {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></Icon>
  ),
  Globe: (props: React.SVGProps<SVGSVGElement>) => (
    <Icon {...props}><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></Icon>
  ),
  Clothing: (props: React.SVGProps<SVGSVGElement>) => (
    <Icon {...props}><path d="M20.38 3.46 16 2a4 4 0 0 0-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"></path></Icon>
  ),
  TimeWarp: (props: React.SVGProps<SVGSVGElement>) => (
    <Icon {...props}>
        <path d="M12 8v4l3 3" />
        <path d="M20.94 14.33A8.99 8.99 0 1 1 12 3a8.99 8.99 0 0 1 8.94 11.33" />
        <path d="m18 6 -4 4" />
        <path d="m22 10-4.5 4.5" />
    </Icon>
  ),
  Upload: (props: React.SVGProps<SVGSVGElement>) => (
    <Icon {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </Icon>
  ),
  Prehistory: (props: React.SVGProps<SVGSVGElement>) => ( // Mammoth
    <Icon {...props}>
      <path d="M10 13V7a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v6" />
      <path d="M10 8h3" />
      <path d="M17 11c1.5-1 2.5-3 2-5" />
      <path d="M22 13c-1-3-3-4-5-4-1.5 0-2.5 1-4 1h-2c-1.5 0-2.5 1-4 1-2.5 0-5 2.5-5 5s2.5 5 5 5h10c2.5 0 5-2.5 5-5" />
    </Icon>
  ),
  PharaonicEgypt: (props: React.SVGProps<SVGSVGElement>) => ( // Eye of Horus
    <Icon {...props}>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 14v2" />
        <path d="m15 15.5 2 1.5" />
    </Icon>
  ),
  Antiquity: (props: React.SVGProps<SVGSVGElement>) => ( // Parthenon
    <Icon {...props}>
      <path d="M22 18v-5H2v5" />
      <path d="m4 13 1-5" />
      <path d="m19 8 1 5" />
      <path d="M3 21h18" />
      <path d="M5 13h14V8H5v5" />
      <path d="M6 8v5" />
      <path d="M9 8v5" />
      <path d="M12 8v5" />
      <path d="M15 8v5" />
      <path d="M18 8v5" />
    </Icon>
  ),
  MiddleAges: (props: React.SVGProps<SVGSVGElement>) => ( // Castle
    <Icon {...props}>
        <path d="M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z" />
        <path d="M18 11V4l-4 4-4-4v7" />
        <path d="M10 11V4" />
        <path d="M2 22V11" />
        <path d="M22 22V11" />
        <path d="M14 22V11" />
    </Icon>
  ),
  Renaissance: (props: React.SVGProps<SVGSVGElement>) => ( // Feather pen
    <Icon {...props}>
        <path d="M20.72 7.55a1.14 1.14 0 0 0-1.2-1.93l-6.52 3.92" />
        <path d="m14.2 11.47-4.92 2.82C6.34 15.65 4 17 4 17l4.4.95.82 3.55c0 .32.22.58.52.66.3.08.62-.05.81-.3l3.35-4.4" />
        <path d="m14.2 11.47 6.52-3.92" />
        <path d="M12.5 13.5 4 17" />
    </Icon>
  ),
  DynasticChina: (props: React.SVGProps<SVGSVGElement>) => ( // Fan
    <Icon {...props}>
      <path d="M12 12c-3 0-5.6-1.7-6.8-4H3c-.8.6-1.5 1.4-2 2.3.5.9 1.2 1.7 2 2.3h2.8c1.2-2.3 3.8-4 6.8-4s5.6 1.7 6.8 4H21c.8-.6 1.5-1.4 2-2.3-.5-.9-1.2-1.7-2-2.3h-2.2C17.6 10.3 15 12 12 12z" />
      <path d="M12 12v9" />
      <path d="m16.5 13.5-4.5 4.5" />
      <path d="m7.5 13.5 4.5 4.5" />
    </Icon>
  ),
  FeudalJapan: (props: React.SVGProps<SVGSVGElement>) => ( // Torii Gate
    <Icon {...props}>
      <path d="M4 4c0 4 3 8 8 8s8-4 8-8" />
      <path d="M4 4h16" />
      <path d="M4 22h16" />
      <path d="M8 22V4" />
      <path d="M16 22V4" />
    </Icon>
  ),
  Mesoamerican: (props: React.SVGProps<SVGSVGElement>) => ( // Step Pyramid
    <Icon {...props}>
      <path d="M2 22h20" />
      <path d="M4 18h16" />
      <path d="M6 14h12" />
      <path d="M8 10h8" />
      <path d="M10 6h4" />
      <path d="M12 2v4" />
    </Icon>
  ),
  Victorian: (props: React.SVGProps<SVGSVGElement>) => ( // Top hat
    <Icon {...props}>
        <path d="M12 11c-2.76 0-5 .67-5 1.5S9.24 14 12 14s5-.67 5-1.5S14.76 11 12 11z" />
        <path d="M7 12.5v4c0 1.1.9 2 2 2h6a2 2 0 0 0 2-2v-4" />
        <path d="M12 4c1.93 0 3.5 1.57 3.5 3.5V11h-7V7.5C8.5 5.57 10.07 4 12 4z" />
    </Icon>
  ),
  ArtNouveau: (props: React.SVGProps<SVGSVGElement>) => ( // Stylized Plant
    <Icon {...props}>
      <path d="M12 21V8a4 4 0 0 0-4-4H4" />
      <path d="M12 8a4 4 0 0 1 4-4h4" />
      <circle cx="4" cy="4" r="2" />
      <circle cx="20" cy="4" r="2" />
      <path d="M12 21a4 4 0 0 0 4-4v-1a4 4 0 0 1-8 0v1a4 4 0 0 0 4 4z" />
    </Icon>
  ),
  Twenties: (props: React.SVGProps<SVGSVGElement>) => ( // Martini glass
    <Icon {...props}>
        <path d="M8 22h8" />
        <path d="M12 11v11" />
        <path d="m19 3-7 8-7-8" />
    </Icon>
  ),
  Bauhaus: (props: React.SVGProps<SVGSVGElement>) => ( // Geometric Composition
    <Icon {...props}>
      <circle cx="17" cy="17" r="5" />
      <rect x="2" y="12" width="10" height="10" rx="2" />
      <path d="M2 8l10-6" />
    </Icon>
  ),
  PopArt: (props: React.SVGProps<SVGSVGElement>) => ( // Speech Bubble
    <Icon {...props}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </Icon>
  ),
  The2010s: (props: React.SVGProps<SVGSVGElement>) => ( // Smartphone with heart
    <Icon {...props}>
      <rect x="6" y="2" width="12" height="20" rx="2" />
      <path d="M12 18h.01" />
      <path d="M12 10.4c-1-1-2.5-1-3.5 0s-1 2.5 0 3.5L12 17l3.5-3.1c1-1 1-2.5 0-3.5s-2.5-1-3.5 0z" />
    </Icon>
  ),
};