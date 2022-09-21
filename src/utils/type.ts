export interface ItemStructure {
    ItemName:String;
    ItemsAuthor:String;
    ItemPrice:number;
    RemainingItems:number;
    ItemsImage:String;
    ProductID:number
}

export interface CartType {
    ItemName:String,
        ItemPrice:number,
        ItemsImage:String,
        ProductID:number,
        Ordered:number
}

export interface CartBuilderPropType {
    ItemName: String;
    ItemPrice: number;
    ItemsImage: String;
    ProductID: number;
    Ordered: number;
  }