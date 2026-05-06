window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Jane e Sérgio",
    "idade": 15,
    "data": "2026-07-24",
    "hora": "19:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Jane-Sergio-BodasDeOuro",
    "seo": {
      "pageTitle": "Bodas de Ouro | Jane e Sérgio",
      "ogTitle": "Você está convidado para celebrar nossas Bodas de Ouro!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Jane-Sergio-BodasDeOuro/cover_1778078436900.jpg",
    "aberturaSlides": [
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Jane-Sergio-BodasDeOuro/slide1_1778078436900.mp4"
    ],
    "folhaVazia": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Jane-Sergio-BodasDeOuro/folha_1778078436900.jpg",
    "folhaPreenchida": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Jane-Sergio-BodasDeOuro/folha_1778078436900.jpg",
    "musica": "",
    "fotos": [],
    "popupImagensPorBotao": {}
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/9uG8U2fJRYSwNKon8"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "Aguardando dados..."
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.gw-wrap{\n  position:relative;\n  padding:28px 20px 24px;\n  overflow:hidden;\n  font-family:'Cormorant Garamond',Georgia,serif;\n}\n\n/* partículas douradas */\n.gw-spark{\n  position:absolute;\n  width:3px;height:3px;\n  border-radius:50%;\n  background:rgba(212,175,55,0.7);\n  animation:gwRise linear infinite;\n}\n@keyframes gwRise{\n  0%{transform:translateY(0);opacity:0}\n  20%{opacity:1}\n  100%{transform:translateY(-100px);opacity:0}\n}\n\n/* grid */\n.gw-grid{\n  display:grid;\n  gap:12px;\n  position:relative;\n  z-index:2;\n}\n\n/* card */\n.gw-card{\n  background:linear-gradient(140deg,rgba(212,175,55,.18),rgba(255,255,255,.08));\n  border:1px solid rgba(212,175,55,.35);\n  border-radius:18px;\n  padding:16px;\n  display:flex;\n  gap:14px;\n  backdrop-filter:blur(6px);\n  animation:gwFade .6s ease both;\n}\n\n@keyframes gwFade{\n  from{opacity:0;transform:translateY(12px)}\n  to{opacity:1;transform:translateY(0)}\n}\n\n/* icon */\n.gw-icon{\n  width:44px;height:44px;\n  border-radius:12px;\n  background:linear-gradient(145deg,rgba(212,175,55,.35),rgba(255,255,255,.2));\n  display:flex;\n  align-items:center;\n  justify-content:center;\n  color:#fff;\n  font-size:16px;\n  flex-shrink:0;\n  box-shadow:0 0 12px rgba(212,175,55,.4);\n}\n\n/* textos */\n.gw-title{\n  font-family:'Cinzel',serif;\n  font-size:12px;\n  letter-spacing:.12em;\n  color:#f5d27a;\n  margin-bottom:4px;\n}\n\n.gw-text{\n  font-size:14px;\n  color:#fffaf0;\n  line-height:1.5;\n}\n\n.gw-text strong{\n  color:#fde68a;\n}\n\n/* estrelas */\n.gw-star{\n  position:absolute;\n  color:rgba(212,175,55,.6);\n  font-size:10px;\n  animation:gwStar 2.5s infinite;\n}\n@keyframes gwStar{\n  0%,100%{opacity:0;transform:scale(0)}\n  50%{opacity:1;transform:scale(1)}\n}\n</style>\n\n<div class=\"gw-wrap\">\n\n  <!-- estrelas -->\n  <i class=\"gw-star\" style=\"top:8%;left:6%;\">✦</i>\n  <i class=\"gw-star\" style=\"top:22%;right:10%;\">✧</i>\n  <i class=\"gw-star\" style=\"bottom:18%;left:10%;\">✦</i>\n  <i class=\"gw-star\" style=\"bottom:6%;right:14%;\">✧</i>\n\n  <div class=\"gw-grid\">\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-clock\"></i></div>\n      <div>\n        <div class=\"gw-title\">Pontualidade</div>\n        <div class=\"gw-text\">\n          Sua presença desde o início tornará este momento ainda mais especial.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-user-tie\"></i></div>\n      <div>\n        <div class=\"gw-title\">Traje</div>\n        <div class=\"gw-text\">\n          <strong>Esporte fino.</strong>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-calendar-check\"></i></div>\n      <div>\n        <div class=\"gw-title\">Confirmação</div>\n        <div class=\"gw-text\">\n          Caso não possa comparecer, pedimos a gentileza de avisar com antecedência.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-heart\"></i></div>\n      <div>\n        <div class=\"gw-title\">Celebração</div>\n        <div class=\"gw-text\">\n          Este é um momento de amor e gratidão. Celebre conosco com alegria e leveza.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-camera\"></i></div>\n      <div>\n        <div class=\"gw-title\">Registros</div>\n        <div class=\"gw-text\">\n          Aproveite para registrar momentos, sempre respeitando o trabalho dos fotógrafos.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-cake-candles\"></i></div>\n      <div>\n        <div class=\"gw-title\">Antes de partir</div>\n        <div class=\"gw-text\">\n          Não vá embora sem se despedir e compartilhar um momento à mesa conosco.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"gw-card\">\n      <div class=\"gw-icon\"><i class=\"fa-solid fa-star\"></i></div>\n      <div>\n        <div class=\"gw-title\">Gratidão</div>\n        <div class=\"gw-text\">\n          Sua presença é o maior presente para celebrar esta história de 50 anos.\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<script>\n(function(){\n  var wrap = document.querySelector('.gw-wrap');\n\n  for(var i=0;i<10;i++){\n    var s=document.createElement('div');\n    s.className='gw-spark';\n    s.style.left=(Math.random()*90)+'%';\n    s.style.bottom=(Math.random()*20)+'%';\n    s.style.animationDuration=(3+Math.random()*4)+'s';\n    s.style.animationDelay=(Math.random()*4)+'s';\n    wrap.appendChild(s);\n  }\n})();\n</script>"
    },
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "conteudo": "https://docs.google.com/forms/d/e/1FAIpQLSda_9gy_ejJbD83BouLdR0ge69gFBUPLQp7_uT4ypoNZT8zBA/viewform?usp=dialog"
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
    "buttonColor": "#c99350",
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
