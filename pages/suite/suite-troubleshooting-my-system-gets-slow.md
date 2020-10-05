---
title:  My System Gets Slow
summary: "Understand how the system uses the available hardware so that you may implement workarounds and best practices."
sidebar: suite_sidebar
permalink: suite-troubleshooting-my-system-gets-slow.html
---

Dynamically rendering all the visual features in the system puts a significant load on the machine's graphics processing unit (GPU). Running multiple tasks at the same time is demanding on the central processing unit (CPU). Depending on your machine's capacity, this may result in the system getting slow and sometimes even unresponsive.

If you experience such symptoms, there are several actions you may take to mitigate them.

{% include note.html content="Learn about the [system requirements](suite-system-requirements.html) to better understand what to expect in terms of the performance of your hardware." %}

## Close The Browser's Developer Tools

You may have opened Developer Tools at some point. Developer Tools may slow animation renderings to a crawl, as slow as one frame per second. In case it is open, make sure you close Developer Tools.

## Stop Data Mining Tasks That You May Not Need Running

Data mining is a CPU-intensive activity. If you are designing a strategy, you probably don't need to have a live stream of information being processed in realtime. Learn to segment your activities and only start the tasks that you need for the work you are doing.

You may also consider [filtering time frames](suite-data-mining.html#time-frames-filter) to process the ones you require only.

## Open Either the Design Space or the Charting Space

Leaving the slider halfway up or down the screen causes both the design space and the charting space to consume resources. Make sure the slider is either fully up or down.

{% include /reuse/switch-from-charting-space-to-design-space.md content="more" extended="no" more="yes" %}

## Display Less Data on the Charts

Make sure you set the time scale to manual mode and adjust it so that fewer candles are displayed on the screen. Try switching the time frame box to the higher time frames so that candle density decreases.

{% include /charting_space/time-scale.md heading="" icon="no" adding="" configuring="" charts="####" content="no" definition="no" table="no" more="yes"%}

{% include /charting_space/time-frame-scale.md heading="" icon="no" adding="" configuring="" charts="####" content="no" definition="no" table="no" more="yes"%}

You may also want to switch off the layers you may not be using. Remember, every piece of graphical information you see on the screen represents data your system is reading from your disk and processing to display in a graphical form.

Also turn off the layers in the *Trading Engine* and *Trading System* layer managers. Those layers interact with the design space to show information in realtime over the trading engine and trading system hierarchies.

## Close Unused Hierarchies

The physics that govern nodes in the design space help structures of nodes to self-organize. This comes at a cost in terms of GPU processing power.

Make sure all hierarchies you are not using are collapsed.

You may also want to close any of the structures of nodes that you may not be using within the hierarchy that you may need to expand.

{% include important.html content="If these workarounds do not solve your problem and you often experience slowness or unresponsiveness when using your computer, you may want to consider upgrading your equipment. You shouldn't risk your capital with an insufficient trading infrastructure." %}

## See the Effects of Your Actions

There's a handy built-in tool to meassure the performance of the animation that you may use to see the effects of turning off layers, lowering the density of information and so on. 

Click <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Alt</kbd> + <kbd>F11</kbd> and the following performance readings will show up on your screen:

{% include image.html file='troubleshooting/frames-per-second-tool.png' url='yes' max-width='100' caption='On-screen performance metrics.' %}

The frame rate displayed at the bottom should increase the more of the actions suggested here you implement.