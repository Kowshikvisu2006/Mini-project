/* Illustrations, product photo helper and sample catalogue */
export const SH = {
  tshirt:(c,a)=>`<path d="M62 36 L88 28 Q100 44 112 28 L138 36 L172 66 L150 90 L138 78 L138 168 L62 168 L62 78 L50 90 L28 66 Z" fill="${c}"/><path d="M88 28 Q100 44 112 28 L108 24 Q100 34 92 24 Z" fill="${a}"/><circle cx="100" cy="112" r="16" fill="${a}"/>`,
  kurta:(c,a)=>`<path d="M68 26 Q100 46 132 26 L168 58 L150 84 L138 74 L144 182 L56 182 L62 74 L50 84 L32 58 Z" fill="${c}"/><path d="M86 28 Q100 46 114 28" fill="none" stroke="${a}" stroke-width="3"/><path d="M100 44 V112" stroke="${a}" stroke-width="3"/><circle cx="100" cy="62" r="3" fill="${a}"/><circle cx="100" cy="80" r="3" fill="${a}"/><circle cx="100" cy="98" r="3" fill="${a}"/><path d="M60 160 H140" stroke="${a}" stroke-width="4" stroke-dasharray="2 6"/>`,
  saree:(c,a)=>`<rect x="30" y="48" width="140" height="116" rx="6" fill="${c}"/><path d="M118 62 L170 62 L170 150 L98 150 Z" fill="${a}" opacity=".35"/><rect x="30" y="48" width="140" height="14" fill="${a}"/><rect x="30" y="150" width="140" height="14" fill="${a}"/><g fill="${a}"><circle cx="54" cy="90" r="5"/><circle cx="78" cy="112" r="5"/><circle cx="54" cy="134" r="5"/><circle cx="102" cy="90" r="5"/><circle cx="102" cy="134" r="5"/></g><path d="M118 62 L98 150" stroke="${a}" stroke-width="3"/>`,
  sneaker:(c,a)=>`<path d="M22 138 L22 104 Q58 100 78 72 L98 82 Q118 102 158 108 Q184 114 184 134 L184 148 L22 148 Z" fill="${c}"/><rect x="18" y="140" width="170" height="18" rx="9" fill="#fff" stroke="#c9d1dc"/><path d="M84 80 L96 92 M96 90 L108 100 M110 100 L120 108" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M48 130 Q90 118 134 128" stroke="${a}" stroke-width="7" fill="none" stroke-linecap="round"/>`,
  phone:(c,a)=>`<rect x="62" y="20" width="76" height="156" rx="14" fill="#1c2430"/><rect x="68" y="28" width="64" height="140" rx="8" fill="${c}"/><circle cx="100" cy="37" r="3" fill="#1c2430"/><circle cx="100" cy="106" r="28" fill="${a}" opacity=".7"/><rect x="78" y="52" width="44" height="7" rx="3.500" fill="#fff" opacity=".85"/><rect x="82" y="150" width="36" height="5" rx="2.500" fill="#fff" opacity=".7"/>`,
  laptop:(c,a)=>`<rect x="40" y="40" width="120" height="84" rx="6" fill="#1c2430"/><rect x="46" y="46" width="108" height="72" rx="3" fill="${c}"/><rect x="56" y="58" width="52" height="6" rx="3" fill="${a}"/><rect x="56" y="72" width="80" height="4" rx="2" fill="#fff" opacity=".6"/><rect x="56" y="82" width="64" height="4" rx="2" fill="#fff" opacity=".6"/><path d="M22 130 H178 L168 150 H32 Z" fill="#aab3c0"/><rect x="84" y="134" width="32" height="5" rx="2.500" fill="#8993a1"/>`,
  headphones:(c,a)=>`<path d="M44 112 V98 A56 56 0 0 1 156 98 V112" fill="none" stroke="${c}" stroke-width="10" stroke-linecap="round"/><rect x="30" y="104" width="30" height="56" rx="13" fill="${c}"/><rect x="140" y="104" width="30" height="56" rx="13" fill="${c}"/><rect x="37" y="114" width="12" height="36" rx="6" fill="${a}"/><rect x="151" y="114" width="12" height="36" rx="6" fill="${a}"/>`,
  watch:(c,a)=>`<rect x="78" y="12" width="44" height="176" rx="14" fill="${c}"/><circle cx="100" cy="100" r="46" fill="#1c2430"/><circle cx="100" cy="100" r="38" fill="#f4f7fb"/><path d="M100 100 V72 M100 100 L120 110" stroke="#1c2430" stroke-width="4" stroke-linecap="round"/><circle cx="100" cy="100" r="5" fill="${a}"/><rect x="144" y="92" width="6" height="16" rx="3" fill="#1c2430"/>`,
  bag:(c,a)=>`<path d="M70 54 Q70 20 100 20 Q130 20 130 54" fill="none" stroke="${a}" stroke-width="8"/><rect x="46" y="44" width="108" height="134" rx="30" fill="${c}"/><rect x="62" y="110" width="76" height="48" rx="12" fill="${a}"/><path d="M62 82 H138" stroke="${a}" stroke-width="4"/><rect x="92" y="120" width="16" height="6" rx="3" fill="${c}"/>`,
  teddy:(c,a)=>`<circle cx="62" cy="48" r="16" fill="${c}"/><circle cx="138" cy="48" r="16" fill="${c}"/><circle cx="62" cy="48" r="8" fill="${a}"/><circle cx="138" cy="48" r="8" fill="${a}"/><ellipse cx="100" cy="146" rx="40" ry="38" fill="${c}"/><ellipse cx="100" cy="150" rx="24" ry="26" fill="${a}"/><ellipse cx="54" cy="128" rx="12" ry="24" fill="${c}" transform="rotate(25 54 128)"/><ellipse cx="146" cy="128" rx="12" ry="24" fill="${c}" transform="rotate(-25 146 128)"/><ellipse cx="76" cy="182" rx="16" ry="9" fill="${c}"/><ellipse cx="124" cy="182" rx="16" ry="9" fill="${c}"/><circle cx="100" cy="70" r="38" fill="${c}"/><ellipse cx="100" cy="82" rx="16" ry="12" fill="${a}"/><ellipse cx="100" cy="77" rx="6" ry="4" fill="#3a2a22"/><circle cx="86" cy="62" r="4" fill="#3a2a22"/><circle cx="114" cy="62" r="4" fill="#3a2a22"/><path d="M86 112 L114 112 L86 126 L114 126 Z" fill="#e53935"/>`,
  car:(c,a)=>`<path d="M22 122 V102 Q22 94 32 92 L62 88 L82 60 Q86 56 92 56 H128 Q134 56 138 60 L158 88 L178 94 Q188 96 188 106 V122 Z" fill="${c}"/><path d="M72 88 L88 66 H100 V88 Z M106 88 V66 H126 L142 88 Z" fill="#cfe8ff"/><rect x="22" y="104" width="166" height="6" fill="${a}"/><path d="M160 90 L176 38" stroke="#555" stroke-width="3"/><circle cx="176" cy="38" r="5" fill="${a}"/><circle cx="58" cy="124" r="20" fill="#1c2430"/><circle cx="58" cy="124" r="9" fill="#aab3c0"/><circle cx="152" cy="124" r="20" fill="#1c2430"/><circle cx="152" cy="124" r="9" fill="#aab3c0"/>`,
  blocks:(c,a)=>`<rect x="38" y="112" width="58" height="58" rx="6" fill="${c}"/><rect x="104" y="112" width="58" height="58" rx="6" fill="${a}"/><rect x="71" y="52" width="58" height="58" rx="6" fill="#43a047"/><g font-family="Rubik,sans-serif" font-size="34" font-weight="700" fill="#fff" text-anchor="middle"><text x="67" y="152">A</text><text x="133" y="152">B</text><text x="100" y="92">C</text></g>`,
  book:(c,a)=>`<rect x="52" y="22" width="102" height="152" rx="6" fill="${c}"/><rect x="52" y="22" width="12" height="152" rx="4" fill="${a}"/><rect x="154" y="28" width="6" height="140" rx="2" fill="#f1ece0"/><rect x="76" y="44" width="66" height="10" rx="3" fill="#fff" opacity=".92"/><rect x="76" y="62" width="48" height="6" rx="3" fill="#fff" opacity=".7"/><circle cx="108" cy="118" r="22" fill="${a}" opacity=".85"/>`,
  bottle:(c,a)=>`<rect x="78" y="12" width="44" height="22" rx="6" fill="${a}"/><rect x="86" y="34" width="28" height="12" fill="#aab3c0"/><rect x="64" y="46" width="72" height="134" rx="20" fill="${c}"/><rect x="64" y="92" width="72" height="42" fill="${a}" opacity=".9"/><rect x="74" y="56" width="8" height="112" rx="4" fill="#fff" opacity=".25"/>`,
  bat:(c,a)=>`<g transform="rotate(35 100 100)"><rect x="92" y="8" width="16" height="52" rx="6" fill="${a}"/><rect x="82" y="56" width="36" height="122" rx="9" fill="${c}"/><path d="M100 62 V170" stroke="#00000022" stroke-width="2"/></g><circle cx="48" cy="150" r="18" fill="#c62828"/><path d="M36 142 Q48 150 36 160 M60 142 Q48 150 60 160" stroke="#fff" stroke-width="2" fill="none"/>`,
  mixer:(c,a)=>`<rect x="58" y="120" width="84" height="58" rx="10" fill="${c}"/><circle cx="100" cy="150" r="11" fill="${a}"/><path d="M66 30 H134 L126 120 H74 Z" fill="#dbe7f3" stroke="#aab3c0" stroke-width="2"/><rect x="62" y="20" width="76" height="14" rx="5" fill="${a}"/><path d="M134 46 Q162 56 130 94" fill="none" stroke="${c}" stroke-width="8"/><path d="M84 100 L116 100" stroke="#8993a1" stroke-width="4" stroke-linecap="round"/>`,
  glasses:(c,a)=>`<circle cx="64" cy="104" r="30" fill="${a}" fill-opacity=".4" stroke="${c}" stroke-width="7"/><circle cx="136" cy="104" r="30" fill="${a}" fill-opacity=".4" stroke="${c}" stroke-width="7"/><path d="M94 100 Q100 92 106 100" stroke="${c}" stroke-width="6" fill="none"/><path d="M34 100 L16 88 M166 100 L184 88" stroke="${c}" stroke-width="6" stroke-linecap="round"/>`,
  bpmon:(c,a)=>`<rect x="34" y="48" width="132" height="98" rx="14" fill="${c}" stroke="#c9d1dc" stroke-width="2"/><rect x="48" y="62" width="68" height="50" rx="6" fill="#d5ecd9"/><text x="82" y="94" font-family="Rubik,sans-serif" font-size="20" font-weight="700" fill="#1c2430" text-anchor="middle">120/80</text><circle cx="142" cy="88" r="14" fill="${a}"/><path d="M100 146 Q100 176 66 170" stroke="#555" stroke-width="5" fill="none"/><rect x="24" y="158" width="64" height="26" rx="11" fill="${a}"/>`,
  crayons:(c,a)=>['#e53935','#fb8c00','#fdd835','#43a047','#1e88e5','#8e24aa'].map((k,i)=>`<rect x="${46+i*18}" y="40" width="14" height="70" fill="${k}"/><path d="M${46+i*18} 40 L${53+i*18} 24 L${60+i*18} 40 Z" fill="${k}"/>`).join('')+`<rect x="36" y="96" width="128" height="74" rx="8" fill="${c}"/><text x="100" y="146" font-family="Rubik,sans-serif" font-size="30" font-weight="700" fill="${a}" text-anchor="middle">48</text>`,
  jar:(c,a)=>`<rect x="54" y="20" width="92" height="28" rx="8" fill="${a}"/><rect x="46" y="46" width="108" height="134" rx="14" fill="${c}"/><rect x="46" y="84" width="108" height="62" fill="#fff" opacity=".92"/><circle cx="100" cy="115" r="19" fill="${a}"/>`,
  perfume:(c,a)=>`<rect x="86" y="12" width="28" height="32" rx="4" fill="${a}"/><rect x="94" y="44" width="12" height="14" fill="#aab3c0"/><rect x="56" y="58" width="88" height="118" rx="16" fill="${c}" fill-opacity=".85" stroke="${a}" stroke-width="3"/><rect x="72" y="104" width="56" height="30" rx="4" fill="#fff" opacity=".88"/>`,
  mat:(c,a)=>`<rect x="42" y="66" width="122" height="78" rx="6" fill="${c}"/><rect x="104" y="62" width="12" height="86" fill="${a}"/><ellipse cx="42" cy="105" rx="24" ry="39" fill="${a}"/><ellipse cx="42" cy="105" rx="15" ry="26" fill="${c}"/><ellipse cx="42" cy="105" rx="6" ry="12" fill="${a}"/>`,
  cooker:(c,a)=>`<rect x="52" y="90" width="96" height="76" rx="8" fill="${c}"/><path d="M46 92 Q100 40 154 92 Z" fill="${a}"/><rect x="94" y="46" width="12" height="14" rx="3" fill="#333"/><rect x="18" y="108" width="36" height="12" rx="6" fill="#333"/><rect x="146" y="108" width="36" height="12" rx="6" fill="#333"/><rect x="64" y="100" width="8" height="58" rx="4" fill="#fff" opacity=".35"/>`,
  stick:(c,a)=>`<path d="M72 44 Q72 16 104 16 Q136 16 136 44" fill="none" stroke="${a}" stroke-width="12" stroke-linecap="round"/><rect x="130" y="40" width="10" height="132" rx="4" fill="${c}"/><rect x="127" y="172" width="16" height="12" rx="3" fill="#333"/><rect x="128" y="90" width="14" height="6" fill="#455a64"/>`
};
const svgCache = {};
const FALLBACK = {};
/* Search keyword for each product photo. To use your own photo, put a URL in IMG below, e.g. IMG.p1 = 'images/tshirt.jpg' */
const KW = {p1:'tshirt',p2:'teddybear',p3:'toycar',p4:'toyblocks',p5:'storybook',p6:'crayons',p7:'schoolbag',p8:'waterbottle',p9:'sneakers',p10:'smartphone',p11:'headphones',p12:'cricketbat',p13:'tshirt',p14:'backpack',p15:'mathematics,book',p16:'smartwatch',p17:'laptop',p18:'saree',p19:'kurta',p20:'blender',p21:'sunglasses',p22:'perfume',p23:'yogamat',p24:'cookware',p25:'bloodpressure',p26:'eyeglasses',p27:'walkingstick',p28:'book',p29:'protein',p30:'kurta'};
const IMG = {
  p1: '/images/tshirt.webp',
  p2: '/images/teddy.webp',
  p3: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80',
  p4: '/images/letter-blocks.webp',
  p5: '/images/panchatantra.webp',
  p6: '/images/crayons.webp',
  p7: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
  p8: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
  p9: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
  p10: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
  p11: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
  p12: '/images/cricket-bat.webp',
  p13: '/images/graphic-shirt.webp',
  p14: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80',
  p15: '/images/jee-book.webp',
  p16: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
  p17: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
  p18: '/images/saree.avif',
  p19: '/images/shirt-product.webp',
  p20: '/images/mixer-product.jpg',
  p21: '/images/sunglasses.webp',
  p22: '/images/beauty-makeup.webp',
  p23: '/images/yoga-mat.webp',
  p24: '/images/cooker-product.jpg',
  p25: '/images/bpmonitor.webp',
  p26: '/images/reading-glasses.webp',
  p27: '/images/walking-stick.webp',
  p28: '/images/bhagavad-gita.webp',
  p29: '/images/ensure-high-protein-milk-chocolate-440-x-4251.png',
  p30: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
  p31: '/images/perfume-new.jpg',
  p32: '/images/kadai-product.jpg'
};
function photoUrl(p){
  if(IMG[p.id]) return IMG[p.id];
  const defaults = {
    tshirt: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
    teddy: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=900&q=80',
    car: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=900&q=80',
    blocks: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80',
    book: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80',
    bottle: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80',
    sneaker: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
    phone: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
    headphones: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80',
    watch: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
    laptop: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80',
    bag: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
    perfume: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=900&q=80',
    mat: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80',
    cooker: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    bpmon: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
    glasses: 'https://images.unsplash.com/photo-1577803947579-9f90f4d6b353?auto=format&fit=crop&w=900&q=80',
    kurta: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    saree: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80'
  };
  return defaults[p.shape] || 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80';
}
window.__fb = function(el,id){ el.onerror = null; el.outerHTML = FALLBACK[id] || ''; };
export function svgFor(p){
  if(!svgCache[p.id]){
    const label = p.name.replace(/"/g,'');
    FALLBACK[p.id] = '<svg viewBox="0 0 200 200" role="img" aria-label="'+label+'" xmlns="http://www.w3.org/2000/svg"><ellipse cx="100" cy="188" rx="58" ry="6" fill="#000" opacity=".08"/>'+SH[p.shape](p.c,p.a)+'</svg>';
    svgCache[p.id] = '<img src="'+photoUrl(p)+'" alt="'+label+'" loading="lazy" style="object-fit:cover; width:100%; height:100%;" onerror="window.__fb(this,\''+p.id+'\')">';
  }
  return svgCache[p.id];
}

/* ---------- sample catalogue (fictional brands, illustrative INR prices) ---------- */
const P=(id,name,brand,cat,shape,c,a,price,mrp,rating,reviews,desc)=>({id,name,brand,cat,shape,c,a,price,mrp,rating,reviews,desc});
export const PRODUCTS=[
  P('p32','Cast Iron Kadai with Glass Lid','KitchenPro','Home & Kitchen','cooker','#1f1f1f','#dfe6eb',2000,2999,4.4,7310,'Heavy-duty cast iron kadai with a tempered glass lid for even cooking and easy monitoring.'),
  P('p31','Blue Ocean Perfume, 100 ml','Blue Aura','Beauty','perfume','#1e88e5','#f5f7ff',1499,2499,4.4,5120,'Refreshing marine fragrance with a cool citrus burst and a fresh aquatic finish.'),
  P('p1','Cotton T-Shirt, Pack of 2','Bubbly','Fashion','tshirt','#ff7043','#ffd54f',399,799,4.2,8421,'Soft combed cotton that stays comfortable all day. Machine washable and colour-fast.'),
  P('p2','Soft Teddy Bear, 60 cm','CuddleCo','Toys & Baby','teddy','#c68642','#f3d9b1',549,1199,4.5,12940,'Plush toy with safe, non-toxic stuffing. Surface washable.'),
  P('p3','Remote Control Racing Car','ZoomBox','Toys & Baby','car','#e53935','#ffd600',1299,2499,4.1,5310,'Rechargeable 2.4 GHz remote car with shock-absorbing wheels.'),
  P('p4','Wooden Alphabet Blocks, 26 pcs','WoodWorks','Toys & Baby','blocks','#f4511e','#1e88e5',449,899,4.4,3902,'Smooth neem-wood blocks with non-toxic paint. Helps early letter recognition.'),
  P('p5','Panchatantra Stories, Set of 5','StoryTree','Books','book','#00897b','#ffb300',299,599,4.6,7788,'Classic illustrated tales with simple language and moral lessons.'),
  P('p6','Wax Crayons, 48 Shades','ColourPop','Toys & Baby','crayons','#1e88e5','#ffd600',189,320,4.3,15210,'Smooth, non-toxic crayons that blend well and wash off easily.'),
  P('p7','School Backpack, 18 L','Bubbly','Fashion','bag','#5e35b1','#ffca28',699,1499,4.3,9120,'Padded straps, water-resistant fabric and room for books and a lunch box.'),
  P('p8','Insulated Steel Bottle, 500 ml','SipSmart','Home & Kitchen','bottle','#26a69a','#ff7043',349,699,4.4,6633,'Double-wall steel keeps water cold for 12 hours. Leak-proof lid.'),
  P('p9','Running Sneakers','StrideX','Fashion','sneaker','#1e88e5','#ffeb3b',1799,3999,4.2,21874,'Light mesh upper with cushioned sole for daily runs and college wear.'),
  P('p10','Smartphone 5G, 8 GB + 128 GB','Nova','Mobiles & Tech','phone','#1565c0','#ffca28',14999,19999,4.4,40233,'6.6-inch 120 Hz display, 50 MP camera and a 5000 mAh battery.'),
  P('p11','Bluetooth Wireless Headphones','BassBeat','Mobiles & Tech','headphones','#37474f','#ff5252',1299,3499,4.1,30211,'Deep bass, 40-hour battery and a built-in mic for calls.'),
  P('p12','Cricket Bat, Kashmir Willow','SixerPro','Sports','bat','#e0b878','#c62828',1499,2800,4.2,6402,'Full-size bat with a thick edge and a comfortable rubber grip.'),
  P('p13','Graphic Oversized T-Shirt','UrbanLoop','Fashion','tshirt','#455a64','#ffeb3b',599,1299,4.1,11780,'Drop-shoulder fit in heavy 220 GSM cotton.'),
  P('p14','Laptop Backpack, 30 L','Trekmate','Fashion','bag','#263238','#ff7043',899,2199,4.3,18230,'Fits up to 15.6-inch laptops. USB charging port and rain cover.'),
  P('p15','JEE Main Mathematics Practice Book','ExamEdge','Books','book','#3949ab','#ffd54f',549,850,4.5,4120,'Chapter-wise problems with solutions and previous-year questions.'),
  P('p16','Fitness Smartwatch, AMOLED','PulseFit','Mobiles & Tech','watch','#ec407a','#00bfa5',1999,5999,4.2,25640,'Heart-rate, sleep and SpO2 tracking with 7-day battery life.'),
  P('p17','Business Laptop 15.6-inch, i5, 16 GB, 512 GB SSD','CoreBook','Mobiles & Tech','laptop','#42a5f5','#fff59d',52990,68990,4.4,9344,'Thin and light with a backlit keyboard and full-HD anti-glare screen.'),
  P('p18','Woven Silk Saree with Zari Border','Kanchi Weaves','Fashion','saree','#c2185b','#ffc107',3499,8999,4.3,6120,'Rich silk blend with a traditional zari border and matching blouse piece.'),
  P('p19','Men’s Cotton Kurta','Ethnic Thread','Fashion','kurta','#e8d9b5','#8d6e63',799,1999,4.2,14310,'Breathable straight-fit kurta, ideal for festivals and daily wear.'),
  P('p20','Mixer Grinder, 750 W, 3 Jars','KitchenKing','Home & Kitchen','mixer','#c62828','#ffd600',2799,5499,4.3,33190,'Powerful motor with wet, dry and chutney jars and a 2-year warranty.'),
  P('p21','Aviator Sunglasses, UV400','ShadeLab','Fashion','glasses','#263238','#ffb300',899,2499,4.0,9870,'Lightweight metal frame with polarised, UV400 lenses.'),
  P('p22','Eau de Parfum, 100 ml','Aroma Rani','Beauty','perfume','#7e57c2','#ffca28',1099,2499,4.3,7640,'Long-lasting woody-floral fragrance in a glass bottle.'),
  P('p23','Yoga Mat, 6 mm, Anti-slip','FlexFit','Sports','mat','#26a69a','#ff7043',499,1299,4.2,12480,'Cushioned, non-slip mat with a carry strap.'),
  P('p24','Stainless Steel Pressure Cooker, 5 L','KitchenKing','Home & Kitchen','cooker','#b0bec5','#e53935',1699,2999,4.4,28750,'Induction-friendly base with a safety valve and cool-touch handles.'),
  P('p25','Digital BP Monitor, Upper Arm','CareSure','Health','bpmon','#eceff1','#43a047',1399,2999,4.3,18560,'Large display, irregular heartbeat alert and memory for 90 readings.'),
  P('p26','Reading Glasses, +1.5','ClearView','Health','glasses','#8d6e63','#90caf9',499,999,4.1,5420,'Lightweight frame with anti-glare lenses for comfortable reading.'),
  P('p27','Adjustable Walking Stick','SteadyStep','Health','stick','#78909c','#6d4c41',799,1499,4.3,4010,'Height-adjustable aluminium stick with a non-slip rubber tip.'),
  P('p28','Bhagavad Gita, Hindi–English','Dharma Books','Books','book','#e65100','#ffd54f',249,450,4.8,22340,'Clear print with Sanskrit verses, Hindi and English meanings.'),
  P('p29','Nutrition Drink for 50+, 400 g','VitaCare','Health','jar','#6d4c41','#ff8f00',749,1199,4.2,8830,'Protein, calcium and vitamin D in a chocolate flavour. Sugar-free option.'),
  P('p30','Kurta Pyjama Set, Cotton','Ethnic Thread','Fashion','kurta','#cfd8dc','#455a64',899,1799,4.1,5290,'Soft, easy-fit cotton set that is comfortable for all-day wear.')
];

export const CATS=[
  {n:'All',s:'bag',c:'#2874f0',a:'#ffe11b'},{n:'Fashion',s:'tshirt',c:'#ff7043',a:'#ffd54f'},
  {n:'Mobiles & Tech',s:'phone',c:'#1565c0',a:'#ffca28'},{n:'Toys & Baby',s:'teddy',c:'#c68642',a:'#f3d9b1'},
  {n:'Books',s:'book',c:'#00897b',a:'#ffb300'},{n:'Home & Kitchen',s:'mixer',c:'#c62828',a:'#ffd600'},
  {n:'Beauty',s:'perfume',c:'#7e57c2',a:'#ffca28'},{n:'Sports',s:'bat',c:'#e0b878',a:'#c62828'},
  {n:'Health',s:'bpmon',c:'#eceff1',a:'#43a047'}
];
