var requested_logs = LogsList.getLogs(LOG, CRASH_REPORT);

for (log : requested_logs) {
    if (RegexChecker.logContainsOneOfPatterns(
        log,
        "KubeJS ERROR",
        "Error loading KubeJS scripts",
        "Script failed"
    )) {
        var warn = Analysis.addWarning(log,
            "A KubeJS script failed to load.<br><br>Try deleting the KubeJS cache folders:<br>kubejs/.cache<br>kubejs/client_scripts/.cache"
        );
        warn.withPriority(8700);
    }
}