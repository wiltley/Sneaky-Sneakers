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

export interface DesignOptions {
    sole: string;
    laces: string;
    toecap: string;
    outshoe: string;
    tongue: string;
    collar: string;
}
