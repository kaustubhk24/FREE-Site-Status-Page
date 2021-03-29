/**
 *  Please enter your site list here, The site_name will be the site name shown to user
 * site_url is used to ping use proper http or https , this is also used for opening url from visit button
 * 
 * 
 */

sites=[
    {
        'site_name':'JustInClicks.com',
        'site_url':'https://www.justinclicks.com/'
    },
    
    {
        'site_name':'IFSC Bank API',
        'site_url':'https://bank-apis.justinclicks.com/'
    },
    {
        'site_name':'Docs JustInClicks.com',
        'site_url':'https://docs.justinclicks.com/'
    },

    {
        'site_name':'App JustInClicks.com',
        'site_url':'https://apps.justinclicks.com/'
    },
    {
        'site_name':'Bill JustInClicks.com',
        'site_url':'https://bill.justinclicks.com/'
    },

    {
        'site_name':'CDN JustInClicks.com',
        'site_url':'https://icons.justinclicks.com/'
    },
    {
        'site_name':'Licensing',
        'site_url':'https://licensing.justinclicks.com/'
    }
]

/***
 *  Sites ends here
 * 
 */

/*** 
 * Some Required functions Starts here
 */
var nightVal=true;
 var loader=document.getElementById("loader");
 var innerHTML="";
var isLive=document.getElementById("islive");
var ServerStatus =document.getElementById("ServerStatus");

function checkIfSiteIsLive(url,loader,site,i)
{
    var address = url;

var t1 = Date.now();
var t2;

var max = 100000;
var failed = false;

var httpReq = (window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");
if(httpReq == null) {
    console.log("Error: XMLHttpRequest failed to initiate.");
}
httpReq.onreadystatechange = function() {

    var failTimer = setTimeout(function() {
                               failed = true;
                               httpReq.abort();
                               }, max);

    if (httpReq.readyState == 4) {  //Completed loading
        if (!failed && (httpReq.status == 200 || httpReq.status == 0)) {

            clearTimeout(failTimer);

            t2 = Date.now();

            var timeTotal = (t2 - t1);
            if(timeTotal > max) {
                onFail();
            } else {
                onSuccess(timeTotal);
            }

        }
        else {  //Otherwise, there was a problem while loading
            console.log("Error " + httpReq.status + " has occurred.");
            onFail();
        }
    }
}
try {
    httpReq.open("GET", address, true);
    httpReq.send(null);

} catch(e) {
    console.log("Error retrieving data httpReq. Some browsers only accept cross-domain request with HTTP.");
    onFail();
}


function onSuccess(timeTotal) {

    ServerStatus.innerHTML="Time Taken to connect: " + timeTotal;
    isLive.innerHTML="Site is Live "+"<span class='logged-in'>●</span>";
    innerHTML+="<br>";
    innerHTML+="<div class='card'>";
    innerHTML+="<div class=card-header>"+site;
    innerHTML+="</div>";
    innerHTML+="<div class=card-body>";
    innerHTML+="<h5 class=card-title>"+isLive.innerHTML+"</h5>";
    innerHTML+="<p class=card-text>"+ServerStatus.innerHTML+"</p>";
    innerHTML+="<a target=_blank href="+url+"  class='btn btn-warning'>Visit</a> &nbsp;";
    innerHTML+="<a target=_blank href=incident.html?n="+encodeURI(site)+"  class=''>See Reported Incident</a>";

    innerHTML+=" </div>  </div>";

loader.innerHTML=innerHTML;

}
function onFail() {
    isLive.innerHTML="Site is Down "+"<span class='logged-out'>●</span>";
    ServerStatus.innerHTML="Site seems to be unavailable right now";
    innerHTML+="<br>";
    innerHTML+="<div class=card>";
    innerHTML+="<div class=card-header>"+site;
    innerHTML+="</div>";
    innerHTML+="<div class=card-body>";
    innerHTML+="<h5 class=card-title>"+isLive.innerHTML+"</h5>";
    innerHTML+="<p class=card-text>"+ServerStatus.innerHTML+"</p>";
    innerHTML+="<a target=_blank href="+url+" class='btn btn-warning'>Visit</a> &nbsp;";
    innerHTML+="<a target=_blank href=incident.html?n="+encodeURI(site)+"  class=''>See Reported Incident</a>";

    innerHTML+=" </div>  </div>";
    console.clear();
    loader.innerHTML=innerHTML;

}

}

/*** 
 * Some Required functions Ends here
 */




for(var i=0;i<sites.length;i++)
{  

    checkIfSiteIsLive(sites[i]['site_url'],loader,sites[i]['site_name'],i,);
  
} 


/***
 * 
 * Night Mode
 */
nightVal(true)

function night(nightVal)
{
    if(!nightVal)
    {
        var element = document.body;
  element.classList.toggle("dark-body");


var nav=document.getElementById("nav");
nav.classList.toggle("dark-nav");

var ftr=document.getElementById("ftr");
ftr.classList.toggle("dark-nav");

var navbtn=document.getElementById("navbtn");
navbtn.classList.toggle("dark-nav-btn");

  
  var buttons = document.getElementsByClassName('btn');
  for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.classList.toggle('dark-btn');

}



var clss = document.getElementsByClassName('card');
for (let ic = 0; ic < clss.length; ic++) {
  let cls = clss[ic];
  cls.classList.toggle('dark-card');

}



var crdhdr = document.getElementsByClassName('card-header');
for (let ic1 = 0; ic1 < crdhdr.length; ic1++) {
  let crd = crdhdr[ic1];
  crd.classList.toggle('dark-card-header');

}}}


/***
 * 
 * Night Mode
 */







