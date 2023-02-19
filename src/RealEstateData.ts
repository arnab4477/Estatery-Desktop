// Interface for the estate data
export interface EstateType {
  name: string;
  image: string;
  price: number;
  beds: number;
  bathrooms: number;
  area: string;
  propertyType: string;
  popular: boolean;
  address: string;
  location: string;
  moveInDate: [string, string];
}

/**
 * Object holding all the data for the estates
 */
const EstateData: EstateType[] = [
  {
    name: 'Faulkner Ave',
    image:
      'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyamin-mellish-186077.jpg&fm=jpg',
    price: 4000,
    beds: 5,
    bathrooms: 3,
    area: '9×7 m²',
    propertyType: 'house',
    popular: true,
    address: '909 Woodland St, Michigan, IN',
    location: 'Indiana',
    moveInDate: ['2023-03-01', '2023-04-30'],
  },
  {
    name: 'Beverly Springfield',
    image:
      'https://www.build-review.com/wp-content/uploads/2020/07/luxury-real-estate.jpg',
    price: 2700,
    beds: 4,
    bathrooms: 3,
    area: '7×7 m²',
    propertyType: 'house',
    popular: true,
    address: '2821 Lake Sevilla, Palm Harbor, TX',
    location: 'Texas',
    moveInDate: ['2023-01-10', '2023-04-10'],
  },
  {
    name: 'Palm Harbor',
    image:
      'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070__480.jpg',
    price: 2095,
    beds: 3,
    bathrooms: 3,
    area: '6×7 m²',
    propertyType: 'house',
    popular: false,
    address: '2699 Green Valley, Highlands, FL',
    location: 'Florida',
    moveInDate: ['2023-02-10', '2023-03-10'],
  },
  {
    name: 'NY House',
    image:
      'https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?cs=srgb&dl=pexels-pixabay-210617.jpg&fm=jpg',
    price: 1899,
    beds: 3,
    bathrooms: 3,
    area: '4×5 m²',
    propertyType: 'house',
    popular: true,
    address: '6493 Red Valley, 12 Street, NY',
    location: 'New York',
    moveInDate: ['2023-01-01', '2023-04-20'],
  },
  {
    name: 'Alabama House',
    image:
      'https://media.istockphoto.com/id/1269776313/photo/suburban-house.jpg?s=170667a&w=0&k=20&c=sOhzQStKifuTMRfANgwx7lHfZ9quUgTxBNpBJs_a3cw=',

    price: 1200,
    beds: 3,
    bathrooms: 3,
    area: '5×5 m²',
    propertyType: 'house',
    popular: false,
    address: '4321 Blue Valley, Lowlands, AL',
    location: 'Alabama',
    moveInDate: ['2023-03-01', '2023-05-28'],
  },
  {
    name: 'NYC Apartment',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3wSXLA8j-mPHm-JIlwJgdND_S0OXEhdqGQ&usqp=CAU',
    price: 2400,
    beds: 2,
    bathrooms: 1,
    area: '3×5 m²',
    propertyType: 'apartment',
    popular: true,
    address: '123 Times Square, New York City, NYC',
    location: 'New York',
    moveInDate: ['2023-02-10', '2023-03-10'],
  },
  {
    name: 'SF Apartment',
    image:
      'https://www.edengroup.in/upload/gallery/Bella_Vista_Day_View_final1365.jpg',
    price: 3200,
    beds: 3,
    bathrooms: 2,
    area: '5×6 m²',
    propertyType: 'apartment',
    popular: false,
    address: '567 Main Street, San Fransisco, CA',
    location: 'California',
    moveInDate: ['2023-02-15', '2023-04-10'],
  },
  {
    name: 'LA Apartment',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcGOigfMAZtWuKXbHL1rpUnv_wD6F8nRFF_Q&usqp=CAU',
    price: 3500,
    beds: 3,
    bathrooms: 3,
    area: '6×7 m²',
    propertyType: 'apartment',
    popular: true,
    address: '9876 Hollywood Valley, Los Angelos, CA',
    location: 'California',
    moveInDate: ['2023-01-10', '2023-04-10'],
  },
  {
    name: 'Chicago Apartment',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDeZvFkWZmhXQy29du_ZqclMhR7kzU6xJ_3g&usqp=CAU',
    price: 1600,
    beds: 2,
    bathrooms: 1,
    area: '4×5 m²',
    propertyType: 'apartment',
    popular: false,
    address: '4567 Park Station, Chicago, IL',
    location: 'Illinios',
    moveInDate: ['2023-02-10', '2023-03-10'],
  },
];

export default EstateData;
