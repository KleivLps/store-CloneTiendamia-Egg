class Product {
  constructor(id, title, brand, price, stock, images, colors, description){
      this.id = id
      this.title = title
      this.brand = brand
      this.price = price
      this.stock = stock
      this.images = images
      this.colors = colors
      this.description = description
  }
}


const prod1 = new Product()
prod1.id = 1
prod1.title = "Xiaomi Redmi Note 13 5G 6GB Ram 128GB"
prod1.brand = "Xiaomi"
prod1.price = "989"
prod1.stock = 10
prod1.images = ["https://promart.vteximg.com.br/arquivos/ids/7791265-1000-1000/image-54814c6261504f8f8c4e3fa08efe0ded.jpg", "https://oechsle.vteximg.com.br/arquivos/ids/17249728-1500-1500/image-dd69cc4738dc4dbbb701b9b1d63afb35.jpg", "https://oechsle.vteximg.com.br/arquivos/ids/17249729-1500-1500/image-cb298c72515e4a339d90fcbce73dda9e.jpg"]
prod1.colors = ["Negro"]
prod1.description = "Descubre el Xiaomi Redmi Note 13, un smartphone que combina diseño minimalista, rendimiento sólido y fotografía de alta calidad."

const prod2 = new Product()
prod2.id = 2
prod2.title = "iPhone 15 Pro Max"
prod2.brand = "Apple"
prod2.price = "6949"
prod2.stock = 10
prod2.images = ["https://mac-center.com.pe/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__COES_823x.jpg", "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v1139235335210655714/products/100009926.01-apple-iphone-15-pro-max-512gb-titanio-natural-mu7e3be-a.jpg&quality=0.8&outputFormat=JPEG", "https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v90539454906227045/products/100009926.04-apple-iphone-15-pro-max-512gb-titanio-natural-mu7e3be-a.jpg&quality=0.8&outputFormat=JPEG"]
prod2.colors = ["Tinanium Natural", "Gris"]
prod2.description = "El iPhone 15 Pro es el primer iPhone diseñado con titanio de calidad aeroespacial, la misma aleación que se usa en las naves espaciales enviadas a Marte."


const prod3 = new Product()
prod3.id = 3
prod3.title = "Samsung S24 Ultra"
prod3.brand = "Samsung"
prod3.price = "5699"
prod3.stock = 10
prod3.images = ["https://www.radioshackla.com/media/catalog/product/4/6/465217000012_00.jpg", "https://coolboxpe.vtexassets.com/arquivos/ids/343718-800-auto?v=638430876544700000&width=800&height=auto&aspect=true", "https://coolboxpe.vtexassets.com/arquivos/ids/343719-800-auto?v=638430876672730000&width=800&height=auto&aspect=true"]
prod3.colors = ["Titanium Black", "Gris"]
prod3.description = "El Samsung S24 Ultra se presenta como una verdadera joya de la tecnología. Este modelo está equipado con una pantalla de 6.8 pulgadas con resolución QHD+, lo que garantiza una claridad excepcional y una experiencia visual inmersiva."


const prod4 = new Product()
prod4.id = 4
prod4.title = "Google Pixel 8 Pro 256Gb"
prod4.brand = "Google"
prod4.price = "3699"
prod4.stock = 5
prod4.images = ["https://m.media-amazon.com/images/I/713eEl39eLL._AC_SL1500_.jpg", "https://i.blogs.es/1cc524/img_1796/375_375.jpeg", "https://www.digitaltrends.com/wp-content/uploads/2023/10/google-pixel-8-pro-colorful-background-close.jpeg"]
prod4.colors = ["Bahía", "Gris"]
prod4.description = "Pixel 8 Pro es el teléfono totalmente profesional diseñado por Google; es súper rápido, potente y seguro, con el nuevo chip Google Tensor G3 diseñado a medida con Google AI para funciones de fotografía y video de vanguardia y formas más inteligentes de ayudar / Con el diseño más refinado hasta el momento, Pixel 8 Pro tiene una pantalla Super Actua inmersiva de 6,7 pulgadas que hace que todo sea nítido; la frecuencia de actualización se ajusta inteligentemente entre 1 y 120 Hz para un rendimiento receptivo / Google Pixel 8 Pro tiene cuatro cámaras de nivel profesional actualizadas con el mejor zoom jamás visto por Pixel"

