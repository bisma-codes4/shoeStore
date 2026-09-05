/* =====================================================
   DATA
===================================================== */
const PH = (tone)=>`data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='960'><rect width='800' height='960' fill='${tone}'/><g fill='none' stroke='#171410' stroke-opacity='.18' stroke-width='3'><path d='M180 560 Q 260 480 400 500 Q 560 520 620 470 Q 660 440 640 500 Q 630 560 560 580 L 200 600 Q 160 600 170 570 Z'/></g></svg>`)}`;
const IMG = {
  sneaker1:"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80&auto=format&fit=crop",
  sneaker2:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80&auto=format&fit=crop",
  sneaker3:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80&auto=format&fit=crop",
  sneaker4:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80&auto=format&fit=crop",
  sneaker5:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop",
  sneaker6:"https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80&auto=format&fit=crop",
  running1:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80&auto=format&fit=crop",
  running2:"https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&q=80&auto=format&fit=crop",
  formal1:"https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=800&q=80&auto=format&fit=crop",
  formal2:"https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=800&q=80&auto=format&fit=crop",
  boot1:"https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=800&q=80&auto=format&fit=crop",
  boot2:"https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80&auto=format&fit=crop",
  heel1:"https://images.unsplash.com/photo-1518049362265-d5b2a6467637?w=800&q=80&auto=format&fit=crop",
  heel2:"https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=800&q=80&auto=format&fit=crop",
  womensneaker:"https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&q=80&auto=format&fit=crop",
  sandal1:"https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80&auto=format&fit=crop",
  kids1:"https://images.unsplash.com/photo-1622760807800-bf0790104e26?w=800&q=80&auto=format&fit=crop",
  kids2:"https://images.unsplash.com/photo-1519415943484-9fa1873496d4?w=800&q=80&auto=format&fit=crop",
  hero:"https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=900&q=85&auto=format&fit=crop",
};
function withFallback(src,tone){ return `${src}' onerror=\"this.onerror=null;this.src='${PH(tone)}'\"`; }

const COLORS = {black:'#171410',white:'#F3F0E9',tan:'#C7A876',navy:'#233150',red:'#B5382A',green:'#3C6B4E',grey:'#8C8577'};

const PRODUCTS = [
 {id:1,name:'Field Runner Low',brand:'ARLO & FIELD',gender:'men',cat:'sneakers',type:'Sneakers',price:118,old:null,rating:4.6,reviews:212,img:IMG.sneaker1,img2:IMG.sneaker3,colors:['white','black','grey'],sizes:[7,8,9,10,11,12],oos:[11],desc:'A clean low-top sneaker built on a cushioned foam sole for everyday wear, finished in full-grain leather.',material:'Full-grain leather upper, recycled foam midsole, rubber outsole.'},
 {id:2,name:'Ridgeline Trainer',brand:'ARLO & FIELD',gender:'men',cat:'sneakers',type:'Sneakers',price:132,old:158,rating:4.8,reviews:340,img:IMG.sneaker2,img2:IMG.sneaker4,colors:['black','navy','tan'],sizes:[7,8,9,10,11,12],oos:[7],desc:'Our best-selling trainer, reinforced at the heel and toe for city miles that add up fast.',material:'Mesh and suede upper, EVA midsole, high-abrasion rubber outsole.'},
 {id:3,name:'Cobalt Street Sneaker',brand:'NORTHFOOT',gender:'men',cat:'sneakers',type:'Sneakers',price:104,old:null,rating:4.4,reviews:96,img:IMG.sneaker5,img2:IMG.sneaker6,colors:['navy','white'],sizes:[8,9,10,11,12],oos:[],desc:'A punch of colour on a classic silhouette — court-inspired and built for daily rotation.',material:'Canvas and leather trim, rubber cupsole.'},
 {id:4,name:'Heritage Oxford',brand:'ARLO & FIELD',gender:'men',cat:'formal',type:'Formal Shoes',price:189,old:null,rating:4.7,reviews:158,img:IMG.formal1,img2:IMG.formal2,colors:['black','tan'],sizes:[7,8,9,10,11,12],oos:[8],desc:'Hand-finished calfskin Oxford with a Goodyear-welted sole built to be resoled for decades.',material:'Full-grain calfskin, leather sole, Goodyear welt construction.'},
 {id:5,name:'Weston Penny Loafer',brand:'KESTREL',gender:'men',cat:'loafers',type:'Loafers',price:164,old:179,rating:4.5,reviews:88,img:IMG.formal2,img2:IMG.formal1,colors:['tan','black'],sizes:[7,8,9,10,11,12],oos:[],desc:'A penny loafer with a soft apron toe and a leather sole that breaks in beautifully.',material:'Burnished leather upper, leather sole.'},
 {id:6,name:'Summit Trail Boot',brand:'ARLO & FIELD',gender:'men',cat:'boots',type:'Boots',price:212,old:null,rating:4.9,reviews:264,img:IMG.boot1,img2:IMG.boot2,colors:['tan','black'],sizes:[7,8,9,10,11,12],oos:[12],desc:'Waterproof leather boot with a lugged outsole for trails, city sidewalks, and everything between.',material:'Waterproof full-grain leather, Vibram lug outsole.'},
 {id:7,name:'Marathon Pro Runner',brand:'NORTHFOOT',gender:'men',cat:'running',type:'Running Shoes',price:142,old:null,rating:4.6,reviews:410,img:IMG.running1,img2:IMG.running2,colors:['red','black','grey'],sizes:[7,8,9,10,11,12],oos:[],desc:'Engineered mesh upper with responsive foam for long-distance comfort, mile after mile.',material:'Engineered knit mesh, responsive foam midsole, carbon rubber outsole.'},
 {id:8,name:'Downtown Court Classic',brand:'UMBRA',gender:'men',cat:'sneakers',type:'Sneakers',price:98,old:120,rating:4.3,reviews:175,img:IMG.sneaker3,img2:IMG.sneaker1,colors:['white','green'],sizes:[8,9,10,11],oos:[9],desc:'A vulcanised court classic that only gets better with age — simple, sturdy, versatile.',material:'Canvas upper, vulcanised rubber sole.'},
 {id:9,name:'Aria Knit Sneaker',brand:'ARLO & FIELD',gender:'women',cat:'sneakers',type:'Sneakers',price:112,old:null,rating:4.7,reviews:203,img:IMG.womensneaker,img2:IMG.sneaker4,colors:['white','tan','black'],sizes:[5,6,7,8,9,10],oos:[],desc:'A sock-like knit sneaker that moves with your foot — light enough to forget you\'re wearing it.',material:'Recycled knit upper, foam midsole, rubber outsole.'},
 {id:10,name:'Meridian Block Heel',brand:'PALOMA',gender:'women',cat:'heels',type:'High Heels',price:148,old:169,rating:4.5,reviews:121,img:IMG.heel1,img2:IMG.heel2,colors:['black','red','tan'],sizes:[5,6,7,8,9,10],oos:[5],desc:'A wearable block heel with arch support built in, so a full day on your feet stays comfortable.',material:'Leather upper and lining, cushioned block heel.'},
 {id:11,name:'Salt Stiletto',brand:'PALOMA',gender:'women',cat:'heels',type:'High Heels',price:172,old:null,rating:4.4,reviews:67,img:IMG.heel2,img2:IMG.heel1,colors:['black','navy'],sizes:[5,6,7,8,9],oos:[],desc:'A sharp evening stiletto with a padded footbed that outlasts the party.',material:'Satin and leather upper, leather sole.'},
 {id:12,name:'Harbor Ankle Boot',brand:'ARLO & FIELD',gender:'women',cat:'boots',type:'Boots',price:198,old:null,rating:4.8,reviews:190,img:IMG.boot2,img2:IMG.boot1,colors:['black','tan'],sizes:[5,6,7,8,9,10],oos:[6],desc:'A city ankle boot with a stacked heel and a zip closure for an easy on-off.',material:'Leather upper, side zip, leather-covered heel.'},
 {id:13,name:'Coastal Slide Sandal',brand:'KESTREL',gender:'women',cat:'sandals',type:'Sandals',price:74,old:89,rating:4.2,reviews:143,img:IMG.sandal1,img2:IMG.sandal1,colors:['tan','white','green'],sizes:[5,6,7,8,9,10],oos:[],desc:'A minimal leather slide with a contoured footbed for warm-weather days.',material:'Leather straps, contoured EVA footbed.'},
 {id:14,name:'Pace Runner Women\'s',brand:'NORTHFOOT',gender:'women',cat:'running',type:'Running Shoes',price:138,old:null,rating:4.7,reviews:256,img:IMG.running2,img2:IMG.running1,colors:['navy','red','white'],sizes:[5,6,7,8,9,10],oos:[10],desc:'A lightweight trainer tuned for tempo runs, with a snug engineered-mesh midfoot.',material:'Engineered mesh, dual-density foam midsole.'},
 {id:15,name:'Alma Tassel Loafer',brand:'KESTREL',gender:'women',cat:'loafers',type:'Loafers',price:136,old:null,rating:4.5,reviews:74,img:IMG.formal2,img2:IMG.heel1,colors:['black','tan'],sizes:[5,6,7,8,9],oos:[],desc:'A relaxed loafer with a tasselled vamp — office-ready, weekend-easy.',material:'Suede upper, leather lining, stacked heel.'},
 {id:16,name:'Cirrus Court Sneaker',brand:'UMBRA',gender:'women',cat:'sneakers',type:'Sneakers',price:106,old:124,rating:4.6,reviews:188,img:IMG.sneaker6,img2:IMG.sneaker5,colors:['white','navy'],sizes:[5,6,7,8,9,10],oos:[],desc:'A crisp leather court sneaker with a cloud-soft insole for all-day wear.',material:'Leather upper, cushioned foam insole.'},
 {id:17,name:'Junior Trail Blazer',brand:'ARLO & FIELD',gender:'kids',cat:'sneakers',type:'Sneakers',price:58,old:null,rating:4.8,reviews:92,img:IMG.kids1,img2:IMG.kids2,colors:['red','navy','green'],sizes:[1,2,3,4,5],oos:[],desc:'A durable kids\' sneaker with a hook-and-loop strap for fast, independent dressing.',material:'Synthetic leather upper, rubber outsole, hook-and-loop closure.'},
 {id:18,name:'Little Sprinter Runner',brand:'NORTHFOOT',gender:'kids',cat:'running',type:'Running Shoes',price:62,old:72,rating:4.6,reviews:110,img:IMG.kids2,img2:IMG.kids1,colors:['navy','white','red'],sizes:[1,2,3,4,5],oos:[2],desc:'Light and flexible for the playground sprint, with reinforced toes for scuff resistance.',material:'Mesh upper, reinforced rubber toe cap.'},
 {id:19,name:'School Day Loafer Jr.',brand:'KESTREL',gender:'kids',cat:'loafers',type:'Loafers',price:54,old:null,rating:4.3,reviews:41,img:IMG.formal1,img2:IMG.kids1,colors:['black','tan'],sizes:[1,2,3,4,5],oos:[],desc:'A tidy slip-on loafer built for school mornings, with a durable non-marking sole.',material:'Synthetic leather upper, non-marking rubber sole.'},
 {id:20,name:'Puddle Jumper Boot',brand:'ARLO & FIELD',gender:'kids',cat:'boots',type:'Boots',price:66,old:null,rating:4.7,reviews:58,img:IMG.boot1,img2:IMG.kids2,colors:['navy','green','red'],sizes:[1,2,3,4,5],oos:[],desc:'A waterproof boot for muddy days, with a pull tab and easy-grip sole.',material:'Waterproof synthetic upper, textured rubber sole.'},
 {id:21,name:'Trailhead Hiker',brand:'ARLO & FIELD',gender:'men',cat:'boots',type:'Boots',price:176,old:null,rating:4.6,reviews:132,img:IMG.boot2,img2:IMG.boot1,colors:['tan','grey'],sizes:[7,8,9,10,11,12],oos:[],desc:'A mid-cut hiker with a breathable lining and grippy lugged sole for uneven ground.',material:'Suede and mesh upper, lugged rubber outsole.'},
 {id:22,name:'Downtown Slip-On',brand:'UMBRA',gender:'women',cat:'sneakers',type:'Sneakers',price:96,old:null,rating:4.4,reviews:77,img:IMG.sneaker4,img2:IMG.womensneaker,colors:['white','black'],sizes:[5,6,7,8,9,10],oos:[],desc:'A laceless slip-on for the days you\'re moving too fast to tie a bow.',material:'Stretch-knit upper, elastic gore panels.'},
 {id:23,name:'Union Formal Derby',brand:'ARLO & FIELD',gender:'men',cat:'formal',type:'Formal Shoes',price:172,old:199,rating:4.8,reviews:99,img:IMG.formal2,img2:IMG.formal1,colors:['black'],sizes:[7,8,9,10,11,12],oos:[],desc:'A sleek derby for boardrooms and black-tie alike, finished with a mirror polish.',material:'Polished calfskin, leather sole.'},
 {id:24,name:'Boardwalk Sandal',brand:'PALOMA',gender:'men',cat:'sandals',type:'Sandals',price:68,old:null,rating:4.1,reviews:54,img:IMG.sandal1,img2:IMG.sandal1,colors:['tan','black'],sizes:[7,8,9,10,11,12],oos:[],desc:'A rugged strap sandal with an adjustable fit for boat decks and beach walks.',material:'Water-resistant webbing, EVA footbed.'},
];

