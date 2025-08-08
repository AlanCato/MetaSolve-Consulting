import { CheckCircle, EyeOff, Copyright, Users, BadgeCheck, AtSign, Ghost } from 'lucide-react';

export const services = [
  {
    slug: 'account-unbanning',
    title: 'Account Unbanning',
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    description: "Regain access to your account. We handle appeals for various violations on Facebook, Instagram & WhatsApp.",
    longDescription: "Our expert team meticulously handles the appeal process to regain access to your disabled or banned accounts on Facebook, Instagram, or WhatsApp. We analyze the reason for the ban, gather necessary evidence, and craft a compelling appeal to Meta's support teams. We have experience with a wide range of violations and work diligently to get your account back online.",
    causes: [
      { name: 'Nudity & Community Guidelines', icon: <EyeOff className="h-5 w-5 text-muted-foreground" /> },
      { name: 'Copyright Infringement', icon: <Copyright className="h-5 w-5 text-muted-foreground" /> },
      { name: 'Impersonation Claims', icon: <Users className="h-5 w-5 text-muted-foreground" /> },
    ],
    details: [
      "Handles appeals for various violations.",
      "Available for Facebook, Instagram & WhatsApp.",
      "Aimed at regaining account access.",
    ],
    included: [
      "Full case analysis to determine the cause of the ban.",
      "Preparation and submission of a detailed appeal.",
      "Communication with Meta support channels on your behalf.",
      "Guidance on how to prevent future account issues.",
    ],
  },
  {
    slug: 'legacy-verification',
    title: 'Legacy Verification',
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    description: 'Get the blue tick on Instagram & Facebook. Our private consultation guides you through the legacy verification process.',
    longDescription: "Secure the coveted blue verification badge on Instagram and Facebook. This service is not about the paid Meta Verified subscription, but about legacy verification for public figures, celebrities, and global brands. We provide a private consultation to assess eligibility and guide you through the stringent, often opaque, legacy verification process. Please note that results can vary and are not guaranteed.",
    causes: [
      { name: 'Meeting hidden criteria', icon: <Users className="h-5 w-5 text-muted-foreground" /> },
      { name: 'Insider submission channels', icon: <EyeOff className="h-5 w-5 text-muted-foreground" /> },
      { name: 'Disclaimer: Results vary', icon: <Copyright className="h-5 w-5 text-muted-foreground" /> },
    ],
    details: [
      "Consultation for legacy blue tick verification.",
      "For Instagram & Facebook platforms.",
      "Process guidance and eligibility assessment.",
    ],
     included: [
      "Eligibility assessment based on notability and press.",
      "Strategy development for building a strong verification case.",
      "Guidance on preparing required documentation.",
      "Consultation on submission through the proper channels.",
    ],
  },
  {
    slug: 'rare-username-acquisition',
    title: 'Rare Username Acquisition',
    icon: <AtSign className="h-8 w-8 text-primary" />,
    description: 'Secure a short, unique, or high-value username for Instagram or Facebook. We consult on acquiring inactive names.',
    longDescription: "Acquire that perfect, high-value username on Instagram or Facebook. Whether it's a short, generic word or your brand name, we consult on the process of acquiring usernames from inactive accounts. Our service involves navigating Meta's policies on inactive accounts and trademarks to increase the chances of a successful claim.",
    causes: [
        { name: 'Inactive account claims', icon: <Users className="h-5 w-5 text-muted-foreground" /> },
        { name: 'Trademark negotiations', icon: <Copyright className="h-5 w-5 text-muted-foreground" /> },
        { name: 'Private acquisitions', icon: <EyeOff className="h-5 w-5 text-muted-foreground" /> },
    ],
    details: [
      "Consulting on acquiring high-value usernames.",
      "For Instagram & Facebook.",
      "Focuses on inactive and trademark claims.",
    ],
    included: [
      "Researching the status of the desired username.",
      "Consultation on trademark and inactive account policies.",
      "Strategy for approaching username claims.",
      "Guidance through the entire acquisition process.",
    ],
  },
  {
    slug: 'shadowban-appeal',
    title: 'Shadowban & Content Appeal',
    icon: <Ghost className="h-8 w-8 text-primary" />,
    description: 'Restore your reach on Instagram & Facebook. We identify and help resolve shadowbans and content restrictions.',
    longDescription: "If your content's reach has mysteriously dropped, you might be shadowbanned. Our service helps you identify the causes of a shadowban or other content restrictions on Instagram and Facebook. We'll analyze your account activity and content, provide a detailed report, and guide you on the steps needed to restore your visibility and appeal any content violations.",
    causes: [
      { name: 'Spammy or repetitive behavior', icon: <Users className="h-5 w-5 text-muted-foreground" /> },
      { name: 'Use of banned hashtags', icon: <EyeOff className="h-5 w-5 text-muted-foreground" /> },
      { name: 'Flagged content reports', icon: <Copyright className="h-5 w-5 text-muted-foreground" /> },
    ],
    details: [
      "Identifying and resolving content restrictions.",
      "For Instagram & Facebook.",
      "Aims to restore account reach and visibility.",
    ],
    included: [
      "Comprehensive account audit to detect shadowban indicators.",
      "Analysis of content and hashtag usage.",
      "Action plan to rectify issues causing the ban.",
      "Guidance on appealing content strikes and violations.",
    ],
  },
];
