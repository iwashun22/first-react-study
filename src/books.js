import { v4 as uuidV4 } from 'uuid';

const books = [
  {
    id: uuidV4(),
    img: "https://m.media-amazon.com/images/I/81YHHiNPDNL._AC_UL640_QL65_.jpg",
    title: "Tales of Life and Music",
    author: "Dave Grohl",
  },
  {
    id: uuidV4(),
    img: "https://images-na.ssl-images-amazon.com/images/I/911cmGSgcvL._AC_UL381_SR381,381_.jpg",
    title: "Will",
    author: "Will Smith",
  },
  {
    id: uuidV4(),
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL127_SR127,127_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: uuidV4(),
    img: "https://images-na.ssl-images-amazon.com/images/I/51Ua3JTN8iS._SX338_BO1,204,203,200_.jpg",
    title: "Big Shot Diary of a Wimpy Kid",
    author: "Jeff Kinney",
  },
  {
    id: uuidV4(),
    img: "https://m.media-amazon.com/images/I/91S+nNHdHSL._AC_UY436_FMwebp_QL65_.jpg",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
  },
  {
    id: uuidV4(),
    img: "https://m.media-amazon.com/images/I/51DZeZw7K0L.jpg",
    title: "Greenlight",
    author: "Matthew McConaughey",
  },
  {
    id: uuidV4(),
    img: "https://images-na.ssl-images-amazon.com/images/I/41lpkXqV+PL._SX418_BO1,204,203,200_.jpg",
    title: "History of the World Map by Map",
    author: "DK",
  },
  {
    id: uuidV4(),
    img: "https://images-na.ssl-images-amazon.com/images/I/51wSvLJG-rS._SX306_BO1,204,203,200_.jpg",
    title: "Astrophysics for People in a Hurry",
    author: "Neil deGrasse Tyson",
  },
  {
    id: uuidV4(),
    img: "https://images-na.ssl-images-amazon.com/images/I/61DTOTemyDL._SX330_BO1,204,203,200_.jpg",
    title: "Underland: A Deep Time Journey",
    author: "Robert Macfarlane",
  },
];

export default books;