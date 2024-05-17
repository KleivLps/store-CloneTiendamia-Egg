// clase Producto
class Product {
    //constructor
    constructor(id, title, price, stock, photo, onsale, supplier, colors, description, taxPolicy) {
        this.id = id;
        this.title = title ;
        this.price = price;
        this.stock = stock;
        this.photo = photo;
        this.onsale = onsale;
        //Atributo privado
        this._supplier = supplier;
        //Array de colores
        this.colors = colors;
        //Descripción
        this.description = description;
        //Política de impuestos
        this.taxPolicy = taxPolicy;
    }


    //metodos getter y setter del atributo privado
    get supplier() {
        return this._supplier;
    }

    set supplier(newSupplier) {
        this._supplier = newSupplier;
    }

}

//instanciamos Los objetos
const product1 = new Product("001", "MACBOOK PRO CHIP M3 RAM 8GB DISCO 512GB SSD 14 GRIS ESPACIAL", 9533, 20, ["./assets/mac-1.jpg", "./assets/mac-2.jpg", "./assets/mac-3.jpg"], "21% Off", "MacBook Pro Chip M3", ["gray","white"], "El MacBook Pro de 14 pulgadas te sorprenderá con sus capacidades. La discreta batería que cabe en su delgada carcasa dura hasta 22 horas y el sistema de enfriamiento es tan efectivo que nunca tendrás que bajar la velocidad máxima. Combinado con los colores saturados de la pantalla Liquid Retina XDR , la cámara FaceTime HD y el micrófono de estudio es la computadora portátil APPLE más portátil y profesional .La MacBook Pro de 14 pulgadas avanza con M3, un chip increíblemente avanzado que brinda gran velocidad y capacidad. Con la mejor duración de batería de su clase. El Magic Keyboard te ayudará a escribir textos fantásticos: es cómodo, silencioso y preciso. Los atajos útiles harán que trabajar con él sea rápido e intuitivo. Desbloquear tu MacBook Pro es igual de fácil , simplemente toca el lector Touch ID para desbloquear o bloquear el dispositivo; no necesitas ninguna contraseña", "Incluye impuesto País y percepción AFIP");
const product2 = new Product("002", "LAPTOP HP VICTUS GAMER 15-FB0128LA AMD RYZEN 5 8 GB NVIDIA GEFORCE RTX 3050 GPU (4 GB GDDR6 DEDICATED) 512 GB SSD 15.6 FHD 144HZ WINDOWS 11", 3000, 20, ["./assets/hp-1.jpg", "./assets/hp-2.jpg", "./assets/hp-3.jpg"], "30% Off", "Victus-15", ["black","gray"], "La HP Victus Gaming 15 Laptop está a la altura de los juegos más grandes y los mejores jugadores. Con procesador Intel® Core i-H, gráficos hasta NVIDIA® GeForce RTX™ 2050, WiFi6, SSD ultrarrápido y diseño sustentable, siente cómo tu juego se eleva hasta donde quieras.", "Incluye impuesto País y percepción AFIP");
const product3 = new Product("003", "LAPTOP LENOVO LEGION 5 15ACH6, RYZEN 7-5800H, 16GB, 512GB SSD, RTX 3050 TI, 15.6″FHD, WIN11", 4020, 20, ["./assets/lenovo-1.webp", "./assets/lenovo-2.webp" , "./assets/lenovo-3.webp"], "20% Off","LENOVO LEGION 5", ["black","bluesky"], "Marca: Lenovo Modelo: LEGION 5 15ACH6 Pantalla: 15.6 Pulgadas Resolución: FHD (1920 × 1080) – 120Hz Procesador: AMD Ryzen 7-5800H Gráficos: Nvidia GeForce RTX 3050 Ti 4GB Memoria RAM: 16GB DDR4 Almacenamiento: 512GB SSD Teclado: Español / Retroiluminado Sistema Operativo: Windows 11 Garantía: 1 año", "Incluye impuesto País y percepción AFIP"); 
const product4 = new Product("004", "LAPTOP ACER NITRO AMD RYZEN 5 7535HS 8GB 512GB SSD 15.6` FHD IPS 144HZ RTX3050 4GB W11", 4919, 20, ["./assets/acer-1.jpg", "./assets/acer-2.jpg", "./assets/acer-3.jpg"], "33% Off", "ACER NITRO", ["black","redvine"], "Domina el mundo del juego con la potencia combinada de un procesador AMD Ryzen™ serie 60001 y la tarjeta gráfica NVIDIA® GeForce RTX™ 3070 Ti (completamente optimizada para un MGP máximo). Configura tu laptop para conseguir la máxima velocidad y un gran almacenamiento con dos ranuras para unidades PCIe M.2 y una memoria RAM DDR5 48001 de hasta 32 GB.", "Incluye impuesto País y percepción AFIP");
const product5 = new Product("005", "LAPTOP GAMER ASUS AMD RYZEN 5 RTX 2050 8Gb RAM 512Gb SSD TUF GAMING A15 SERIE 7000 15.6", 2699, 20, ["./assets/asus-1.jpg", "./assets/asus-2.jpg", "./assets/asus-3.jpg"], "32% Off", "Tuf Gaming A15", ["black","blue"], "La ASUS TUF Gaming A15 cuenta con todo lo que necesitas para derrotar a la competencia, como componentes de alto rendimiento enfriados por un sistema térmico con módulos anti polvo y durabilidad testeada bajo pruebas de grado militar.", "Incluye impuesto País y percepción AFIP");
const product6 = new Product("006", "LAPTOP ASUS G513RC-HN036W 15.6` AMD RYZEN 7 (6000 SERIES) 16GB 512GB SSD", 4299, 20, ["./assets/asus-4.webp", "./assets/asus-5.webp" , "./assets/asus-6.webp"], "12% Off", "ASUS G513RC", ["black","bluesky"], "512GB M.2 NVMe PCIe 3.0 SSD, Video NVIDIA GeForce RTX 3050 Laptop GPU 4GB GDDR6, LAN GbE (RJ-45), WLAN Wi-Fi 6E (802.11ax) 2x2 + Bluetooth 5.2, Audio HD / Parlantes (2-Speakers) Dolby Atmos+ Microfono incorporados, Se incluye Camara Web FHD externa 1080@60FPS, Bateria 56WHrs / 4S1P / 4-cell Li-ion, Adaptador de poder ø6.0 / 200W AC Adapter / Output: 20V DC, 10A / Input: 100~240V AC, 50/60Hz universal, Color Eclipse Gray (Gris).Incluye Backpack (Mochila) / Mouse ROG Impact Gaming / Camara Externa FHD 1080P@60FPS Sistema Operativo Windows 11 Home, 64-bits en español.", "Incluye impuesto País y percepción AFIP"); 


//Creamos el array de los productos
let products = [product1, product2, product3, product4, product5, product6];