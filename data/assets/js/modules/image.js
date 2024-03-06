// CLASS CONTAINING THE PATH VARIABLES TO IMAGE ASSETS IN THE APPLICATION
export class ImagePath{
  static product = '../data/assets/product_visuals/products/'
  static product_info = '../data/assets/product_visuals/grouped_products/'
  static extention = '.webp'
}

// CLASS THAT CONTAINS APP'S IMAGE TYPES FOR CATEGORIES
export class Image{
  // RETURN IMAGE FOR THE INDIVIDUAL PRODUCT MENU
  static product(a){
    return ImagePath.product + a + ImagePath.extention
  }

  // RETURNS THE BANNER IMAGE FOR THE SELECTED PRODUCT
  static infoBanner(a){
    return ImagePath.product_info + a + '/banner' + ImagePath.extention
  }

  // RETURN THE IMAGE PATH FOR THE SELECTED PRODUCT'S INFORMATIONS
  static infoItems(a){
    return ImagePath.product_info + a + '/'
  }
}