const REVIEWS_POOL = [
 {name:'Priya K.',rating:5,text:'True to size and unbelievably comfortable out of the box — no break-in period needed.'},
 {name:'Marcus T.',rating:4,text:'Great build quality. Runs slightly narrow so I\'d size up if you have wider feet.'},
 {name:'Elena R.',rating:5,text:'Ordered a second pair in a different colour within a week of getting these.'},
 {name:'Daniyal S.',rating:4,text:'Solid everyday shoe, holds up well in light rain, sole is grippy.'},
];

/* =====================================================
   STATE
===================================================== */
let CART = [];   // {pid,size,color,qty}
let WISH = [];   // [pid]
let COMPARE = []; // [pid] max 3
let RECENT = [];  // [pid] most recent first
let currentView='home', currentParams={};
let pdState={id:null,img:0,size:null,color:null,qty:1};
let shopFilters={gender:null,cat:null,brands:[],colors:[],sizes:[],price:1000,minRating:0,inStockOnly:false,sort:'newest',q:''};
let appliedCoupon=null;

const COUPONS = { WELCOME10:{pct:10,label:'10% off'}, SAVE20:{pct:20,label:'20% off'}, FREESHIP:{pct:0,ship:true,label:'Free shipping'} };

function money(n){return '$'+n.toFixed(2);}
function findP(id){return PRODUCTS.find(p=>p.id==id);}
function inStock(p){ return p.sizes.some(s=>!p.oos.includes(s)); }
function stockBadge(p){
  const avail=p.sizes.filter(s=>!p.oos.includes(s)).length;
  if(avail===0) return `<span class="tag" style="background:var(--ink-30)">OUT OF STOCK</span>`;
  if(avail<=2) return `<span class="tag" style="background:var(--danger)">LOW STOCK</span>`;
  return '';
}
function trackRecent(pid){
  RECENT = RECENT.filter(id=>id!==pid);
  RECENT.unshift(pid);
  if(RECENT.length>8) RECENT.pop();
}
function showToast(msg){
  const t=document.getElementById('toast');
  t.innerHTML=msg; t.classList.add('show');
  clearTimeout(window._tt); window._tt=setTimeout(()=>t.classList.remove('show'),2200);
}
function updateBadges(){
  document.getElementById('cartBadge').textContent=CART.reduce((s,c)=>s+c.qty,0);
  document.getElementById('wishBadge').textContent=WISH.length;
}
function toggleDrawer(open){document.getElementById('drawer').classList.toggle('open',open);}

function stars(rating){
  const full=Math.round(rating);
  return '★★★★★☆☆☆☆☆'.slice(5-full,10-full).padEnd(0)+''; // fallback unused
}
function starHtml(rating){
  let s='';
  for(let i=1;i<=5;i++) s+= i<=Math.round(rating) ? '★' : '☆';
  return s;
}

/* =====================================================
   ROUTER
===================================================== */
function go(view,params={}){
  currentView=view; currentParams=params;
  window.scrollTo({top:0,behavior:'smooth'});
  toggleDrawer(false);
  if(view==='shop'){ shopFilters.gender=params.gender||null; shopFilters.cat=params.cat||null; }
  if(view==='product'){ pdState={id:params.id,img:0,size:null,color:null,qty:1}; trackRecent(params.id); }
  render();
}
window.addEventListener('hashchange',()=>{});

function render(){
  const app=document.getElementById('app');
  const views={
    home:renderHome, shop:renderShop, product:renderProduct, cart:renderCart,
    checkout:renderCheckout, wishlist:renderWishlist, offers:renderOffers,
    lookbook:renderLookbook, about:renderAbout, sizeguide:renderSizeGuide,
    blog:renderBlog, blogdetail:renderBlogDetail, contact:renderContact, faq:renderFAQ,
    compare:renderCompare
  };
  app.innerHTML = (views[currentView]||renderHome)() + renderCompareBar();
  updateBadges();
  if(currentView==='shop') attachShopEvents();
  if(currentView==='product') attachProductEvents();
  if(currentView==='checkout') attachCheckoutEvents();
}

