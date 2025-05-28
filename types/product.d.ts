export interface IProduct {
  id: any;

  localizeInfos: { title: any };

  price: any;

  attributeValues: {
    p_price: any;
    p_image: { value: { downloadLink: any } };
    p_description: { value: any[] };
    p_title: { value: any };
  };
}