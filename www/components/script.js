// This is a JavaScript file
$(function(){
   
     $('button').bind('click', function(){

      var cidade = $('cidade').val();

      var now = new date();
      var tempURL = 'https://query.yahooapis.com/v1/public/yql?format=json&rnd=' + now.getFullYear() + now.getMonth() + 
      now.getDay() + now.getHours() + '&diagnostics=true&callback=?&q=';
      tempURL += 'select * from weather.forecast where woeid in ( select woeid from geo.places(1) where text="'+cidade+'") and u="c"';

      $.ajax({
           url:encodeURI(tempURL),
           dataType:'json',
           type:'GET',
           beforeSend:function(){
           	 $('#res').html('Carregando, Aguarde...')
           },
           success:function(json) {

               if(data !== null && data.query !== null && data.query.results !== null && data.
               	query.results !== null && data.query.results.channel.description!== 'Yahoo! Weather Error'){

                 var temp = data.query.results.channel.item.condition.temp;

                $('#res').html(temp+'°C')

               }

           },
           error:function(){
           	    $('#res').html('Erro!')
           }
      });


     });
});
