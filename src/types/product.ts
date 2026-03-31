
export interface Product {
  id: number,
  nombre: string,
  descripcion: string,
  image: string,
  categoria: string,
  precio: number,
  stock: number,
  rating: number
}

export interface CardDrawerProps {
  title: string;
  description: string;
  image?: string;
  bgColor?: string;
  textColor?: string;
}




