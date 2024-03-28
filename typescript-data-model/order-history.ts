interface Author {
  firstName: string;
  lastName: string;
  title?: string;
}
interface AmazonBook {
  isbn?: string;
  title: string;
  author: Author;
}
interface Item {
  bookDetails?: AmazonBook;
  price: number;
  name: string;
  itemUrl: string;
  //  Ideally eventually a function of parent object's orderPlacedTime + 2592000 (30 days)
  itemReturnDue: number;
}
interface Order {
  orderNumber: string;
  total: number;
  deliveryLocationName: string;
  // Epoch Time
  orderPlacedTime: number;
  orderDetailsUrl: string;
  invoiceUrl: string;
  shippingCost: number;
  items: Item[];
}
interface AccountInfo {
  timezone: string;
  orders: Order[];
}

const orderHistory: AccountInfo[] = [
  {
    timezone: 'America/Los_Angeles',
    orders: [
      {
        orderNumber: '114-3941689-8772232',
        total: 34.0,
        shippingCost: 0.0,
        deliveryLocationName: 'JS Masher',
        orderPlacedTime: 1596544740,
        orderDetailsUrl: '/11439416898772232/details',
        invoiceUrl: '/11439416898772232/invoice',
        items: [
          {
            name: 'JavaScript for impatient programmers',
            itemUrl: '/73750497212393827781',
            price: 31.55,
            itemReturnDue: 1599136740,
            bookDetails: {
              title: 'JavaScript for impatient programmers',
              author: {
                firstName: 'Axel',
                lastName: 'Rauschmayer',
                title: 'Dr.',
              },
            },
          },
        ],
      },
      {
        orderNumber: '113-9984268-1280257',
        total: 44.53,
        shippingCost: 0.0,
        deliveryLocationName: 'JS Masher',
        orderPlacedTime: 1595218980,
        orderDetailsUrl: '/11399842681280257/details',
        invoiceUrl: '/11399842681280257/invoice',
        items: [
          {
            name: 'The Timeless Way of Building',
            itemUrl: '/34579042230718004933',
            price: 41.33,
            itemReturnDue: 1597810980,
            bookDetails: {
              title: 'The Timeless Way of Building',
              author: {
                firstName: 'Christopher',
                lastName: 'Alexander',
              },
            },
          },
        ],
      },
      {
        orderNumber: '114-2875557-9059409',
        total: 17.22,
        shippingCost: 0.0,
        deliveryLocationName: 'JS Masher',
        orderPlacedTime: 1593894600,
        orderDetailsUrl: '/11428755579059409/details',
        invoiceUrl: '/11428755579059409/invoice',
        items: [
          {
            name: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
            itemUrl: '/26597453264268730398',
            price: 15.98,
            itemReturnDue: 1596486600,
          },
        ],
      },
      {
        orderNumber: '113-2883177-2648248',
        total: 138.93,
        shippingCost: 0.0,
        deliveryLocationName: 'JS Masher',
        orderPlacedTime: 1593814260,
        orderDetailsUrl: '/11328831772648248/details',
        invoiceUrl: '/11328831772648248/invoice',
        items: [
          {
            name: 'Gamecube Controller - Super Smash Bros. Edition (Nintendo Switch)',
            itemUrl: '/48650971896508782665',
            price: 94.95,
            itemReturnDue: 1596406260,
          },
          {
            name: 'The Art of Sql',
            itemUrl: '/39648648013099409524',
            price: 33.99,
            itemReturnDue: 1596406260,
            bookDetails: {
              title: 'The Art of Sql',
              author: {
                firstName: 'Stephane',
                lastName: 'Faroult',
              },
            },
          },
        ],
      },
    ],
  },
];

console.log(orderHistory);
