export interface ShoeItem {
  id: number;
  name: string;
  style: string;
  description: string;
  price: number;
  image: string;
}

export type CartItem = {
  name: string | undefined;
  selectedOptions: DesignOptions;
  size: string | undefined;
  price: number | undefined;
  image: string | undefined;
}

export type CommunityItem = {
  name: string | undefined;
  selectedOptions: DesignOptions;
  price: number | undefined;
  shoeId: number | undefined;
  image: string | undefined;
}

export interface DesignOptions {
    sole: string;
    laces: string;
    toecap: string;
    outshoe: string;
    tongue: string;
    collar: string;
}
