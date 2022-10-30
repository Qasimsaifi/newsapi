$.ajax({
    url : "https://api.covid19api.com/summary",
    type : "GET",
    success : function(data){
        console.log(data.Countries);
        $.each(data.Global , function(key , value){
$("#global-wise").append("<tr bgcolor='pink'><td>"+ key +"</td><td>"+ value +"</td></tr>")
        });
 var sno = 1;
$.each(data.Countries, function(key, value) {
    $("#country-wise").append("<tr bgcolor='#FF9494'>"+
"<td>" + sno +"</td>" +
"<td>" + value.Country +"</td>" +
"<td>" + value.NewConfirmed +"</td>" +
"<td>" + value.NewDeaths +"</td>" +
"<td>" + value.NewRecovered +"</td>" +
"<td>" + value.TotalConfirmed +"</td>" +
"<td>" + value.TotalDeaths +"</td>" +
"<td>" + value.TotalRecovered +"</td>" +
"</tr>")

sno ++
});
    }
})
