var id = "b2ac60d8-6e21-41b1-980f-33ec13134ed0";


$(document).ready(function(){

	$("#visaalla").click(function(){

		$('#resultat').empty();

	    $.ajax({
		    type: "GET",
		    url: "https://testing.euw.istaffsystems.com/users/",
		    beforeSend: function (xhr) { xhr.setRequestHeader('x-api-key', id); },
		    success: function (data)
		    {
				$.each(data, function() {
				  
				  $.each(this, function(k, v) {

	 				if (k=="id") {
	 					$('#resultat').append( k + ": " + v + " - ");
	 				}
	 				if (k=="name") {
	 					$('#resultat').append( k + ": " + v + " <br> ");
	 				}
				  
				  });

				});
		    	//console.log(data);

		    },
		    error: function(checkError){
		    	if(checkError.status == 401 || checkError.status == 404){
		    		$('#resultat').append(" Error 404 ");
		    		//console.log("Error 404");
		    	}

		    }
		});
	});


	$("#visaen").click(function(){

		var userid = $("#userid").val();

		$('#resultat').empty();

		if (!userid) {  $('#resultat').html(" Fyll i korrekt user id ");}

		else{
		    $.ajax({
			    type: "GET",
			    url: "https://testing.euw.istaffsystems.com/user/"+userid,
			    beforeSend: function (xhr) { xhr.setRequestHeader('x-api-key', id); },
			    success: function (data)
			    {
					
					  
					  $.each(data, function(k, v) {

		 				if (k=="id") {$('#resultat').append( k + ": " + v + " - ");}
		 				if (k=="firstname") {$('#resultat').append( k + ": " + v + " ");}
		 				if (k=="lastname") {$('#resultat').append( k + ": " + v + ", ");}
		 				if (k=="email") {$('#resultat').append( k + ": " + v + " <br> ");}
					  
					  });

					
			    	//console.log(data);

			    },

			    error: function(checkError){
			    	if(checkError.status == 401 || checkError.status == 404){
			    		$('#resultat').html(" Error 404 ");
			    		//console.log("Error 404");
			    	}

			    }
			});
		}
	});
});