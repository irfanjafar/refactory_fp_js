const prompt = require('prompt');
prompt.start();
console.log("Masukkan tahun awal");
prompt.get(['start'], function (err, result) {
    if (err) { return onErr(err); }
    
    tahun1 = result.start;

    console.log("Masukkan tahun akhir");
	prompt.get(['end'], function (err, result) {
	    if (err) { return onErr(err); }
	    
	    tahun2 = result.end;

	    function leap_year_range(tahun1, tahun2) {
			var year_range = [];
			for (var i = tahun1; i <= tahun2; i++)
			{
				year_range.push(i);
			}
			var new_array = [];

			year_range.forEach(
				function(year)
				{ 
					if (test_LeapYear(year)) 
						new_array.push(year);
				});

			return new_array;
		}

		function test_LeapYear(year) {
			if ((year % 4) == 0) {
			if ((year % 100) == 0) {
				if ((year % 400) == 0) {
					console.log(year+" adalah tahun kabisat");
				}else{
					console.log(year+" adalah bukan tahun kabisat");
				}	
			}else{
				console.log(year+" adalah tahun kabisat");
			}
		}else{
		console.log(year+" adalah bukan tahun kabisat");
		}
		}

		leap_year_range(tahun1,tahun2);
	});
});

function onErr(err) {
    console.log(err);
    return 1;
}