/* =====================================================
   PRODUCT CARD
===================================================== */
function productCard(p){
  const wished = WISH.includes(p.id);
  const compared = COMPARE.includes(p.id);
  const outOfStock = !inStock(p);
  return `
  <div class="p-card" onclick="go('product',{id:${p.id}})">
    <div class="p-media">
      <img src="${p.img}" alt="${p.name}" loading="lazy">
      <img class="img-b" src="${p.img2}" alt="">
      <div class="p-tags">
        ${p.old?'<span class="tag tag-sale">SALE</span>':''}
        ${p.reviews>250?'<span class="tag">BEST SELLER</span>':''}
        ${stockBadge(p)}
      </div>
      <button class="p-wish ${wished?'active':''}" onclick="event.stopPropagation();toggleWish(${p.id})" aria-label="Wishlist">
        <svg viewBox="0 0 24 24" fill="${wished?'currentColor':'none'}" stroke="currentColor" stroke-width="1.8"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
      </button>
      <div class="p-quick" style="display:flex;gap:6px;">
        <button class="btn btn-primary btn-sm" style="flex:1;" ${outOfStock?'disabled':''} onclick="event.stopPropagation();quickAddToCart(${p.id})">Add to Cart</button>
        <button class="btn btn-sm" style="background:var(--paper);color:var(--ink);padding:9px 10px;" onclick="event.stopPropagation();go('product',{id:${p.id}})" title="Quick View">👁</button>
      </div>
    </div>
    <div class="p-info">
      <div class="p-cat">${p.type} · ${p.brand}</div>
      <div class="p-name">${p.name}</div>
      <div class="p-price-row"><span class="p-price">${money(p.old?p.price:p.price)}</span>${p.old?`<span class="p-price-old">${money(p.old)}</span>`:''}</div>
      <div class="p-rating"><span class="stars">${starHtml(p.rating)}</span> ${p.rating} (${p.reviews})</div>
      <div class="p-swatches">${p.colors.map(c=>`<span class="swatch" style="background:${COLORS[c]}"></span>`).join('')}</div>
      <label class="filter-opt" style="padding-top:8px;font-size:11.5px;" onclick="event.stopPropagation()">
        <input type="checkbox" ${compared?'checked':''} onchange="toggleCompare(${p.id})"> Compare
      </label>
    </div>
  </div>`;
}
function quickAddToCart(pid){
  const p=findP(pid);
  const size=p.sizes.find(s=>!p.oos.includes(s));
  const color=p.colors[0];
  const existing=CART.find(c=>c.pid===pid&&c.size===size&&c.color===color);
  if(existing) existing.qty+=1; else CART.push({pid,size,color,qty:1});
  updateBadges();
  showToast(`Added "${p.name}" to your cart.`);
}

/* =====================================================
   HOME
===================================================== */
function renderHome(){
  const newArrivals=PRODUCTS.slice(0,4);
  const bestSellers=[...PRODUCTS].sort((a,b)=>b.reviews-a.reviews).slice(0,4);
  const men=PRODUCTS.filter(p=>p.gender==='men').slice(0,4);
  const women=PRODUCTS.filter(p=>p.gender==='women').slice(0,4);
  const kids=PRODUCTS.filter(p=>p.gender==='kids').slice(0,4);
  const sneakers=PRODUCTS.filter(p=>p.cat==='sneakers'||p.cat==='running').slice(0,4);
  const deals=PRODUCTS.filter(p=>p.old).slice(0,4);
  const recentItems=RECENT.map(findP).filter(Boolean).slice(0,4);
  return `
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <div class="eyebrow">FALL / WINTER COLLECTION</div>
        <h1 class="hero-title">Shoes built<br>for the <em>long walk</em><br>home.</h1>
        <p class="hero-desc">Full-grain leather, honest construction, and soles that hold up past the first season. Explore the new arrivals for men, women, and kids.</p>
        <div class="hero-cta">
          <button class="btn btn-cobalt" onclick="go('shop',{})">Shop New Arrivals</button>
          <button class="btn btn-outline" style="border-color:rgba(251,250,247,.5);color:#fff" onclick="go('lookbook')">View Lookbook</button>
        </div>
        <div class="hero-stats">
          <div><b>128k+</b><span>Pairs Shipped</span></div>
          <div><b>4.7 / 5</b><span>Avg. Rating</span></div>
          <div><b>30-Day</b><span>Free Returns</span></div>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-img-card">
          <img src="${IMG.hero}" alt="Featured sneaker">
        </div>
        <div class="swing-tag">
          <div class="mono">SKU · AF-0142</div>
          <div style="font-weight:600;font-size:13px;margin-top:2px;">Ridgeline Trainer</div>
          <div class="price">$132.00</div>
        </div>
      </div>
    </div>
  </section>

  ${recentItems.length?`<section class="section container" style="padding-bottom:0">
    <div class="section-head"><div><div class="eyebrow">WELCOME BACK</div><h2 class="section-title">Recently Viewed</h2></div></div>
    <div class="grid grid-4">${recentItems.map(productCard).join('')}</div>
  </section>`:''}
  <section class="section container">
    <div class="section-head">
      <div><div class="eyebrow">JUST LANDED</div><h2 class="section-title">New Arrivals</h2></div>
      <a class="view-link" href="#" onclick="go('shop',{})">View all →</a>
    </div>
    <div class="grid grid-4">${newArrivals.map(productCard).join('')}</div>
  </section>

  <section class="section container" style="padding-top:0">
    <div class="section-head">
      <div><div class="eyebrow">CUSTOMER FAVOURITES</div><h2 class="section-title">Best Sellers</h2></div>
      <a class="view-link" href="#" onclick="go('shop',{})">View all →</a>
    </div>
    <div class="grid grid-4">${bestSellers.map(productCard).join('')}</div>
  </section>

  <section class="section" style="background:var(--paper-2);padding-top:70px;padding-bottom:70px;">
    <div class="container">
      <div class="section-head"><div><div class="eyebrow">SHOP BY DEPARTMENT</div><h2 class="section-title">Find Your Fit</h2></div></div>
      <div class="grid grid-3">
        <div class="p-card" onclick="go('shop',{gender:'men'})"><div class="p-media" style="aspect-ratio:4/5"><img src="${IMG.formal1}"></div><div class="p-info"><div class="p-name" style="font-size:18px">Men's Collection</div><div class="p-cat">Sneakers · Boots · Formal</div></div></div>
        <div class="p-card" onclick="go('shop',{gender:'women'})"><div class="p-media" style="aspect-ratio:4/5"><img src="${IMG.heel1}"></div><div class="p-info"><div class="p-name" style="font-size:18px">Women's Collection</div><div class="p-cat">Heels · Flats · Sneakers</div></div></div>
        <div class="p-card" onclick="go('shop',{gender:'kids'})"><div class="p-media" style="aspect-ratio:4/5"><img src="${IMG.kids1}"></div><div class="p-info"><div class="p-name" style="font-size:18px">Kids' Collection</div><div class="p-cat">Sneakers · Boots · School</div></div></div>
      </div>
    </div>
  </section>

  <section class="section container">
    <div class="section-head">
      <div><div class="eyebrow">RUN. TRAIN. REPEAT.</div><h2 class="section-title">Sneakers &amp; Sport</h2></div>
      <a class="view-link" href="#" onclick="go('shop',{cat:'sneakers'})">View all →</a>
    </div>
    <div class="grid grid-4">${sneakers.map(productCard).join('')}</div>
  </section>

  <section class="section" style="background:var(--ink);color:var(--paper);padding-top:64px;padding-bottom:64px;">
    <div class="container" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:24px;">
      <div>
        <div class="eyebrow" style="color:var(--kraft-light)">LIMITED TIME</div>
        <h2 class="section-title" style="margin-top:8px;">Up to 30% off select styles</h2>
      </div>
      <button class="btn btn-cobalt" onclick="go('offers')">Shop the Sale</button>
    </div>
  </section>

  <section class="section container">
    <div class="section-head"><div><div class="eyebrow">TODAY'S DEALS</div><h2 class="section-title">Special Offers</h2></div></div>
    <div class="grid grid-4">${deals.map(productCard).join('')}</div>
  </section>

  <section class="section container" style="padding-top:0">
    <div class="section-head"><div><div class="eyebrow">TRUSTED BRANDS</div><h2 class="section-title">Featured Labels</h2></div></div>
    <div class="grid" style="grid-template-columns:repeat(5,1fr);align-items:center;">
      ${['ARLO & FIELD','NORTHFOOT','KESTREL','UMBRA','PALOMA'].map(b=>`<div class="serif" style="text-align:center;font-size:20px;color:var(--ink-30);border:1px solid var(--ink-12);padding:26px 10px;">${b}</div>`).join('')}
    </div>
  </section>

  <section class="section container" style="padding-top:0">
    <div class="section-head"><div><div class="eyebrow">WHAT CUSTOMERS SAY</div><h2 class="section-title">Customer Reviews</h2></div></div>
    <div class="grid grid-3">
      ${REVIEWS_POOL.map(r=>`<div class="review-card"><div class="stars">${starHtml(r.rating)}</div><p style="font-size:14px;line-height:1.7;margin:12px 0;">"${r.text}"</p><div class="mono" style="font-size:11px;color:var(--ink-50)">${r.name} · Verified Buyer</div></div>`).join('')}
    </div>
  </section>

  <section class="newsletter">
    <div class="container">
      <div class="eyebrow" style="justify-content:center">STAY IN THE LOOP</div>
      <h2 class="section-title" style="margin-top:10px;">Get 10% off your first order</h2>
      <form onsubmit="event.preventDefault();showToast('You\'re subscribed — check your inbox for your code.');this.reset();">
        <input type="email" required placeholder="you@email.com">
        <button type="submit">Subscribe</button>
      </form>
    </div>
  </section>
  `;
}

