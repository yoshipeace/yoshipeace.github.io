javascript: document = window.document;
alert("This has to be ran on a extension about:blank page"),
  document.write(
    "\n<html>\n          <body>\n            <h1>[Point Blank Swap Launcher]</h1><center><h1>---Disabling---</h1></center>\n<center><button id='kill'>Soft Disable</button></center><center><button id='disable'>Hard Kill</button></center><center><button id='revkill'>Revert Hard Kill</button></center><center><h1>--Extension Sites--</h1></center><center><h4>This is where you find the pages you are supposed to run this bookmarklet\n Choose your blocker below, if it says blocked by chrome, reload the page then click the link</h4><button  id='blocksi'>Blocksi</button><button id='classrom'>Securly Classroom</button><button id='curly'>Securly</button><button id='gogog'>GoGuardian</button><button id='iBoss'>iBoss</button><button id='umbrella'>Cisco Umbrella</button><center><h1> ---Scripts--- </h1></center><center><button id='goofy'>Display Goofy Alert</button><button id='aboutB'>A.B.C Cloaker</button></center><center><button id='securly'>Custom Securly Page</button><button id='classroom'>Custom Securly Classroom page</button></center><center><center><h4>Note: Some extensions not allow eval to be ran, which meaning running your own code won't work instead, try the other scripts above </h4></center><textarea  id='code' placeholder='Put Code Here'></textarea></center><center><button id='run'>Run Code</button></center><center></center><center></center><center></center>\n</body>\n          </html>\n <style> textarea{border-radius: 25px; margin: 1 auto;margin-center: auto;margin-center: auto; text-align: center; align: center; display:inline-block;height:400px}*{box-sizing:border-box}body{padding:13px;font-size:110%;color:#fff;background-color:#2e2e31}h1{text-align:center;font-size:70px}h2{text-align:left;font-size:175%}button,input,pre,select,textarea{border-radius: 21px; color:#000;font-size:15px}h1,h2,h3,h4,button,label,p,select{font-family:Roboto,sans-serif}hr{border:none;border-bottom:3px solid #fff}input,kbd,pre,textarea{font-family:monospace;border:none}input,select,textarea{background-color:#fff;border-radius:25px; padding:13px 17px;border:none}button,input{background-color:#fff;padding:13px 100px;margin:20 5px 5px 0}input{width:600px;border-radius:25px}textarea{white-space:pre;float:center;width:60%;border-radius:25px; 0 0 10px;resize:none;background-color:#99edc3;margin-bottom:15px}pre{border-radius:25; 10px 10px 0;padding:13px;float:right;margin:0 0 25px;width:40%;overflow-y:scroll;word-break:break-all;white-space:pre-line;background-color:#1c8e40}button{border:none;border-radius:25px; cursor:pointer;transition:filter 250ms}button:hover{filter:brightness(.8)}.gg{background-color:#99edc3}a{color:#99edc3;transition:color 250ms}a:hover{color:#1c8e40}</style>\n"
  );
  document.getElementById("disable").addEventListener(
    "click",
    function () {
      window.opener.chrome.extension.getBackgroundPage().close(),
        alert("Extension Has Been Disabled, closing..."),
        window.close();
    },

    !1
  ),
  document.getElementById("run").addEventListener(
    "click",
    function () {
      try {
        eval(document.getElementById("code").value);
      } catch (n) {
        alert("A syntax error has occured: " + n);
      }

      var empty = document.getElementById("code").value;
      if (empty == "") {
        alert("Textbox is empty");
      }
    },
    !1
  ),
  document.getElementById("securly").addEventListener(
    "click",
    function () {
      window.open(
        "chrome-extension://iheobagjkfklnlikgihanlhcddjoihkg/blocked.html?site=" +
          encodeURIComponent(
            btoa(prompt("Put your html here, using <script> won't work"))
          )
      );
    },
    !1
  ),
  document.getElementById("classroom").addEventListener(
    "click",
    function () {
      window.open(
        "chrome-extension://jfbecfmiegcjddenjhlbhlikcbfmnafd/blocking/block.html?t=" +
          encodeURIComponent(btoa(prompt("html, using <script> won't work")))
      );
    },
    !1
  ),
  document.getElementById("kill").addEventListener(
    "click",
    function () {
      opener.chrome.extension.getBackgroundPage().close();
      alert("Extension is gone, this persists until restart");
    },
    !1
  ),
  document.getElementById("goofy").addEventListener(
    "click",
    function () {
      alert(
        "We've been trying to reach you concerning your vehicle's extended warranty. You should've received a notice in the mail about your car's extended warranty eligibility. Since we've not gotten a response, we're giving you a final courtesy call before we close out your file. Press 2 to be removed and placed on our do-not-call list. To speak to someone about possibly extending or reinstating your vehicle's warranty, press 1 to speak with a warranty specialist."
      );
    },
    !1
  ),
  document.getElementById("blocksi").addEventListener(
    "click",
    function () {
      alert("On this page click the blue link and run the bookmarklet again"),
        window.open("https://tinyurl.com/goofsi");
    },
    !1
  ),
  document.getElementById("curly").addEventListener(
    "click",
    function () {
      alert("on the blank page run the bookmarklet again"),
        window.open("https://tinyurl.com/awesomegoofcurly");
    },
    !1
  ),
  document.getElementById("classrom").addEventListener(
    "click",
    function () {
      alert("On this page click the blue link and run the bookmarklet again"),
        window.open("https://tinyurl.com/goofclassroom");
    },
    !1
  ),
  document.getElementById("iBoss").addEventListener(
    "click",
    function () {
      alert("On this page click the blue link and run the bookmarklet again"),
        window.open("https://tinyurl.com/goofboss");
    },
    !1
  ),
  document.getElementById("umbrella").addEventListener(
    "click",
    function () {
      alert("On this page click the blue link and run the bookmarklet again"),
        window.open("https://tinyurl.com/goofumbrella");
    },
    !1
  ),
  document.getElementById("gogog").addEventListener(
    "click",
    function () {
      alert(
        "On this page click the blue link and run the bookmarklet again\nThis may not work because of your school may have updated goguardian "
      ),
        window.open("https://tinyurl.com/goofguardian");
    },
    !1
  ),
  document.getElementById("aboutB").addEventListener(
    "click",
    function () {
      javascript: (function () {
        var url = prompt(
          "Paste the link you want to be embedded into an about:blank page.\n(INCLUDE https://)",
          "https://example.com"
        );
        var urlObj = new window.URL(window.location.href);
        win = window.open();
        win.document.body.style.margin = "0";
        win.document.body.style.height = "100vh";
        var iframe = win.document.createElement("iframe");
        iframe.style.border = "none";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.margin = "0";
        iframe.referrerpolicy = "no-referrer";
        iframe.allow = "fullscreen";
        iframe.src = url.toString();
        win.document.body.appendChild(iframe);
        var script = win.document.createElement("script");
        win.document.body.appendChild(script);
      })();
    },
    !1
  );
