var requested_logs = LogsList.getLogs(LOG, CRASH_REPORT);

for (log : requested_logs) {
    if (RegexChecker.logContainsOneOfPatterns(
        log,
        "UnsupportedClassVersionError",
        "class file version"
    )) {
        var warn = Analysis.addWarning(log,
            "Gearfall requires Java 21.<br><br>Your launcher is using an outdated Java version. Install Java 21 and select it in your launcher settings."
        );
        warn.withPriority(9000);
    }
}