/* =====================================================
   SHOP
===================================================== */
function renderShop(){
  const list=filteredProducts();
  const title = shopFilters.gender ? shopFilters.gender[0].toUpperCase()+shopFilters.gender.slice(1)+"'s Shoes"
              : shopFilters.cat ? shopFilters.cat[0].toUpperCase()+shopFilters.cat.slice(1)
              : 'All Shoes';
  const allColors=[...new Set(PRODUCTS.flatMap(p=>p.colors))];
  const cats=[...new Set(PRODUCTS.map(p=>p.cat))];
  const allBrands=[...new Set(PRODUCTS.map(p=>p.brand))];
  const allSizes=[...new Set(PRODUCTS.flatMap(p=>p.sizes))].sort((a,b)=>a-b);
  return `
  <section class="banner-page">
    <div class="container">
      <div class="eyebrow">SHOP THE COLLECTION</div>
      <h1 class="serif">${title}</h1>
    </div>
  </section>
  <section class="section container">
    <div class="crumb"><a href="#" onclick="go('home')">Home</a> / Shop</div>
    <div class="shop-layout">
      <aside>
        <div class="filter-group">
          <div class="filter-title">Gender</div>
          ${['men','women','kids'].map(g=>`<label class="filter-opt"><input type="checkbox" data-f="gender" value="${g}" ${shopFilters.gender===g?'checked':''}> ${g[0].toUpperCase()+g.slice(1)}</label>`).join('')}
        </div>
        <div class="filter-group">
          <div class="filter-title">Category</div>
          ${cats.map(c=>`<label class="filter-opt"><input type="checkbox" data-f="cat" value="${c}" ${shopFilters.cat===c?'checked':''}> ${c[0].toUpperCase()+c.slice(1)}</label>`).join('')}
        </div>
        <div class="filter-group">
          <div class="filter-title">Brand</div>
          ${allBrands.map(b=>`<label class="filter-opt"><input type="checkbox" onchange="toggleBrandFilter('${b}')" ${shopFilters.brands.includes(b)?'checked':''}> ${b}</label>`).join('')}
        </div>
        <div class="filter-group">
          <div class="filter-title">Size</div>
          <div class="color-row">
            ${allSizes.map(s=>`<span class="pill" style="cursor:pointer;padding:5px 10px;${shopFilters.sizes.includes(s)?'background:var(--ink);color:var(--paper);border-color:var(--ink);':''}" onclick="toggleSizeFilter(${s})">${s}</span>`).join('')}
          </div>
        </div>
        <div class="filter-group">
          <div class="filter-title">Color</div>
          <div class="color-row">
            ${allColors.map(c=>`<span class="color-chip ${shopFilters.colors.includes(c)?'sel':''}" style="background:${COLORS[c]}" data-f="color" data-v="${c}" onclick="toggleColorFilter('${c}')" title="${c}"></span>`).join('')}
          </div>
        </div>
        <div class="filter-group">
          <div class="filter-title">Price: up to ${money(shopFilters.price)}</div>
          <input type="range" min="50" max="220" value="${shopFilters.price}" style="width:100%" oninput="shopFilters.price=+this.value;render()">
        </div>
        <div class="filter-group">
          <div class="filter-title">Rating</div>
          ${[4,3].map(r=>`<label class="filter-opt"><input type="radio" name="rating" ${shopFilters.minRating===r?'checked':''} onchange="shopFilters.minRating=${r};render()"> ${r}★ &amp; up</label>`).join('')}
          <label class="filter-opt"><input type="radio" name="rating" ${shopFilters.minRating===0?'checked':''} onchange="shopFilters.minRating=0;render()"> Any rating</label>
        </div>
        <div class="filter-group" style="border-bottom:none;">
          <div class="filter-title">Availability</div>
          <label class="filter-opt"><input type="checkbox" ${shopFilters.inStockOnly?'checked':''} onchange="shopFilters.inStockOnly=this.checked;render()"> In Stock Only</label>
        </div>
        <button class="btn btn-outline btn-block" onclick="resetFilters()">Clear Filters</button>
      </aside>
      <div>
        <div class="shop-toolbar">
          <span class="result-count">${list.length} PRODUCTS</span>
          <select onchange="shopFilters.sort=this.value;render()">
            <option value="newest" ${shopFilters.sort==='newest'?'selected':''}>Sort: Newest</option>
            <option value="popular" ${shopFilters.sort==='popular'?'selected':''}>Sort: Popular</option>
            <option value="rating" ${shopFilters.sort==='rating'?'selected':''}>Sort: Best Rated</option>
            <option value="low" ${shopFilters.sort==='low'?'selected':''}>Price: Low to High</option>
            <option value="high" ${shopFilters.sort==='high'?'selected':''}>Price: High to Low</option>
          </select>
        </div>
        ${list.length? `<div class="grid grid-3">${list.map(productCard).join('')}</div>` : `<div class="empty-state"><p>No shoes match those filters yet.</p><button class="btn btn-outline" onclick="resetFilters()">Clear Filters</button></div>`}
      </div>
    </div>
  </section>
  `;
}
function filteredProducts(){
  let list=PRODUCTS.filter(p=>{
    if(shopFilters.gender && p.gender!==shopFilters.gender) return false;
    if(shopFilters.cat && p.cat!==shopFilters.cat) return false;
    if(shopFilters.brands.length && !shopFilters.brands.includes(p.brand)) return false;
    if(shopFilters.colors.length && !p.colors.some(c=>shopFilters.colors.includes(c))) return false;
    if(shopFilters.sizes.length && !p.sizes.some(s=>shopFilters.sizes.includes(s)&&!p.oos.includes(s))) return false;
    if(p.price>shopFilters.price) return false;
    if(shopFilters.minRating && p.rating<shopFilters.minRating) return false;
    if(shopFilters.inStockOnly && !inStock(p)) return false;
    if(shopFilters.q && !(p.name.toLowerCase().includes(shopFilters.q)||p.type.toLowerCase().includes(shopFilters.q))) return false;
    return true;
  });
  if(shopFilters.sort==='popular') list.sort((a,b)=>b.reviews-a.reviews);
  else if(shopFilters.sort==='rating') list.sort((a,b)=>b.rating-a.rating);
  else if(shopFilters.sort==='low') list.sort((a,b)=>a.price-b.price);
  else if(shopFilters.sort==='high') list.sort((a,b)=>b.price-a.price);
  else list.sort((a,b)=>b.id-a.id);
  return list;
}
function attachShopEvents(){
  document.querySelectorAll('[data-f="gender"]').forEach(el=>el.onchange=()=>{shopFilters.gender=el.checked?el.value:null;document.querySelectorAll('[data-f="gender"]').forEach(o=>{if(o!==el)o.checked=false;});render();});
  document.querySelectorAll('[data-f="cat"]').forEach(el=>el.onchange=()=>{shopFilters.cat=el.checked?el.value:null;document.querySelectorAll('[data-f="cat"]').forEach(o=>{if(o!==el)o.checked=false;});render();});
}
function toggleColorFilter(c){
  const i=shopFilters.colors.indexOf(c);
  if(i>-1) shopFilters.colors.splice(i,1); else shopFilters.colors.push(c);
  render();
}
function toggleBrandFilter(b){
  const i=shopFilters.brands.indexOf(b);
  if(i>-1) shopFilters.brands.splice(i,1); else shopFilters.brands.push(b);
  render();
}
function toggleSizeFilter(s){
  const i=shopFilters.sizes.indexOf(s);
  if(i>-1) shopFilters.sizes.splice(i,1); else shopFilters.sizes.push(s);
  render();
}
function resetFilters(){ shopFilters={gender:null,cat:null,brands:[],colors:[],sizes:[],price:1000,minRating:0,inStockOnly:false,sort:'newest',q:''}; render(); }
function onSearch(v){ shopFilters.q=v.toLowerCase(); if(currentView!=='shop') go('shop',{}); else render(); }

