import { useState } from "react";
import { motion } from "motion/react";

const symbolColorMenus = [
  {
    nameIdn: "putih",
    nameEng: "white",
    hex: "#ffffff",
    bgHex: "bg-[#ffffff] text-gray-950",
    rgb: "(255, 255, 255)",
    sifat: "Bersih, murni, sederhana.",
    psikologi:
      "Putih sering dikaitkan dengan kesucian, kesederhanaan, dan kepolosan. Ini juga bisa memberikan kesan ruang yang terbuka dan bersih.",
    penggunaan:
      "Digunakan untuk memberikan kesan bersih, terang, dan luas, sering digunakan dalam desain minimalis atau medis.",
  },
  {
    nameIdn: "hitam",
    nameEng: "black",
    hex: "#000000",
    bgHex: "bg-[#000000] text-white",
    rgb: "(0, 0, 0)",
    sifat: "Elegan, kuat, misterius.",
    psikologi:
      "Hitam sering dikaitkan dengan kekuatan, keanggunan, dan keberanian. Ini juga bisa memberikan kesan misteri dan serius.",
    penggunaan:
      "Cocok untuk menciptakan kontras yang kuat atau untuk memberikan kesan elegan dan eksklusif, sering digunakan dalam mode atau desain formal.",
  },
  {
    nameIdn: "merah",
    nameEng: "red",
    hex: "#ff0000",
    bgHex: "bg-[#ff0000]",
    rgb: "(255, 0, 0)",
    sifat: "Berani, energik, menarik perhatian.",
    psikologi:
      "Merah sering kali dikaitkan dengan keberanian, kemarahan, dan percaya diri. Ini juga dapat memicu energi dan aksi.",
    penggunaan: "Digunakan untuk menarik perhatian, menyatakan keberanian, atau menunjukkan urgensi.",
  },
  {
    nameIdn: "hijau",
    nameEng: "green",
    hex: "#00ff00",
    bgHex: "bg-[#00ff00]",
    rgb: "(0, 255, 0)",
    sifat: "Segar, harmonis, sehat.",
    psikologi:
      "Hijau sering dikaitkan dengan kedamaian, keseimbangan, dan pertumbuhan. Ini dapat memberikan rasa kesehatan dan harmoni.",
    penggunaan:
      "Cocok untuk menyampaikan pertumbuhan, kesehatan, atau keberlanjutan, sering digunakan dalam industri medis atau produk organik.",
  },
  {
    nameIdn: "biru",
    nameEng: "blue",
    hex: "#0000ff",
    bgHex: "bg-[#0000ff]",
    rgb: "(0, 0, 255)",
    sifat: "Tenang, stabil, dapat diandalkan.",
    psikologi:
      "Biru sering dikaitkan dengan ketenangan, kepercayaan, dan keandalan. Ini bisa memberikan rasa damai dan kontrol.",
    penggunaan:
      "Cocok untuk mengekspresikan kepercayaan, ketenangan, atau stabilitas, sering digunakan dalam desain kantor atau medis.",
  },
  {
    nameIdn: "kuning",
    nameEng: "yellow",
    hex: "#ffff00",
    bgHex: "bg-[#ffff00]",
    rgb: "(255, 255, 0)",
    sifat: "Ceria, optimis, memikat.",
    psikologi:
      "Kuning sering dikaitkan dengan keceriaan, optimisme, dan kreativitas. Ini bisa meningkatkan suasana hati dan semangat.",
    penggunaan:
      "Digunakan untuk menarik perhatian atau menunjukkan keceriaan, sering digunakan dalam branding untuk produk anak-anak atau hal yang menyenangkan.",
  },
  {
    nameIdn: "abu-abu",
    nameEng: "gray",
    hex: "#808080",
    bgHex: "bg-[#808080]",
    rgb: "(128, 128, 128)",
    sifat: "Netral, praktis, stabil.",
    psikologi:
      "Abu-abu sering dikaitkan dengan netralitas, kepraktisan, dan kestabilan. Ini bisa memberikan kesan ketenangan dan profesionalisme.",
    penggunaan:
      "Digunakan sebagai warna netral untuk latar belakang atau aksen yang stabil, sering digunakan dalam desain minimalis atau bisnis.",
  },
  {
    nameIdn: "ungu",
    nameEng: "purple",
    hex: "#800080",
    bgHex: "bg-[#800080]",
    rgb: "(128, 0, 128)",
    sifat: "Royal, misterius, kreatif.",
    psikologi:
      "Ungu sering dikaitkan dengan kemewahan, kekuasaan, dan kreativitas. Ini bisa memberikan kesan misteri dan spiritualitas.",
    penggunaan:
      "Digunakan untuk menunjukkan kemewahan atau kreativitas, sering digunakan dalam industri kreatif atau desain produk mewah.",
  },
  {
    nameIdn: "oranye",
    nameEng: "orange",
    hex: "#FFA500",
    bgHex: "bg-[#FFA500]",
    rgb: "(255, 165, 0)",
    sifat: "Hangat, ramah, energik.",
    psikologi:
      "Oranye sering dikaitkan dengan kehangatan, kegembiraan, dan energi. Ini bisa memberikan kesan optimisme dan antusiasme.",
    penggunaan:
      "Cocok untuk menarik perhatian atau menunjukkan semangat, sering digunakan dalam branding atau desain untuk menambahkan kehangatan.",
  },
  {
    nameIdn: "merah muda",
    nameEng: "pink",
    hex: "#FFC0CB",
    bgHex: "bg-[#FFC0CB]",
    rgb: "(255, 192, 203)",
    sifat: "Lembut, romantis, feminin.",
    psikologi:
      "Merah muda sering dikaitkan dengan kelembutan, kasih sayang, dan romansa. Ini juga bisa memberikan rasa ketenangan dan kedamaian.",
    penggunaan:
      "Digunakan untuk menunjukkan kehangatan dan cinta, sering digunakan dalam produk yang ditargetkan untuk perempuan atau anak-anak.",
  },
  {
    nameIdn: "coklat",
    nameEng: "brown",
    hex: "#A52A2A",
    bgHex: "bg-[#A52A2A]",
    rgb: "(165, 42, 42)",
    sifat: "Hangat, stabil, natural.",
    psikologi:
      "Coklat sering dikaitkan dengan stabilitas, keandalan, dan kealamian. Ini bisa memberikan kesan hangat dan nyaman.",
    penggunaan:
      "Cocok untuk desain yang ingin menekankan kestabilan atau kehangatan, sering digunakan dalam desain interior atau produk makanan.",
  },
  {
    nameIdn: "emas",
    nameEng: "gold",
    hex: "#FFD700",
    bgHex: "bg-[#FFD700]",
    rgb: "(255, 215, 0)",
    sifat: "Mewah, berharga, sukses.",
    psikologi:
      "Emas sering dikaitkan dengan kemewahan, kekayaan, dan prestise. Ini bisa memberikan kesan kemewahan dan eksklusivitas.",
    penggunaan:
      "Digunakan untuk menunjukkan kemewahan dan keberhasilan, sering digunakan dalam desain yang bertujuan untuk terlihat eksklusif atau mewah.",
  },
  {
    nameIdn: "perak",
    nameEng: "silver",
    hex: "#C0C0C0",
    bgHex: "bg-[#C0C0C0]",
    rgb: "(192, 192, 192)",
    sifat: "Modern, canggih, prestisius.",
    psikologi:
      "Perak sering dikaitkan dengan inovasi, modernitas, dan kecanggihan. Ini bisa memberikan kesan kemajuan dan kualitas tinggi.",
    penggunaan:
      "Cocok untuk desain yang ingin menonjolkan kemodernan dan teknologi, sering digunakan dalam industri elektronik atau produk mewah.",
  },
  {
    nameIdn: "pirus",
    nameEng: "turquoise",
    hex: "#40E0D0",
    bgHex: "bg-[#40E0D0]",
    rgb: "(64, 224, 208)",
    sifat: "Menyegarkan, seimbang, tenang.",
    psikologi:
      "Turquoise sering dikaitkan dengan ketenangan, keseimbangan, dan penyembuhan. Ini bisa memberikan rasa ketenangan dan stabilitas.",
    penggunaan:
      "Digunakan untuk menunjukkan kesegaran dan ketenangan, sering digunakan dalam produk kesehatan atau spa.",
  },
  {
    nameIdn: "magenta",
    nameEng: "magenta",
    hex: "#FF00FF",
    bgHex: "bg-[#FF00FF]",
    rgb: "(255, 0, 255)",
    sifat: "Kreatif, berani, dinamis.",
    psikologi:
      "Magenta sering dikaitkan dengan imajinasi, inovasi, dan perubahan. Ini bisa memberikan kesan dinamis dan energik.",
    penggunaan:
      "Cocok untuk desain yang ingin menonjolkan kreativitas dan perubahan, sering digunakan dalam industri kreatif atau iklan.",
  },
  {
    nameIdn: "lavender",
    nameEng: "lavender",
    hex: "#E6E6FA",
    bgHex: "bg-[#E6E6FA]",
    rgb: "(230, 230, 250)",
    sifat: "Lembut, menenangkan, feminin.",
    psikologi:
      "Lavender sering dikaitkan dengan ketenangan, kelembutan, dan relaksasi. Ini bisa memberikan rasa tenang dan damai.",
    penggunaan:
      "Digunakan untuk menciptakan suasana yang menenangkan dan relaksasi, sering digunakan dalam produk kecantikan dan kesehatan.",
  },
  {
    nameIdn: "persik",
    nameEng: "peach",
    hex: "#FFDAB9",
    bgHex: "bg-[#FFDAB9]",
    rgb: "(255, 218, 185)",
    sifat: "Hangat, ramah, nyaman.",
    psikologi:
      "Warna persik sering dikaitkan dengan kehangatan, keramahan, dan kenyamanan. Ini bisa memberikan rasa aman dan nyaman.",
    penggunaan: "Cocok untuk menciptakan suasana hangat dan ramah, sering digunakan dalam desain interior dan pakaian.",
  },
  {
    nameIdn: "mint",
    nameEng: "mint",
    hex: "#BDFCC9",
    bgHex: "bg-[#BDFCC9]",
    rgb: "(189, 252, 201)",
    sifat: "Segar, bersih, menenangkan.",
    psikologi:
      "Warna mint sering dikaitkan dengan kesegaran, kebersihan, dan ketenangan. Ini bisa memberikan rasa tenang dan menyegarkan.",
    penggunaan:
      "Digunakan untuk menciptakan suasana segar dan menenangkan, sering digunakan dalam produk kecantikan dan kesehatan.",
  },
  {
    nameIdn: "biru tua",
    nameEng: "navy",
    hex: "#000080",
    bgHex: "bg-[#000080]",
    rgb: "(0, 0, 128)",
    sifat: "Kuat, dapat diandalkan, konservatif.",
    psikologi:
      "Biru tua sering dikaitkan dengan kekuatan, keandalan, dan keprofesionalan. Ini bisa memberikan kesan serius dan stabil.",
    penggunaan:
      "Cocok untuk menciptakan suasana yang profesional dan dapat diandalkan, sering digunakan dalam seragam dan logo perusahaan.",
  },
  {
    nameIdn: "karang",
    nameEng: "coral",
    hex: "#FF7F50",
    bgHex: "bg-[#FF7F50]",
    rgb: "(255, 127, 80)",
    sifat: "Bersemangat, hangat, menyenangkan.",
    psikologi:
      "Coral sering dikaitkan dengan energi, kehangatan, dan keceriaan. Ini bisa memberikan rasa kegembiraan dan semangat.",
    penggunaan:
      "Digunakan untuk menciptakan suasana yang bersemangat dan hangat, sering digunakan dalam desain fashion dan dekorasi.",
  },
  {
    nameIdn: "biru kehijauan",
    nameEng: "teal",
    hex: "#008080",
    bgHex: "bg-[#008080]",
    rgb: "(0, 128, 128)",
    sifat: "Sejuk, stabil, elegan.",
    psikologi:
      "Teal sering dikaitkan dengan ketenangan, stabilitas, dan keanggunan. Ini bisa memberikan rasa sejuk dan tenang.",
    penggunaan:
      "Cocok untuk menciptakan suasana yang tenang dan elegan, sering digunakan dalam desain interior dan branding.",
  },
  {
    nameIdn: "merah anggur",
    nameEng: "maroon",
    hex: "#800000",
    bgHex: "bg-[#800000]",
    rgb: "(128, 0, 0)",
    sifat: "Kuat, elegan, klasik.",
    psikologi:
      "Merah anggur sering dikaitkan dengan kekuatan, keanggunan, dan kemewahan. Ini bisa memberikan kesan kuat dan klasik.",
    penggunaan:
      "Digunakan untuk menciptakan suasana yang kuat dan elegan, sering digunakan dalam desain fashion dan dekorasi.",
  },
  {
    nameIdn: "hijau zaitun",
    nameEng: "olive",
    hex: "#808000",
    bgHex: "bg-[#808000]",
    rgb: "(128, 128, 0)",
    sifat: "Natural, stabil, hangat.",
    psikologi:
      "Hijau zaitun sering dikaitkan dengan alam, kestabilan, dan kehangatan. Ini bisa memberikan rasa natural dan nyaman.",
    penggunaan:
      "Cocok untuk menciptakan suasana yang natural dan stabil, sering digunakan dalam desain fashion dan produk organik.",
  },
  {
    nameIdn: "hijau kuning",
    nameEng: "chartreuse",
    hex: "#7FFF00",
    bgHex: "bg-[#7FFF00]",
    rgb: "(127, 255, 0)",
    sifat: "Energik, segar, mencolok.",
    psikologi:
      "Chartreuse sering dikaitkan dengan energi, kesegaran, dan inovasi. Ini bisa memberikan kesan mencolok dan dinamis.",
    penggunaan:
      "Digunakan untuk menciptakan suasana yang energik dan segar, sering digunakan dalam desain modern dan teknologi.",
  },
  {
    nameIdn: "indigo",
    nameEng: "indigo",
    hex: "#4B0082",
    bgHex: "bg-[#4B0082]",
    rgb: "(75, 0, 130)",
    sifat: "Misterius, spiritual, elegan.",
    psikologi:
      "Indigo sering dikaitkan dengan misteri, spiritualitas, dan introspeksi. Ini bisa memberikan kesan dalam dan misterius.",
    penggunaan:
      "Cocok untuk menciptakan suasana yang spiritual dan elegan, sering digunakan dalam desain fashion dan seni.",
  },
  {
    nameIdn: "crimson",
    nameEng: "crimson",
    hex: "#DC143C",
    bgHex: "bg-[#DC143C]",
    rgb: "(220, 20, 60)",
    sifat: "Intens, emosional, berani.",
    psikologi:
      "Crimson sering dikaitkan dengan hasrat, cinta, dan energi yang intens. Ini bisa memberikan kesan kuat dan emosional.",
    penggunaan:
      "Digunakan untuk menciptakan suasana yang intens dan emosional, sering digunakan dalam desain fashion dan seni.",
  },
  {
    nameIdn: "beige",
    nameEng: "beige",
    hex: "#F5F5DC",
    bgHex: "bg-[#F5F5DC]",
    rgb: "(245, 245, 220)",
    sifat: "Netral, hangat, tenang.",
    psikologi:
      "Beige sering dikaitkan dengan kehangatan, kesederhanaan, dan ketenangan. Ini bisa memberikan rasa tenang dan stabil.",
    penggunaan:
      "Cocok untuk menciptakan suasana yang hangat dan netral, sering digunakan dalam desain interior dan fashion.",
  },
  {
    nameIdn: "azure",
    nameEng: "azure",
    hex: "#007FFF",
    bgHex: "bg-[#007FFF]",
    rgb: "(0, 127, 255)",
    sifat: "Segar, menenangkan, cerah.",
    psikologi:
      "Azure sering dikaitkan dengan ketenangan, kebersihan, dan optimisme. Ini bisa memberikan kesan segar dan menyegarkan.",
    penggunaan:
      "Digunakan untuk menciptakan suasana yang menenangkan dan segar, sering digunakan dalam desain teknologi dan medis.",
  },
  {
    nameIdn: "ivory",
    nameEng: "ivory",
    hex: "#FFFFF0",
    bgHex: "bg-[#FFFFF0]",
    rgb: "(255, 255, 240)",
    sifat: "Elegan, lembut, klasik.",
    psikologi:
      "Ivory sering dikaitkan dengan kesucian, kelembutan, dan keanggunan. Ini bisa memberikan rasa bersih dan halus.",
    penggunaan:
      "Cocok untuk menciptakan suasana yang elegan dan lembut, sering digunakan dalam desain pernikahan dan fashion.",
  },
  {
    nameIdn: "salmon",
    nameEng: "salmon",
    hex: "#FA8072",
    bgHex: "bg-[#FA8072]",
    rgb: "(250, 128, 114)",
    sifat: "Hangat, ramah, menarik.",
    psikologi:
      "Salmon sering dikaitkan dengan kehangatan, keramahan, dan keceriaan. Ini bisa memberikan kesan menyenangkan dan ramah.",
    penggunaan:
      "Digunakan untuk menciptakan suasana yang hangat dan ramah, sering digunakan dalam desain fashion dan interior.",
  },
  {
    nameIdn: "khaki",
    nameEng: "khaki",
    hex: "#C3B091",
    bgHex: "bg-[#C3B091]",
    rgb: "(195, 176, 145)",
    sifat: "Natural, praktis, tahan lama.",
    psikologi:
      "Khaki sering dikaitkan dengan kepraktisan, kestabilan, dan kealamian. Ini bisa memberikan kesan tenang dan tahan lama.",
    penggunaan:
      "Cocok untuk menciptakan suasana yang natural dan praktis, sering digunakan dalam desain fashion dan militer.",
  },
  {
    nameIdn: "periwinkle",
    nameEng: "periwinkle",
    hex: "#CCCCFF",
    bgHex: "bg-[#CCCCFF]",
    rgb: "(204, 204, 255)",
    sifat: "Lembut, menenangkan, imajinatif.",
    psikologi:
      "Periwinkle sering dikaitkan dengan ketenangan, imajinasi, dan spiritualitas. Ini bisa memberikan rasa damai dan kreatif.",
    penggunaan:
      "Digunakan untuk menciptakan suasana yang menenangkan dan imajinatif, sering digunakan dalam desain fashion dan seni.",
  },
  {
    nameIdn: "taupe",
    nameEng: "taupe",
    hex: "#483C32",
    bgHex: "bg-[#483C32]",
    rgb: "(72, 60, 50)",
    sifat: "Netral, hangat, elegan.",
    psikologi:
      "Taupe sering dikaitkan dengan kestabilan, kehangatan, dan kesederhanaan. Ini bisa memberikan kesan tenang dan elegan.",
    penggunaan:
      "Cocok untuk menciptakan suasana yang hangat dan netral, sering digunakan dalam desain interior dan fashion.",
  },
  {
    nameIdn: "merah anggur tua",
    nameEng: "burgundy",
    hex: "#800020",
    bgHex: "bg-[#800020]",
    rgb: "(128, 0, 32)",
    sifat: "Kuat, elegan, mewah.",
    psikologi:
      "Burgundy sering dikaitkan dengan kekuatan, kemewahan, dan keanggunan. Ini bisa memberikan kesan kuat dan eksklusif.",
    penggunaan:
      "Digunakan untuk menciptakan suasana yang kuat dan mewah, sering digunakan dalam desain fashion dan interior.",
  },
  {
    nameIdn: "abu-abu gelap",
    nameEng: "slate",
    hex: "#708090",
    bgHex: "bg-[#708090]",
    rgb: "(112, 128, 144)",
    sifat: "Serius, stabil, modern.",
    psikologi:
      "Warna slate sering dikaitkan dengan ketenangan, kestabilan, dan keseriusan. Ini bisa memberikan kesan modern dan profesional.",
    penggunaan:
      "Cocok untuk desain yang ingin menekankan ketenangan dan kestabilan, sering digunakan dalam desain interior dan industri teknologi.",
  },
  {
    nameIdn: "mauve",
    nameEng: "mauve",
    hex: "#E0B0FF",
    bgHex: "bg-[#E0B0FF]",
    rgb: "(224, 176, 255)",
    sifat: "Lembut, romantis, elegan.",
    psikologi:
      "Mauve sering dikaitkan dengan kelembutan, romansa, dan keanggunan. Ini bisa memberikan kesan yang lembut dan elegan.",
    penggunaan:
      "Digunakan untuk menciptakan suasana yang romantis dan elegan, sering digunakan dalam desain interior dan produk fashion.",
  },
  {
    nameIdn: "jade hijau",
    nameEng: "jade",
    hex: "#00A86B",
    bgHex: "bg-[#00A86B]",
    rgb: "(0, 168, 107)",
    sifat: "Harmonis, alami, berenergi.",
    psikologi:
      "Warna jade sering dikaitkan dengan harmoni, alam, dan energi positif. Ini bisa memberikan kesan yang segar dan harmonis.",
    penggunaan:
      "Cocok untuk desain yang ingin menonjolkan keseimbangan dan kealamian, sering digunakan dalam desain interior dan perhiasan.",
  },
  {
    nameIdn: "biru sian",
    nameEng: "cyan",
    hex: "#00FFFF",
    bgHex: "bg-[#00FFFF]",
    rgb: "(0, 255, 255)",
    sifat: "Menyegarkan, modern, teknologi.",
    psikologi:
      "Cyan sering dikaitkan dengan kesegaran, modernitas, dan teknologi. Ini bisa memberikan kesan yang inovatif dan segar.",
    penggunaan:
      "Digunakan untuk menunjukkan kecanggihan dan teknologi, sering digunakan dalam desain digital dan produk elektronik.",
  },
  {
    nameIdn: "emas mawar",
    nameEng: "rose gold",
    hex: "#B76E79",
    bgHex: "bg-[#B76E79]",
    rgb: "(183, 110, 121)",
    sifat: "Romantis, mewah, feminin.",
    psikologi:
      "Rose gold sering dikaitkan dengan romansa, kemewahan, dan kefemininan. Ini bisa memberikan kesan yang romantis dan eksklusif.",
    penggunaan:
      "Cocok untuk desain yang ingin menekankan romansa dan kemewahan, sering digunakan dalam perhiasan dan desain interior.",
  },
  {
    nameIdn: "bata merah",
    nameEng: "brick",
    hex: "#B22222",
    bgHex: "bg-[#B22222]",
    rgb: "(178, 34, 34)",
    sifat: "Kokoh, hangat, tradisional.",
    psikologi:
      "Warna bata merah sering dikaitkan dengan kekokohan, kehangatan, dan tradisi. Ini bisa memberikan kesan yang kokoh dan hangat.",
    penggunaan:
      "Digunakan untuk menciptakan suasana yang tradisional dan kuat, sering digunakan dalam desain arsitektur dan dekorasi.",
  },
  {
    nameIdn: "kobalt biru",
    nameEng: "cobalt",
    hex: "#0047AB",
    bgHex: "bg-[#0047AB]",
    rgb: "(0, 71, 171)",
    sifat: "Intens, dramatis, kuat.",
    psikologi:
      "Warna cobalt biru sering dikaitkan dengan intensitas, drama, dan kekuatan. Ini bisa memberikan kesan yang dramatis dan kuat.",
    penggunaan: "Cocok untuk menciptakan efek dramatis dan kuat, sering digunakan dalam desain fashion dan seni.",
  },
  {
    nameIdn: "okra",
    nameEng: "ochre",
    hex: "#CC7722",
    bgHex: "bg-[#CC7722]",
    rgb: "(204, 119, 34)",
    sifat: "Hangat, alami, bumi.",
    psikologi:
      "Ochre sering dikaitkan dengan kehangatan, alam, dan kebumian. Ini bisa memberikan kesan yang hangat dan alami.",
    penggunaan:
      "Digunakan untuk menciptakan suasana yang alami dan hangat, sering digunakan dalam desain interior dan seni.",
  },
  {
    nameIdn: "kunyit",
    nameEng: "saffron",
    hex: "#F4C430",
    bgHex: "bg-[#F4C430]",
    rgb: "(244, 196, 48)",
    sifat: "Ceria, eksotis, menyala.",
    psikologi:
      "Warna saffron sering dikaitkan dengan keceriaan, eksotisme, dan kecerahan. Ini bisa memberikan kesan yang ceria dan energik.",
    penggunaan:
      "Cocok untuk menciptakan suasana yang cerah dan eksotis, sering digunakan dalam desain fashion dan kuliner.",
  },
  {
    nameIdn: "plum",
    nameEng: "plum",
    hex: "#8B008B",
    bgHex: "bg-[#8B008B]",
    rgb: "(139, 0, 139)",
    sifat: "Romantis, kaya, misterius.",
    psikologi:
      "Warna plum sering dikaitkan dengan romansa, kekayaan, dan misteri. Ini bisa memberikan kesan yang romantis dan dalam.",
    penggunaan:
      "Digunakan untuk menciptakan efek romantis dan misterius, sering digunakan dalam desain fashion dan interior.",
  },
];

