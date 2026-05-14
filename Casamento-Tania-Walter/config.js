window.config = {
  "evento": {
    "tipo": "Casamento",
    "nome": "Tania & Walter",
    "idade": 0,
    "data": "2026-06-27",
    "hora": "16:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Casamento-Tania-Walter/music_1778768382601.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Casamento-Tania-Walter",
    "seo": {
      "pageTitle": "",
      "ogTitle": "Você está convidado para os 15 anos da Alice!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Casamento-Tania-Walter/cover_1778768382601.jpg",
    "aberturaSlides": [
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Casamento-Tania-Walter/slide1_1778768382601.mp4",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Casamento-Tania-Walter/slide2_1778768382601.mp4",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Casamento-Tania-Walter/slide3_1778768382601.mp4",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Casamento-Tania-Walter/slide4_1778768382601.mp4",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Casamento-Tania-Walter/slide5_1778768382601.mp4"
    ],
    "folhaVazia": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Casamento-Tania-Walter/folha_1778768382601.jpg",
    "folhaPreenchida": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Casamento-Tania-Walter/folha_1778768382601.jpg",
    "musica": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Casamento-Tania-Walter/music_1778768382601.mp3",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/dugMWpLWeHyQ9Yx6A"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500&display=swap');\n\n  .ms-wrap {\n    display: flex;\n    flex-direction: column;\n    gap: 0;\n  }\n\n  .ms-card {\n    display: flex;\n    align-items: center;\n    gap: 1.1rem;\n    padding: 1.15rem 1.25rem;\n    background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(149,82,81,0.07) 100%);\n    border: 1px solid rgba(197,155,85,0.16);\n    border-left: 2.5px solid rgba(197,155,85,0.45);\n    position: relative;\n    overflow: hidden;\n    transition: background 0.3s, border-color 0.3s;\n    cursor: default;\n  }\n\n  .ms-card:first-child  { border-radius: 14px 14px 0 0; }\n  .ms-card:last-child   { border-radius: 0 0 14px 14px; }\n  .ms-card + .ms-card   { border-top: none; }\n\n  .ms-card::before {\n    content: '';\n    position: absolute; inset: 0;\n    background: linear-gradient(135deg, rgba(197,155,85,0.05) 0%, rgba(149,82,81,0.06) 100%);\n    opacity: 0;\n    transition: opacity 0.35s;\n    pointer-events: none;\n  }\n  .ms-card:hover::before   { opacity: 1; }\n  .ms-card:hover           { border-left-color: rgba(197,155,85,0.85); }\n\n  /* linha divisória entre cards */\n  .ms-card + .ms-card::after {\n    content: '';\n    position: absolute;\n    top: 0; left: 5%; right: 5%;\n    height: 1px;\n    background: linear-gradient(to right, transparent, rgba(197,155,85,0.18), rgba(149,82,81,0.12), transparent);\n    pointer-events: none;\n  }\n\n  /* ícone */\n  .ms-icon {\n    width: 44px; height: 44px;\n    border-radius: 50%; flex-shrink: 0;\n    display: flex; align-items: center; justify-content: center;\n    background: linear-gradient(145deg, rgba(197,155,85,0.14) 0%, rgba(149,82,81,0.12) 100%);\n    border: 1px solid rgba(197,155,85,0.28);\n    font-size: 1rem; color: #C49B55;\n    position: relative;\n    transition: border-color 0.3s, background 0.3s;\n  }\n  .ms-card:hover .ms-icon {\n    background: linear-gradient(145deg, rgba(197,155,85,0.24) 0%, rgba(149,82,81,0.2) 100%);\n    border-color: rgba(197,155,85,0.6);\n  }\n\n  /* detalhe marsala no ícone */\n  .ms-icon-dot {\n    width: 4px; height: 4px; border-radius: 50%;\n    background: #955251;\n    position: absolute; top: 7px; right: 7px; opacity: 0.85;\n  }\n\n  /* texto */\n  .ms-text { flex: 1; min-width: 0; }\n\n  .ms-title {\n    font-family: 'Cormorant Garamond', Georgia, serif;\n    font-size: 0.95rem; font-weight: 600;\n    color: #f0e6d2;\n    letter-spacing: 0.03em;\n    margin: 0 0 0.22rem;\n    line-height: 1.3;\n  }\n\n  .ms-desc {\n    font-family: 'Jost', sans-serif;\n    font-size: 0.71rem; font-weight: 300;\n    color: rgba(230,210,195,0.7);\n    line-height: 1.58; margin: 0;\n    letter-spacing: 0.01em;\n  }\n\n  /* badge opcional */\n  .ms-badge {\n    font-family: 'Jost', sans-serif;\n    font-size: 0.58rem; font-weight: 500;\n    letter-spacing: 0.1em; text-transform: uppercase;\n    color: #C49B55;\n    background: rgba(197,155,85,0.1);\n    border: 1px solid rgba(197,155,85,0.22);\n    border-radius: 20px;\n    padding: 1px 8px;\n    display: inline-block;\n    margin-bottom: 0.22rem;\n    line-height: 1.7;\n  }\n\n  /* pulsar no último card */\n  @keyframes ms-pulse {\n    0%,100% { opacity:1; transform:scale(1); }\n    50%      { opacity:0.55; transform:scale(0.82); }\n  }\n  .ms-pulse { animation: ms-pulse 2.6s ease-in-out infinite; }\n</style>\n\n<div class=\"ms-wrap\">\n\n  <!-- 1. Pontualidade -->\n  <div class=\"ms-card\">\n    <div class=\"ms-icon\">\n      <i class=\"fa-regular fa-clock\"></i>\n      <div class=\"ms-icon-dot\"></div>\n    </div>\n    <div class=\"ms-text\">\n      <h3 class=\"ms-title\">Chegue no Horário</h3>\n      <p class=\"ms-desc\">Sua presença pontual é muito importante para nós.</p>\n    </div>\n  </div>\n\n  <!-- 2. Confirmação -->\n  <div class=\"ms-card\">\n    <div class=\"ms-icon\">\n      <i class=\"fa-regular fa-calendar-check\"></i>\n      <div class=\"ms-icon-dot\"></div>\n    </div>\n    <div class=\"ms-text\">\n      <h3 class=\"ms-title\">Confirme sua Presença</h3>\n      <p class=\"ms-desc\">Por favor, confirme presença pelo menos 15 dias antes do evento.</p>\n    </div>\n  </div>\n\n  <!-- 3. Divirta-se -->\n  <div class=\"ms-card\">\n    <div class=\"ms-icon\">\n      <i class=\"fa-solid fa-champagne-glasses\"></i>\n      <div class=\"ms-icon-dot\"></div>\n    </div>\n    <div class=\"ms-text\">\n      <h3 class=\"ms-title\">Divirta-se Bastante!</h3>\n      <p class=\"ms-desc\">Estamos ansiosos para celebrar este momento especial com você.</p>\n    </div>\n  </div>\n\n  <!-- 4. Despedida -->\n  <div class=\"ms-card\">\n    <div class=\"ms-icon\">\n      <i class=\"fa-solid fa-cake-candles ms-pulse\"></i>\n      <div class=\"ms-icon-dot\"></div>\n    </div>\n    <div class=\"ms-text\">\n      <h3 class=\"ms-title\">Não Vá Embora Sem um Abraço</h3>\n      <p class=\"ms-desc\">Queremos compartilhar cada instante com você — e não deixe o bolo passar!</p>\n    </div>\n  </div>\n\n</div>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5522999641096",
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
    "buttonColor": "#973a4f",
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
