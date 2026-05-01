window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Manuella",
    "idade": 15,
    "data": "2026-05-23",
    "hora": "20:00",
    "endereco": "Av. Dona Clara, 715 Centro"
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Manuella15Anos/music_1777641737220.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Manuella15Anos",
    "seo": {
      "pageTitle": "Convite 15 Anos Manuella",
      "ogTitle": "Você está convidado para os 15 anos da Manuella!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Manuella15Anos/cover_1777641737220.png",
    "aberturaSlides": [],
    "folhaVazia": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Manuella15Anos/folha_1777641737220.jpg",
    "folhaPreenchida": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Manuella15Anos/folha_1777641737220.jpg",
    "musica": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Manuella15Anos/music_1777641737220.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/eGhhQHQJgQPQUD719"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<div class=\"text-left px-1\">\n\n  <!-- ✦ GRID PRESENTES ✦ -->\n  <div class=\"grid grid-cols-2 gap-3\">\n\n    <div class=\"card\">\n      <i class=\"fa-solid fa-shoe-prints\"></i>\n      <span>Calçados<br>Nº 36</span>\n    </div>\n\n    <div class=\"card\">\n      <i class=\"fa-regular fa-gem\"></i>\n      <span>Joias<br>Prata</span>\n    </div>\n\n    <div class=\"card\">\n      <i class=\"fa-solid fa-shirt\"></i>\n      <span>Roupas<br>Tam. P</span>\n    </div>\n\n    <div class=\"card\">\n      <i class=\"fa-solid fa-user\"></i>\n      <span>Calça<br>Tam. 38</span>\n    </div>\n\n    <div class=\"card\">\n      <i class=\"fa-solid fa-dumbbell\"></i>\n      <span>Academia<br>Tam. P</span>\n    </div>\n\n    <div class=\"card\">\n      <i class=\"fa-solid fa-bed\"></i>\n      <span>Pijamas<br>Tam. P</span>\n    </div>\n\n    <div class=\"card\">\n      <i class=\"fa-solid fa-spray-can-sparkles\"></i>\n      <span>Perfumes<br>Adocicados</span>\n    </div>\n\n    <div class=\"card\">\n      <i class=\"fa-solid fa-wand-magic-sparkles\"></i>\n      <span>Maquiagem<br>Tons claros</span>\n    </div>\n\n  </div>\n\n</div>\n\n<style>\n:root{\n  --blue-deep:#0f172a;\n  --blue-main:#2563eb;\n  --blue-soft:#60a5fa;\n  --white:#f8fafc;\n}\n\n/* ✦ CARD ✦ */\n.card{\n  background: linear-gradient(145deg, rgba(37,99,235,0.18), rgba(255,255,255,0.7));\n  backdrop-filter: blur(14px);\n  border:1px solid rgba(255,255,255,0.6);\n  border-radius:20px;\n  padding:15px;\n  display:flex;\n  align-items:center;\n  gap:10px;\n  position:relative;\n  overflow:hidden;\n  animation: float 7s ease-in-out infinite;\n}\n\n.card:nth-child(2){animation-delay:1s}\n.card:nth-child(3){animation-delay:2s}\n.card:nth-child(4){animation-delay:3s}\n.card:nth-child(5){animation-delay:4s}\n.card:nth-child(6){animation-delay:5s}\n.card:nth-child(7){animation-delay:6s}\n.card:nth-child(8){animation-delay:7s}\n\n/* brilho suave branco */\n.card::after{\n  content:\"\";\n  position:absolute;\n  inset:0;\n  background:linear-gradient(120deg, transparent, rgba(255,255,255,0.8), transparent);\n  animation: shine 6s infinite;\n}\n\n/* ✦ ÍCONE ✦ */\n.card i{\n  color:var(--blue-main);\n  font-size:18px;\n  text-shadow:0 0 10px rgba(37,99,235,0.4);\n}\n\n/* ✦ TEXTO ✦ */\n.card span{\n  font-size:11px;\n  color:var(--blue-deep);\n  line-height:1.3;\n  font-weight:500;\n}\n\n/* ✦ ANIMAÇÕES ✦ */\n@keyframes float{\n  0%,100%{transform:translateY(0)}\n  50%{transform:translateY(-5px)}\n}\n\n@keyframes shine{\n  0%{transform:translateX(-100%);opacity:0}\n  50%{opacity:1}\n  100%{transform:translateX(100%);opacity:0}\n}\n</style>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.gf-wrap{\n  position:relative;\n  padding:28px 20px 24px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',Georgia,serif;\n}\n\n/* Sparkles */\n.gf-spark{\n  position:absolute;\n  width:3px;height:3px;\n  border-radius:50%;\n  background:rgba(192,210,248,0.8);\n  pointer-events:none;\n  animation:gfSparkRise linear infinite;\n}\n@keyframes gfSparkRise{\n  0%{transform:translateY(0) scale(1);opacity:0}\n  15%{opacity:1}\n  85%{opacity:.4}\n  100%{transform:translateY(-110px) scale(.2);opacity:0}\n}\n\n/* Cards */\n.gf-grid{\n  display:grid;\n  grid-template-columns:1fr;\n  gap:12px;\n  position:relative;\n  z-index:10;\n}\n\n.gf-card{\n  background:linear-gradient(140deg,rgba(26,58,120,.32),rgba(10,22,70,.22));\n  border:1px solid rgba(192,210,240,.28);\n  border-radius:18px;\n  padding:16px;\n  display:flex;\n  align-items:flex-start;\n  gap:14px;\n  animation:gfCardIn .6s ease both;\n  backdrop-filter:blur(6px);\n  -webkit-backdrop-filter:blur(6px);\n}\n\n@keyframes gfCardIn{\n  from{opacity:0;transform:translateY(15px)}\n  to{opacity:1;transform:translateY(0)}\n}\n\n.gf-icon{\n  width:44px;height:44px;\n  border-radius:12px;\n  background:linear-gradient(145deg,rgba(80,140,240,.25),rgba(26,58,138,.35));\n  display:flex;align-items:center;justify-content:center;\n  font-size:16px;\n  color:#dbeafe;\n  flex-shrink:0;\n}\n\n.gf-title{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.15em;\n  text-transform:uppercase;\n  color:#bcd0f5;\n  margin-bottom:4px;\n}\n\n.gf-text{\n  font-size:14px;\n  color:#eef2ff;\n  line-height:1.45;\n  white-space:pre-line;\n}\n\n/* Stars */\n.gf-star{\n  position:absolute;\n  color:rgba(192,215,250,.5);\n  font-size:10px;\n  animation:gfStarPop 2.5s ease-in-out infinite;\n}\n@keyframes gfStarPop{\n  0%,100%{transform:scale(0);opacity:0}\n  50%{transform:scale(1);opacity:1}\n}\n</style>\n\n<div class=\"gf-wrap\">\n\n  <!-- estrelas -->\n  <i class=\"gf-star\" style=\"top:10%;left:5%;\">✦</i>\n  <i class=\"gf-star\" style=\"top:25%;right:6%;\">✧</i>\n  <i class=\"gf-star\" style=\"bottom:20%;left:8%;\">✦</i>\n  <i class=\"gf-star\" style=\"bottom:8%;right:12%;\">✧</i>\n\n  <div class=\"gf-grid\">\n\n    <div class=\"gf-card\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-clock\"></i></div>\n      <div>\n        <div class=\"gf-title\">Chegue no horário</div>\n        <div class=\"gf-text\">Sua presença pontual é muito importante para nós!</div>\n      </div>\n    </div>\n\n    <div class=\"gf-card\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-heart\"></i></div>\n      <div>\n        <div class=\"gf-title\">Convidado não convida</div>\n        <div class=\"gf-text\">Sinta-se honrado se este convite chegou a você!</div>\n      </div>\n    </div>\n\n    <div class=\"gf-card\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-droplet\"></i></div>\n      <div>\n        <div class=\"gf-title\">Paleta azul</div>\n        <div class=\"gf-text\">A palheta Azul é exclusivamente da Debutante! ⚪️🔵</div>\n      </div>\n    </div>\n\n    <div class=\"gf-card\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-calendar-check\"></i></div>\n      <div>\n        <div class=\"gf-title\">Confirmação</div>\n        <div class=\"gf-text\">Se não puder comparecer avise com 15 dias de antecedência!</div>\n      </div>\n    </div>\n\n    <div class=\"gf-card\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-camera\"></i></div>\n      <div>\n        <div class=\"gf-title\">Fotógrafos</div>\n        <div class=\"gf-text\">Não atrapalhe os fotógrafos!</div>\n      </div>\n    </div>\n\n    <div class=\"gf-card\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-handshake\"></i></div>\n      <div>\n        <div class=\"gf-title\">Despedida</div>\n        <div class=\"gf-text\">Não vá embora sem se despedir dos anfitriões da festa!</div>\n      </div>\n    </div>\n\n    <div class=\"gf-card\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-champagne-glasses\"></i></div>\n      <div>\n        <div class=\"gf-title\">Divirta-se</div>\n        <div class=\"gf-text\">Lembre-se: Divertir até o último momento é essencial!</div>\n      </div>\n    </div>\n\n    <div class=\"gf-card\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-star\"></i></div>\n      <div>\n        <div class=\"gf-title\">Celebração</div>\n        <div class=\"gf-text\">Estamos ansiosas para celebrar este momento especial com você!</div>\n      </div>\n    </div>\n\n    <div class=\"gf-card\">\n      <div class=\"gf-icon\"><i class=\"fa-solid fa-share-nodes\"></i></div>\n      <div>\n        <div class=\"gf-title\">Compartilhe</div>\n        <div class=\"gf-text\">Compartilhe conosco todo momento que registrar.</div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<script>\n(function(){\n  var wrap = document.querySelector('.gf-wrap');\n\n  for(var i=0;i<12;i++){\n    var s=document.createElement('div');\n    s.className='gf-spark';\n    var sz=1.5+Math.random()*3;\n    s.style.cssText='width:'+sz+'px;height:'+sz+'px;left:'+(Math.random()*90)+'%;bottom:'+(Math.random()*20)+'%;animation-duration:'+(3+Math.random()*4)+'s;animation-delay:'+(Math.random()*5)+'s';\n    wrap.appendChild(s);\n  }\n})();\n</script>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5534999537583",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Galeria de Fotos",
      "icone": "fa-solid fa-star",
      "conteudo": "https://neon-sherbet-9bb7b6.netlify.app/"
    }
  ],
  "upsell": {
    "galeriaFotos": false,
    "saveTheDate": false,
    "lembrete": true
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": false,
    "buttonColor": "#024aac",
    "buttonSize": 1,
    "isButtonFilled": true,
    "shadowStyle": "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)",
    "brilhos": {
      "esquerdo": true,
      "direito": true,
      "centro": true
    }
  }
};