interface ColorDataState {
  nameIdn: string;
  nameEng: string;
  hex: string;
  bgHex: string;
  rgb: string;
  sifat: string;
  psikologi: string;
  penggunaan: string;
}

export default function SymbolColor() {
  const [colorData, setColorData] = useState<ColorDataState>({
    nameIdn: "putih",
    nameEng: "white",
    hex: "#ffffff",
    bgHex: "bg-[#ffffff] text-gray-900",
    rgb: "(255, 255, 255)",
    sifat: "Bersih, murni, sederhana.",
    psikologi:
      "Putih sering dikaitkan dengan kesucian, kesederhanaan, dan kepolosan. Ini juga bisa memberikan kesan ruang yang terbuka dan bersih.",
    penggunaan:
      "Digunakan untuk memberikan kesan bersih, terang, dan luas, sering digunakan dalam desain minimalis atau medis.",
  });

  const [active, setActive] = useState("#ffffff");
  const [search, setSearch] = useState<string>("");

  const handleClick = (item: ColorDataState) => {
    setColorData(item);
    setActive(item.hex);
  };
  return (
    <section className="font-poppins w-full h-screen bg-gray-100 flex flex-col items-center p-3 sm:px-12 md:px-20 lg:px-48 xl:px-72 justify-center">
      <SearchColor search={search} setSearch={setSearch} />
      <div className={`${colorData.bgHex} h-[90vh] relative rounded-xl size-full flex flex-col p-1`}>
        <div className="relative h-1/2 rounded-xl bg-gray-50 flex flex-col">
          <div className="h-5/6 flex flex-col overflow-y-scroll rounded p-2 gap-[0.2rem]">
            {symbolColorMenus
              .filter(
                (c) =>
                  c.nameEng.toLowerCase().includes(search.toLowerCase()) ||
                  c.nameIdn.toLowerCase().includes(search.toLowerCase())
              )
              .map((item) => (
                <motion.button
                  key={item.hex}
                  onClick={() => handleClick(item)}
                  className={`flex justify-between px-2 capitalize items-center p-1 rounded-lg`}
                  animate={{ backgroundColor: active === `${item.hex}` ? `${item.hex}` : "#afffff" }}
                  whileHover={{ backgroundColor: `${colorData.hex}` }}
                >
                  <div className="text-left">
                    {item.nameEng} ({item.nameIdn})
                  </div>
                  <div className="flex gap-2 items-center">
                    <div className="font-mono uppercase">{item.hex}</div>
                    <div className={`w-5 rounded h-5 ${item.bgHex}`} />
                  </div>
                </motion.button>
              ))}
            <p className="text-center my-2">
              Source: ChatGPT <br /> (44 colors available)
            </p>
          </div>
          <div className={`${colorData.bgHex} h-1/6 rounded-xl m-1 gap-1 flex items-center justify-center`}>
            <span className="capitalize">{colorData.nameEng}</span>:
            <span className="font-mono uppercase">{colorData.hex}</span>
          </div>
        </div>
        <div className="h-1/2 rounded-xl bg-gray-50 flex flex-col">
          <div className={`${colorData.bgHex} capitalize h-1/6 rounded-xl m-1 flex items-center justify-center`}>
            Description {colorData.nameEng}
          </div>
          <div className={`text-gray-900 h-5/6 p-2 flex flex-col gap-2 overflow-y-scroll`}>
            <div>
              <span className="font-medium">Name</span>: {colorData?.nameEng} ({colorData?.nameIdn})
            </div>
            <div>
              <span className="font-medium">Hex</span>: <span className="font-mono uppercase">{colorData?.hex}</span>
            </div>
            <div>
              <span className="font-medium">RGB</span>: {colorData?.rgb}
            </div>
            <div>
              <span className="font-medium">Sifat</span>: {colorData?.sifat}
            </div>
            <div>
              <span className="font-medium">Psikologi</span>: {colorData?.psikologi}
            </div>
            <div>
              <span className="font-medium">Penggunaan</span>: {colorData?.penggunaan}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SearchColor({
  search,
  setSearch,
}: {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <input
      value={search}
      type="search"
      onChange={(e) => setSearch(e.target.value)}
      className="border w-full rounded-xl p-2 focus:outline-cyan-500 mb-2"
      placeholder="Search by name (eng/idn)"
    />
  );
}
