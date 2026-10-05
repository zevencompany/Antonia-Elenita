export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
}

export interface TimelineStep {
  number: string;
  title: string;
  description: string;
  align: 'left' | 'right';
}

export interface FaqItem {
  question: string;
  answer: string;
}
