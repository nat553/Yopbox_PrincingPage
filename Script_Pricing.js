$('.switch label').on('click', function(){
      var indicator = $(this).parent('.switch').find('span');
      if ( $(this).hasClass('right') ){
          $(indicator).addClass('right');
      } else {
          $(indicator).removeClass('right');
      }
  });

  var tooltipButton = document.getElementsByTagName("tooltipButton");
  var bull = document.getElementsByTagName("bull");
  var bulls = document.querySelectorAll("bull");
  var SizeScreenlimit = 1050;

  function DisplayTooltipButtons(){
    if(window.innerWidth <= SizeScreenlimit){
        $(tooltipButton).removeClass('hidden');
        $(bulls).removeClass('tooltip_Right');
        $(bulls).addClass('tooltip_Mobile');

        document.getElementById("OPTIONS").style.width = "380px";
        document.getElementsByClassName("CheckoutDiv")[0].style.width = "380px";
        document.getElementsByClassName("CheckoutDiv")[0].style.height = "800px";
        document.getElementById("SumupDisplay").style.fontSize = "16.5px";
        document.getElementById("BodyDiv").style.flexDirection = "column-reverse";
        document.getElementById("BodyDiv").style.alignItems = "center";
        let NomOption = document.getElementsByClassName("Nom-Option");
        var i;
        for (i = 0; i < NomOption.length; i++) {
        NomOption[i].style.fontSize = "1em";
        };

        let switchButton = document.getElementsByClassName("switch");
        var i;
        for (i = 0; i < switchButton.length; i++) {
          switchButton[i].style.fontSize = "9.5px";
        };
      };
    if(window.innerWidth > SizeScreenlimit){
        $(tooltipButton).addClass('hidden');
        $(bulls).addClass('tooltip_Right');
        $(bulls).removeClass('tooltip_Mobile');

        document.getElementById("OPTIONS").style.width = "550px";
        document.getElementsByClassName("CheckoutDiv")[0].style.width = "420px";
        document.getElementsByClassName("CheckoutDiv")[0].style.height = "840px";
        document.getElementById("SumupDisplay").style.fontSize = "18px";

        document.getElementById("BodyDiv").style.flexDirection = "row";
        document.getElementById("BodyDiv").style.alignItems = "flex-start";

        let NomOption = document.getElementsByClassName("Nom-Option");
        var i;
        for (i = 0; i < NomOption.length; i++) {
          NomOption[i].style.fontSize = "1.3em";
        };
        let switchButton = document.getElementsByClassName("switch");
        var i;
        for (i = 0; i < switchButton.length; i++) {
          switchButton[i].style.fontSize = "12px";
        };
      };
  };

  DisplayTooltipButtons();

    $('.Info_Tooltip').on('click', function(){
      if ($(this).hasClass('Info_Tooltip_Show') ){
        $(this).removeClass('Info_Tooltip_Show');
      } else {
        $(this).addClass('Info_Tooltip_Show');
      };
    });

  function ChangeSwitchButton(IDOfSwitch){
    var indicator = $(document.getElementById(IDOfSwitch)).parent('.switch').find('span');
    if ( $(this).hasClass('right') ){
      $(indicator).addClass('right');
    } else {
      $(indicator).removeClass('right');
    };
  };


  //Slider

  var NbVideos = 10;
  var slider = document.getElementById("NbVideosSlider");

  slider.oninput = function() {
    NbVideos = this.value;
    UpdateCheckout();
  }

  //Checkout
  var ScriptArcticle = false;
  var ScriptBrief = false;
  var HabillageEnrichi = false;
  var Captions = false;
  var Traductions = false;
  var Watermark = false;
  var Speaker = false;
  var HabillageSpecifique = false;
  var Livraison84h = false;
  var BackgroundPersonnalise = false;

  Label_ScriptArcticle_YES = "Je fournis un article";
  Label_ScriptArcticle_NO = "Je fournis le script";
  Label_ScriptBrief_YES = "Je fournis un brief";
  Label_ScriptBrief_NO = "Je fournis le script";
  Label_HabillageEnrichi_YES = "Je le veux !";
  Label_HabillageEnrichi_NO = "Pas besoin !";
  Label_Captions_YES = "Evidement";
  Label_Captions_NO = "Pas besoin !";
  Label_Traductions_YES = "Yes !  Ja ! sí ¡";
  Label_Traductions_NO = "No need!";
  Label_Watermark_YES = "Pas question";
  Label_Watermark_NO = "Je le garde :)";
  Label_Speaker_YES = "Je m'y colle";
  Label_Speaker_NO = "Laissons faire un pro";
  Label_HabillageSpecifique_YES = "J'en veux un sur mesure";
  Label_HabillageSpecifique_NO = "Pas besoin !";
  Label_Livraison84h_YES = "48 heures";
  Label_Livraison84h_NO = "Une semaine";
  Label_BackgroundPersonnalise_YES = "Je veux un fond exclusif";
  Label_BackgroundPersonnalise_NO = "Je choisis dans votre catalogue";

  document.getElementById("ScriptArcticle_NO").checked = true;
  document.getElementById("ScriptBrief_NO").checked = true;
  document.getElementById("HabillageEnrichi_NO").checked = true;
  document.getElementById("Captions_NO").checked = true;
  document.getElementById("Traductions_NO").checked = true;
  document.getElementById("Watermark_NO").checked = true;
  document.getElementById("Speaker_NO").checked = true;
  document.getElementById("HabillageSpecifique_NO").checked = true;
  document.getElementById("Livraison84h_NO").checked = true;
  document.getElementById("BackgroundPersonnalise_NO").checked = true;

  function ChangeLabel(value, Option, Label_YES, Label_NO, Price){
    var signe;
    if (value == true){
      if (Price.charAt(0) == "-"){
        signe = "+";
        Price = Price.slice(1)
      } else {
        signe = "-";
      };
      addMessage = (Label_NO+"</br>"+signe+Price);
      document.getElementById("Label_"+Option+"_NO").innerHTML = addMessage;
      document.getElementById("Label_"+Option+"_YES").innerHTML = Label_YES;
    };
    if (value  == false){
      if (Price.charAt(0) == "-"){
        signe = "-";
        Price = Price.slice(1)
      } else {
        signe = "+";
      };
      addMessage = (Label_YES+"</br>"+signe+Price);
      document.getElementById("Label_"+Option+"_YES").innerHTML = addMessage;
      document.getElementById("Label_"+Option+"_NO").innerHTML = Label_NO;
    };
  };

  function UpdateLabel(){
    ChangeLabel(ScriptArcticle, "ScriptArcticle", Label_ScriptArcticle_YES, Label_ScriptArcticle_NO, "90€ / vidéo");
    ChangeLabel(ScriptBrief, "ScriptBrief", Label_ScriptBrief_YES, Label_ScriptBrief_NO, "190€ / vidéo");
    ChangeLabel(HabillageEnrichi, "HabillageEnrichi", Label_HabillageEnrichi_YES, Label_HabillageEnrichi_NO, "90€ / vidéo");
    ChangeLabel(Captions, "Captions", Label_Captions_YES, Label_Captions_NO, "50€ / vidéo");
    ChangeLabel(Traductions, "Traductions", Label_Traductions_YES, Label_Traductions_NO, "75€ / vidéo");
    ChangeLabel(Watermark, "Watermark", Label_Watermark_YES, Label_Watermark_NO, "90€ / vidéo");
    ChangeLabel(Speaker, "Speaker", Label_Speaker_YES, Label_Speaker_NO, "-25€ / vidéo");
    ChangeLabel(HabillageSpecifique, "HabillageSpecifique", Label_HabillageSpecifique_YES, Label_HabillageSpecifique_NO, "990€");
    ChangeLabel(Livraison84h, "Livraison84h", Label_Livraison84h_YES, Label_Livraison84h_NO, "90€ / vidéo");
    ChangeLabel(BackgroundPersonnalise, "BackgroundPersonnalise", Label_BackgroundPersonnalise_YES, Label_BackgroundPersonnalise_NO, "690€");
  }

  function UpdateCheckout(Option, value){
      if (Option == 'ScriptArcticle'){
          ScriptArcticle = value;
          if (value == true){
            document.getElementById("ScriptBrief_NO").checked = true;
            ScriptBrief = false;
            ChangeSwitchButton("ScriptBrief_NO");
          }
        } else if (Option == 'ScriptBrief'){
          ScriptBrief = value;
          if (value == true){
            document.getElementById("ScriptArcticle_NO").checked = true;
            ScriptArcticle = false;
            ChangeSwitchButton("ScriptArcticle_NO");
          }
        } else if (Option == 'HabillageEnrichi'){
          HabillageEnrichi = value;
          if (value == true){
            document.getElementById("HabillageSpecifique_NO").checked = true;
            HabillageSpecifique = false;
            ChangeSwitchButton("HabillageSpecifique_NO");
          }
        } else if (Option == 'Captions'){
          Captions = value;
        } else if (Option == 'Traductions'){
          Traductions = value;
        } else if (Option == 'Watermark'){
          Watermark = value;
        } else if (Option == 'Speaker'){
          Speaker = value;
        } else if (Option == 'HabillageSpecifique'){
          HabillageSpecifique = value;
          if (value == true){
            document.getElementById("HabillageEnrichi_NO").checked = true;
            HabillageEnrichi = false;
            ChangeSwitchButton("HabillageEnrichi_NO");
          }
        } else if (Option == 'Livraison84h'){
          Livraison84h = value;
        } else if (Option == 'BackgroundPersonnalise'){
          BackgroundPersonnalise = value;
        };

      UpdateLabel()
      //Verification des options avec nombre de vidéo minimun
      if (NbVideos < 10) {
        if (Speaker) {
          ChangeSwitchButton("Speaker_NO");
          document.getElementById("Speaker_NO").checked = true;
          Speaker = false;
        };
        if (ScriptBrief) {
          ChangeSwitchButton("ScriptBrief_NO");
          document.getElementById("ScriptBrief_NO").checked = true;
          ScriptBrief = false;
        };
        if (HabillageSpecifique) {
          ChangeSwitchButton("HabillageSpecifique_NO");
          document.getElementById("HabillageSpecifique_NO").checked = true;
          HabillageSpecifique = false;
        };
        if (Livraison84h) {
          ChangeSwitchButton("Livraison84h_NO");
          document.getElementById("Livraison84h_NO").checked = true;
          Livraison84h = false;
        };
        if (BackgroundPersonnalise) {
          ChangeSwitchButton("BackgroundPersonnalise_NO");
          document.getElementById("BackgroundPersonnalise_NO").checked = true;
          BackgroundPersonnalise = false;
        };
      };

      var TotalDisplay_Content = "";
      var TotalCost = NbVideos*250;


      if (NbVideos < 50){
        TotalDisplay_Content = TotalDisplay_Content.concat("✓ ", NbVideos, ' Vidéos</br>');
      } else {
        TotalDisplay_Content = TotalDisplay_Content.concat("✓ ", NbVideos, ' Vidéos ou plus</br>');
      };

      TotalDisplay_Content = TotalDisplay_Content.concat('✓ Mon logo</br>');
      TotalDisplay_Content = TotalDisplay_Content.concat('✓ Ma baseline</br>');
      TotalDisplay_Content = TotalDisplay_Content.concat('✓ Ma typographie</br>');

      if (Speaker == true){
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Je suis le speaker</br>');
        TotalCost += NbVideos*(-25);
      } else {
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Un speaker expert</br>');
      };

      if (HabillageEnrichi == true){
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Habillage enrichi</br>');
        TotalCost += NbVideos*90;
      } else if (HabillageSpecifique == true) {
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Habillage specifique sur mesure</br>');
        TotalCost += 990;
      } else {
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Habillage template</br>');
      };

      if (BackgroundPersonnalise == true){
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Background personnalisé</br>');
        TotalCost += 690;
      } else {
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Choix du background</br>');
      };

      TotalDisplay_Content = TotalDisplay_Content.concat('✓ Personnalisation des couleurs</br>');

      if (ScriptArcticle == true) {
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Script à partir d’un article</br>');
        TotalCost += NbVideos*90;
      } else if (ScriptBrief == true) {
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Script à partir d’un brief</br>');
        TotalCost += NbVideos*190;
      } else {
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Script / contenu fournit par le client</br>');
      };

      if (Livraison84h == true){
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Livraison sous 48 heures</br>');
        TotalCost += NbVideos*90;
      } else {
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Livraison sous 1 semaine</br>');
      };

      TotalDisplay_Content = TotalDisplay_Content.concat('✓ Musique libre de droit</br>');

      if (Watermark == true){
        TotalCost += NbVideos*50;
      } else {
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Un watermark YopBox</br>');
      };

      if (Captions == true) {
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Sous-titres / Transcription</br>');
        TotalCost += NbVideos*50;
      };

      if (Traductions == true) {
        TotalDisplay_Content = TotalDisplay_Content.concat('✓ Sous-titres / Traduction</br>');
        TotalCost += NbVideos*75;
      };

      if (NbVideos <= 5) {
        coef = 0;
      } else {
        coef = NbVideos*0.005;
      };

      TotalCost = (TotalCost - (TotalCost*coef));

      document.getElementById("TotalDisplay").innerHTML = (Math.round(Number(TotalCost)))+" €";
      document.getElementById("PerVideoDisplay").innerHTML = (Math.round(Number(TotalCost/NbVideos)))+"€/Vidéo";
      document.getElementById("SumupDisplay").innerHTML = TotalDisplay_Content;
      document.getElementById("NombredeViedo_Option").innerHTML = NbVideos;

      if (NbVideos == 50){
        document.getElementById("CheckoutDiv_PRICE").style.opacity = 0;
        document.getElementById('CheckoutDiv_PRICE').style.webkitTransition = 'opacity 200ms';

        document.getElementById("CheckoutDiv_ContactUs").style.opacity = 1;
        document.getElementById('CheckoutDiv_ContactUs').style.webkitTransition = 'opacity 200ms';
      } else {
        document.getElementById("CheckoutDiv_PRICE").style.opacity = 1;
        document.getElementById('CheckoutDiv_PRICE').style.webkitTransition = 'opacity 200ms';

        document.getElementById("CheckoutDiv_ContactUs").style.opacity = 0;
        document.getElementById('CheckoutDiv_ContactUs').style.webkitTransition = 'opacity 200ms';
      };

  };
  UpdateCheckout();

  console.log('bonjour');
