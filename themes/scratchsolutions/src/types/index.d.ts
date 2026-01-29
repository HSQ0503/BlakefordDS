// Page Types
export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    badge?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
  };
  content: string;
  slug?: string;
};

export type Post = {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image?: string;
    categories: string[];
    date: string;
    draft?: boolean;
    featured?: boolean;
  };
  slug?: string;
  content?: string;
};

export type Project = {
  frontmatter: {
    title: string;
    subtitle?: string;
    meta_title?: string;
    description?: string;
    image?: string;
    site_demo_URL?: string;
    technologies?: string[];
    draft?: boolean;
  };
  slug?: string;
  content?: string;
};

export type AboutPage = {
  frontmatter: {
    title: string;
    badge?: string;
    meta_title?: string;
    description?: string;
    image?: string;
    draft?: boolean;
    who_we_are?: {
      enable?: boolean;
      title: string;
      subtitle?: string;
      badge?: string;
      image?: string;
      video?: {
        title: string;
        videoUrl: string;
      };

    };
    our_core_values?: {
      enable?: boolean;
      title: string;
      subtitle?: string;
      badge?: string;
      values?: Array<{
        title: string;
        subtitle: string;
        icon: string;
      }>;
    };
    our_team?: SectionHeader
  };

  slug?: string;
  content?: string;
};

// Sections Types
export type Testimonial = {
  name: string;
  designation: string;
  image: string;
  content: string;
  youtube_video_id?: string;
};

export type FAQType = {
  enable?: boolean;
  title: string;
  subtitle?: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

export type Call_to_action = {
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  button: Button;
};

export type whyChooseUsSection = {
  enable: boolean;
  title: string;
  badge: string;
  features: Feature[];
};
export type howWeWorkSection = {
  enable: boolean;
  title: string;
  badge: string;
  steps: Steps[];
};

export type PricingPlanSection = {
  enable: boolean;
  title: string;
  subtitle?: string;
  badge?: string;
  plans: PricingPlan[];
};

// Components Types
export type PageHeaderTypes = {
  title: string;
  description?: string;
  badge?: string;
};
export type Button = {
  enable: boolean;
  label: string;
  link: string;
};

export type HeroBanner = {
  title: string;
  image: string;
  content?: string;
  button_fill?: Button;
  button_outline?: Button;
  badge?: string;
};

export type SectionHeader = {
  title: string;
  subtitle?: string;
  badge?: string;
  button?: Button;
  enable?: boolean;
};
export type Card = {
  title: string;
  subtitle: string;
  icon?: string;
  slug?: string;
  index?: number;
};

// mini types
export type Steps = {
  title: string;
  content: string;
  icon: string;
  image_list: string[];
  category: string;
};
export type Feature = {
  button?: Button;
  image: string;
  bullet_points?: string[];
  content: string;
  title: string;
};

export type PricingPlan = {
  title: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  button: Button;
};
