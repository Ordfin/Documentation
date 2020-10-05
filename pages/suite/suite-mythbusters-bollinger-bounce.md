---
title:  "Mythbusters: The Bollinger Bounce"
summary: "You may verify each of the tests featured in the brief report, and keep working on the ideas to turn them into complete strategies."
sidebar: suite_sidebar
permalink: suite-mythbusters-bollinger-bounce.html
---

{% include note.html content="If you are not familiar with Superalgos, you will need to [Get Started](index.html) before you may run these tests." %}

## Workspace

The workspace features two trading systems:

* Bollinger Bounce BUY

* Bollinger Bounce SELL

{% include image.html file='myth-busters/bollinger-bounce/Bollinger-Bounce-Workspace-map.PNG' url='yes' max-width='100' caption='Two trading systems besides the Network node.' %}

### Trading Systems

Each trading system features 4 strategies:

* Three of them are based on the MACD confirmation myth, one per tested time frame: 1H, 4H, and 24H.

* The fourth strategy is the one proposed as an improvement in the report, labeled as *Further Guidance*.

Only one strategy may be attached to the trading system at the time. Tests must be run on a per strategy basis.

{% include image.html file='myth-busters/bollinger-bounce/BB-BUY-Trading-system.gif' url='yes' max-width='100' caption='Attach the strategy you wish to test on the BUY side.' %}

{% include image.html file='myth-busters/bollinger-bounce/BB-SELL-Trading-system.gif' url='yes' max-width='100' caption='Strategies on the SELL side. Only one strategy should be tested at a time.' %}

### Testing and Production Environments

All trading sessions are prepared to run referencing these two trading systems. To run each test, you must set the <a data-toggle="tooltip" data-original-title="{{site.data.network.time_frame}}">time frame</a> parameter to match the time frame of the strategy to be tested.

### Charts

{% include image.html file='myth-busters/bollinger-bounce/Bollinger-Bounce-BUY-SELL-charts.PNG' url='yes' max-width='100' caption='Two charts, one for the BUY side and one for the SELL side are ready to use in the chartings space.' %}