/* =====================================================
   PRODUCT DETAIL
===================================================== */
function renderProduct(){
  const p=findP(pdState.id) || PRODUCTS[0];
  if(!pdState.color) pdState.color=p.colors[0];
  const imgs=[p.img,p.img2];
  const related=PRODUCTS.filter(r=>r.cat===p.cat && r.id!==p.id).slice(0,4);
  const wished=WISH.includes(p.id);
  return `
  <section class="section container" style="padding-top:32px">
    <div class="crumb"><a href="#" onclick="go('home')">Home</a> / <a href="#" onclick="go('shop',{gender:'${p.gender}'})">${p.gender}</a> / ${p.name}</div>
    <div class="pd-layout">
      <div>
        <div class="pd-gallery-main"><img id="pdMainImg" src="${imgs[pdState.img]}" alt="${p.name}"></div>
        <div class="pd-thumbs">${imgs.map((im,i)=>`<img src="${im}" class="${i===pdState.img?'active':''}" onclick="pdState.img=${i};render()">`).join('')}</div>
      </div>
      <div>
        <div class="pd-brand">${p.brand}</div>
        <h1 class="pd-name serif">${p.name}</h1>
        <div class="p-rating"><span class="stars">${starHtml(p.rating)}</span> ${p.rating} · ${p.reviews} reviews</div>
        <div class="pd-price-row">${money(p.price)} ${p.old?`<span class="pd-price-old">${money(p.old)}</span><span class="tag tag-sale">SAVE ${Math.round((1-p.price/p.old)*100)}%</span>`:''}</div>
        <p class="pd-desc">${p.desc}</p>

        <div class="opt-block">
          <div class="opt-label"><span>Color: ${pdState.color}</span></div>
          <div class="color-row">${p.colors.map(c=>`<span class="color-chip ${pdState.color===c?'sel':''}" style="background:${COLORS[c]};width:30px;height:30px" onclick="pdState.color='${c}';render()"></span>`).join('')}</div>
        </div>

        <div class="opt-block">
          <div class="opt-label"><span>Select Size</span><a href="#" onclick="go('sizeguide')" style="text-decoration:underline;font-weight:500;">Size Guide</a></div>
          <div class="size-grid">
            ${[6,7,8,9,10,11,12].filter(s=>p.sizes.includes(s)).map(s=>`<div class="size-opt ${p.oos.includes(s)?'oos':''} ${pdState.size===s?'sel':''}" onclick="${p.oos.includes(s)?'':`pdState.size=${s};render()`}">${s}</div>`).join('')}
          </div>
        </div>

        <div class="opt-block">
          <div class="opt-label">Quantity</div>
          <div class="qty-row">
            <button onclick="pdState.qty=Math.max(1,pdState.qty-1);render()">−</button>
            <span>${pdState.qty}</span>
            <button onclick="pdState.qty++;render()">+</button>
          </div>
        </div>

        <div class="pd-actions">
          <button class="btn btn-outline" onclick="addToCart(${p.id})">Add to Cart</button>
          <button class="btn btn-primary" onclick="addToCart(${p.id});go('checkout')">Buy Now</button>
        </div>
        <button class="btn btn-block" style="border:1px solid var(--ink-12);background:none;" onclick="toggleWish(${p.id});render()">
          ${wished?'♥ Saved to Wishlist':'♡ Add to Wishlist'}
        </button>

        <div class="pd-meta-row">
          <span>🚚 Free shipping over $120</span>
          <span>↩ 30-day returns</span>
          <span>🔒 Secure checkout</span>
        </div>

        <div style="margin-top:30px;">
          <div class="accordion-item open">
            <div class="accordion-head" onclick="this.parentElement.classList.toggle('open')">Specifications &amp; Materials <span>＋</span></div>
            <div class="accordion-body"><div class="accordion-body-in">${p.material} Category: ${p.type}. Gender: ${p.gender}.</div></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-head" onclick="this.parentElement.classList.toggle('open')">Shipping Details <span>＋</span></div>
            <div class="accordion-body"><div class="accordion-body-in">Orders ship within 1–2 business days. Free standard shipping on orders over $120; express options available at checkout.</div></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-head" onclick="this.parentElement.classList.toggle('open')">Return Policy <span>＋</span></div>
            <div class="accordion-body"><div class="accordion-body-in">Unworn pairs may be returned within 30 days for a full refund or exchange. Return shipping is free.</div></div>
          </div>
          <div class="accordion-item">
            <div class="accordion-head" onclick="this.parentElement.classList.toggle('open')">Customer Reviews (${p.reviews}) <span>＋</span></div>
            <div class="accordion-body"><div class="accordion-body-in">
              ${REVIEWS_POOL.map(r=>`<div class="review-row"><div class="stars">${starHtml(r.rating)}</div><b style="font-size:13px;">${r.name}</b><p style="margin:4px 0 0;">${r.text}</p></div>`).join('')}
            </div></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section container" style="padding-top:0">
    <div class="section-head"><div><div class="eyebrow">YOU MAY ALSO LIKE</div><h2 class="section-title">Related Products</h2></div></div>
    <div class="grid grid-4">${related.map(productCard).join('')}</div>
  </section>
  ${renderRecentlyViewed(p.id)}
  `;
}
function renderRecentlyViewed(excludeId){
  const items=RECENT.filter(id=>id!==excludeId).map(findP).filter(Boolean).slice(0,4);
  if(!items.length) return '';
  return `
  <section class="section container" style="padding-top:0">
    <div class="section-head"><div><div class="eyebrow">YOUR HISTORY</div><h2 class="section-title">Recently Viewed</h2></div></div>
    <div class="grid grid-4">${items.map(productCard).join('')}</div>
  </section>`;
}
function attachProductEvents(){}

/* =====================================================
   CART / WISHLIST actions
===================================================== */
function addToCart(pid){
  const p=findP(pid);
  const size=pdState.id==pid?(pdState.size||p.sizes.find(s=>!p.oos.includes(s))):p.sizes.find(s=>!p.oos.includes(s));
  const color=pdState.id==pid?pdState.color:p.colors[0];
  const qty=pdState.id==pid?pdState.qty:1;
  const existing=CART.find(c=>c.pid===pid&&c.size===size&&c.color===color);
  if(existing) existing.qty+=qty; else CART.push({pid,size,color,qty});
  updateBadges();
  showToast(`Added "${p.name}" to your cart.`);
}
function toggleWish(pid){
  const i=WISH.indexOf(pid);
  if(i>-1){WISH.splice(i,1);showToast('Removed from wishlist.');}
  else{WISH.push(pid);showToast('Saved to wishlist.');}
  updateBadges();
  if(currentView==='shop'||currentView==='wishlist'||currentView==='home') render();
}
function removeFromCart(idx){ CART.splice(idx,1); render(); }
function setQty(idx,q){ CART[idx].qty=Math.max(1,q); render(); }

/* ---------- compare ---------- */
function toggleCompare(pid){
  const i=COMPARE.indexOf(pid);
  if(i>-1){ COMPARE.splice(i,1); }
  else{
    if(COMPARE.length>=3){ showToast('You can compare up to 3 shoes at a time.'); return; }
    COMPARE.push(pid);
  }
  render();
}
function renderCompareBar(){
  if(!COMPARE.length || currentView==='compare') return '';
  return `<div style="position:fixed;left:0;right:0;bottom:0;background:var(--ink);color:var(--paper);z-index:90;padding:14px 0;box-shadow:0 -8px 24px rgba(0,0,0,.2);">
    <div class="container" style="display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;">
      <div style="display:flex;align-items:center;gap:10px;font-size:13px;">
        <span class="mono">COMPARE (${COMPARE.length}/3)</span>
        <div style="display:flex;gap:6px;">${COMPARE.map(id=>{const p=findP(id);return `<img src="${p.img}" style="width:34px;height:34px;object-fit:cover;border-radius:3px;">`}).join('')}</div>
      </div>
      <div style="display:flex;gap:10px;">
        <button class="btn btn-sm btn-outline" style="border-color:rgba(251,250,247,.5);color:#fff" onclick="COMPARE=[];render()">Clear</button>
        <button class="btn btn-sm btn-cobalt" onclick="go('compare')">Compare Now</button>
      </div>
    </div>
  </div>`;
}
function renderCompare(){
  if(!COMPARE.length){
    return `<section class="section container empty-state"><h2 class="serif">Nothing to compare yet</h2><p style="color:var(--ink-50);margin:10px 0 24px;">Tap "Compare" on any product card to add it here.</p><button class="btn btn-primary" onclick="go('shop',{})">Browse Shoes</button></section>`;
  }
  const items=COMPARE.map(findP);
  const rows=[['Price',p=>money(p.price)],['Brand',p=>p.brand],['Category',p=>p.type],['Rating',p=>`${p.rating} ★ (${p.reviews})`],['Colors',p=>p.colors.join(', ')],['Sizes',p=>p.sizes.join(', ')],['Material',p=>p.material],['Stock',p=>inStock(p)?'In Stock':'Out of Stock']];
  return `
  <section class="section container">
    <h1 class="serif" style="font-size:32px;">Compare Shoes</h1>
    <div style="overflow-x:auto;margin-top:20px;">
    <table class="size-table" style="width:100%;">
      <tr><th></th>${items.map(p=>`<td style="text-align:left;padding:14px;"><img src="${p.img}" style="width:100%;max-width:140px;aspect-ratio:1/1;object-fit:cover;margin-bottom:8px;"><div style="font-weight:600;font-size:13px;">${p.name}</div><button class="btn btn-sm btn-outline" style="margin-top:8px;" onclick="toggleCompare(${p.id})">Remove</button></td>`).join('')}</tr>
      ${rows.map(([label,fn])=>`<tr><th style="text-align:left;">${label}</th>${items.map(p=>`<td style="text-align:left;">${fn(p)}</td>`).join('')}</tr>`).join('')}
      <tr><th></th>${items.map(p=>`<td><button class="btn btn-primary btn-sm" onclick="go('product',{id:${p.id}})">View / Add to Cart</button></td>`).join('')}</tr>
    </table>
    </div>
  </section>`;
}

