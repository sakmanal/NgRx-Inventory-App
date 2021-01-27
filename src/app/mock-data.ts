import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './products/product';
import { Customer } from './customers/customer';

export class MockData implements InMemoryDbService {

    createDb(): any {
        const products: Product[] = [
            {
                id: 1,
                productName: 'Leaf Rake',
                productCode: 'GDN-0011',
                description: 'Leaf rake with 48-inch wooden handle',
                starRating: 3
            },
            {
                id: 2,
                productName: 'Garden Cart',
                productCode: 'GDN-0023',
                description: '15 gallon capacity rolling garden cart',
                starRating: 4
            },
            {
                id: 5,
                productName: 'Hammer',
                productCode: 'TBX-0048',
                description: 'Curved claw steel hammer',
                starRating: 5
            },
            {
                id: 8,
                productName: 'Saw',
                productCode: 'TBX-0022',
                description: '15-inch steel blade hand saw',
                starRating: 3
            },
            {
                id: 10,
                productName: 'Video Game Controller',
                productCode: 'GMG-0042',
                description: 'Standard two-button video game controller',
                starRating: 4
            }
        ];

        const customers: Customer[] = [
          {
            id: 1001,
            name: 'Sakis Manal',
            country: {
              name: 'Greece',
              code: 'GR'
            },
            company: 'Dev Inc.',
            status: 'qualified',
            lifetimeValue: 5000,
            image: 'https://randomuser.me/api/portraits/men/32.jpg'
          },
          {
            id: 1002,
            name: 'Nikos Poul',
            country: {
              name: 'Brazil',
              code: 'BR'
            },
            company: 'Reyxap C.A',
            status: 'proposal',
            lifetimeValue: 3000,
            image: 'https://uifaces.co/our-content/donated/gPZwCbdS.jpg'
          },
          {
            id: 1003,
            name: 'Stavros Polast',
            country: {
              name: 'Switzerland',
              code: 'CH'
            },
            company: 'BMW Inc.',
            status: 'unqualified',
            lifetimeValue: 4000,
            image: 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg'
          },
          {
            id: 1004,
            name: 'Giota MIller',
            country: {
              name: 'Argentina',
              code: 'AR'
            },
            company: 'Audi Corp.',
            status: 'qualified',
            lifetimeValue: 2000,
            image: 'https://randomuser.me/api/portraits/women/2.jpg'
          },
          {
            id: 1005,
            name: 'Elis Nalb',
            country: {
              name: 'Germany',
              code: 'DE'
            },
            company: 'General Electric',
            status: 'new',
            lifetimeValue: 1000,
            image: 'https://randomuser.me/api/portraits/women/47.jpg'
          },
          {
            id: 1006,
            name: 'Alex Ion',
            country: {
              name: 'Norway',
              code: 'NO'
            },
            company: 'Apple Inc.',
            status: 'unqualified',
            lifetimeValue: 2500,
            image: 'https://randomuser.me/api/portraits/men/4.jpg'
          },
          {
            id: 1007,
            name: 'Andriou Araz',
            country: {
              name: 'Czech Republic',
              code: 'CZ'
            },
            company: 'Toolbox C.A',
            status: 'proposal',
            lifetimeValue: 3200,
            image: 'https://randomuser.me/api/portraits/men/33.jpg'
          },
          {
            id: 1008,
            name: 'Kostas Lek',
            country: {
              name: 'United Kingdom',
              code: 'GB'
            },
            company: 'Microsoft Corp.',
            status: 'new',
            lifetimeValue: 1500,
            image: 'https://randomuser.me/api/portraits/men/12.jpg'
          },
          {
            id: 1009,
            name: 'Panos Pap',
            country: {
              name: 'Cyprus',
              code: 'CY'
            },
            company: 'KIA Automotive',
            status: 'qualified',
            lifetimeValue: 2400,
            image: 'https://randomuser.me/api/portraits/men/15.jpg'
          },
          {
            id: 1010,
            name: 'Maria Zouk',
            country: {
              name: 'Finland',
              code: 'FI'
            },
            company: 'Program Team',
            status: 'unqualified',
            lifetimeValue: 4100,
            image: 'https://randomuser.me/api/portraits/women/27.jpg'
          }
        ];
        return { products, customers };
    }
}
