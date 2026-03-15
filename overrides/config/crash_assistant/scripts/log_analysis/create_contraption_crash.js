var requested_logs = LogsList.getLogs(LOG, CRASH_REPORT);

for (log : requested_logs) {
    if (RegexChecker.logContainsOneOfPatterns(
        log,
        "com\\.simibubi\\.create\\.content\\.contraptions",
        "ContraptionEntity",
        "AssemblyException"
    )) {
        var warn = Analysis.addWarning(log,
            "A Create contraption likely caused this crash.<br><br>Try disabling the machine by breaking its bearing, pulley, or power source."
        );
        warn.withPriority(8200);
    }
}