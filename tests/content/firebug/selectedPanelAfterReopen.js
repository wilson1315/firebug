/**
 * 1) Open a new tab and Firebug on it.
 * 2) Select Net panel
 * 3) Reopen Firebug
 * 4) Verify that the Net panel is still selected (BUG).
 */
function runTest()
{
    FBTest.sysout("selectedPanelAfterReopen.START");
    FBTest.openNewTab(basePath + "firebug/OpenFirebugOnThisPage.html", function(win)
    {
        FBTest.openFirebug();
        FBTest.selectPanelTab(FW.FBL.$STR("Panel-net"));
        FBTest.closeFirebug();
        FBTest.openFirebug();
        var tab = FBTest.getSelectedPanelTab();
        var label = tab.getAttribute("label");
        FBTest.compare(FW.FBL.$STR("Panel-net"), label, "Net panel must be selected now");
        FBTest.testDone("selectedPanelAfterReopen.DONE");
    });
}
