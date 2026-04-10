window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Juliana",
    "idade": 15,
    "data": "",
    "hora": "18:00",
    "endereco": ""
  },
  "convite": {
    "paletaCores": "Marsala, rosa, dourado",
    "tema": "Medieval",
    "musica": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Juliana15Anos/music_1775859296615.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Juliana15Anos",
    "seo": {
      "pageTitle": "Juliana - 15 Anos",
      "ogTitle": "Você está convidado para os 15 anos da Juliana!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Juliana15Anos/cover_1775859296615.png",
    "aberturaSlides": [
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Juliana15Anos/slide1_1775859296615.mp4"
    ],
    "folhaVazia": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Juliana15Anos/folha_1775859296615.jpg",
    "folhaPreenchida": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Juliana15Anos/folha_1775859296615.jpg",
    "musica": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Juliana15Anos/music_1775859296615.mp3",
    "fotos": [],
    "popupImagensPorBotao": {
      "1": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Juliana15Anos/Juliana%20Medieval%20Marsala,%20Dourado%20(5)_1775859296615.jpg"
    }
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/jtcthRzoo1gfUuEc6"
    },
    {
      "tipoAcao": "PopupImagem",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Juliana15Anos/Juliana%20Medieval%20Marsala,%20Dourado%20(5)_1775859296615.jpg"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link rel=\"preconnect\" href=\"https://fonts.googleapis.com\">\n<link href=\"https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\n\n.manual-wrap{\n  min-height:100%;\n  display:flex;\n  justify-content:center;\n  align-items:center;\n  padding:24px 14px;\n  background:\n    radial-gradient(circle at top, rgba(203,44,146,.15), transparent 40%),\n    radial-gradient(circle at bottom, rgba(128,0,32,.18), transparent 45%),\n    linear-gradient(160deg, #fff7f9 0%, #fdf4f6 60%, #faf3ef 100%);\n  font-family:'Cormorant Garamond', serif;\n}\n\n.manual-card{\n  width:100%;\n  max-width:430px;\n  padding:28px 22px;\n  border-radius:28px;\n  position:relative;\n  text-align:center;\n  overflow:hidden;\n\n  background:linear-gradient(145deg, rgba(255,255,255,.75), rgba(255,255,255,.55));\n  border:1px solid rgba(128,0,32,.25);\n\n  box-shadow:\n    0 18px 55px rgba(128,0,32,.18),\n    0 10px 30px rgba(203,44,146,.12),\n    inset 0 1px 0 rgba(255,255,255,.8);\n\n  backdrop-filter: blur(16px);\n}\n\n.manual-card::before{\n  content:'';\n  position:absolute;\n  inset:0;\n  background:\n    linear-gradient(135deg, rgba(128,0,32,.08), transparent 35%),\n    linear-gradient(315deg, rgba(212,175,55,.10), transparent 45%);\n  pointer-events:none;\n}\n\n/* brilho dourado */\n.manual-gold-glow{\n  position:absolute;\n  width:200px;\n  height:200px;\n  border-radius:50%;\n  background:radial-gradient(circle, rgba(212,175,55,.18), transparent 65%);\n  top:-80px;\n  right:-60px;\n}\n\n.manual-rose-glow{\n  position:absolute;\n  width:160px;\n  height:160px;\n  border-radius:50%;\n  background:radial-gradient(circle, rgba(203,44,146,.18), transparent 70%);\n  bottom:-60px;\n  left:-60px;\n}\n\n.manual-header{\n  font-family:'Cinzel', serif;\n  font-size:12px;\n  letter-spacing:.3em;\n  text-transform:uppercase;\n  color:#a33c5c;\n  margin-bottom:16px;\n}\n\n.manual-title{\n  font-family:'Cinzel', serif;\n  font-size:26px;\n  font-weight:600;\n  margin-bottom:18px;\n  background:linear-gradient(120deg, #6d1f2f, #cb2c92, #d4af37);\n  -webkit-background-clip:text;\n  -webkit-text-fill-color:transparent;\n}\n\n.manual-divider{\n  width:80px;\n  height:2px;\n  margin:0 auto 20px;\n  border-radius:999px;\n  background:linear-gradient(90deg, #6d1f2f, #d4af37);\n}\n\n/* lista */\n.manual-list{\n  display:flex;\n  flex-direction:column;\n  gap:14px;\n}\n\n.manual-item{\n  background:linear-gradient(140deg, rgba(128,0,32,.10), rgba(203,44,146,.08));\n  border:1px solid rgba(212,175,55,.18);\n  border-radius:16px;\n  padding:14px 16px;\n  font-size:15px;\n  line-height:1.45;\n  color:#4a2b33;\n  display:flex;\n  align-items:flex-start;\n  gap:10px;\n}\n\n.manual-item i{\n  color:#d4af37;\n  margin-top:3px;\n  font-size:14px;\n}\n\n.manual-footer{\n  margin-top:20px;\n  font-size:15px;\n  color:#6b3c48;\n  line-height:1.5;\n}\n</style>\n\n<div class=\"manual-wrap\">\n  <div class=\"manual-card\">\n\n    <div class=\"manual-gold-glow\"></div>\n    <div class=\"manual-rose-glow\"></div>\n\n    <div class=\"manual-header\">Manual do Convidado</div>\n\n    <div class=\"manual-title\">Orientações Especiais</div>\n\n    <div class=\"manual-divider\"></div>\n\n    <div class=\"manual-list\">\n\n      <div class=\"manual-item\">\n        <i class=\"fa-solid fa-envelope\"></i>\n        Confirme sua presença 💌\n      </div>\n\n      <div class=\"manual-item\">\n        <i class=\"fa-solid fa-user-group\"></i>\n        Convidado não convida, tá? 😉\n      </div>\n\n      <div class=\"manual-item\">\n        <i class=\"fa-solid fa-clock\"></i>\n        Não se atrase, queremos você com a gente desde o começo ✨\n      </div>\n\n      <div class=\"manual-item\">\n        <i class=\"fa-solid fa-gift\"></i>\n        Se quiser, pode levar uma lembrancinha com carinho 🎁\n      </div>\n\n      <div class=\"manual-item\">\n        <i class=\"fa-solid fa-heart\"></i>\n        E por favor… não vá embora sem nos dar um abraço! 🤍\n      </div>\n\n    </div>\n\n    <div class=\"manual-footer\">\n      Agora é só aproveitar muito, se divertir e fazer parte desse momento tão especial 💃🎉\n    </div>\n\n  </div>\n</div>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5519987800473",
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
    "buttonColor": "#4c1718",
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
