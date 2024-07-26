document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('ErduaConsoleActive') === 'true') {
      function loadEruda() {
        if (typeof eruda === 'undefined') {
          var erudaScript = document.createElement('script');
          erudaScript.src = "//cdn.jsdelivr.net/npm/eruda/eruda.min.js";
          document.body.appendChild(erudaScript);
          erudaScript.onload = function() {
            eruda.init();
            var erudaTimingScript = document.createElement('script');
            erudaTimingScript.src = "//cdn.jsdelivr.net/npm/eruda-timing/eruda-timing.min.js";
            document.body.appendChild(erudaTimingScript);
            erudaTimingScript.onload = function() { eruda.add(erudaTiming); };
  
            var erudaCodeScript = document.createElement('script');
            erudaCodeScript.src = "//cdn.jsdelivr.net/npm/eruda-code/eruda-code.min.js";
            document.body.appendChild(erudaCodeScript);
            erudaCodeScript.onload = function() { eruda.add(erudaCode); };
  
            var erudaDomScript = document.createElement('script');
            erudaDomScript.src = "//cdn.jsdelivr.net/npm/eruda-dom/eruda-dom.min.js";
            document.body.appendChild(erudaDomScript);
            erudaDomScript.onload = function() { eruda.add(erudaDom); };
          };
        } else {
          eruda.show();
        }
      }
  
      loadEruda();
    }
  });