/* ---------- coupon ---------- */
function applyCoupon(){
  const input=document.getElementById('couponInput');
  const code=(input.value||'').trim().toUpperCase();
  if(!code){ return; }
  if(COUPONS[code]){
    appliedCoupon=code;
    showToast(`Coupon "${code}" applied — ${COUPONS[code].label}.`);
  }else{
    appliedCoupon=null;
    showToast('That coupon code is not valid.');
  }
  render();
}

/* =====================================================
   CART PAGE
===================================================== */
function cartTotals(){
  const subtotal=CART.reduce((s,c)=>{const p=findP(c.pid);return s+(p.price*c.qty);},0);
  const discount=CART.reduce((s,c)=>{const p=findP(c.pid);return s+((p.old?p.old-p.price:0)*c.qty);},0);
  let shipping= subtotal>120||subtotal===0 ?0:12;
  let couponAmt=0, couponLabel=null;
  if(appliedCoupon && COUPONS[appliedCoupon]){
    const c=COUPONS[appliedCoupon];
    if(c.ship) shipping=0;
    if(c.pct) couponAmt = subtotal*(c.pct/100);
    couponLabel = `${appliedCoupon} (${c.label})`;
  }
  return {subtotal,discount,shipping,couponAmt,couponLabel,total:Math.max(0,subtotal+shipping-couponAmt)};
}
function renderCart(){
  if(!CART.length){
    return `<section class="section container empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
      <h2 class="serif">Your cart is empty</h2>
      <p style="color:var(--ink-50);margin:10px 0 24px;">Looks like you haven't added anything yet.</p>
      <button class="btn btn-primary" onclick="go('shop',{})">Continue Shopping</button>
    </section>`;
  }
  const t=cartTotals();
  return `
  <section class="section container">
    <h1 class="serif" style="font-size:32px;">Shopping Cart</h1>
    <div class="crumb" style="margin-top:6px;">${CART.reduce((s,c)=>s+c.qty,0)} items</div>
    <div class="shop-layout" style="grid-template-columns:1fr 340px;margin-top:20px;">
      <div>
        ${CART.map((c,idx)=>{const p=findP(c.pid);return `
        <div class="cart-row">
          <img src="${p.img}">
          <div>
            <div class="name">${p.name}</div>
            <div class="meta">SIZE ${c.size} · ${c.color.toUpperCase()}</div>
            <div class="cart-actions">
              <a href="#" onclick="removeFromCart(${idx});return false;">Remove</a>
              <a href="#" onclick="toggleWish(${p.id});return false;">Move to Wishlist</a>
            </div>
          </div>
          <div class="cart-right">
            <b>${money(p.price*c.qty)}</b>
            <div class="qty-row"><button onclick="setQty(${idx},${c.qty-1})">−</button><span>${c.qty}</span><button onclick="setQty(${idx},${c.qty+1})">+</button></div>
          </div>
        </div>`}).join('')}
        <button class="btn btn-outline" style="margin-top:20px;" onclick="go('shop',{})">← Continue Shopping</button>
      </div>
      <div class="summary-box">
        <h3 class="serif" style="margin:0 0 14px;font-size:20px;">Order Summary</h3>
        <div class="summary-row"><span>Subtotal</span><span>${money(t.subtotal)}</span></div>
        ${t.discount>0?`<div class="summary-row" style="color:var(--danger)"><span>Discount</span><span>−${money(t.discount)}</span></div>`:''}
        <div class="summary-row"><span>Shipping</span><span>${t.shipping===0?'FREE':money(t.shipping)}</span></div>
        ${t.couponAmt>0||t.couponLabel?`<div class="summary-row" style="color:var(--ok)"><span>Coupon ${t.couponLabel?('· '+t.couponLabel):''}</span><span>${t.couponAmt>0?'−'+money(t.couponAmt):'Applied'}</span></div>`:''}
        <div style="display:flex;gap:8px;margin:10px 0;">
          <input id="couponInput" placeholder="Coupon code" style="flex:1;border:1px solid var(--ink-12);padding:9px 10px;font-size:12.5px;" value="${appliedCoupon||''}">
          <button class="btn btn-outline btn-sm" onclick="applyCoupon()">Apply</button>
        </div>
        <div class="summary-row total"><span>Total</span><span>${money(t.total)}</span></div>
        <button class="btn btn-primary btn-block" style="margin-top:16px;" onclick="go('checkout')">Proceed to Checkout →</button>
      </div>
    </div>
  </section>`;
}

/* =====================================================
   CHECKOUT
===================================================== */
let checkoutState={delivery:'standard',payment:'card'};
function renderCheckout(){
  if(!CART.length){ return `<section class="section container empty-state"><h2 class="serif">Nothing to check out</h2><p style="color:var(--ink-50);margin:10px 0 24px;">Add some shoes to your cart first.</p><button class="btn btn-primary" onclick="go('shop',{})">Shop Now</button></section>`; }
  const t=cartTotals();
  return `
  <section class="section container">
    <h1 class="serif" style="font-size:32px;">Checkout</h1>
    <div class="shop-layout" style="grid-template-columns:1fr 360px;margin-top:20px;align-items:start;">
      <form id="checkoutForm" onsubmit="placeOrder(event)">
        <div style="margin-bottom:34px;">
          <h3 style="font-size:14px;"><span class="step-num">1</span>Customer Information</h3>
          <div class="field"><label>Full Name</label><input required placeholder="Jordan Ahmed"></div>
          <div class="field-row">
            <div class="field"><label>Email</label><input required type="email" placeholder="you@email.com"></div>
            <div class="field"><label>Phone Number</label><input required type="tel" placeholder="+92 300 1234567"></div>
          </div>
        </div>
        <div style="margin-bottom:34px;">
          <h3 style="font-size:14px;"><span class="step-num">2</span>Shipping Address</h3>
          <div class="field"><label>Street Address</label><input required placeholder="House 12, Street 4, DHA"></div>
          <div class="field-row">
            <div class="field"><label>City</label><input required placeholder="Hyderabad"></div>
            <div class="field"><label>Postal Code</label><input required placeholder="71000"></div>
          </div>
        </div>
        <div style="margin-bottom:34px;">
          <h3 style="font-size:14px;"><span class="step-num">3</span>Delivery Method</h3>
          <label class="radio-card ${checkoutState.delivery==='standard'?'sel':''}"><input type="radio" name="delivery" ${checkoutState.delivery==='standard'?'checked':''} onchange="checkoutState.delivery='standard';render()"> Standard (3–5 days) — ${t.subtotal>120?'FREE':'$12.00'}</label>
          <label class="radio-card ${checkoutState.delivery==='express'?'sel':''}"><input type="radio" name="delivery" ${checkoutState.delivery==='express'?'checked':''} onchange="checkoutState.delivery='express';render()"> Express (1–2 days) — $24.00</label>
        </div>
        <div style="margin-bottom:34px;">
          <h3 style="font-size:14px;"><span class="step-num">4</span>Payment Method</h3>
          <label class="radio-card ${checkoutState.payment==='card'?'sel':''}"><input type="radio" name="pay" ${checkoutState.payment==='card'?'checked':''} onchange="checkoutState.payment='card';render()"> Credit / Debit Card</label>
          <label class="radio-card ${checkoutState.payment==='cod'?'sel':''}"><input type="radio" name="pay" ${checkoutState.payment==='cod'?'checked':''} onchange="checkoutState.payment='cod';render()"> Cash on Delivery</label>
          ${checkoutState.payment==='card'?`<div class="field-row" style="margin-top:12px;"><div class="field"><label>Card Number</label><input required placeholder="4242 4242 4242 4242"></div><div class="field"><label>Expiry / CVC</label><input required placeholder="MM/YY · CVC"></div></div>`:''}
        </div>
        <div class="field"><label>Coupon Code</label><div style="display:flex;gap:8px;"><input placeholder="Enter coupon code" id="couponInput" value="${appliedCoupon||''}" style="flex:1;"><button type="button" class="btn btn-outline btn-sm" onclick="applyCoupon()">Apply</button></div>${appliedCoupon?`<div style="font-size:12px;color:var(--ok);margin-top:6px;">✓ ${appliedCoupon} applied</div>`:''}</div>
        <button type="submit" class="btn btn-primary btn-block" style="margin-top:10px;">Place Order — ${money(t.total + (checkoutState.delivery==='express'?24-t.shipping:0))}</button>
      </form>
      <div class="summary-box">
        <h3 class="serif" style="margin:0 0 14px;font-size:20px;">Order Summary</h3>
        ${CART.map(c=>{const p=findP(c.pid);return `<div class="summary-row"><span>${p.name} × ${c.qty} <span style="color:var(--ink-30)">(${c.size}/${c.color})</span></span><span>${money(p.price*c.qty)}</span></div>`}).join('')}
        <hr class="dashed" style="margin:12px 0;">
        <div class="summary-row"><span>Subtotal</span><span>${money(t.subtotal)}</span></div>
        <div class="summary-row"><span>Delivery</span><span>${checkoutState.delivery==='express'?'$24.00':(t.shipping===0?'FREE':money(t.shipping))}</span></div>
        ${t.couponAmt>0?`<div class="summary-row" style="color:var(--ok)"><span>Coupon</span><span>−${money(t.couponAmt)}</span></div>`:''}
        <div class="summary-row total"><span>Total</span><span>${money(t.total + (checkoutState.delivery==='express'?24-t.shipping:0))}</span></div>
      </div>
    </div>
  </section>`;
}
function attachCheckoutEvents(){}
function placeOrder(e){
  e.preventDefault();
  const orderNo='AF-'+Math.floor(100000+Math.random()*899999);
  CART=[];
  updateBadges();
  document.getElementById('app').innerHTML=`
  <section class="section container empty-state">
    <div style="font-size:44px;">✓</div>
    <h2 class="serif">Order placed — thank you!</h2>
    <p style="color:var(--ink-50);margin:10px 0 6px;">Confirmation sent to your email.</p>
    <p class="mono" style="font-size:13px;">Order ${orderNo}</p>
    <button class="btn btn-primary" style="margin-top:22px;" onclick="go('shop',{})">Continue Shopping</button>
  </section>`;
  window.scrollTo({top:0,behavior:'smooth'});
}

