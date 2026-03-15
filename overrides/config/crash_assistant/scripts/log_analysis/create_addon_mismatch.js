var requested_logs = LogsList.getLogs(LOG, CRASH_REPORT);

for (log : requested_logs) {
    if (RegexChecker.logContainsOneOfPatterns(
        log,
        "NoSuchMethodError: com\\.simibubi\\.create",
        "com\\.simibubi\\.create.*NoSuchMethodError"
    )) {
        var warn = Analysis.addWarning(log,
            "A Create addon appears to be incompatible with the installed Create version.<br><br>Do not update Create or its addons manually. Use the versions included in Gearfall."
        );
        warn.withPriority(8500);
    }
}