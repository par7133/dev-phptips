    
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
  $(".dktoponly").each(function(){
    if (bodyRect.height > 800) {
      $(this).css("display", "inline");
    } else {
      $(this).css("display", "none");
    }    
  });  
  $(".mblonly").each(function(){
    if (bodyRect.height > 800) {
      $(this).css("display", "none");
    } else {
      $(this).css("display", "inline");
    }    
  });  
}  

function mymain() {

 setContent();

 setTimeout("setFooterPos()", 1000);

 $("#content-td").css("height", (parseInt(window.innerHeight) - 118) + "px");
 $("#content-cont").css("height", (parseInt(window.innerHeight) - 118) + "px");     

} 
           
mymain();

window.addEventListener("resize", function() {
  mymain();
});

