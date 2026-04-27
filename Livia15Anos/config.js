window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Lívia",
    "idade": 15,
    "data": "2026-07-25",
    "hora": "20:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Livia15Anos/music_1777312606200.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Livia15Anos",
    "seo": {
      "pageTitle": "",
      "ogTitle": "Você está convidado para os 15 anos da Lívia!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Livia15Anos/cover_1777312606200.jpg",
    "aberturaSlides": [
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Livia15Anos/slide1_1777312606200.mp4",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Livia15Anos/slide2_1777312606200.mp4",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Livia15Anos/slide3_1777312606200.mp4"
    ],
    "folhaVazia": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Livia15Anos/folha_1777312606200.jpg",
    "folhaPreenchida": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Livia15Anos/folha_1777312606200.jpg",
    "musica": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Livia15Anos/music_1777312606200.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/Wt8fv8UVjrrxiLVo7"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "<div class=\"text-left font-[Playfair_Display]\">\n\n  <!-- GRID DE PRESENTES -->\n  <div class=\"grid grid-cols-2 gap-4 mb-7\">\n\n    <div class=\"gift-card\">\n      <i class=\"fa-solid fa-spray-can-sparkles\"></i>\n      <span>Perfumes doces<br><small>Boticário & Virgínia</small></span>\n    </div>\n\n    <div class=\"gift-card\">\n      <i class=\"fa-solid fa-gem\"></i>\n      <span>Presentes delicados<br><small>Femininos</small></span>\n    </div>\n\n    <div class=\"gift-card\">\n      <i class=\"fa-solid fa-heart\"></i>\n      <span>Itens românticos<br><small>Rosa & Soft</small></span>\n    </div>\n\n    <div class=\"gift-card\">\n      <i class=\"fa-solid fa-shirt\"></i>\n      <span>Roupas estilosas<br><small>Elegantes</small></span>\n    </div>\n\n  </div>\n\n  <!-- CARD PIX -->\n  <div class=\"pix-card\">\n    <div class=\"glow\"></div>\n\n    <p class=\"label\">Chave PIX</p>\n    <p class=\"pix\">16267417786</p>\n\n    <div class=\"pix-info\">\n      <span>Nubank</span>\n      <span>Lívia da Silva Camargo</span>\n    </div>\n  </div>\n\n  <!-- BOTÃO -->\n  <button onclick=\"navigator.clipboard.writeText('16267417786'); alert('Chave Pix copiada!');\" class=\"copy-btn\">\n    Copiar chave PIX <i class=\"fa-regular fa-copy\"></i>\n  </button>\n\n</div>\n\n<style>\n/* PALETA */\n:root {\n  --pink-1: #ffe4ec;\n  --pink-2: #ffb6c9;\n  --pink-3: #ff6f9f;\n  --pink-4: #d94b7a;\n  --pink-5: #8a2d4f;\n}\n\n/* GRID CARDS */\n.gift-card {\n  background: linear-gradient(145deg, rgba(255,182,201,0.15), rgba(255,255,255,0.05));\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255,182,201,0.3);\n  padding: 14px;\n  border-radius: 16px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #fff;\n  font-size: 12px;\n  transition: all .35s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.gift-card i {\n  font-size: 20px;\n  color: var(--pink-2);\n  filter: drop-shadow(0 0 6px rgba(255,182,201,0.7));\n}\n\n.gift-card span small {\n  font-size: 10px;\n  opacity: 0.7;\n}\n\n.gift-card::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(120deg, transparent, rgba(255,182,201,0.25), transparent);\n  opacity: 0;\n  transition: .4s;\n}\n\n.gift-card:hover {\n  transform: translateY(-4px) scale(1.03);\n  border-color: var(--pink-3);\n}\n\n.gift-card:hover::before {\n  opacity: 1;\n}\n\n/* CARD PIX */\n.pix-card {\n  background: linear-gradient(160deg, rgba(255,182,201,0.25), rgba(0,0,0,0.3));\n  border: 1px solid rgba(255,182,201,0.4);\n  padding: 20px;\n  border-radius: 18px;\n  text-align: center;\n  margin-bottom: 16px;\n  position: relative;\n  overflow: hidden;\n  backdrop-filter: blur(15px);\n}\n\n.pix-card .glow {\n  position: absolute;\n  width: 200%;\n  height: 200%;\n  background: radial-gradient(circle, rgba(255,182,201,0.2), transparent 70%);\n  animation: rotateGlow 8s linear infinite;\n}\n\n@keyframes rotateGlow {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}\n\n.pix-card .label {\n  font-size: 10px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #fbcfe8;\n  margin-bottom: 6px;\n  position: relative;\n  z-index: 2;\n}\n\n.pix-card .pix {\n  font-size: 22px;\n  font-weight: bold;\n  color: white;\n  letter-spacing: 2px;\n  position: relative;\n  z-index: 2;\n}\n\n.pix-info {\n  margin-top: 10px;\n  font-size: 11px;\n  color: #f9a8d4;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  position: relative;\n  z-index: 2;\n}\n\n/* BOTÃO */\n.copy-btn {\n  width: 100%;\n  background: linear-gradient(90deg, var(--pink-3), var(--pink-4));\n  border: none;\n  color: white;\n  font-weight: bold;\n  padding: 14px;\n  border-radius: 14px;\n  letter-spacing: 1px;\n  font-size: 12px;\n  text-transform: uppercase;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  cursor: pointer;\n  transition: all .3s ease;\n  box-shadow: 0 0 18px rgba(255,111,159,0.5);\n  position: relative;\n  overflow: hidden;\n}\n\n.copy-btn::after {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent);\n  transform: translateX(-100%);\n  transition: .5s;\n}\n\n.copy-btn:hover::after {\n  transform: translateX(100%);\n}\n\n.copy-btn:hover {\n  transform: scale(1.03);\n  filter: brightness(1.1);\n}\n</style>"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<div class=\"space-y-4 font-[Playfair_Display]\">\n\n  <!-- ITEM -->\n  <div class=\"info-card group\">\n    <div class=\"icon-box\">\n      <i class=\"fa-regular fa-clock\"></i>\n    </div>\n    <div>\n      <h3>A Pontualidade é um Carinho</h3>\n      <p>Sua presença desde o primeiro instante é fundamental para que não perca nenhum detalhe da nossa história. Por favor, chegue no horário combinado.</p>\n    </div>\n  </div>\n\n  <div class=\"info-card group\">\n    <div class=\"icon-box\">\n      <i class=\"fa-regular fa-calendar-check\"></i>\n    </div>\n    <div>\n      <h3>Confirmação de Presença</h3>\n      <p>Para que possamos preparar tudo com perfeição e amor, pedimos a gentileza de confirmar sua vinda até 15 de junho.</p>\n    </div>\n  </div>\n\n  <div class=\"info-card group\">\n    <div class=\"icon-box\">\n      <i class=\"fa-solid fa-heart pulse\"></i>\n    </div>\n    <div>\n      <h3>Celebre Conosco</h3>\n      <p>Deixe a alegria guiar a sua noite! Estamos ansiosos para criar memórias inesquecíveis e celebrar este capítulo tão especial ao seu lado.</p>\n    </div>\n  </div>\n\n  <div class=\"info-card group\">\n    <div class=\"icon-box\">\n      <i class=\"fa-solid fa-cake-candles\"></i>\n    </div>\n    <div>\n      <h3>Um Doce Encontro</h3>\n      <p>Não se despeça sem nos presentear com um abraço apertado e sem aproveitar nossa festa. Queremos compartilhar cada segundo de felicidade com você.</p>\n    </div>\n  </div>\n\n</div>\n\n<style>\n:root {\n  --blue-1: #0f172a;\n  --blue-2: #1e293b;\n  --blue-3: #334155;\n  --gold-1: #facc15;\n  --gold-2: #eab308;\n  --text-soft: #cbd5f5;\n}\n\n/* CARD BASE */\n.info-card {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n  padding: 16px;\n  border-radius: 18px;\n  background: linear-gradient(145deg, rgba(30,41,59,0.6), rgba(15,23,42,0.4));\n  border: 1px solid rgba(250,204,21,0.15);\n  backdrop-filter: blur(14px);\n  transition: all .35s ease;\n  position: relative;\n  overflow: hidden;\n}\n\n.info-card::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(120deg, transparent, rgba(250,204,21,0.15), transparent);\n  opacity: 0;\n  transition: .4s;\n}\n\n.info-card:hover {\n  transform: translateY(-4px) scale(1.02);\n  border-color: rgba(250,204,21,0.4);\n}\n\n.info-card:hover::before {\n  opacity: 1;\n}\n\n/* ICON */\n.icon-box {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: linear-gradient(145deg, rgba(250,204,21,0.15), rgba(255,255,255,0.05));\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid rgba(250,204,21,0.3);\n  box-shadow: 0 0 12px rgba(250,204,21,0.2);\n  transition: .3s;\n  flex-shrink: 0;\n}\n\n.icon-box i {\n  color: var(--gold-1);\n  font-size: 18px;\n  transition: .3s;\n}\n\n.group:hover .icon-box {\n  transform: scale(1.1);\n  background: linear-gradient(145deg, rgba(250,204,21,0.25), rgba(255,255,255,0.1));\n}\n\n/* TEXTOS */\n.info-card h3 {\n  font-size: 14px;\n  font-weight: bold;\n  color: white;\n  margin-bottom: 4px;\n  letter-spacing: 0.5px;\n}\n\n.info-card p {\n  font-size: 12px;\n  color: var(--text-soft);\n  line-height: 1.6;\n}\n\n/* ANIMAÇÃO CORAÇÃO */\n.pulse {\n  animation: pulseAnim 1.8s infinite;\n}\n\n@keyframes pulseAnim {\n  0% { transform: scale(1); opacity: 1; }\n  50% { transform: scale(1.2); opacity: 0.7; }\n  100% { transform: scale(1); opacity: 1; }\n}\n</style>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5521965227482",
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
    "lembrete": false
  },
  "config": {
    "exibirMarcaDagua": false,
    "cronometro": false,
    "buttonColor": "#0c2b71",
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
