
$('#btn').on("click", function() {
    if($('#input').val()==""){
        alert("pleas enter cat")
    }
    else{
    var val = $('#input').val()
    $('#main').empty();
    fetch(val);
    }
    
})
fetch('india')
function fetch(cat){
     $('#loading-image').show(); 
$.ajax({
    
    url : "https://gnews.io/api/v4/search?q="+cat+"&token=1c622845dbef5c51c2ce1923543350a6&lang=hi",
    type : "GET",
    success : function(data){

        console.log(data)
$.each(data.articles, function(key, value) {
$('#main').append('<div class="cont"><h6 class="title">"'+ value.title +'"</h6><img class="img" src="'+ value.image +'"" alt=""><p class="content">"'+ value.content +'"</p> <p class="btn"><a class="atag" target=”_blank” href="'+ value.url +'">Read...</a></p><br><div class="dummy"></div></div>');
console.log(value.image);
$('.atag').html('Read...')
});
    },
  complete: function() {
     $('#loading-image').hide();


    }
})
}
