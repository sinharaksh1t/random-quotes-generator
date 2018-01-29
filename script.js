var $ = jQuery; 
$.ajaxSetup({ cache: false }); 
$(document).ready(function() {
  $("#newquote").on("click",function() {
  var html1="";
  var html2="";
  tweetext="";
    $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(json) {
    html1+="<p >"+json[0].content+"</p>";
      html2+="<p >- "+json[0].title+"</p>";
      $("#quote").html(html1);
      $("#author").html(html2);
      tweetext=json[0].content;
      tweetext = tweetext.slice(3,tweetext.length-5).trim().concat(" - "+json[0].title);
});
  });
  
  $(this).on("click", function() {
    $("#tweetout").attr("href", 'https://twitter.com/intent/tweet?text=' + tweetext);
  });
  
});