const prod5 = new Product()
prod5.id = 5
prod5.title = "Xiaomi Mi 9 6GB/64GB"
prod5.brand = "Xiaomi"
prod5.price = "1399"
prod5.stock = 10
prod5.images = ["https://i5.walmartimages.com/asr/020161cd-98d6-4bc2-bbb4-ebec9de72721_1.0554403ff266f495190b93dbcf6c406f.jpeg", "https://shopmi.pe/wp-content/uploads/2023/02/Mi9-02.jpg"]
prod5.colors = ["Negro", "Gris"]
prod5.description = "Xiaomi Mi 9 cuenta con el procesador Qualcomm Snapdragon 855, con 6 GB o 8 GB de RAM LPDDRA4X y la GPU Adreno 640 GPU. Tiene una pantalla Samsung AMOLED full-screen de 6,39, con una resolución FHD+ 2340 x 1080. Las opciones de almacenamiento incluyen 64 GB o 128 GB. El dispositivo tiene un sensor de huellas digital bajo la parte inferior de la pantalla"


const prod6 = new Product()
prod6.id = 6
prod6.title = "Huawei Mate 40 Pro"
prod6.brand = "Huawei"
prod6.price = "2989"
prod6.stock = 10
prod6.images = ["https://specs-tech.com/wp-content/uploads/2020/10/Huawei-Mate-40-Pro-Plus.jpg", "https://i.blogs.es/8c9171/n_wallpaper_black_rear/1366_2000.jpg", "https://i.blogs.es/51763e/mate-40-pro-2/1366_2000.jpg"]
prod6.colors = ["Negro", "Gris"]
prod6.description = "El Huawei Mate 40 Pro es un potente smartphone con una pantalla OLED curva de alta resolución, un potente procesador, cámaras versátiles y una batería de larga duración. Ofrece un diseño elegante y características avanzadas de conectividad y seguridad."

const prod7 = new Product()
prod7.id = 7
prod7.title = "Samsung Galaxy Fold"
prod7.brand = "Samsung"
prod7.price = "7039"
prod7.stock = 10
prod7.images = ["https://falabella.scene7.com/is/image/FalabellaPE/gsc_123329319_3648768_2?wid=800&hei=800&qlt=70", "https://cdn.pacifiko.com/image/cache/catalog/p/MDg0ODgzZW_2-1000x1000.png"]
prod7.colors = ["Azul", "Gris"]
prod7.description = "El Samsung Galaxy Fold es un innovador smartphone plegable que ofrece una pantalla principal de 7.3 pulgadas que se puede doblar para caber en un formato más compacto. Equipado con hardware de alta gama, incluyendo potentes procesadores y cámaras de calidad, el Galaxy Fold redefine la experiencia móvil al ofrecer multitarea mejorada y una experiencia de usuario única gracias a su diseño plegable."

const prod8 = new Product()
prod8.id = 8
prod8.title = "Samsung Galaxy A54 256GB 8GB"
prod8.brand = "Samsung"
prod8.price = "1599"
prod8.stock = 10
prod8.images = ["https://promart.vteximg.com.br/arquivos/ids/7519114-1000-1000/image-89cd4be1fa9a4da996461575f0341a1c.jpg"]
prod8.colors = ["Violeta", "Gris"]
prod8.description = "El Samsung Galaxy A54 es un smartphone de gama media que ofrece un equilibrio entre rendimiento, características y precio. Con una pantalla de tamaño moderado, cámaras versátiles y un diseño elegante, el A54 es ideal para aquellos que buscan un dispositivo confiable para el uso diario. Ofrece un rendimiento sólido, una batería de larga duración y opciones de conectividad modernas, todo ello a un precio asequible."

const products = [prod1, prod2, prod3, prod4, prod5, prod6, prod7, prod8]
