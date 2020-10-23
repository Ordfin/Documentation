---
title:  How to Troubleshoot an Issue
summary: "Following these logical steps will help you better understand the system and find solutions to most of the issues you may run into."
sidebar: suite_sidebar
permalink: suite-how-to-troubleshoot-an-issue.html
---

There are several reasons why you may experience issues while using Superalgos. It may be due to a lack of understanding of how the system works, because you may be skipping a step or two in the process you are trying to engage with, or because something may not be working as it should. 

Whatever the reason may be, this page provides a step-by-step process that will help you understand what is going on so that your issue may be resolved in the most efficient possible way. 

In other words, following this step-by-step troubleshooting guide will either lead you to discovering what you may be doing wrong so that you may fix your issue and move on, or to gathering all the relevant information required for the Team to investigate the issue.

{% include important.html content="Thoroughly following this troubleshooting guide&mdash;step by step&mdash;is a requirement for reporting an issue. We can not afford to investigate issues that you may solve on your own, or without the appropriate information. Doing so would rob the project of valuable resources." %}

## Start Here

### 1. Understand what you are doing and how the feature works

* If you are following the Download and Set Up guide or the Welcome tutorial, read caferully and make sure you haven't skipped any steps.

* If you are already using the system, take some time to search the documentation and read the pages related to the matters you are working with. Use the search box on the top-right corner to search for the specific matter (i.e.: backtesting, data mining, etc.)

* If you are having trouble with a specific node on the design space, open the menu and click the {% include inline_image.html file="icons/12-help.png" %} button. A new tab will open in your browser with the description of the corresponding node in the corresponding hierarchy directory. Read about the node, it's parent node, and its offspring.

* If you are having trouble operating the charts, make sure you revisit the Welcome tutorial and the [interface](suite-charting-space-interface.html) section of the Charting Space.

{% include tip.html content="There is no substitute for knowledge. The more you understand, the less time and effort you will waste with issues related to a lack of understanding, and the more focused your questions will be when asking for help. You may be inclined to take a shortcut and ask the community before doing your research. This may save you some time occasionally and may be appropriate in cases in which you need a little guidance or need to clear a quick doubt, particularly if you are a beginner and are still following the Getting Started Guide. However, the problem with lack of understanding is that it is a persistent condition until you deal with the root cause. The way to deal with the root cause is taking the time to read the documentation. Otherwise, you will find yourself dealing with the same constraints over and over again. Acquiring knowledge while being mindful of the Team’s time is the first step towards becoming a valuable member of the community." %}

### 2. Scan the troubleshooting section

Chances are someone else has experienced a similar issue as you may be experiencing now. We do our best to compile common issues into specific [troubleshooting pages](suite-troubleshooting-node-is-not-recognized-as-a-command.html), so make sure you take a look there before moving on.

### 3. Is your processor stuck at 100%?

Open your operating system's Task Manager application and verify the CPU load while you reproduce the issue you are experiencing. If your CPU is running at 100% for more than 30 to 60 seconds, all sorts of problems may arise, as your hardware is not able to cope with the [system requirements](suite-system-requirements.html). 

If this is the case, try closing any other applications that may be demanding CPU time, and follow the guidelines proposed in the [My System Gets Slow](suite-troubleshooting-my-system-gets-slow.html) page to lower the demands on the processor.

If you may not reproduce the issue while your CPU is working at less than 100%, then that may have been the cause of the problem.

### 4. Does the issue persist when using the latest version of the software?

Running the latest version of the software is virtually mandatory, as bugs affecting you may have already been solved. Make sure you are running the latest stable software version in the ```master``` branch of the <a href="https://github.com/Superalgos/Superalgos" rel="nofollow" rel="noopener" target="_blank">Superalgos repository</a>, or the latest software in the ```develop``` branch. 

{% include note.html content="Making sure means installing the latest version, right now." %}

### 5. Does the issue persist when using one of the official workspaces?

If the issue may not be reproduced using one of the official workspaces, that likely means that modifications you may have introduced may be playing a role in the issue. In and of itself, this is a crucial piece of information that helps start the process of isolating the issue. 

