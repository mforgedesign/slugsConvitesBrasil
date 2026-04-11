window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Sophia Thomaz",
    "idade": 15,
    "data": "62026-12-13",
    "hora": "18:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "Dourado, Verde, Tiffany, Azul Claro",
    "tema": "Jasmine (Alladin)",
    "musica": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/SophiaThomaz15Anos/music_1775925747575.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "SophiaThomaz15Anos",
    "seo": {
      "pageTitle": "Sophia Thomaz - 15 Anos",
      "ogTitle": "Você está convidado para os 15 anos da Sophia!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/SophiaThomaz15Anos/cover_1775925747575.jpg",
    "aberturaSlides": [
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/SophiaThomaz15Anos/slide1_1775925747575.mp4",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/SophiaThomaz15Anos/slide2_1775925747575.jpg",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/SophiaThomaz15Anos/slide3_1775925747575.mp4",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/SophiaThomaz15Anos/slide4_1775925747575.mp4",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/SophiaThomaz15Anos/slide5_1775925747575.jpg"
    ],
    "folhaVazia": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/SophiaThomaz15Anos/folha_1775925747575.jpg",
    "folhaPreenchida": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/SophiaThomaz15Anos/folha_1775925747575.jpg",
    "musica": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/SophiaThomaz15Anos/music_1775925747575.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/6XGs7a6ojFRA233W6"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<!-- FONTS -->\n<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link rel=\"preconnect\" href=\"https://fonts.gstatic.com\" crossorigin>\n<link href=\"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Jost:wght@300;400;500&family=JetBrains+Mono:wght@400;500&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\n\n:root {\n  --cream: #fdf8f0;\n  --warm-white: #fffcf7;\n  --rose: #d4887a;\n  --rose-deep: #b5604f;\n  --gold: #c9a96e;\n  --gold-deep: #9a7540;\n  --teal: #4a7c74;\n  --charcoal: #2a2420;\n  --muted: #8a7d75;\n  --border: rgba(201,169,110,0.25);\n}\n\n.wrap {\n  width: 100%;\n  max-width: 420px;\n  margin: 0 auto;\n  font-family: 'Jost', sans-serif;\n}\n\n/* HEADER */\n.header { text-align: center; margin-bottom: 32px; }\n.header-eyebrow {\n  font-size: 12px;\n  letter-spacing: .30em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin-bottom: 10px;\n}\n.header-sub { font-size: 14px; color: var(--muted); }\n\n/* SECTION LABEL */\n.section-label {\n  font-size: 11px;\n  font-weight: 500;\n  letter-spacing: .28em;\n  text-transform: uppercase;\n  color: var(--gold);\n  margin: 22px 0 12px;\n}\n\n/* CARDS */\n.grid { display: grid; gap: 14px; }\n\n.card {\n  background: var(--warm-white);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 20px;\n}\n\n.card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n  font-size: 18px;\n}\n.card-icon.rose-theme { background: #f9ede9; color: var(--rose-deep); }\n.card-icon.gold-theme { background: #fdf5e4; color: var(--gold-deep); }\n.card-icon.teal-theme { background: #eaf4f2; color: var(--teal); }\n\n.card-label {\n  font-size: 11px;\n  letter-spacing: .22em;\n  text-transform: uppercase;\n  color: var(--muted);\n  margin-bottom: 10px;\n}\n\n.card-items {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n\n.card-item {\n  font-family: 'Cormorant Garamond', serif;\n  font-size: 20px;\n  color: var(--charcoal);\n  display: flex;\n  gap: 6px;\n}\n.card-item::before {\n  content: '·';\n  color: var(--gold);\n}\n.card-item-note {\n  font-size: 14px;\n  font-style: italic;\n  color: var(--muted);\n}\n\n/* PIX */\n.pix-section { margin-top: 28px; }\n.pix-card {\n  background: var(--warm-white);\n  border: 1px solid var(--border);\n  border-radius: 20px;\n  padding: 24px;\n  text-align: center;\n}\n\n.pix-label {\n  font-size: 11px;\n  letter-spacing: .28em;\n  text-transform: uppercase;\n  color: var(--muted);\n  margin-bottom: 8px;\n}\n\n.pix-key {\n  font-family: 'JetBrains Mono', monospace;\n  font-size: 30px;\n  letter-spacing: .04em;\n  font-variant-numeric: tabular-nums;\n  font-feature-settings: \"tnum\" 1;\n  color: var(--charcoal);\n}\n\n/* BUTTON */\n.btn-copy {\n  width: 100%;\n  margin-top: 12px;\n  border: none;\n  border-radius: 16px;\n  padding: 18px;\n  font-size: 13px;\n  letter-spacing: .20em;\n  text-transform: uppercase;\n  color: #fff;\n  background: linear-gradient(130deg, var(--rose-deep), var(--gold));\n  cursor: pointer;\n}\n.btn-copy.copied {\n  background: linear-gradient(130deg, var(--teal), #2d9985);\n}\n</style>\n\n<div class=\"wrap\">\n\n  <div class=\"header\">\n    <div class=\"header-eyebrow\">Lista de presentes</div>\n    <div class=\"header-sub\">Escolha algo que me faça sorrir ✦</div>\n  </div>\n\n  <!-- MODA -->\n  <div class=\"section-label\">Moda & Estilo</div>\n  <div class=\"grid\">\n    <div class=\"card\">\n      <div class=\"card-icon rose-theme\"><i class=\"fa-solid fa-shirt\"></i></div>\n      <div class=\"card-label\">Roupas</div>\n      <div class=\"card-items\">\n        <div class=\"card-item\">Calça <span class=\"card-item-note\">36</span></div>\n        <div class=\"card-item\">Blusas <span class=\"card-item-note\">P</span></div>\n        <div class=\"card-item\">Vestido <span class=\"card-item-note\">tamanho único</span></div>\n        <div class=\"card-item\">Cropped</div>\n        <div class=\"card-item\">Short <span class=\"card-item-note\">36</span></div>\n      </div>\n    </div>\n\n    <div class=\"card\">\n      <div class=\"card-icon gold-theme\"><i class=\"fa-solid fa-gem\"></i></div>\n      <div class=\"card-label\">Acessórios</div>\n      <div class=\"card-items\">\n        <div class=\"card-item\">Pulseiras</div>\n        <div class=\"card-item\">Colares</div>\n        <div class=\"card-item\">Anéis <span class=\"card-item-note\">13–15, prata</span></div>\n      </div>\n    </div>\n  </div>\n\n  <!-- BELEZA -->\n  <div class=\"section-label\">Beleza & Cuidados</div>\n  <div class=\"grid\">\n    <div class=\"card\">\n      <div class=\"card-icon teal-theme\"><i class=\"fa-solid fa-wand-magic-sparkles\"></i></div>\n      <div class=\"card-label\">Mimos de beleza</div>\n      <div class=\"card-items\">\n        <div class=\"card-item\">Body splashes</div>\n        <div class=\"card-item\">Perfumes <span class=\"card-item-note\">Boticário, Wepink</span></div>\n        <div class=\"card-item\">Maquiagens</div>\n        <div class=\"card-item\">Hidratantes</div>\n      </div>\n    </div>\n  </div>\n\n  <!-- PIX -->\n  <div class=\"pix-section\">\n    <div class=\"pix-card\">\n      <div class=\"pix-label\">Chave Pix</div>\n      <div class=\"pix-key\">58645820854</div>\n    </div>\n\n    <button class=\"btn-copy\" id=\"copyBtn\" onclick=\"copyPix()\">\n      <i class=\"fa-regular fa-copy\" id=\"btnIcon\"></i>\n      <span id=\"btnText\">Copiar Chave Pix</span>\n    </button>\n  </div>\n\n</div>\n\n<script>\nfunction copyPix() {\n  const btn = document.getElementById('copyBtn');\n  const icon = document.getElementById('btnIcon');\n  const text = document.getElementById('btnText');\n\n  navigator.clipboard.writeText('58645820854').then(() => {\n    btn.classList.add('copied');\n    icon.className = 'fa-solid fa-check';\n    text.textContent = 'Copiado!';\n    setTimeout(() => {\n      btn.classList.remove('copied');\n      icon.className = 'fa-regular fa-copy';\n      text.textContent = 'Copiar Chave Pix';\n    }, 2000);\n  });\n}\n</script>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:wght@400;500;600&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.jm-wrap{\n  display:flex;\n  justify-content:center;\n  padding:26px 16px;\n  background:\n    radial-gradient(circle at top, rgba(120,220,200,.22), transparent 40%),\n    radial-gradient(circle at bottom, rgba(110,170,255,.22), transparent 45%),\n    linear-gradient(160deg,#f7fffd,#eef6ff);\n  font-family:'Cormorant Garamond',serif;\n}\n\n.jm-card{\n  width:100%;\n  max-width:430px;\n  padding:26px 22px;\n  border-radius:28px;\n  text-align:center;\n  position:relative;\n  background:linear-gradient(145deg,rgba(255,255,255,.82),rgba(255,255,255,.55));\n  border:1px solid rgba(60,160,150,.25);\n  box-shadow:0 18px 60px rgba(0,80,90,.12);\n  overflow:hidden;\n}\n\n.jm-card::before{\n  content:\"\";\n  position:absolute;\n  inset:0;\n  background:\n    linear-gradient(135deg,rgba(212,175,55,.14),transparent 40%),\n    linear-gradient(315deg,rgba(100,210,190,.12),transparent 45%);\n  pointer-events:none;\n}\n\n.jm-title{\n  font-family:'Cinzel',serif;\n  font-size:26px;\n  margin-bottom:14px;\n  background:linear-gradient(120deg,#0f6b6d,#6fcfba,#d4af37);\n  -webkit-background-clip:text;\n  -webkit-text-fill-color:transparent;\n}\n\n.jm-divider{\n  width:90px;\n  height:2px;\n  margin:0 auto 18px;\n  background:linear-gradient(90deg,#6fcfba,#d4af37);\n  border-radius:99px;\n}\n\n.jm-item{\n  display:flex;\n  align-items:flex-start;\n  gap:12px;\n  padding:12px 14px;\n  margin-bottom:12px;\n  border-radius:14px;\n  background:linear-gradient(140deg,rgba(120,220,200,.12),rgba(110,170,255,.10));\n  border:1px solid rgba(212,175,55,.25);\n  color:#264c4c;\n  font-size:15px;\n}\n\n.jm-item i{\n  color:#d4af37;\n  margin-top:3px;\n  font-size:15px;\n}\n\n.jm-footer{\n  margin-top:14px;\n  font-size:15px;\n  color:#2e5a57;\n}\n</style>\n\n<div class=\"jm-wrap\">\n  <div class=\"jm-card\">\n\n    <div class=\"jm-title\">Manual do Convidado</div>\n    <div class=\"jm-divider\"></div>\n\n    <div class=\"jm-item\"><i class=\"fa-solid fa-envelope\"></i>Confirme sua presença</div>\n    <div class=\"jm-item\"><i class=\"fa-solid fa-user-group\"></i>Convidado não convida</div>\n    <div class=\"jm-item\"><i class=\"fa-solid fa-clock\"></i>Não se atrase, seja pontual</div>\n    <div class=\"jm-item\"><i class=\"fa-solid fa-palette\"></i>Não use as cores roxo, lilás e escuro</div>\n    <div class=\"jm-item\"><i class=\"fa-solid fa-camera\"></i>Não atrapalhe o fotógrafo</div>\n    <div class=\"jm-item\"><i class=\"fa-solid fa-cake-candles\"></i>Aguarde a liberação da mesa de doces</div>\n    <div class=\"jm-item\"><i class=\"fa-solid fa-star\"></i>Aproveite bastante</div>\n\n    <div class=\"jm-footer\">\n      Celebre cada momento com alegria ✨\n    </div>\n\n  </div>\n</div>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511981429958",
      "rsvpConfig": {
        "exibirNome": true,
        "exibirWhatsapp": false,
        "exibirAcompanhantes": false
      }
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
    "buttonColor": "#114452",
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
