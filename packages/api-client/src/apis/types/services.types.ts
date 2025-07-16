export interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: string;
  currency: string;
  requiresMeeting: boolean;
  isActive: boolean;
  estimatedHours: number;
  businessSize: string;
  businessStage: string[];
  goalIntent: string[];
  createVsImprove: string;
  serviceType: string;
  primaryGoal: string | null;
  deliverables: string;
  termsConditions: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
}

export interface ServicesResponse {
  data: Service[];
  hasNextPage: boolean;
}
