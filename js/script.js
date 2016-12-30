function verifyLgin(theForm) {
    var msg = "";
    var error = 0;

    if (theForm.uname.value === "") {
        msg = "Please insert your email address";
        error = error + 1;
        theForm.uname.focus();
    } else if (theForm.pswd.value === "") {
        msg = "Please insert your password";
        error = error + 1;
        theForm.pswd.focus();
    }

    if (error > 0) {
        alert(msg);
        return (false);
    } else
        return (true);
}

function clrEm() {
    document.forms[1].uname.value = "";
}

function MM_preloadImages() { //v3.0

    var d = document;
    if (d.images) {
        if (!d.MM_p)

            d.MM_p = new Array();

        var

            i, j = d.MM_p.length,
            a = MM_preloadImages.arguments;
        for (i = 0; i < a.length; i++)

            if (a[i].indexOf("#") != 0) {
            d.MM_p[j] = new

            Image;
            d.MM_p[j++].src = a[i];
        }
    }

}

function MM_swapImgRestore() { //v3.0

    var i, x, a = document.MM_sr;

    for (i = 0; a && i < a.length && (x = a[i]) && x.oSrc; i++) x.src = x.oSrc;

}

function MM_findObj(n, d) { //v4.01

    var p, i, x;
    if (!d) d = document;

    if ((p = n.indexOf("?")) > 0 && parent.frames.length) {

        d = parent.frames[n.substring(p + 1)].document;

        n = n.substring(0, p);
    }

    if (!(x = d[n]) && d.all) x = d.all[n];
    for

    (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];

    for (i = 0; !x && d.layers && i < d.layers.length; i++)

        x = MM_findObj(n, d.layers[i].document);

    if (!x && d.getElementById)

        x = d.getElementById(n);
    return x;

}

function MM_swapImage() { //v3.0

    var i, j = 0,
        x, a = MM_swapImage.arguments;

    document.MM_sr = new Array;
    for (i = 0; i < (a.length - 2); i += 3)

        if

        ((x = MM_findObj(a[i])) != null) {
            document.MM_sr[j++] = x;
            if (!x.oSrc) x.oSrc = x.src;

            x.src = a[i + 2];
        }

}
! function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
    if (!d.getElementById(id)) { js = d.createElement(s);
        js.id = id;
        js.src = p + "://platform.twitter.com/widgets.js";
        fjs.parentNode.insertBefore(js, fjs); } }(document, "script", "twitter-wjs");

        var woo_settings = {idle_timeout:'300000', domain:'rich.co.ke'};
        (function(){
        var wsc = document.createElement('script');
        wsc.src = document.location.protocol+'//static.woopra.com/js/woopra.js';
        wsc.type = 'text/javascript';
        wsc.async = true;
        var ssc = document.getElementsByTagName('script')[0];
        ssc.parentNode.insertBefore(wsc, ssc);
        })();

<script type="text/javascript">

function overlay()

{

alert('saf');

}



</script>

      <script language="Javascript"

src="js/time.php"></script>

<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js" type="text/javascript"></script>



      <script language="Javascript"

src="js/verify.js"></script>

      <script language="JavaScript" type="text/JavaScript">

      </script>

<script type="text/javascript">



  var _gaq = _gaq || [];

  _gaq.push(['_setAccount', 'UA-2567856-3']);

  _gaq.push(['_trackPageview']);



  (function() {

    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;

    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';

    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

  })();



</script>