If the issue happens in a modified workspace only, take some time going through the modifications you introduced. 

Start over and reproduce the modifications on the official workspace, one at a time, and make a quick test after each mod is applied. This process done right should lead you to the exact node, structure of nodes, configuration, parameter, or&mdash;in general&mdash;the modification that may be involved in the cause of the issue.

{% include note.html content="This doesn't necessarily mean that you made a mistake when modifying the official workspace. It simply pinpoints where the problem may be, and it's a crucial part of the investigation that you should conduct before going any further." %}

### 6. Simplify the context and isolate the issue

When you are doing several things at the same time and something goes wrong, it is sometimes hard to identify what is it that may be causing the issue. The next logical step to take is to further isolate the issue. You do this by removing pieces from the context so that you may focus on the core of the matter.

For example:

* If you are having an issue while backtesting a strategy, you do not need your data mining operation to be running. In such a case, stop the data mining operation and everything else you may be doing, and run the backtest only.

* If you are having an issue running one of the Masters indicators, you do not need all indicators to be running at the same time. Make sure the said indicator dependencies are running, and stop the rest of the indicators.

* If you are having an issue with a chart and you have three other charts on the screen at the same time, try zooming-in the chart and see if you still experience the issue. Or turn all layers off and leave on only the layer you may be having difficulties with.

* If you are running multiple live trading sessions and experience an issue with one of them, stop the rest of the sessions and try to reproduce the issue with the first one.

{% include note.html content="The point to take home is that the narrower the scope of the investigation, the easier it is to find the cause of the problem." %}

### 7. May this be an issue with data?

If your machine shut down unexpectedly or you closed the backend servers running in the console application without first stopping your data mining tasks, chances are some of your data may have been corrupted. If you suspect this may have something to do with your issue, then you should [check the integrity of your data](suite-troubleshooting-check-data-integrity.html).

### 8. May this be an issue with the frontend application?

If your issue happens within the frontend application, then you should either be getting an [on-screen error](suite-troubleshooting-on-screen-errors-and-warnings.html) or an error on [your browser console application](suite-troubleshooting-check-for-errors-at-the-browser.html).

The error on-screen or logged at the browser console may give you a hint of what may be going on. If you are a technical person, this may help solve your issue on your own.

{% include note.html content="Make sure you grab the screen showing these errors so that you may report them later." %}

{% include important.html content="Remember that Chrome is the only supported browser. If you are using any other browser and have frontend issues, we may not be able to reproduce the issue. Do not report an issue with the frontend unless you are using Chrome." %}

### 9. May this be an issue with the backend application?

If there are issues with the backend application, then errors must be logged at the console where you are running the backend. The same errors are logged in the ```Log-Files``` folder and the specific sub-folders corresponding to the processes involved in the matter.

{% include note.html content="Make sure you [check the logs](suite-troubleshooting-consulting-logs.html) for the specific processes involved in the matter, and save the corresponding log files with these errors so that you may report them later." %}

{% include tip.html content="If you are a developer, remember that you may easily [debug a task](suite-developers-debugging-a-task.html) to find the root cause of the issue." %}

### 10. May this be an issue related to your particular setup?

Deploying and running Superalgos in complex or very particular setups augments the probability of issues related to the setup itself, which may be very hard or even impossible for the Team to reproduce. The team will investigate issues that happen while running Superalgos in your local machine, or while running in a classic [trading farm](suite-fundamental-trading-farms-concepts.html) setup as described in the documentation. We can not investigate issues unrelated to the software itself.

If you have issues with a particular setup, feel free to ask for help from other users in the community, but do not open an issue for the Team to look into.

## Has Your Issue Not Been Resolved?

If following this guide didn't solve your issue, do not worry... your efforts shall not go in vain! 

Investigating your issue must have taught you a lot about how the system works, and it's a requisite for reporting an issue so that the Team may investigate it. So, please, go ahead and do just that. Make sure you follow the [instructions on how to report an issue](suite-how-to-report-an-issue.html) and provide all the valuable information you have gathered while following this guide.