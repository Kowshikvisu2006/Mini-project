<template>
<div id="app">

  <header class="top">
    <div class="top-in">
      <a class="logo" href="#" @click.prevent="goTop"><span class="logo-mark">S</span><span>Shopeasy</span></a>
      <label class="search"><input v-model="q" type="search" placeholder="Search for products, brands and more" aria-label="Search products"></label>
      <button v-if="!user" class="hbtn solid" @click="openGate">Sign in</button>
      <div v-else class="me"><span class="av">{{ user.name.charAt(0).toUpperCase() }}</span><span>{{ user.name }}</span><button class="hbtn" @click="signOut">Sign out</button></div>
      <button class="hbtn" @click="open_('ai')">Ask AI</button>
      <button class="hbtn" @click="open_('dash')">Dashboard</button>
      <button class="hbtn" @click="open_('orders')">Orders <span class="n" v-if="myOrders.length">{{ myOrders.length }}</span></button>
      <button class="hbtn" @click="open_('cart')">Cart <span class="n" v-if="cartCount">{{ cartCount }}</span></button>
    </div>
  </header>

  <section class="catbar">
    <nav class="cats" aria-label="Categories">
      <button v-for="c in CATS" :key="c.n" class="cat" :class="{on: cat===c.n}" @click="cat=c.n">
        <span class="ci" v-html="mini(c)"></span>{{ c.n }}
      </button>
    </nav>
  </section>

  <div class="wrap">
    <section class="hero" v-if="showBanner">
      <div>
        <h1>Tech, style and everyday essentials</h1>
        <p>Phones, fashion, books, toys and home picks at great prices. Free delivery on orders above ₹499.</p>
        <button class="btn-y" @click="toGrid">Shop now</button>
      </div>
      <div class="hero-art">
        <button class="hero-item" v-for="p in heroItems" :key="p.id" @click="sel=p" :aria-label="'View '+p.name">
          <span v-html="svg(p)"></span><span>{{ inr(p.price) }}</span>
        </button>
      </div>
    </section>

    <template v-if="showBanner">
      <section class="rail" v-for="r in rails" :key="r.id" :aria-label="r.title">
        <div class="rail-h"><h2>{{ r.title }}</h2><span class="timer" v-if="r.timer">{{ countdown }} left</span></div>
        <div class="rail-w">
          <button class="arr l" @click="slide(r.id,-1)" aria-label="Scroll left">‹</button>
          <div class="rail-s" :id="'rail-'+r.id">
            <button class="rcard" v-for="p in r.items" :key="p.id" @click="sel=p" :aria-label="'View '+p.name">
              <span class="rimg" v-html="svg(p)"></span>
              <span class="rn">{{ p.name }}</span>
              <span class="rb">{{ p.brand }}</span>
              <span class="rp"><b>{{ inr(p.price) }}</b><s>{{ inr(p.mrp) }}</s></span>
            </button>
          </div>
          <button class="arr r" @click="slide(r.id,1)" aria-label="Scroll right">›</button>
        </div>
      </section>
    </template>

    <main id="grid">
      <div class="bar">
        <h2>{{ cat==='All' ? 'All products' : cat }}<small>{{ visible.length }} items</small></h2>
        <select v-model="sort" aria-label="Sort products">
          <option value="rel">Relevance</option>
          <option value="lo">Price: low to high</option>
          <option value="hi">Price: high to low</option>
          <option value="rt">Customer rating</option>
          <option value="dc">Discount</option>
        </select>
      </div>
      <div class="grid">
        <article class="card" v-for="p in visible" :key="p.id">
          <button class="imgbtn" @click="sel=p" :aria-label="'View '+p.name"><span v-html="svg(p)"></span></button>
          <div class="info">
            <div class="brand">{{ p.brand }}</div>
            <h3 @click="sel=p">{{ p.name }}</h3>
            <div class="rate"><span class="pill">{{ p.rating }} ★</span><span>({{ p.reviews.toLocaleString('en-IN') }})</span></div>
            <div class="price"><b>{{ inr(p.price) }}</b><s>{{ inr(p.mrp) }}</s><span>{{ off(p) }}% off</span></div>
            <button class="add" @click="add(p)">Add to cart</button>
          </div>
        </article>
      </div>
      <p class="empty" v-if="!visible.length">No products match. Try another category or clear the search.</p>
    </main>
  </div>
  <div class="fcols"><div class="fcols-in">
    <div><h4>Help</h4><a href="#">Privacy Policy</a><a href="#">Payment</a><a href="#">Shipping</a><a href="#">FAQs</a><a href="#">Returns</a></div>
    <div><h4>Quick links</h4><a href="#">Track order</a><a href="#">Gift cards</a><a href="#">Download app</a><a href="#">Offer zone</a></div>
    <div><h4>Contact us</h4><a href="#">Customer care</a><a href="#">Cards support</a><a href="#">Advertise</a></div>
  </div></div>
  <footer>Shopeasy is a demo store. Brands, prices and illustrations are sample data.</footer>

  <!-- overlays -->
  <div class="scrim" v-if="anyOpen" @click="closeAll"></div>

  <div class="panel gate center" v-if="gateOpen" role="dialog" aria-modal="true" aria-label="Welcome">
    <h2>Welcome to Shopeasy</h2>
    <p>Sign in to track your orders, or continue as a guest.</p>
    <label class="field">Name for sign-in (demo)
      <input type="text" v-model="gateName" placeholder="Your name" maxlength="40" @keyup.enter="guest">
    </label>
    <button class="g-btn" @click="googleDemo">
      <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.6 5.9c4.4-4.1 7-10.1 7-17.6z"/><path fill="#FBBC05" d="M10.5 28.7c-.5-1.4-.8-3-.8-4.7s.3-3.2.8-4.7l-7.9-6.1C.9 16.4 0 20.100 0 24s.9 7.600 2.600 10.800l7.900-6.100z"/><path fill="#34A853" d="M24 48c6.500 0 11.900-2.100 15.900-5.800l-7.600-5.900c-2.100 1.400-4.900 2.300-8.300 2.300-6.300 0-11.600-4.100-13.500-9.800l-7.900 6.100C6.500 42.600 14.600 48 24 48z"/></svg>
      Sign in with Google (demo)
    </button>
    <div class="or">or</div>
    <button class="ghost" @click="guest">Continue as guest</button>
    <p class="note" style="margin-top:12px">This preview simulates Google sign-in.</p>
  </div>

  <div class="panel center" v-if="sel" role="dialog" aria-modal="true" :aria-label="sel.name" style="overflow:auto">
    <button class="x xabs" @click="sel=null" aria-label="Close">×</button>
    <div class="pm">
      <div class="pm-img" v-html="svg(sel)"></div>
      <div class="pm-info">
        <div class="brand">{{ sel.brand }} · {{ sel.cat }}</div>
        <h2>{{ sel.name }}</h2>
        <div class="rate"><span class="pill">{{ sel.rating }} ★</span><span>{{ sel.reviews.toLocaleString('en-IN') }} ratings</span></div>
        <div class="price" style="margin-top:10px"><b>{{ inr(sel.price) }}</b><s>{{ inr(sel.mrp) }}</s><span>{{ off(sel) }}% off</span></div>
        <div class="note">Inclusive of all taxes</div>
        <p>{{ sel.desc }}</p>
        <div class="note">{{ sel.price >= 499 ? 'Free delivery' : 'Delivery ₹40' }} · Delivery by {{ deliveryDate }}</div>
        <div class="pm-act">
          <button class="b-cart" @click="add(sel)">Add to cart</button>
          <button class="b-buy" @click="buyNow(sel)">Buy now</button>
        </div>
      </div>
    </div>
  </div>

  <aside class="panel drawer" v-if="panel==='cart'" aria-label="Cart">
    <div class="dh">Your cart ({{ cartCount }})<button class="x" @click="closeAll" aria-label="Close">×</button></div>
    <div class="db">
      <p class="empty" v-if="!cartItems.length">Your cart is empty. Add something you like.</p>
      <div class="line" v-for="it in cartItems" :key="it.p.id">
        <div class="t" v-html="svg(it.p)"></div>
        <div class="m">
          <div>{{ it.p.name }}</div>
          <div class="note">{{ inr(it.p.price) }} <s>{{ inr(it.p.mrp) }}</s></div>
          <div class="qty"><button @click="chg(it.p,-1)" aria-label="Remove one">−</button><span>{{ it.qty }}</span><button @click="chg(it.p,1)" aria-label="Add one">+</button></div>
        </div>
        <b>{{ inr(it.p.price * it.qty) }}</b>
      </div>
    </div>
    <div class="df" v-if="cartItems.length">
      <div class="sum"><span>Price ({{ cartCount }} items)</span><span>{{ inr(mrpTotal) }}</span></div>
      <div class="sum"><span>Discount</span><span style="color:var(--green)">− {{ inr(mrpTotal - subtotal) }}</span></div>
      <div class="sum"><span>Delivery</span><span>{{ delivery ? inr(delivery) : 'Free' }}</span></div>
      <div class="sum tot"><span>Total</span><span>{{ inr(subtotal + delivery) }}</span></div>
      <div class="save">You save {{ inr(mrpTotal - subtotal) }} on this order</div>
      <button class="cta" @click="checkout">Place order</button>
    </div>
  </aside>

  <aside class="panel drawer" v-if="panel==='ai'" aria-label="AI shopping assistant">
    <div class="dh">Shopeasy AI<button class="x" @click="closeAll" aria-label="Close">×</button></div>
    <div class="db" ref="aiScroll">
      <div class="bub a">Hi! I can suggest products. Tell me what you need, who it is for, and your budget in ₹.</div>
      <div class="qp" v-if="!chat.length"><button v-for="s in quick" :key="s" @click="ask(s)">{{ s }}</button></div>
      <template v-for="(m,i) in chat" :key="i">
        <div class="bub" :class="m.role==='user' ? 'u' : 'a'">{{ m.text }}</div>
        <div v-if="m.items" class="sug" v-for="p in m.items" :key="p.id">
          <div class="t" v-html="svg(p)"></div>
          <div class="m"><b>{{ p.name }}</b><br>{{ inr(p.price) }}</div>
          <button @click="sel=p; panel=null">View</button>
          <button @click="add(p)">Add</button>
        </div>
      </template>
      <div class="bub a" v-if="aiBusy">Thinking…</div>
    </div>
    <div class="df">
      <form class="askrow" @submit.prevent="ask(aiInput)">
        <input v-model="aiInput" placeholder="e.g. gift for my 10 year old under ₹1,000" aria-label="Ask the AI assistant" maxlength="200">
        <button :disabled="aiBusy || !aiInput.trim()">Ask</button>
      </form>
    </div>
  </aside>


  <!-- payment -->
  <aside class="panel drawer" v-if="panel==='pay'" aria-label="Payment">
    <div class="dh">Choose payment<button class="x" @click="closeAll" :disabled="paying" aria-label="Close">×</button></div>
    <div class="db">
      <div class="warn">Demo store: no real payment is taken. Please do not enter real card or bank details.</div>
      <h3>Delivery details</h3>
      <label class="field">Full name
        <input type="text" v-model.trim="deliveryDetails.name" maxlength="60" autocomplete="name" @input="payErr=''">
      </label>
      <label class="field">Phone number
        <input type="tel" v-model.trim="deliveryDetails.phone" maxlength="16" autocomplete="tel" inputmode="tel" @input="payErr=''">
      </label>
      <label class="field">Street address
        <input type="text" v-model.trim="deliveryDetails.address" maxlength="120" autocomplete="street-address" @input="payErr=''">
      </label>
      <label class="field">City
        <input type="text" v-model.trim="deliveryDetails.city" maxlength="60" autocomplete="address-level2" @input="payErr=''">
      </label>
      <label class="field">State
        <input type="text" v-model.trim="deliveryDetails.state" maxlength="60" autocomplete="address-level1" @input="payErr=''">
      </label>
      <label class="field">PIN code
        <input type="text" v-model.trim="deliveryDetails.pin" maxlength="6" autocomplete="postal-code" inputmode="numeric" @input="payErr=''">
      </label>
      <div class="paysum">
        <div class="sum"><span>Items ({{ cartCount }})</span><span>{{ inr(subtotal) }}</span></div>
        <div class="sum"><span>Delivery</span><span>{{ delivery ? inr(delivery) : 'Free' }}</span></div>
        <div class="sum tot"><span>Amount payable</span><span>{{ inr(payTotal) }}</span></div>
      </div>
      <h3>Payment method</h3>
      <div class="pmopt" v-for="m in PAYS" :key="m.id" :class="{on: payMethod===m.id}">
        <label><input type="radio" name="paym" :value="m.id" v-model="payMethod" @change="payErr=''"><span><b>{{ m.label }}</b><small>{{ m.sub }}</small></span></label>
        <div class="payf" v-if="payMethod===m.id">
          <template v-if="m.id==='upi'">
            <label class="field">UPI ID<input type="text" v-model.trim="upiId" placeholder="name@bank" autocomplete="off" inputmode="email"></label>
          </template>
          <template v-else-if="m.id==='card'">
            <label class="field">Card number<input type="text" v-model="card.num" @input="fmtNum" placeholder="0000 0000 0000 0000" inputmode="numeric" autocomplete="off"></label>
            <div class="two">
              <label class="field">Expiry<input type="text" v-model="card.exp" @input="fmtExp" placeholder="MM/YY" inputmode="numeric" autocomplete="off"></label>
              <label class="field">CVV<input type="password" v-model="card.cvv" @input="card.cvv=card.cvv.replace(/\D/g,'').slice(0,4)" placeholder="•••" inputmode="numeric" autocomplete="off"></label>
            </div>
            <label class="field">Name on card<input type="text" v-model="card.name" maxlength="40" autocomplete="off"></label>
          </template>
          <template v-else-if="m.id==='net'">
            <label class="field">Select your bank
              <select v-model="bank"><option value="">Choose a bank</option><option v-for="b in BANKS" :key="b">{{ b }}</option></select>
            </label>
          </template>
          <template v-else>
            <div class="note">Pay in cash or by UPI when your order arrives. Keep {{ inr(payTotal) }} ready.</div>
          </template>
        </div>
      </div>
      <p class="perr" v-if="payErr" role="alert">{{ payErr }}</p>
    </div>
    <div class="df">
      <button class="cta" style="margin-top:0" :disabled="paying" @click="payNow">{{ paying ? 'Processing payment…' : (payMethod==='cod' ? 'Place order · Pay on delivery' : 'Pay ' + inr(payTotal)) }}</button>
      <button class="ghost" style="margin-top:8px" :disabled="paying" @click="open_('cart')">Back to cart</button>
    </div>
  </aside>

  <!-- order placed -->
  <div class="panel done center" v-if="panel==='done' && lastOrder" role="dialog" aria-modal="true" aria-label="Order placed">
    <div class="tick"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.500"/></svg></div>
    <h2>Order placed!</h2>
    <div class="note">{{ lastOrder.paid ? 'Payment received. Thank you for shopping with us.' : 'Pay in cash or UPI on delivery.' }}</div>
    <div class="oid">Order ID: {{ lastOrder.id }}</div>
    <div class="dl">
      <div class="sum"><span>Items</span><span>{{ lastOrder.count }}</span></div>
      <div class="sum"><span>Payment</span><span>{{ lastOrder.methodLabel }} · {{ lastOrder.paid ? 'Paid' : 'Pay on delivery' }}</span></div>
      <div class="sum"><span>Delivery by</span><span>{{ lastOrder.eta }}</span></div>
      <div class="sum tot"><span>Total</span><span>{{ inr(lastOrder.total) }}</span></div>
    </div>
    <div class="row2">
      <button class="s" @click="closeAll">Continue shopping</button>
      <button class="p" @click="open_('orders')">View my orders</button>
    </div>
  </div>

  <!-- order history -->
  <aside class="panel drawer" v-if="panel==='orders'" aria-label="My orders">
    <div class="dh">My orders ({{ myOrders.length }})<button class="x" @click="closeAll" aria-label="Close">×</button></div>
    <div class="db">
      <div v-if="!user" class="empty">Sign in to see your orders.<br><button class="btn-y" style="margin-top:12px" @click="panel=null; openGate()">Sign in</button></div>
      <p class="empty" v-else-if="!myOrders.length">No orders yet. Orders you place will show up here.</p>
      <article class="ord" v-for="o in myOrders" :key="o.id">
        <div class="ord-h">
          <div><b>{{ o.id }}</b><div class="note">{{ o.dateText }}</div></div>
          <span class="badge" :class="{cod: !o.paid}">{{ o.paid ? 'Paid' : 'Pay on delivery' }}</span>
        </div>
        <div class="track" aria-label="Order status">
          <div class="on">Placed</div><div>Packed</div><div>Shipped</div><div>Delivered</div>
        </div>
        <div class="note" style="margin-bottom:4px">Expected by {{ o.eta }}</div>
        <div class="line" v-for="it in o.items" :key="it.id">
          <div class="t" v-html="thumb(it.id)"></div>
          <div class="m"><div>{{ it.name }}</div><div class="note">Qty {{ it.qty }} · {{ inr(it.price) }}</div></div>
          <b>{{ inr(it.price * it.qty) }}</b>
        </div>
        <div class="ord-f">
          <span><span class="note">{{ o.methodLabel }}</span><br><b>Total {{ inr(o.total) }}</b></span>
          <button @click="reorder(o)">Buy again</button>
        </div>
      </article>
    </div>
  </aside>


  <!-- dashboard + purchase history -->
  <div class="panel dash center" v-if="panel==='dash'" role="dialog" aria-modal="true" aria-label="Dashboard">
    <div class="dh">Dashboard &amp; purchase history<button class="x" @click="closeAll" aria-label="Close">×</button></div>
    <div class="dpad">
      <div v-if="!user" class="empty">Sign in to see your dashboard.<br><button class="btn-y" style="margin-top:12px" @click="panel=null; openGate()">Sign in</button></div>

      <div v-else-if="!myOrders.length" class="empty">
        <b style="color:var(--ink)">No purchases yet</b><br>Place an order and your spending analytics will appear here.
        <div style="margin-top:14px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
          <button class="btn-y" @click="closeAll">Start shopping</button>
          <button class="mini" @click="seedDemo">Load sample orders</button>
        </div>
        <p class="note" style="margin-top:10px">Sample orders are made-up data, so you can preview the charts. You can remove them any time.</p>
      </div>

      <template v-else>
        <div class="dtool">
          <label>Period
            <select v-model="range" aria-label="Time period">
              <option value="all">All time</option><option value="30">Last 30 days</option>
              <option value="90">Last 3 months</option><option value="180">Last 6 months</option>
            </select>
          </label>
          <span class="sp"></span>
          <button class="mini" @click="exportCsv">Export CSV</button>
          <button class="mini red" v-if="hasDemo" @click="clearDemo">Remove sample orders</button>
        </div>

        <p class="empty" v-if="!scoped.length">No orders in this period. Try a longer time range.</p>
        <template v-else>
          <div class="kpis">
            <div class="kpi"><span>Total spent</span><b>{{ inr(stats.spent) }}</b></div>
            <div class="kpi"><span>Orders</span><b>{{ scoped.length }}</b></div>
            <div class="kpi"><span>Items bought</span><b>{{ stats.items }}</b></div>
            <div class="kpi"><span>Average order</span><b>{{ inr(Math.round(stats.spent / scoped.length)) }}</b></div>
            <div class="kpi g"><span>You saved</span><b>{{ inr(stats.saved) }}</b></div>
          </div>

          <div class="insights" v-if="insights.length">
            <div v-for="t in insights" :key="t">• {{ t }}</div>
          </div>

          <div class="charts">
            <div class="cc">
              <h3>Monthly spend (last 6 months)</h3>
              <svg class="d-svg" viewBox="0 0 360 150" role="img" aria-label="Bar chart of monthly spend for the last 6 months">
                <line class="base" x1="0" y1="110" x2="360" y2="110"/>
                <g v-for="b in monthly" :key="b.key">
                  <rect class="bar-r" :x="b.x" :y="b.y" width="36" :height="b.h" rx="4"/>
                  <text class="v" :x="b.x + 18" :y="b.y - 4" text-anchor="middle" v-if="b.v">{{ b.vt }}</text>
                  <text :x="b.x + 18" y="126" text-anchor="middle">{{ b.label }}</text>
                </g>
              </svg>
            </div>

            <div class="cc">
              <h3>Spend by category</h3>
              <div class="hb" v-for="(c,i) in stats.cats" :key="c.name">
                <div class="hb-t"><span>{{ c.name }}</span><span>{{ inr(c.v) }} · {{ c.pct }}%</span></div>
                <div class="hb-bar"><i :style="{width: c.pct + '%', background: PALETTE[i % PALETTE.length]}"></i></div>
              </div>
            </div>

            <div class="cc">
              <h3>How you pay</h3>
              <div class="donut-w">
                <svg viewBox="0 0 42 42" role="img" aria-label="Donut chart of payment methods">
                  <circle class="bg" cx="21" cy="21" r="15.9155"/>
                  <circle v-for="m in stats.methods" :key="m.name" cx="21" cy="21" r="15.9155"
                    :style="{stroke: m.color}" :stroke-dasharray="m.pct.toFixed(2) + ' ' + (100 - m.pct).toFixed(2)" :stroke-dashoffset="m.offset"/>
                </svg>
                <div class="leg">
                  <div v-for="m in stats.methods" :key="m.name"><i :style="{background: m.color}"></i>{{ m.name }}: {{ m.n }} ({{ Math.round(m.pct) }}%)</div>
                </div>
              </div>
            </div>

            <div class="cc">
              <h3>Most bought products</h3>
              <div class="tp" v-for="p in stats.top" :key="p.id">
                <div class="t" v-html="thumb(p.id)"></div>
                <div class="m">{{ p.name }}</div>
                <span>{{ p.qty }} × · {{ inr(p.spend) }}</span>
              </div>
            </div>
          </div>
        </template>

        <div class="hh">
          <h3>Purchase history <small class="note">({{ history.length }})</small></h3>
        </div>
        <div class="dtool">
          <input type="search" v-model="hq" placeholder="Search by order ID or product" aria-label="Search purchases">
          <select v-model="hpay" aria-label="Filter by payment method">
            <option value="all">All payments</option>
            <option v-for="m in PAYS" :key="m.id" :value="m.id">{{ m.label }}</option>
          </select>
          <select v-model="hsort" aria-label="Sort purchases">
            <option value="new">Newest first</option><option value="old">Oldest first</option>
            <option value="hi">Highest total</option><option value="lo">Lowest total</option>
          </select>
        </div>
        <p class="empty" v-if="!history.length">No purchases match your filters.</p>
        <div class="hrow" v-for="o in history" :key="o.id">
          <button class="hmain" @click="openRow = openRow===o.id ? '' : o.id" :aria-expanded="openRow===o.id">
            <span><b>{{ o.id }}</b><span class="demo-tag" v-if="o.demo">sample</span><small>{{ o.dateText }}</small></span>
            <span class="hi">{{ summary(o) }}</span>
            <span class="badge" :class="{cod: !o.paid}">{{ o.methodLabel }}</span>
            <b class="ht">{{ inr(o.total) }}</b>
          </button>
          <div class="hdet" v-if="openRow===o.id">
            <div class="line" v-for="it in o.items" :key="it.id">
              <div class="t" v-html="thumb(it.id)"></div>
              <div class="m"><div>{{ it.name }}</div><div class="note">Qty {{ it.qty }} · {{ inr(it.price) }} each</div></div>
              <b>{{ inr(it.price * it.qty) }}</b>
            </div>
            <div class="foot">
              <div class="note">Items {{ inr(o.subtotal) }} · Delivery {{ o.delivery ? inr(o.delivery) : 'Free' }}<br>{{ o.paid ? 'Paid' : 'Pay on delivery' }} · Delivery by {{ o.eta }}</div>
              <button class="mini" @click="reorder(o)">Buy again</button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>

  <div class="toast" v-if="toast" role="status">{{ toast }}</div>
