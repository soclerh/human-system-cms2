import type { Schema, Struct } from '@strapi/strapi';

export interface AboutHowWeStarted extends Struct.ComponentSchema {
  collectionName: 'components_about_how_we_starteds';
  info: {
    displayName: 'How we started';
  };
  attributes: {
    card: Schema.Attribute.Component<'shared.card', false>;
    content: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'shared.link', false>;
    image: Schema.Attribute.Media<'images'>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface AboutOurCoreValues extends Struct.ComponentSchema {
  collectionName: 'components_about_our_core_values';
  info: {
    displayName: 'Our Core Values';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface AboutStats extends Struct.ComponentSchema {
  collectionName: 'components_about_stats';
  info: {
    displayName: 'Stats';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
  };
}

export interface AboutTeamCard extends Struct.ComponentSchema {
  collectionName: 'components_about_team_cards';
  info: {
    displayName: 'Team Card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    position: Schema.Attribute.String;
  };
}

export interface AboutTheLeadership extends Struct.ComponentSchema {
  collectionName: 'components_about_the_leaderships';
  info: {
    displayName: 'The Leadership';
  };
  attributes: {
    cards: Schema.Attribute.Component<'about.team-card', true>;
    description: Schema.Attribute.Text;
    tag: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface GlobalFooter extends Struct.ComponentSchema {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    contacts: Schema.Attribute.Component<'shared.text-block', true>;
    description: Schema.Attribute.Text;
    logo: Schema.Attribute.Media<'images'>;
    social_links: Schema.Attribute.Component<'shared.text-block', true>;
  };
}

export interface GlobalHeader extends Struct.ComponentSchema {
  collectionName: 'components_global_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    logo: Schema.Attribute.Media<'images'>;
    navigation: Schema.Attribute.Component<'global.nav-items', true>;
  };
}

export interface GlobalNavItems extends Struct.ComponentSchema {
  collectionName: 'components_global_nav_items';
  info: {
    displayName: 'Nav Items';
  };
  attributes: {
    href: Schema.Attribute.String;
    name: Schema.Attribute.String;
    sub_links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface HomeBlockOne extends Struct.ComponentSchema {
  collectionName: 'components_home_block_ones';
  info: {
    displayName: 'Block One';
  };
  attributes: {
    description: Schema.Attribute.Text;
    lists: Schema.Attribute.Component<'shared.text-block', true>;
    tag: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomeBlockTwo extends Struct.ComponentSchema {
  collectionName: 'components_home_block_twos';
  info: {
    displayName: 'Block Two';
  };
  attributes: {
    description: Schema.Attribute.Text;
    points: Schema.Attribute.Component<'home.points', true>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface HomeBlog extends Struct.ComponentSchema {
  collectionName: 'components_home_blogs';
  info: {
    displayName: 'Blog';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.link', false>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface HomeCard extends Struct.ComponentSchema {
  collectionName: 'components_home_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tag: Schema.Attribute.String;
  };
}

export interface HomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_home_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    cards: Schema.Attribute.Component<'home.faq-card', true>;
    description: Schema.Attribute.Text;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface HomeFaqCard extends Struct.ComponentSchema {
  collectionName: 'components_home_faq_cards';
  info: {
    displayName: 'Faq Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomeHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    demo: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    learn: Schema.Attribute.Component<'shared.link', false>;
    tag: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomeOurModules extends Struct.ComponentSchema {
  collectionName: 'components_home_our_modules';
  info: {
    displayName: 'Our Modules';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface HomePlatformBenefits extends Struct.ComponentSchema {
  collectionName: 'components_home_platform_benefits';
  info: {
    displayName: 'Platform Benefits';
  };
  attributes: {
    cards: Schema.Attribute.Component<'shared.card', true>;
    description: Schema.Attribute.Text;
    tag: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomePoints extends Struct.ComponentSchema {
  collectionName: 'components_home_points';
  info: {
    displayName: 'Points';
  };
  attributes: {
    cards: Schema.Attribute.Component<'home.card', true>;
    count: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface HomePricing extends Struct.ComponentSchema {
  collectionName: 'components_home_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    cards: Schema.Attribute.Component<'home.pricing-card', true>;
    description: Schema.Attribute.Text;
    discount: Schema.Attribute.String;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface HomePricingCard extends Struct.ComponentSchema {
  collectionName: 'components_home_pricing_cards';
  info: {
    displayName: 'Pricing Card';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cta: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    features: Schema.Attribute.Component<'shared.text-block', true>;
    highlight: Schema.Attribute.Boolean;
    highlighted: Schema.Attribute.Boolean;
    monthly: Schema.Attribute.String;
    title: Schema.Attribute.String;
    yearly: Schema.Attribute.String;
  };
}

export interface HomeSelfServicePortal extends Struct.ComponentSchema {
  collectionName: 'components_home_self_service_portals';
  info: {
    displayName: 'Self Service Portal';
  };
  attributes: {
    card: Schema.Attribute.Component<'home.card', false>;
    cta: Schema.Attribute.Component<'shared.link', false>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    pointOne_description: Schema.Attribute.Text;
    pointTwo_title: Schema.Attribute.String;
    pointTwp_description: Schema.Attribute.Text;
    pontOne_title: Schema.Attribute.Text;
    tag: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomeTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    cards: Schema.Attribute.Component<'home.testimonial-card', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface HomeTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonial_cards';
  info: {
    displayName: 'Testimonial Card';
  };
  attributes: {
    company: Schema.Attribute.Text;
    content: Schema.Attribute.Text;
    designation: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.Text;
  };
}

export interface ModulesAllModules extends Struct.ComponentSchema {
  collectionName: 'components_modules_all_modules';
  info: {
    displayName: 'All Modules';
  };
  attributes: {
    description: Schema.Attribute.Text;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface ModulesFaq extends Struct.ComponentSchema {
  collectionName: 'components_modules_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    cards: Schema.Attribute.Component<'home.faq-card', true>;
    description: Schema.Attribute.Text;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SharedCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedCommonCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_common_ctas';
  info: {
    displayName: 'Common Cta';
  };
  attributes: {
    contact: Schema.Attribute.Component<'shared.link', false>;
    getStartedNow: Schema.Attribute.Component<'shared.link', false>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    tag: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SharedTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_blocks';
  info: {
    displayName: 'Text Block';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.how-we-started': AboutHowWeStarted;
      'about.our-core-values': AboutOurCoreValues;
      'about.stats': AboutStats;
      'about.team-card': AboutTeamCard;
      'about.the-leadership': AboutTheLeadership;
      'global.footer': GlobalFooter;
      'global.header': GlobalHeader;
      'global.nav-items': GlobalNavItems;
      'home.block-one': HomeBlockOne;
      'home.block-two': HomeBlockTwo;
      'home.blog': HomeBlog;
      'home.card': HomeCard;
      'home.faq': HomeFaq;
      'home.faq-card': HomeFaqCard;
      'home.hero-section': HomeHeroSection;
      'home.our-modules': HomeOurModules;
      'home.platform-benefits': HomePlatformBenefits;
      'home.points': HomePoints;
      'home.pricing': HomePricing;
      'home.pricing-card': HomePricingCard;
      'home.self-service-portal': HomeSelfServicePortal;
      'home.testimonial': HomeTestimonial;
      'home.testimonial-card': HomeTestimonialCard;
      'modules.all-modules': ModulesAllModules;
      'modules.faq': ModulesFaq;
      'shared.card': SharedCard;
      'shared.common-cta': SharedCommonCta;
      'shared.hero-section': SharedHeroSection;
      'shared.link': SharedLink;
      'shared.text-block': SharedTextBlock;
    }
  }
}
