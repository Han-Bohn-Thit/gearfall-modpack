var requested_logs = LogsList.getLogs(LOG, CRASH_REPORT);

for (log : requested_logs) {
    if (RegexChecker.logContainsOneOfPatterns(
        log,
        "OptiFine",
        "optifine\\.OptiFineTransformer"
    )) {
        var warn = Analysis.addWarning(log,
            "OptiFine was detected.<br><br>OptiFine is not supported in Gearfall. Remove it from the mods folder and use Embeddium or Oculus instead."
        );
        warn.withPriority(9500);
    }
}