export interface ShoeItem {
  id: number;
  name: string;
  style: string;
  description: string;
  price: number;
}

export type CartItem = {
  name: string | undefined;
  selectedOptions: DesignOptions;
  size: string | undefined;
  price: number | undefined;
}

export type CommunityItem = {
  name: string | undefined;
  selectedOptions: DesignOptions;
  price: number | undefined;
  shoeId: number | undefined;
}

export interface DesignOptions {
    sole: string;
    laces: string;
    toecap: string;
    outshoe: string;
    tongue: string;
    collar: string;
}
