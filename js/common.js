
var bBurgerMenuVisible = false;

function openLink(href, target) {
  window.open(href, target);
}
    
$("input#q").on("keydown",function(e){
  key = e.which; 
  if (key===13) {
    e.preventDefault();
    search(this);
  } else {
  }
});    

function search(this1) {
 var text = $(this1).val();
 var re = new RegExp(text, "gi");
 for(i=1;i<linkt.length;i++) {
   title = linkt[i];
   id =  linkids[i];
   if (re.test(title)) {
     window.open("#"+id, "_self");
   }
 }    
}

function setFooterPos() {
 if (document.getElementById("footerCont")) {
   tollerance = 16;
   $("#footerCont").css("top", parseInt( window.innerHeight - $("#footerCont").height() - tollerance ) + "px");
   $("#footer").css("top", parseInt( window.innerHeight - $("#footer").height() - tollerance ) + "px");
 }
}

function setContent() {
  
  bodyRect = document.body.getBoundingClientRect();
  
  // Header
  $(".dktoponly").each(function(){
    if (bodyRect.width > 1000) {
      $(this).css("display", "inline");
    } else {
      $(this).css("display", "none");
    }    
  });  

  //$(".search-box").val(window.innerWidth);

  $(".noxs").each(function(){
    if (bodyRect.width > 1000) {
      $(this).css("display", "inline");
    } else {
      $(this).css("display", "none");
    }    
  });  
 
  if (bodyRect.width < 800) {
    $(".search-td").css("min-width","300px");
    $(".index-td").css("min-width","0px");
  } else {
    $(".search-td").css("min-width","");
    $(".index-td").css("min-width","");
  }
    
  // Burger Menu
  if (bodyRect.width > 1000) {
    $(".burger-menu").css("display", "none");
    $(".cat-list-tr").css("display", "table-row");
  } else {
    $(".burger-menu").css("display", "inline");
    $(".cat-list-tr").css("display", "none");
  }   
  
  // Cat Menu 
  $(".mblonly").each(function(){
    if (bodyRect.width > 1000) {
      $(this).css("display", "none");
    } else {
      //$(this).css("display", "inline");
    }    
  });  
  $(".cat").each(function(){
    if (bodyRect.width < 1000) {
      $(this).addClass("cat-mbl");
    } else {
      $(this).removeClass("cat-mbl");
    }    
  });  
  
}  

$(".burger-menu").on("click", function(){
  if (bBurgerMenuVisible) {
    $(".cat-list-tr").css("display", "none");
  } else {
    $(".cat-list-tr").css("display", "table-row");
  }  
  bBurgerMenuVisible = !bBurgerMenuVisible; 
});

function mymain() {

 setContent();

 setTimeout("setFooterPos()", 1000);

 $("#content-td").css("height", (parseInt(window.innerHeight) - 80) + "px");
 $("#content-cont").css("height", (parseInt(window.innerHeight) - 80) + "px");     

} 

window.addEventListener("load", function() {
  mymain();
});

window.addEventListener("resize", function() {
  mymain();
});

