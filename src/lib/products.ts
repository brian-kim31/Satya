export type Product = {
  id: string
  name: string
  artist: 'nickdee' | 'mohspice'
  type: 'tshirt' | 'hoodie'
  price: number
  image: string
  sizes: string[]
  description: string
  placeholderGradient: string
}

export const products: Product[] = [
  {
    id: 'nickdee-tshirt',
    name: 'NickDee Entertainment Tee',
    artist: 'nickdee',
    type: 'tshirt',
    price: 35,
    image: '/images/nickdee-tshirt.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium heavyweight cotton tee. Embroidered NickDee Entertainment logo on chest.',
    placeholderGradient: 'from-purple-900 to-black',
  },
  {
    id: 'nickdee-hoodie',
    name: 'NickDee Entertainment Hoodie',
    artist: 'nickdee',
    type: 'hoodie',
    price: 65,
    image: '/images/nickdee-hoodie.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium fleece pullover hoodie. NickDee Entertainment logo screen-printed on front.',
    placeholderGradient: 'from-indigo-900 to-black',
  },
  {
    id: 'mohspice-tshirt',
    name: 'Mohspice Tee',
    artist: 'mohspice',
    type: 'tshirt',
    price: 35,
    image: '/images/mohspice-tshirt.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium heavyweight cotton tee. Embroidered Mohspice logo on chest.',
    placeholderGradient: 'from-red-900 to-black',
  },
  {
    id: 'mohspice-hoodie',
    name: 'Mohspice Hoodie',
    artist: 'mohspice',
    type: 'hoodie',
    price: 65,
    image: '/images/mohspice-hoodie.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Premium fleece pullover hoodie. Mohspice logo screen-printed on front.',
    placeholderGradient: 'from-orange-900 to-black',
  },
]
