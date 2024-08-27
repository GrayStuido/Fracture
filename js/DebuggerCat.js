(function() {
    const LOCAL_STORAGE_KEY = 'debuggerStatus';

    // Function to detect if the debugger is open
    function detectDebugger() {
        // Use `debugger` statement to attempt to pause execution if dev tools is open
        const startTime = Date.now();
        debugger;
        const endTime = Date.now();
        
        // Check if time spent in debugger exceeds a threshold
        if (endTime - startTime > 100) {
            // Debugger is open
            console.log("You really thought");
            localStorage.setItem(LOCAL_STORAGE_KEY, '1');
        } else {
            // Debugger is not open
            localStorage.setItem(LOCAL_STORAGE_KEY, '0');
        }
    }

    // Function to reload the page if `debuggerStatus` is `1`
    function checkDebuggerStatus() {
        const debuggerStatus = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (debuggerStatus === '1') {
            console.log("Geet fucked");
            localStorage.removeItem(LOCAL_STORAGE_KEY); // Clear the status
            window.location.reload();
        }
    }

    // Initialize monitoring
    function initMonitoring() {
        // Check the debugger status immediately
        checkDebuggerStatus();
        
        // Set up periodic checks
        setInterval(() => {
            detectDebugger();
            checkDebuggerStatus();
        }, 300);
    }

    initMonitoring();
})();