/* =====================================================
   WISHLIST
===================================================== */
function renderWishlist(){
  const items=PRODUCTS.filter(p=>WISH.includes(p.id));
  if(!items.length){
    return `<section class="section container empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/></svg>
      <h2 class="serif">Your wishlist is empty</h2>
      <p style="color:var(--ink-50);margin:10px 0 24px;">Tap the heart on any product to save it here.</p>
      <button class="btn btn-primary" onclick="go('shop',{})">Discover Shoes</button>
    </section>`;
  }
  return `<section class="section container">
    <h1 class="serif" style="font-size:32px;">Your Wishlist</h1>
    <div class="crumb" style="margin-top:6px;">${items.length} saved items</div>
    <div class="grid grid-4" style="margin-top:24px;">
      ${items.map(p=>`<div>${productCard(p)}<div class="mono" style="font-size:10.5px;color:var(--ink-50);margin-top:6px;">Available sizes: ${p.sizes.filter(s=>!p.oos.includes(s)).join(', ')||'—'} · ${inStock(p)?'<span style="color:var(--ok)">In Stock</span>':'<span style="color:var(--danger)">Out of Stock</span>'}</div></div>`).join('')}
    </div>
  </section>`;
}

/* =====================================================
   OFFERS
===================================================== */
function renderOffers(){
  const deals=PRODUCTS.filter(p=>p.old);
  const clearance=PRODUCTS.filter(p=>!p.old).slice(0,4);
  return `
  <section class="banner-page" style="background:var(--danger);">
    <div class="eyebrow" style="color:#fff;opacity:.85">LIMITED TIME ONLY</div>
    <h1 class="serif">Offers &amp; Deals</h1>
    <p style="max-width:460px;margin:14px auto 0;opacity:.9;">Up to 30% off select styles across men's, women's and kids' footwear.</p>
  </section>
  <section class="section container">
    <div class="section-head"><div><div class="eyebrow">FLASH SALE</div><h2 class="section-title">Save Big Right Now</h2></div></div>
    <div class="grid grid-4">${deals.map(productCard).join('')}</div>
  </section>
  <section class="section" style="background:var(--kraft-light);">
    <div class="container" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:20px;">
      <div><div class="eyebrow">BUNDLE &amp; SAVE</div><h2 class="section-title" style="margin-top:8px;">Buy 2 pairs, get 15% off</h2></div>
      <button class="btn btn-primary" onclick="go('shop',{})">Shop Bundles</button>
    </div>
  </section>
  <section class="section container">
    <div class="section-head"><div><div class="eyebrow">FINAL STOCK</div><h2 class="section-title">Clearance</h2></div></div>
    <div class="grid grid-4">${clearance.map(productCard).join('')}</div>
  </section>`;
}

/* =====================================================
   LOOKBOOK
===================================================== */
function renderLookbook(){
  const looks=[
    {img:IMG.sneaker2,title:'City Grid',desc:'Trainers built for the morning commute.'},
    {img:IMG.heel1,title:'After Hours',desc:'Block heels for the evening shift.'},
    {img:IMG.boot1,title:'Trailhead',desc:'Waterproof boots for uneven ground.'},
    {img:IMG.formal1,title:'The Boardroom',desc:'Oxfords and derbies, polished.'},
    {img:IMG.kids1,title:'Recess',desc:'Durable kicks for the playground.'},
    {img:IMG.sandal1,title:'Low Tide',desc:'Sandals for the last warm days.'},
  ];
  return `
  <section class="banner-page">
    <div class="eyebrow">SEASON 07</div>
    <h1 class="serif">The Lookbook</h1>
    <p style="max-width:460px;margin:14px auto 0;opacity:.75;">A closer look at how the new collection moves through a real week.</p>
  </section>
  <section class="section container">
    <div class="grid grid-3">
      ${looks.map(l=>`<div class="lookbook-tile"><img src="${l.img}"><div class="lookbook-cap"><div class="serif">${l.title}</div><div style="font-size:12px;opacity:.85;margin:4px 0 10px;">${l.desc}</div><button class="btn btn-sm" style="background:#fff;color:var(--ink);" onclick="go('shop',{})">Shop the Look</button></div></div>`).join('')}
    </div>
  </section>`;
}

/* =====================================================
   ABOUT
===================================================== */
function renderAbout(){
  return `
  <section class="banner-page">
    <div class="eyebrow">EST. 2014</div>
    <h1 class="serif">Built on real leather<br>and honest miles.</h1>
  </section>
  <section class="section container" style="max-width:760px;">
    <p style="font-size:17px;line-height:1.8;color:var(--ink-70);">Arlo &amp; Field started in a two-room workshop with one belief: a shoe should earn its price in years, not seasons. We source full-grain leather from tanneries we've visited ourselves, and every sole is built to be resoled rather than replaced.</p>
    <p style="font-size:17px;line-height:1.8;color:var(--ink-70);margin-top:18px;">Today we design for men, women, and kids across sneakers, formalwear, boots, and everything between — but the process hasn't changed. Real materials. Considered construction. Shoes that are made to be worn, not just bought.</p>
  </section>
  <section class="section container">
    <div class="value-grid">
      <div class="value-card"><div class="num mono">01</div><h3 class="serif" style="margin:10px 0;">Craftsmanship</h3><p style="font-size:13.5px;color:var(--ink-70);line-height:1.7;">Every pair passes through 42 hand-checked construction steps before it ships.</p></div>
      <div class="value-card"><div class="num mono">02</div><h3 class="serif" style="margin:10px 0;">Quality Commitment</h3><p style="font-size:13.5px;color:var(--ink-70);line-height:1.7;">A one-year workmanship guarantee on every pair we make, no fine print.</p></div>
      <div class="value-card"><div class="num mono">03</div><h3 class="serif" style="margin:10px 0;">Customer-First</h3><p style="font-size:13.5px;color:var(--ink-70);line-height:1.7;">Free resizing exchanges and a real human on the other end of every message.</p></div>
    </div>
  </section>`;
}

/* =====================================================
   SIZE GUIDE
===================================================== */
function renderSizeGuide(){
  return `
  <section class="banner-page"><div class="eyebrow">FIND YOUR FIT</div><h1 class="serif">Size Guide</h1></section>
  <section class="section container" style="max-width:820px;">
    <h3 class="serif">Men's Sizing</h3>
    <table class="size-table"><tr><th>US</th><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td><td>12</td></tr><tr><th>UK</th><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td><td>11</td></tr><tr><th>CM</th><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td><td>30</td></tr></table>
    <h3 class="serif" style="margin-top:34px;">Women's Sizing</h3>
    <table class="size-table"><tr><th>US</th><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr><tr><th>UK</th><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><th>CM</th><td>22</td><td>23</td><td>24</td><td>25</td><td>26</td><td>27</td></tr></table>
    <h3 class="serif" style="margin-top:34px;">Kids' Sizing</h3>
    <table class="size-table"><tr><th>US</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>UK</th><td>13</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>CM</th><td>19</td><td>20</td><td>21</td><td>22</td><td>23</td></tr></table>
    <h3 class="serif" style="margin-top:34px;">How to Measure</h3>
    <ol style="font-size:14px;line-height:1.9;color:var(--ink-70);">
      <li>Stand on a sheet of paper with your heel against a wall.</li>
      <li>Mark the tip of your longest toe and measure the distance in centimetres.</li>
      <li>Compare the measurement to the chart above — if you're between sizes, size up.</li>
    </ol>
  </section>`;
}

