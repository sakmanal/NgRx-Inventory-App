export interface Country {
  name: string;
  code: string;
}

/* Defines the customer entity */
export interface Customer {
  id: number;
  name: string;
  country: Country;
  company: string;
  status: string;
  image?: string;
  lifetimeValue?: number;
}
