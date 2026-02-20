  function trocarCategoria(categoria){
  const paginas = {
    home: "veridiana.html",
    brincos: "brincos.html",
    tornozeleiras: "tornozeleiras.html",
    colares: "colares.html",
    pulseiras: "pulseiras.html",
    exclusivos: "exclusivos.html"
  };

  if(paginas[categoria]){
    window.location.href = paginas[categoria];
  }
}  
    // ✅ Troque para o número real da loja (somente dígitos). Ex: 5511999999999
    const WHATS_NUMBER = "SEU_NUMERO_AQUI";

    // ✅ Produtos (planilha) + Material (da sua lista original)
    // ✅ Imagens: images/{ID}.jpg  (ex: images/4013460.jpg)
    const PRODUCTS = [
      { id:"4013460", category:"Brincos", name:"Leque zircônia incolor", price:39.00, material:"Ouro", img:"imagens/4013460.jpg", active:true },
      { id:"4913083", category:"Brincos", name:"Triângulo zircônias incolor", price:39.00, material:"Ouro", img:"imagens/4913083.jpg", active:true },
      { id:"4670385", category:"Brincos", name:"Chave zircônias incolor", price:39.00, material:"Ouro", img:"imagens/4670385.jpg", active:true },
      { id:"4300113", category:"Brincos", name:"Estrela cadente", price:42.00, material:"Ródio", img:"imagens/4300113.jpg", active:true },
      { id:"5380338", category:"Brincos", name:"Cruz zircônias incolor", price:46.00, material:"Ródio", img:"imagens/5380338.jpg", active:true },
      { id:"3029272", category:"Brincos", name:"Ponto luz zircônia sky blue", price:49.00, material:"Ouro", img:"imagens/3029272.jpg", active:true },
      { id:"5284809", category:"Brincos", name:"Ponto luz cristal incolor", price:49.00, material:"Ouro", img:"imagens/5284809.jpg", active:true },
      { id:"5203570", category:"Brincos", name:"Argola zircônia incolor", price:49.00, material:"Ouro", img:"imagens/5203570.jpg", active:true },
      { id:"5052746", category:"Brincos", name:"Mini argola zircônias incolor aplique ródio", price:49.00, material:"Ouro", img:"imagens/5052746.jpg", active:true },
      { id:"3961619", category:"Brincos", name:"Gota zircônia cereja três garras", price:49.00, material:"Ródio", img:"imagens/3961619.jpg", active:true },
      { id:"4010190", category:"Brincos", name:"Coração zircônias incolor", price:49.00, material:"Ouro", img:"imagens/4010190.jpg", active:true },
      { id:"2705371", category:"Brincos", name:"Gota zircônia cereja", price:53.00, material:"Ouro", img:"imagens/2705371.jpg", active:true },
      { id:"5444186", category:"Brincos", name:"Cruz zircônias incolor", price:54.00, material:"Ouro", img:"imagens/5444186.jpg", active:true },
      { id:"5444771", category:"Brincos", name:"Cruz zircônias coloridas", price:54.00, material:"Ródio", img:"imagens/5444771.jpg", active:true },
      { id:"1232275", category:"Brincos", name:"Olho cílios zircônia", price:58.00, material:"Ouro", img:"imagens/1232275.jpg", active:true },
      { id:"5456153", category:"Brincos", name:"Quatro esferas", price:59.00, material:"Ouro", img:"imagens/5456153.jpg", active:true },
      { id:"2217803", category:"Brincos", name:"Trevo espelhado", price:59.00, material:"Ouro", img:"imagens/2217803.jpg", active:true },
      { id:"5466356", category:"Brincos", name:"Flor zircônias incolor", price:59.00, material:"Ouro", img:"imagens/5466356.jpg", active:true },
      { id:"5272569", category:"Brincos", name:"Lua zircônias incolor", price:59.00, material:"Ouro", img:"imagens/5272569.jpg", active:true },
      { id:"5492153", category:"Brincos", name:"Libélula zircônias incolor", price:59.00, material:"Ouro", img:"imagens/5492153.jpg", active:true },
      { id:"4282646", category:"Brincos", name:"Quadrado liso", price:59.00, material:"Ródio", img:"imagens/4282646.jpg", active:true },
      { id:"3802423", category:"Brincos", name:"Coração zircônia incolor", price:61.00, material:"Ouro", img:"imagens/3802423.jpg", active:true },
      { id:"4598864", category:"Brincos", name:"Argola estrelas zircônias incolor", price:62.00, material:"Ouro", img:"imagens/4598864.jpg", active:true },
      { id:"3970456", category:"Brincos", name:"Mini argola zircônias incolor", price:64.00, material:"Ródio", img:"imagens/3970456.jpg", active:true },
      { id:"2755453", category:"Brincos", name:"Gota zircônia cereja", price:69.00, material:"Ouro", img:"imagens/2755453.jpg", active:true },
      { id:"3752875", category:"Brincos", name:"Quadrado zircônia incolor", price:69.00, material:"Ouro", img:"imagens/3752875.jpg", active:true },
      { id:"4386133", category:"Brincos", name:"Redondo zircônia turmalina fusion", price:69.00, material:"Ródio", img:"imagens/4386133.jpg", active:true },
      { id:"4540960", category:"Brincos", name:"Argola seis zircônias incolor", price:69.00, material:"Ouro", img:"imagens/4540960.jpg", active:true },
      { id:"2153660", category:"Brincos", name:"Coração esmaltado vermelho", price:70.00, material:"Ouro", img:"imagens/2153660.jpg", active:true },
      { id:"2519539", category:"Brincos", name:"Concha zircônias incolor", price:70.00, material:"Ouro", img:"imagens/2519539.jpg", active:true },
      { id:"3008219", category:"Brincos", name:"Argola zircônia esmeralda", price:74.00, material:"Ouro", img:"imagens/3008219.jpg", active:true },
      { id:"4294327", category:"Brincos", name:"Basiquinhos triângulos vazados crescentes", price:74.00, material:"Ouro", img:"imagens/4294327.jpg", active:true },
      { id:"4266997", category:"Brincos", name:"Coração origami", price:79.00, material:"Ouro", img:"imagens/4266997.jpg", active:true },
      { id:"5107450", category:"Brincos", name:"Argola triângulo zircônias incolor", price:79.00, material:"Ouro", img:"imagens/5107450.jpg", active:true },
      { id:"5381117", category:"Brincos", name:"Argola curva lisa zircônias incolor", price:79.00, material:"Ouro", img:"imagens/5381117.jpg", active:true },
      { id:"4771001", category:"Brincos", name:"Ponto luz zircônia incolor", price:79.00, material:"Ródio", img:"imagens/4771001.jpg", active:true },
      { id:"5314688", category:"Brincos", name:"Argola detalhes penduricalho cruz", price:89.00, material:"Ouro", img:"imagens/5314688.jpg", active:true },
      { id:"4233659", category:"Brincos", name:"Dual círculo liso", price:89.00, material:"Ouro", img:"imagens/4233659.jpg", active:true },
      { id:"3225200", category:"Brincos", name:"Argola quadrada zircônias safira incolor", price:89.00, material:"Ouro", img:"imagens/3225200.jpg", active:true },
      { id:"4960803", category:"Brincos", name:"Linhas trançadas zircônias incolor", price:89.00, material:"Ródio", img:"imagens/4960803.jpg", active:true },
      { id:"5394760", category:"Brincos", name:"Argola detalhes vazados", price:89.00, material:"Ouro", img:"imagens/5394760.jpg", active:true },
      { id:"5567587", category:"Brincos", name:"Redondo zircônias safira incolor", price:89.00, material:"Ródio", img:"imagens/5567587.jpg", active:true },
      { id:"3121217", category:"Brincos", name:"Argola cruz cravejada", price:90.00, material:"Ródio", img:"imagens/3121217.jpg", active:true },
      { id:"4864779", category:"Brincos", name:"Gomos liso", price:99.00, material:"Ouro", img:"imagens/4864779.jpg", active:true },
      { id:"3549124", category:"Brincos", name:"Coração zircônia incolor curvado", price:99.00, material:"Ouro", img:"imagens/3549124.jpg", active:true },
      { id:"4852275", category:"Brincos", name:"Minimalista detalhes zircônias incolor", price:119.00, material:"Ouro", img:"imagens/4852275.jpg", active:true },
      { id:"5470707", category:"Brincos", name:"Argola pingente coração liso", price:119.00, material:"Ouro", img:"imagens/5470707.jpg", active:true },
      { id:"4292341", category:"Brincos", name:"Gota espelhada", price:119.00, material:"Ródio", img:"imagens/4292341.jpg", active:true },
      { id:"5095432", category:"Brincos", name:"Formato oval torcido", price:119.00, material:"Ródio", img:"imagens/5095432.jpg", active:true },
      { id:"4921909", category:"Brincos", name:"Botton liso", price:129.00, material:"Ródio", img:"imagens/4921909.jpg", active:true },
      { id:"4819399", category:"Brincos", name:"Ear hook duplo liso", price:129.00, material:"Ródio", img:"imagens/4819399.jpg", active:true },
      { id:"4822418", category:"Brincos", name:"Argola orgânica", price:129.00, material:"Ródio", img:"imagens/4822418.jpg", active:true },
      { id:"4798813", category:"Brincos", name:"Curvado liso", price:139.00, material:"Ouro", img:"imagens/4798813.jpg", active:true },
      { id:"4830737", category:"Brincos", name:"Zircônias incolor", price:139.00, material:"Ouro", img:"imagens/4830737.jpg", active:true },
      { id:"2432003", category:"Brincos", name:"Coração cristal turmalina leitosa entorno zircônias black", price:156.00, material:"Ródio", img:"imagens/2432003.jpg", active:true },
      { id:"5585580", category:"Brincos", name:"Duo argolas quadradas zircônia incolor", price:159.00, material:"Ouro", img:"imagens/5585580.jpg", active:true },
      { id:"3419594", category:"Brincos", name:"Argola triangular detalhes", price:169.00, material:"Ouro", img:"imagens/3419594.jpg", active:true },
      { id:"4913646", category:"Brincos", name:"Argola três fios detalhe coração", price:195.00, material:"Ródio", img:"imagens/4913646.jpg", active:true },
      { id:"1178920", category:"Brincos", name:"Base gota entorno zircônias cristais morganite", price:212.00, material:"Ródio", img:"imagens/1178920.jpg", active:true },
    ].filter(p => p.active);

    // Carrinho em memória + localStorage
    const CART_KEY = "vq_cart";
    let cart = loadCart();
    let currentProduct = null;

    const $ = (id) => document.getElementById(id);

    function formatBRL(value){
      return value.toLocaleString("pt-BR", { style:"currency", currency:"BRL" });
    }
    function loadCart(){
      try{
        const raw = localStorage.getItem(CART_KEY);
        return raw ? JSON.parse(raw) : {};
      }catch{
        return {};
      }
    }
    function saveCart(){
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    }
    function cartCount(){
      return Object.values(cart).reduce((acc, q) => acc + q, 0);
    }
    function cartTotal(){
      let total = 0;
      for (const [id, qty] of Object.entries(cart)){
        const p = PRODUCTS.find(x => x.id === id);
        if (p) total += p.price * qty;
      }
      return total;
    }
    function updateBadges(){
      const count = cartCount();
      $("cartCountTop").textContent = count;
      $("cartCountFab").textContent = count;
      $("cartTotal").textContent = formatBRL(cartTotal());
    }

    function buildWhatsLink(text){
      const encoded = encodeURIComponent(text);
      return `https://wa.me/${WHATS_NUMBER}?text=${encoded}`;
    }

    function renderCatalog(){
      const catalog = $("catalog");
      catalog.innerHTML = PRODUCTS.map(p => `
        <article class="product" data-id="${p.id}">
          <img class="product__img" src="${p.img}" alt="${p.name}"
            onerror="this.outerHTML='<div class=&quot;img-missing&quot;>IMAGEM NÃO ENCONTRADA<br>ID ${p.id}</div>'">
          <div class="product__body">
            <h3 class="product__name">${p.name}</h3>
            <p class="product__meta">${p.material} • ID ${p.id}</p>
            <p class="product__price">${formatBRL(p.price)}</p>
          </div>
          <div class="product__actions">
            <button class="btn btn-primary" type="button" data-add="${p.id}">Adicionar ao carrinho</button>
            <button class="btn btn-outline" type="button" data-view="${p.id}">Ver detalhes</button>
          </div>
        </article>
      `).join("");

      catalog.querySelectorAll("button[data-add]").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          addToCart(e.currentTarget.dataset.add);
        });
      });
      catalog.querySelectorAll("button[data-view]").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.stopPropagation();
          openProduct(e.currentTarget.dataset.view);
        });
      });
      catalog.querySelectorAll(".product").forEach(card => {
        card.addEventListener("click", () => openProduct(card.dataset.id));
      });
    }

    function openProduct(id){
      const p = PRODUCTS.find(x => x.id === id);
      if (!p) return;
      currentProduct = p;

      $("modalImg").src = p.img;
      $("modalImg").alt = p.name;
      $("modalTitle").textContent = p.name;
      $("modalId").textContent = p.id;
      $("modalMaterial").textContent = p.material;
      $("modalPrice").textContent = formatBRL(p.price);

      const msg = `Olá! Quero reservar este brinco:\n• ${p.name} (ID ${p.id})\n• ${p.material}\n• ${formatBRL(p.price)}\n\nPode me ajudar? ✨`;
      $("buyWhatsBtn").href = buildWhatsLink(msg);

      $("overlay").style.display = "flex";
    }
    function closeProduct(){
      $("overlay").style.display = "none";
      currentProduct = null;
    }

    function addToCart(productId){
      cart[productId] = (cart[productId] || 0) + 1;
      saveCart();
      updateBadges();
      renderCart();
    }
    function changeQty(productId, delta){
      const next = (cart[productId] || 0) + delta;
      if (next <= 0) delete cart[productId];
      else cart[productId] = next;

      saveCart();
      updateBadges();
      renderCart();
    }

    function renderCart(){
      const list = $("cartList");
      const entries = Object.entries(cart);

      if (entries.length === 0){
        list.innerHTML = `<p style="text-align:center;color:#666;margin:14px 0;">Seu carrinho está vazio.</p>`;
        $("checkoutWhats").href = buildWhatsLink("Olá! Quero ver opções de brincos ✨");
        return;
      }

      list.innerHTML = entries.map(([id, qty]) => {
        const p = PRODUCTS.find(x => x.id === id);
        if (!p) return "";
        return `
          <div class="cart-item">
            <img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'">
            <div>
              <p class="cart-item__name">${p.name}</p>
              <p class="cart-item__meta">ID ${p.id} • ${p.material} • ${formatBRL(p.price)}</p>
            </div>
            <div class="qty">
              <button type="button" data-act="dec" data-id="${p.id}">−</button>
              <strong>${qty}</strong>
              <button type="button" data-act="inc" data-id="${p.id}">+</button>
            </div>
          </div>
        `;
      }).join("");

      list.querySelectorAll("button[data-act]").forEach(btn => {
        btn.addEventListener("click", (e) => {
          const id = e.currentTarget.dataset.id;
          const act = e.currentTarget.dataset.act;
          changeQty(id, act === "inc" ? 1 : -1);
        });
      });

      const lines = entries.map(([id, qty]) => {
        const p = PRODUCTS.find(x => x.id === id);
        return `• ${qty}x ${p.name} (ID ${p.id}) — ${formatBRL(p.price)} — ${p.material}`;
      }).join("\n");

      const msg =
`Olá! Quero reservar estes brincos ✨
${lines}

Total: ${formatBRL(cartTotal())}
Pode confirmar disponibilidade?`;

      $("checkoutWhats").href = buildWhatsLink(msg);
    }

    function openCart(){
      $("drawer").style.display = "flex";
      renderCart();
    }
    function closeCart(){
      $("drawer").style.display = "none";
    }

    // Eventos
    $("closeModal").addEventListener("click", closeProduct);
    $("continueBtn").addEventListener("click", closeProduct);
    $("overlay").addEventListener("click", (e) => { if (e.target.id === "overlay") closeProduct(); });

    $("addToCartBtn").addEventListener("click", () => { if (currentProduct) addToCart(currentProduct.id); });

    $("openCartFab").addEventListener("click", openCart);
    $("openCartTop").addEventListener("click", openCart);
    $("closeCart").addEventListener("click", closeCart);
    $("drawer").addEventListener("click", (e) => { if (e.target.id === "drawer") closeCart(); });

    // Start
    renderCatalog();
    updateBadges();
  