</div>

</template>

<script>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { SH, PRODUCTS, CATS, svgFor } from './data.js'

const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};

export default {
  setup(){
    let savedCart = {}; try{ savedCart = JSON.parse(store.get('dk_cart')||'{}')||{} }catch(e){}
    let savedUser = null; try{ savedUser = JSON.parse(store.get('dk_user')||'null') }catch(e){}

    const gateOpen = ref(false);
    const gateName = ref('');
    const user = ref(savedUser);
    const q = ref(''); const cat = ref('All'); const sort = ref('rel');
    const sel = ref(null); const panel = ref(null);
    const cart = ref(savedCart);
    const toast = ref(''); let tt;
    const chat = ref([]); const aiInput = ref(''); const aiBusy = ref(false); const aiScroll = ref(null);
    const quick = ['Gift under ₹1,000','Best phone for me','Something for my parents','Kitchen upgrade'];

    const inr = n => '₹' + Number(n).toLocaleString('en-IN');
    const off = p => Math.round((p.mrp-p.price)/p.mrp*100);
    const svg = svgFor;
    const mini = c => '<svg viewBox="0 0 200 200" aria-hidden="true">'+SH[c.s](c.c,c.a)+'</svg>';

    const visible = computed(()=>{
      const term = q.value.trim().toLowerCase();
      let l = PRODUCTS.filter(p =>
        (cat.value==='All' || p.cat===cat.value) &&
        (!term || (p.name+' '+p.brand+' '+p.cat).toLowerCase().includes(term)));
      const s = sort.value;
      l = l.slice().sort((a,b)=>{
        if(s==='lo') return a.price-b.price;
        if(s==='hi') return b.price-a.price;
        if(s==='rt') return b.rating-a.rating;
        if(s==='dc') return off(b)-off(a);
        return b.reviews-a.reviews;
      });
      return l;
    });
    const showBanner = computed(()=>cat.value==='All' && !q.value.trim());
    const rails = computed(()=>[
      {id:'deals',title:'Deals of the Day',timer:true,items:PRODUCTS.slice().sort((a,b)=>off(b)-off(a)).slice(0,12)},
      {id:'foryou',title:'Discounts for You',items:PRODUCTS.slice().sort((a,b)=>b.rating-a.rating||b.reviews-a.reviews).slice(0,12)}
    ]);
    const countdown = ref('');
    function tick(){
      const end = new Date(); end.setHours(24,0,0,0);
      const d = Math.max(0,end-Date.now()); const h = Math.floor(d/36e5), m = Math.floor(d%36e5/6e4), sec = Math.floor(d%6e4/1e3);
      countdown.value = String(h).padStart(2,'0')+'h '+String(m).padStart(2,'0')+'m '+String(sec).padStart(2,'0')+'s';
    }
    function slide(id,dir){ const el=document.getElementById('rail-'+id); if(el) el.scrollBy({left:dir*el.clientWidth*0.8,behavior:'smooth'}); }
    onMounted(()=>{ tick(); setInterval(tick,1000); });
    const heroItems = computed(()=>PRODUCTS.slice().sort((a,b)=>off(b)-off(a)).slice(0,3));

    function say(m){ toast.value = m; clearTimeout(tt); tt = setTimeout(()=>toast.value='',2400); }

    /* auth (demo) */
    function openGate(){ gateOpen.value = true; }
    function guest(){ gateOpen.value = false; }
    function googleDemo(){
      user.value = { name: gateName.value.trim() || 'Google user' };
      store.set('dk_user', JSON.stringify(user.value));
      gateOpen.value = false; say('Signed in (demo)');
    }
    function signOut(){ user.value = null; store.set('dk_user','null'); say('Signed out'); }

    /* cart */
    const cartItems = computed(()=>Object.entries(cart.value).map(([id,qty])=>({p:PRODUCTS.find(x=>x.id===id),qty})).filter(x=>x.p));
    const cartCount = computed(()=>cartItems.value.reduce((s,i)=>s+i.qty,0));
    const subtotal = computed(()=>cartItems.value.reduce((s,i)=>s+i.p.price*i.qty,0));
    const mrpTotal = computed(()=>cartItems.value.reduce((s,i)=>s+i.p.mrp*i.qty,0));
    const delivery = computed(()=>subtotal.value>=499 || !subtotal.value ? 0 : 40);
    watch(cart,v=>store.set('dk_cart',JSON.stringify(v)),{deep:true});
    function add(p){ cart.value = {...cart.value,[p.id]:(cart.value[p.id]||0)+1}; say('Added to cart'); }
    function chg(p,d){
      const n=(cart.value[p.id]||0)+d; const c={...cart.value};
      if(n<=0) delete c[p.id]; else c[p.id]=n; cart.value=c;
    }
    function buyNow(p){ add(p); sel.value=null; panel.value='cart'; }
    function checkout(){
      if(!user.value){ panel.value=null; openGate(); say('Sign in to place your order'); return; }
      if(!cartItems.value.length) return;
      payErr.value = ''; panel.value = 'pay';
    }

    /* payment + orders */
    const PAYS = [
      {id:'upi', label:'UPI', sub:'Google Pay, PhonePe, Paytm and more'},
      {id:'card', label:'Credit / debit card', sub:'Visa, Mastercard, RuPay'},
      {id:'net', label:'Net banking', sub:'All major Indian banks'},
      {id:'cod', label:'Cash on delivery', sub:'Pay when your order arrives'}
    ];
    const BANKS = ['State Bank of India','HDFC Bank','ICICI Bank','Axis Bank','Kotak Mahindra Bank','Punjab National Bank'];
    const payMethod = ref('upi'); const upiId = ref(''); const bank = ref('');
    const deliveryDetails = ref({name:'',phone:'',address:'',city:'',state:'',pin:''});
    const card = ref({num:'',exp:'',cvv:'',name:''});
    const paying = ref(false); const payErr = ref(''); const lastOrder = ref(null);
    let savedOrders = []; try{ savedOrders = JSON.parse(store.get('dk_orders')||'[]')||[] }catch(e){}
    const orders = ref(Array.isArray(savedOrders) ? savedOrders : []);
    watch(orders, v=>store.set('dk_orders',JSON.stringify(v)), {deep:true});
    const myOrders = computed(()=> user.value ? orders.value.filter(o=>o.user===user.value.name) : []);
    const payTotal = computed(()=>subtotal.value + delivery.value);
    const thumb = id => { const p = PRODUCTS.find(x=>x.id===id); return p ? svgFor(p) : ''; };
    function fmtNum(){ card.value.num = card.value.num.replace(/\D/g,'').slice(0,16).replace(/(.{4})(?=.)/g,'$1 '); }
    function fmtExp(){ let d = card.value.exp.replace(/\D/g,'').slice(0,4); card.value.exp = d.length>2 ? d.slice(0,2)+'/'+d.slice(2) : d; }
    function validateDelivery(){
      const details = deliveryDetails.value;
      if(!details.name) return 'Enter the recipient name.';
      const phone = details.phone.replace(/\D/g,'');
      if(phone.length!==10 && !(phone.length===12 && phone.startsWith('91'))) return 'Enter a valid 10-digit phone number.';
      if(!details.address) return 'Enter the street address.';
      if(!details.city) return 'Enter the city.';
      if(!details.state) return 'Enter the state.';
      if(!/^\d{6}$/.test(details.pin)) return 'Enter a valid 6-digit PIN code.';
      return '';
    }
    function validatePay(){
      const m = payMethod.value;
      if(m==='upi' && !/^[\w.\-]{2,}@[A-Za-z]{2,}$/.test(upiId.value)) return 'Enter a valid UPI ID, like name@bank.';
      if(m==='card'){
        const n = card.value.num.replace(/\s/g,'');
        if(n.length!==16) return 'Enter a 16-digit card number.';
        const mm = card.value.exp.match(/^(\d{2})\/(\d{2})$/);
        if(!mm || +mm[1]<1 || +mm[1]>12) return 'Enter the expiry as MM/YY.';
        const now = new Date(); const yy = now.getFullYear()%100;
        if(+mm[2] < yy || (+mm[2]===yy && +mm[1] < now.getMonth()+1)) return 'This card has expired.';
        if(card.value.cvv.length<3) return 'Enter the 3 or 4 digit CVV.';
        if(!card.value.name.trim()) return 'Enter the name on the card.';
      }
      if(m==='net' && !bank.value) return 'Choose your bank.';
      return '';
    }
    function payNow(){
      if(paying.value) return;
      if(!cartItems.value.length){ panel.value='cart'; return; }
      const err = validateDelivery() || validatePay(); payErr.value = err; if(err) return;
      paying.value = true;
      setTimeout(()=>{
        const m = PAYS.find(x=>x.id===payMethod.value);
        const now = new Date();
        const order = {
          id:'SE'+String(Date.now()).slice(-8),
          user:user.value.name,
          date:now.toISOString(),
          dateText:now.toLocaleString('en-IN',{day:'numeric',month:'short',year:'numeric',hour:'numeric',minute:'2-digit'}),
          items:cartItems.value.map(i=>({id:i.p.id,name:i.p.name,price:i.p.price,qty:i.qty})),
          count:cartCount.value, subtotal:subtotal.value, delivery:delivery.value, total:payTotal.value,
          deliveryDetails:{...deliveryDetails.value},
          method:m.id, methodLabel:m.label, paid:m.id!=='cod', eta:deliveryDate
        };
        orders.value = [order, ...orders.value];
        lastOrder.value = order;
        cart.value = {}; card.value = {num:'',exp:'',cvv:'',name:''}; upiId.value=''; bank.value='';
        paying.value = false; panel.value = 'done';
      }, 1500);
    }
    function reorder(o){
      const c = {...cart.value};
      o.items.forEach(i=>{ if(PRODUCTS.find(p=>p.id===i.id)) c[i.id]=(c[i.id]||0)+i.qty; });
      cart.value = c; panel.value = 'cart'; say('Items added to your cart');
    }

    /* dashboard + analytics */
    const range = ref('all'); const hq = ref(''); const hpay = ref('all'); const hsort = ref('new'); const openRow = ref('');
    const PALETTE = ['#2874f0','#ff9f00','#1a8f4c','#d93025','#7e57c2','#00acc1','#8d6e63'];
    const prodOf = id => PRODUCTS.find(p=>p.id===id);
    const compact = n => n>=1e5 ? (n/1e5).toFixed(1).replace('.0','')+'L' : n>=1000 ? (n/1000).toFixed(1).replace('.0','')+'k' : String(n);
    const scoped = computed(()=>{
      const days = range.value==='all' ? 0 : +range.value;
      const cut = days ? Date.now()-days*864e5 : 0;
      return myOrders.value.filter(o=>new Date(o.date).getTime()>=cut);
    });
    const hasDemo = computed(()=>myOrders.value.some(o=>o.demo));
    const stats = computed(()=>{
      let spent=0, items=0, saved=0, itemSpend=0;
      const cats={}, prods={}, meth={};
      scoped.value.forEach(o=>{
        spent += o.total;
        meth[o.methodLabel] = (meth[o.methodLabel]||0)+1;
        o.items.forEach(i=>{
          const p = prodOf(i.id);
          items += i.qty; itemSpend += i.price*i.qty;
          if(p) saved += Math.max(0,p.mrp-i.price)*i.qty;
          const c = p ? p.cat : 'Other';
          cats[c] = (cats[c]||0) + i.price*i.qty;
          const r = prods[i.id] || (prods[i.id] = {id:i.id,name:i.name,qty:0,spend:0});
          r.qty += i.qty; r.spend += i.price*i.qty;
        });
      });
      const catList = Object.entries(cats).sort((a,b)=>b[1]-a[1])
        .map(([name,v])=>({name,v,pct:itemSpend ? Math.round(v/itemSpend*100) : 0}));
      const n = scoped.value.length || 1; let acc = 0;
      const methods = Object.entries(meth).sort((a,b)=>b[1]-a[1]).map(([name,c],i)=>{
        const pct = c/n*100; const o = {name,n:c,pct,color:PALETTE[i%PALETTE.length],offset:25-acc};
        acc += pct; return o;
      });
      const top = Object.values(prods).sort((a,b)=>b.qty-a.qty || b.spend-a.spend).slice(0,5);
      return {spent,items,saved,cats:catList,methods,top};
    });
    const monthly = computed(()=>{
      const now = new Date(); const rows = [];
      for(let k=5;k>=0;k--){
        const d = new Date(now.getFullYear(), now.getMonth()-k, 1);
        rows.push({key:d.getFullYear()+'-'+d.getMonth(), label:d.toLocaleString('en-IN',{month:'short'}), v:0});
      }
      myOrders.value.forEach(o=>{
        const d = new Date(o.date); const r = rows.find(x=>x.key===d.getFullYear()+'-'+d.getMonth());
        if(r) r.v += o.total;
      });
      const max = Math.max(...rows.map(r=>r.v), 0);
      return rows.map((r,i)=>{
        const h = max ? Math.max(4, Math.round(r.v/max*86)) : 0;
        return {...r, x:12+i*58, h: r.v ? h : 0, y:110-(r.v ? h : 0), vt:compact(r.v)};
      });
    });
    const insights = computed(()=>{
      const out = []; const st = stats.value;
      if(st.cats.length) out.push('Most of your spending ('+st.cats[0].pct+'%) went on '+st.cats[0].name+'.');
      if(st.methods.length) out.push('You pay most often with '+st.methods[0].name+'.');
      const best = monthly.value.reduce((a,b)=>b.v>a.v?b:a, {v:0});
      if(best.v) out.push(best.label+' was your biggest month, with '+inr(best.v)+' spent.');
      if(st.saved>0) out.push('Discounts saved you '+inr(st.saved)+' compared with the listed prices.');
      return out;
    });
    const history = computed(()=>{
      const t = hq.value.trim().toLowerCase();
      const l = scoped.value.filter(o=>(hpay.value==='all' || o.method===hpay.value) &&
        (!t || (o.id+' '+o.items.map(i=>i.name).join(' ')).toLowerCase().includes(t)));
      const by = {new:(a,b)=>new Date(b.date)-new Date(a.date), old:(a,b)=>new Date(a.date)-new Date(b.date), hi:(a,b)=>b.total-a.total, lo:(a,b)=>a.total-b.total}[hsort.value];
      return l.slice().sort(by);
    });
    const summary = o => o.items[0].name + (o.items.length>1 ? ' +' + (o.items.length-1) + ' more' : '');
    function exportCsv(){
      const rows = [['Order ID','Date','Items','Quantity','Payment','Status','Total (INR)']];
      history.value.forEach(o=>rows.push([o.id,o.date.slice(0,10),o.items.map(i=>i.name+' x'+i.qty).join('; '),o.count,o.methodLabel,o.paid?'Paid':'Pay on delivery',o.total]));
      const csv = rows.map(r=>r.map(c=>'"'+String(c).replace(/"/g,'""')+'"').join(',')).join('\n');
      try{
        const a = document.createElement('a');
        a.href = URL.createObjectURL(new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}));
        a.download = 'shopeasy-purchases.csv'; document.body.appendChild(a); a.click(); a.remove();
        say('Exported '+history.value.length+' orders');
      }catch(e){ say('Export is not available in this view'); }
    }
    function seedDemo(){
      if(!user.value || hasDemo.value) return;
      const pool = PRODUCTS.filter(p=>p.price<=3500);
      const ago = [2,6,12,19,27,36,48,57,71,88,104,126,149,171];
      const meths = ['upi','card','upi','cod','net','upi','card'];
      const made = ago.map((d,i)=>{
        const items = []; const n = 1 + (i%3);
        for(let j=0;j<n;j++){
          const p = pool[(i*7+j*5+3)%pool.length];
          if(!items.find(x=>x.id===p.id)) items.push({id:p.id,name:p.name,price:p.price,qty:1+((i+j)%2)});
        }
        const sub = items.reduce((t,x)=>t+x.price*x.qty,0); const del = sub>=499 ? 0 : 40;
        const dt = new Date(Date.now()-d*864e5-(i%5)*36e5);
        const mid = meths[i%meths.length]; const m = PAYS.find(x=>x.id===mid);
        return {id:'SE9'+String(1000+i)+String(i).padStart(2,'0'), user:user.value.name, demo:true, date:dt.toISOString(),
          dateText:dt.toLocaleString('en-IN',{day:'numeric',month:'short',year:'numeric',hour:'numeric',minute:'2-digit'}),
          items, count:items.reduce((t,x)=>t+x.qty,0), subtotal:sub, delivery:del, total:sub+del,
          method:m.id, methodLabel:m.label, paid:m.id!=='cod',
          eta:new Date(dt.getTime()+3*864e5).toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'})};
      });
      orders.value = [...orders.value, ...made];
      say('Sample orders added');
    }
    function clearDemo(){
      if(!user.value) return;
      orders.value = orders.value.filter(o=>!(o.demo && o.user===user.value.name));
      say('Sample orders removed');
    }
    const deliveryDate = new Date(Date.now()+3*864e5).toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short'});

    /* overlays */
    const anyOpen = computed(()=>!!(panel.value||sel.value||gateOpen.value));
    function open_(n){ sel.value=null; panel.value=n; }
    function closeAll(){ if(paying.value) return; if(gateOpen.value){ gateOpen.value=false; } panel.value=null; sel.value=null; }
    onMounted(()=>window.addEventListener('keydown',e=>{ if(e.key==='Escape') closeAll(); }));
    function toGrid(){ const el=document.getElementById('grid'); if(el) el.scrollIntoView({behavior:'smooth'}); }
    function goTop(){ q.value=''; cat.value='All'; window.scrollTo({top:0,behavior:'smooth'}); }

    /* AI assistant */
    function localAnswer(text){
      const m = text.replace(/,/g,'').match(/(\d{3,6})/);
      const budget = m ? +m[1] : Infinity;
      const words = text.toLowerCase().split(/\W+/).filter(w=>w.length>2);
      const base = PRODUCTS.filter(p=>p.price<=budget);
      const hit = base.filter(p=>words.some(w=>(p.name+' '+p.cat).toLowerCase().includes(w)));
      const pick = (hit.length?hit:base).slice(0,4);
      return {
        reply: pick.length ? 'Here are '+pick.length+' picks'+(budget<Infinity?' within '+inr(budget):'')+'. These are basic matches because the AI is unavailable here.' : 'I could not find a match. Try a different budget or category.',
        ids: pick.map(p=>p.id)
      };
    }
    async function ask(text){
      text = (text||'').trim();
      if(!text || aiBusy.value) return;
      chat.value.push({role:'user',text}); aiInput.value=''; aiBusy.value=true;
      scrollAi();
      let out;
      try{
        const c = window.claude;
        const sample = c && c.use ? await c.use('sample') : null;
        if(!sample){ out = localAnswer(text); }
        else{
          const catalogue = PRODUCTS.map(p=>({id:p.id,name:p.name,category:p.cat,price_inr:p.price,rating:p.rating}));
          const history = chat.value.slice(-7,-1).map(m=>m.role+': '+m.text).join('\n');
          const prompt = 'You are the shopping assistant for Shopeasy, an Indian online store. Prices are in Indian rupees. Recommend only products from the catalogue. Keep the reply under 60 words, in plain text, with prices written like ₹1,299. Respond ONLY with JSON in this shape: {"reply": string, "ids": array of up to 4 catalogue ids}.\n\nCatalogue: '+JSON.stringify(catalogue)+'\n\nConversation so far:\n'+history+'\n\nShopper: '+text;
          out = await sample.json(prompt,{cache:false,modelTier:'quick'});
        }
      }catch(e){
        out = localAnswer(text);
        if(e && e.code==='rate_limited') out.reply = 'The AI is busy right now. '+out.reply;
      }
      const ids = Array.isArray(out&&out.ids) ? out.ids : [];
      const items = ids.map(id=>PRODUCTS.find(p=>p.id===id)).filter(Boolean).slice(0,4);
      chat.value.push({role:'ai',text:String((out&&out.reply)||'Here is what I found.'),items});
      aiBusy.value=false; scrollAi();
    }
    function scrollAi(){ nextTick(()=>{ const el=aiScroll.value; if(el) el.scrollTop=el.scrollHeight; }); }

    return {CATS,gateOpen,gateName,user,q,cat,sort,sel,panel,cart,toast,chat,aiInput,aiBusy,aiScroll,quick,
      inr,off,svg,mini,visible,heroItems,showBanner,rails,countdown,slide,openGate,guest,googleDemo,signOut,
      cartItems,cartCount,subtotal,mrpTotal,delivery,add,chg,buyNow,checkout,deliveryDate,
      range,hq,hpay,hsort,openRow,PALETTE,scoped,hasDemo,stats,monthly,insights,history,summary,exportCsv,seedDemo,clearDemo,
      PAYS,BANKS,payMethod,upiId,bank,deliveryDetails,card,paying,payErr,lastOrder,orders,myOrders,payTotal,thumb,fmtNum,fmtExp,payNow,reorder,anyOpen,open_,closeAll,toGrid,goTop,ask};
  }
}
</script>
<style src="./style.css"></style>
