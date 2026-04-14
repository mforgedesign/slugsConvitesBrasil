window.config = {
  "evento": {
    "tipo": "Aniversário",
    "nome": "Maryanna",
    "idade": 15,
    "data": "",
    "hora": "18:00",
    "endereco": " Av Robert Kennedy 1750 Planalto"
  },
  "convite": {
    "paletaCores": "",
    "tema": "",
    "musica": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Maryanna15Anos/music_1776185905562.mp3",
    "tipoAbertura": "longa",
    "particulasAbertura": true,
    "slug": "Maryanna15Anos",
    "seo": {
      "pageTitle": "Maryanna - 15 Anos",
      "ogTitle": "Você está convidado para os 15 anos da Maryanna!",
      "ogDescription": "Embarque nessa noite mágica. Clique para ver os detalhes."
    }
  },
  "assets": {
    "capa": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Maryanna15Anos/cover_1776185905562.jpg",
    "aberturaSlides": [
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Maryanna15Anos/slide1_1776185905562.mp4",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Maryanna15Anos/slide2_1776185905562.mp4",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Maryanna15Anos/slide3_1776185905562.png",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Maryanna15Anos/slide4_1776185905562.mp4",
      "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Maryanna15Anos/slide5_1776185905562.png"
    ],
    "folhaVazia": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Maryanna15Anos/folha_1776185905562.jpg",
    "folhaPreenchida": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Maryanna15Anos/folha_1776185905562.jpg",
    "musica": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Maryanna15Anos/music_1776185905562.mp3",
    "fotos": [],
    "popupImagensPorBotao": {
      "1": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Maryanna15Anos/Maryanna%20%20Convite%20Azul%20Serenity%20(1)_1776185905562.jpg"
    }
  },
  "botoes": [
    {
      "tipoAcao": "Link",
      "tipoVisual": "css",
      "titulo": "Como Chegar",
      "icone": "fa-solid fa-location-dot",
      "conteudo": "https://maps.app.goo.gl/yPE2dFKt6qLRLA9L6"
    },
    {
      "tipoAcao": "PopupImagem",
      "tipoVisual": "css",
      "titulo": "Dicas de Presente",
      "icone": "fa-solid fa-gift",
      "conteudo": "https://qhrjyhnbcqllbsfuzlmj.supabase.co/storage/v1/object/public/convite-assets/Maryanna15Anos/Maryanna%20%20Convite%20Azul%20Serenity%20(1)_1776185905562.jpg"
    },
    {
      "tipoAcao": "PopupHtml",
      "tipoVisual": "css",
      "titulo": "Manual do Convidado",
      "icone": "fa-solid fa-book-open",
      "conteudo": "<link href=\"https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Cinzel:wght@400;500&display=swap\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css\">\n\n<style>\n:root{\n  --serenity:#a9c7e8;\n  --silver:#dfe6ee;\n  --ink:#2f3e4d;\n}\n\n*{box-sizing:border-box;margin:0;padding:0}\n\n/* BACKGROUND */\n.serenity-wrap{\n  position:relative;\n  display:flex;\n  justify-content:center;\n  padding:36px 14px;\n  overflow:hidden;\n  background:\n    radial-gradient(circle at top, rgba(169,199,232,.25), transparent 40%),\n    linear-gradient(180deg,#ffffff,#f5f9fc);\n  font-family:\"Playfair Display\",serif;\n}\n\n/* FLOAT PETALS */\n.petal{\n  position:absolute;\n  width:10px;height:10px;\n  background:radial-gradient(circle,#fff,rgba(169,199,232,.5));\n  border-radius:50%;\n  opacity:.6;\n  animation:petalFall linear infinite;\n}\n\n@keyframes petalFall{\n  0%{transform:translateY(-20px) translateX(0) rotate(0);opacity:0}\n  10%{opacity:.8}\n  50%{transform:translateY(50vh) translateX(20px) rotate(180deg)}\n  100%{transform:translateY(100vh) translateX(-20px) rotate(360deg);opacity:0}\n}\n\n/* BUTTERFLY */\n.butterfly{\n  position:absolute;\n  width:28px;\n  animation:fly 18s linear infinite;\n  opacity:.7;\n}\n\n@keyframes fly{\n  0%{transform:translate(-10vw,60vh) scale(.8)}\n  25%{transform:translate(30vw,40vh) scale(1)}\n  50%{transform:translate(60vw,50vh) scale(.9)}\n  75%{transform:translate(80vw,30vh) scale(1.1)}\n  100%{transform:translate(110vw,20vh) scale(.8)}\n}\n\n/* CARD */\n.serenity-card{\n  width:100%;\n  max-width:440px;\n  padding:30px 22px;\n  border-radius:28px;\n  background:rgba(255,255,255,.7);\n  backdrop-filter:blur(18px);\n  border:1px solid rgba(207,214,223,.4);\n  box-shadow:0 25px 60px rgba(47,62,77,.12);\n  position:relative;\n  z-index:2;\n}\n\n/* TITLE */\n.serenity-title{\n  font-family:\"Cinzel\",serif;\n  font-size:26px;\n  text-align:center;\n  margin-bottom:12px;\n  background:linear-gradient(120deg,#2f3e4d,#a9c7e8,#cfd6df);\n  -webkit-background-clip:text;\n  -webkit-text-fill-color:transparent;\n}\n\n/* INTRO */\n.serenity-intro{\n  text-align:center;\n  font-size:15px;\n  color:#4a5a6a;\n  line-height:1.6;\n  margin-bottom:22px;\n}\n\n/* ITEMS */\n.serenity-list{\n  display:flex;\n  flex-direction:column;\n  gap:14px;\n}\n\n.serenity-item{\n  display:flex;\n  gap:12px;\n  padding:14px 16px;\n  border-radius:16px;\n  background:linear-gradient(140deg, rgba(169,199,232,.15), rgba(207,214,223,.15));\n  border:1px solid rgba(207,214,223,.35);\n  animation:fadeUp .7s ease both;\n}\n\n.serenity-item:nth-child(1){animation-delay:.1s}\n.serenity-item:nth-child(2){animation-delay:.2s}\n.serenity-item:nth-child(3){animation-delay:.3s}\n.serenity-item:nth-child(4){animation-delay:.4s}\n\n@keyframes fadeUp{\n  from{opacity:0;transform:translateY(15px)}\n  to{opacity:1;transform:translateY(0)}\n}\n\n.serenity-icon{\n  width:38px;height:38px;\n  border-radius:10px;\n  background:linear-gradient(135deg,var(--serenity),var(--silver));\n  display:flex;align-items:center;justify-content:center;\n  color:#fff;\n}\n\n.serenity-text{\n  font-size:14.5px;\n  color:var(--ink);\n  line-height:1.5;\n}\n\n/* FOOT */\n.serenity-foot{\n  margin-top:20px;\n  text-align:center;\n  font-size:15px;\n  color:#4a5a6a;\n}\n</style>\n\n<div class=\"serenity-wrap\">\n\n  <!-- PETALS -->\n  <div class=\"petal\" style=\"left:10%;animation-duration:9s\"></div>\n  <div class=\"petal\" style=\"left:25%;animation-duration:12s\"></div>\n  <div class=\"petal\" style=\"left:60%;animation-duration:10s\"></div>\n  <div class=\"petal\" style=\"left:80%;animation-duration:14s\"></div>\n\n  <!-- BUTTERFLY SVG -->\n  <svg class=\"butterfly\" viewBox=\"0 0 24 24\" fill=\"none\">\n    <path d=\"M12 12C8 2 2 6 6 12C2 18 8 22 12 12Z\" fill=\"#a9c7e8\"/>\n    <path d=\"M12 12C16 2 22 6 18 12C22 18 16 22 12 12Z\" fill=\"#cfd6df\"/>\n  </svg>\n\n  <div class=\"serenity-card\">\n\n    <div class=\"serenity-title\">Manual do Convidado</div>\n\n    <div class=\"serenity-intro\">\n      Seja muito bem-vindo(a)!<br>\n      É uma alegria imensa contar com a sua presença.\n    </div>\n\n    <div class=\"serenity-list\">\n\n      <div class=\"serenity-item\">\n        <div class=\"serenity-icon\"><i class=\"fa-solid fa-user-group\"></i></div>\n        <div class=\"serenity-text\">Convidado não convida!</div>\n      </div>\n\n      <div class=\"serenity-item\">\n        <div class=\"serenity-icon\"><i class=\"fa-solid fa-shirt\"></i></div>\n        <div class=\"serenity-text\">Não será permitido o uso da cor azul (em nenhuma tonalidade).</div>\n      </div>\n\n      <div class=\"serenity-item\">\n        <div class=\"serenity-icon\"><i class=\"fa-solid fa-clock\"></i></div>\n        <div class=\"serenity-text\">Seja pontual e aproveite cada momento com tranquilidade.</div>\n      </div>\n\n      <div class=\"serenity-item\">\n        <div class=\"serenity-icon\"><i class=\"fa-solid fa-envelope\"></i></div>\n        <div class=\"serenity-text\">Confirme sua presença com 15 dias de antecedência.</div>\n      </div>\n\n    </div>\n\n    <div class=\"serenity-foot\">\n      Esperamos que sua experiência seja inesquecível ✨💙\n    </div>\n\n  </div>\n</div>"
    },
    {
      "tipoAcao": "RSVP",
      "tipoVisual": "css",
      "titulo": "Confirmar Presença",
      "icone": "fa-solid fa-check",
      "whatsapp": "5511959320200",
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
    "buttonColor": "#45aad7",
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
