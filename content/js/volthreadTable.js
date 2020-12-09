let config = {};

    $(document).ready(function() {

        config.limit = 5;
        config.currentPage = 1;
        config.offset = (config.limit * config.currentPage) - config.limit;

        getDataCount();
        getEmployes();
        maxpage(config.limit);
        buttonControl();
    });



    function limitChange() {
        var limit = parseInt($('#limitbox').val());
        config.limit = limit;
        config.currentPage = 1;
        offset();
        maxpage(limit);
        getEmployes();
        buttonControl();
    }

    function pageChanger(changeNumber) {
        if (changeNumber == 0) {
            config.currentPage = 1;
        } else if (changeNumber == 9) {
            config.currentPage = config.maxpage;
        } else {
            config.currentPage = config.currentPage + changeNumber;
        }

        offset();
        getEmployes();
        buttonControl();
    }


    function maxpage(limit) {
        config.maxpage = Math.ceil(config.dataCount / limit);
    }

    function offset() {
        config.offset = (config.limit * config.currentPage) - config.limit;
    }

    let deleteID = 0;


    function sec(deger) {

        let tempID = deleteID ;
        $('#removeButton').prop('disabled', false);
        $("#no" + deger).addClass('bg-warning');

        deleteID = deger;
        cleanClass(tempID);

    }

    function cleanClass(tempID)
    {
        $("#no" + tempID).removeClass('bg-warning');
    }