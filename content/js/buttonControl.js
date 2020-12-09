        function buttonControl() {
            prevControl();
            firstControl();
            mntwoControl();
            mnoneControl();
            cPageControl();
            pnoneControl();
            pntwoControl();
            lastControl();
            nextControl();
        }

        function prevControl() {
            if (config.currentPage <= 1) {
                $('#prev').prop('disabled', true);
            } else {
                $('#prev').prop('disabled', false);
            }
        }

        function cPageControl() {
            $('#currentpage').html(config.currentPage.toString());
        }

        function firstControl() {
            if (config.currentPage >= 3) {
                $("#first").show();
            } else {
                $("#first").hide();
            }
        }

        function mntwoControl() {
            if (config.currentPage >= 3) {
                $("#mn2").show();
                $("#mn2").html("...");
            } else {
                $("#mn2").hide();
            }
        }

        function mnoneControl() {
            if (config.currentPage >= 2) {
                $("#mn1").show();
                $("#mn1").html(config.currentPage - 1);
            } else {
                $("#mn1").hide();
            }
        }



        function pnoneControl() {
            if (config.maxpage >= 2 & config.currentPage < config.maxpage) {
                $("#pn1").show();
                $("#pn1").html(config.currentPage + 1);
            } else {
                $("#pn1").hide();
            }
        }

        function pntwoControl() {
            if (config.maxpage >= 3 & config.currentPage + 2 < config.maxpage) {
                $("#pn2").show();
                $("#pn2").html("...");
            } else {
                $("#pn2").hide();
            }
        }

        function lastControl() {
            if (config.currentPage < config.maxpage) {
                $("#last").show();
            } else {
                $("#last").hide();
            }
        }

        function nextControl() {
            if (config.maxpage >= 2 & config.currentPage < config.maxpage) {
                $('#next').prop('disabled', false);
            } else {
                $('#next').prop('disabled', true);
            }
        }
