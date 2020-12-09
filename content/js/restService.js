           function getDataCount() {
               $.ajax({
                   url: 'http://localhost:5380/getDataCount',
                   type: 'GET',
                   async: false,
                   cache: false,
                   success: function(data) { config.dataCount = parseInt(data[0].dataCount); },
                   error: function(jqXHR, textStatus, err) { alert('Error! dataCount ') }
               });
           }

           function getEmployes() {
               var sendObj = {};
               sendObj.limit = config.limit;
               sendObj.offset = config.offset;
               var getter = JSON.stringify(sendObj);

               $.ajax({
                   url: 'http://localhost:5380/getEmployes',
                   type: 'POST',
                   cache: false,
                   data: { getter },
                   success: function(data) {
                       $("#employesTable").empty();
                       $.each(data, function(i, item) {
                           var $tr = $(`<tr id='no${item.EmployesID}' onclick='sec(${item.EmployesID})' >`).append(
                               $('<th scope="row">').text(config.offset + i + 1),
                               $('<td>').text(item.EmployesNo),
                               $('<td>').text(item.EmployesName),
                               $('<td>').text(item.EmployesEmail),
                               $('<td>').text(item.EmployesCounty),
                               $('<td>').text(item.EmployesSalary)
                           ).appendTo('#employesTable');
                       });
                   },
                   error: function(jqXHR, textStatus, err) { alert('Error! List') }
               });
           }



           function employesAdd() {
               let employes = {};

               employes.EmployesNo = parseInt($('#personalNo').val());
               employes.EmployesName = $('#personalName').val();
               employes.EmployesEmail = $('#personalEmail').val();
               employes.EmployesSalary = parseInt($('#personalSalary').val());
               employes.EmployesCounty = $('#personalCounty').val();

               var employesData = JSON.stringify(employes);
               console.log(employesData);

               $.ajax({
                   url: 'http://localhost:5380/employesAdd',
                   type: 'POST',
                   cache: false,
                   data: { employesData },
                   success: function(data) {
                       alert("Success valid. Loading page...");
                       window.location.reload();
                   },
                   error: function(jqXHR, textStatus, err) { alert('Error! dataCount ') }
               });

           }

           function employesDelete() {
               $.ajax({
                   url: "http://localhost:5380/delEmployes/" + deleteID,
                   type: 'DELETE',
                   cache: false,
                   success: function(data) {
                       alert("Success delete.");
                       window.location.reload();
                   },
                   error: function(jqXHR, textStatus, err) { alert('Error! invalid ID ') }
               });
           }