/* =====================================================
   BLOG
===================================================== */
const BLOG_POSTS=[
 {id:1,title:'5 Ways to Style Sneakers This Fall',cat:'Style Guide',date:'Aug 3, 2026',author:'Hana Malik',img:IMG.sneaker3,excerpt:'From tailored trousers to weekend denim, here\'s how to make one pair of sneakers work five ways.'},
 {id:2,title:'Choosing the Right Running Shoe for Your Stride',cat:'Buying Guide',date:'Jul 22, 2026',author:'Omar Farooq',img:IMG.running1,excerpt:'Overpronation, neutral gait, or high arches — a quick guide to matching shoe to stride.'},
 {id:3,title:'How to Care for Leather Shoes All Year Round',cat:'Care Tips',date:'Jul 10, 2026',author:'Layla Chen',img:IMG.formal1,excerpt:'A simple three-step routine that will double the life of any leather pair.'},
];
function renderBlog(){
  return `
  <section class="banner-page"><div class="eyebrow">THE JOURNAL</div><h1 class="serif">Style &amp; Footwear Guide</h1></section>
  <section class="section container">
    <div class="grid grid-3">
      ${BLOG_POSTS.map(b=>`<div class="blog-card" style="cursor:pointer" onclick="go('blogdetail',{id:${b.id}})"><img src="${b.img}"><div class="blog-meta">${b.cat} · ${b.date}</div><div class="blog-title serif">${b.title}</div><p style="font-size:13.5px;color:var(--ink-70);line-height:1.6;">${b.excerpt}</p></div>`).join('')}
    </div>
  </section>`;
}
function renderBlogDetail(){
  const b=BLOG_POSTS.find(x=>x.id==currentParams.id)||BLOG_POSTS[0];
  const others=BLOG_POSTS.filter(x=>x.id!==b.id);
  return `
  <section class="section container" style="max-width:760px;">
    <div class="crumb"><a href="#" onclick="go('blog')">Journal</a> / ${b.title}</div>
    <div class="blog-meta">${b.cat} · ${b.date} · 4 min read</div>
    <h1 class="serif" style="font-size:36px;margin:10px 0 14px;">${b.title}</h1>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:22px;">
      <div style="width:34px;height:34px;border-radius:50%;background:var(--kraft-light);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">${b.author.split(' ').map(w=>w[0]).join('')}</div>
      <div style="font-size:13px;"><b>${b.author}</b><div style="color:var(--ink-50);font-size:11.5px;">Contributing Writer</div></div>
    </div>
    <img src="${b.img}" style="width:100%;aspect-ratio:16/9;object-fit:cover;margin-bottom:24px;">
    <p style="font-size:15.5px;line-height:1.9;color:var(--ink-70);">${b.excerpt} The right pair starts with understanding how you'll actually wear it — the terrain, the outfit, the hours on your feet. Start with fit, let material and colour follow, and build outward from one dependable pair rather than chasing every trend at once.</p>
    <img src="${IMG.sneaker2}" style="width:100%;aspect-ratio:16/8;object-fit:cover;margin:22px 0;">
    <p style="font-size:15.5px;line-height:1.9;color:var(--ink-70);">Rotate two pairs rather than wearing one daily — it gives the foam and leather time to recover, and it will noticeably extend the life of both.</p>
    <div style="margin-top:30px;display:flex;gap:10px;flex-wrap:wrap;">
      <span class="eyebrow" style="margin-right:6px;">SHARE:</span>
      <a href="#" onclick="return false;" class="pill" title="Share on Facebook">Facebook</a>
      <a href="#" onclick="return false;" class="pill" title="Share on X">X</a>
      <a href="#" onclick="return false;" class="pill" title="Share on Pinterest">Pinterest</a>
      <a href="#" onclick="return false;" class="pill" title="Copy link" onclick="navigator.clipboard&&navigator.clipboard.writeText(location.href);showToast('Link copied.');return false;">Copy Link</a>
    </div>
    <hr class="hr" style="margin:34px 0;">
    <div class="section-head"><div><div class="eyebrow">KEEP READING</div><h2 class="section-title" style="font-size:22px;">Related Articles</h2></div></div>
    <div class="grid grid-3">
      ${others.map(o=>`<div class="blog-card" style="cursor:pointer" onclick="go('blogdetail',{id:${o.id}})"><img src="${o.img}"><div class="blog-meta">${o.cat} · ${o.date}</div><div class="blog-title serif" style="font-size:14px;">${o.title}</div></div>`).join('')}
    </div>
  </section>`;
}

/* =====================================================
   CONTACT / FAQ
===================================================== */
function socialIcon(name,path){
  return `<a href="#" onclick="return false;" aria-label="${name}" style="width:36px;height:36px;border:1px solid var(--ink-12);border-radius:50%;display:inline-flex;align-items:center;justify-content:center;">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">${path}</svg>
  </a>`;
}
function renderContact(){
  return `
  <section class="banner-page"><div class="eyebrow">WE'RE HERE TO HELP</div><h1 class="serif">Contact Us</h1></section>
  <section class="section container">
    <div class="shop-layout" style="grid-template-columns:1fr 320px;">
      <form onsubmit="event.preventDefault();showToast('Message sent — we\'ll reply within 24 hours.');this.reset();">
        <div class="field-row"><div class="field"><label>Full Name</label><input required></div><div class="field"><label>Email</label><input required type="email"></div></div>
        <div class="field-row"><div class="field"><label>Phone Number</label><input type="tel"></div><div class="field"><label>Subject</label><input required></div></div>
        <div class="field"><label>Message</label><textarea required rows="6"></textarea></div>
        <button class="btn btn-primary">Send Message</button>
      </form>
      <div>
        <div class="value-card" style="margin-bottom:16px;"><h4 style="margin:0 0 8px;font-size:13px;">Business Hours</h4><p style="font-size:13px;color:var(--ink-70);">Mon–Fri: 9am–6pm<br>Sat: 10am–4pm<br>Sun: Closed</p></div>
        <div class="value-card" style="margin-bottom:16px;"><h4 style="margin:0 0 8px;font-size:13px;">Customer Support</h4><p style="font-size:13px;color:var(--ink-70);">support@arlofield.com<br>+1 (800) 555-0133</p></div>
        <div class="value-card" style="margin-bottom:16px;"><h4 style="margin:0 0 8px;font-size:13px;">Follow Us</h4>
          <div style="display:flex;gap:8px;margin-top:10px;">
            ${socialIcon('Instagram','<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="17.5" cy="6.5" r="1"/>')}
            ${socialIcon('TikTok','<path d="M14 3v10.5a2.5 2.5 0 1 1-2-2.45V9a4.5 4.5 0 1 0 4 4.47V8.2a6 6 0 0 0 3 .8V7a4 4 0 0 1-4-4h-1Z"/>')}
            ${socialIcon('Pinterest','<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9.5 17c.5-2 1-4.2 1.5-6.2a2.3 2.3 0 0 1 4.4.9c0 1.9-1 3.8-2.9 3.8-.6 0-1.1-.3-1.3-.7" fill="none" stroke="currentColor" stroke-width="1.4"/>')}
          </div>
        </div>
        <div class="value-card">
          <h4 style="margin:0 0 8px;font-size:13px;">Flagship Store</h4>
          <p style="font-size:13px;color:var(--ink-70);line-height:1.7;">142 Market Street<br>Hyderabad, Sindh, Pakistan</p>
          <div style="aspect-ratio:16/9;background:var(--paper-2);margin-top:10px;display:flex;align-items:center;justify-content:center;color:var(--ink-30);font-size:11px;font-family:'JetBrains Mono',monospace;border:1px dashed var(--ink-12);">MAP VIEW</div>
        </div>
      </div>
    </div>
  </section>`;
}
function renderFAQ(){
  const faqs=[['How long does shipping take?','Standard shipping takes 3–5 business days; express arrives in 1–2 days.'],['What is your return policy?','Unworn shoes can be returned within 30 days for a full refund.'],['Do you ship internationally?','Yes, we currently ship to over 30 countries at checkout-calculated rates.'],['How do I know my size?','Check our Size Guide page for a full conversion chart and measuring instructions.']];
  return `<section class="banner-page"><div class="eyebrow">GOOD TO KNOW</div><h1 class="serif">Frequently Asked Questions</h1></section>
  <section class="section container" style="max-width:700px;">
    ${faqs.map(([q,a],i)=>`<div class="accordion-item ${i===0?'open':''}"><div class="accordion-head" onclick="this.parentElement.classList.toggle('open')">${q}<span>＋</span></div><div class="accordion-body"><div class="accordion-body-in">${a}</div></div></div>`).join('')}
  </section>`;
}

/* =====================================================
   INIT
===================================================== */
render();