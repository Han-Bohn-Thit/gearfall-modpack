var requested_logs = LogsList.getLogs(CRASH_REPORT, HS_ERR);

for (log : requested_logs) {
    if (RegexChecker.logContainsOneOfPatterns(
        log,
        "EXCEPTION_ACCESS_VIOLATION",
        "nvoglv64\\.dll",
        "atio6axx\\.dll"
    )) {
        var warn = Analysis.addWarning(log,
            "The crash appears to be caused by a graphics driver failure.<br><br>Update your GPU drivers and try again. If using shaders, disable them temporarily."
        );
        warn.withPriority(8000);
    }
}