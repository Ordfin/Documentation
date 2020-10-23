---
title:  Monitoring Runtime Data
summary: "Use the trading engine hierarchy to track every piece of information processed by the trading bot, candle by candle."
sidebar: suite_sidebar
permalink: suite-trading-engine-monitoring-runtime-data.html
toc: false
---

The trading engine hierarchy is a portal into the trading bot's machine room&mdash;the brain. Think of the trading engine as a terminal connected to each of the brain's neurons, taking a snapshot for every candle, and registering with precision every piece of data handled by the trading bot during the trading session.

Superalgos combines the time navigation features of the charts with the visual environment representing data structures of the design space, to create an immersive user experience.

{% include callout.html type="success" content="Each of the nodes in the hierarchy may display its value on the design space, right below the icon representing the node, for each candle." %}

{% include note.html content="How users may monitor the information featured in the Trading Engine hierarchy is explained and demonstrated on the *Trading Bot Layers* tutorial available on the *Weak-hands Buster V2.0* plugin workspace." %}

As a quick refresher, the process is more or less as follows:

**1. Run a trading session**. Start with a backtest, so that you may get a quick feel of how the Trading Engine hierarchy displays data spanning any period.

**2. Go to the chart displaying the simulation** and find one of the positions. 

**3. Turn on the *Current Position* layer** in the *Trading Engine* layer manager. This layer monitors the position structure of nodes under the current node, that is, the information regarding current positions.

**4. Split the screen** to make room for both the design space and the charting space.

**5. Position the view on the design space** so that you may see the corresponding structure of nodes.

**6. Slide the pointer of the mouse over the charts**, across the position, and notice how the values for each node displayed on the design space change. Each node displays the corresponding value for each candle.

{% include tip.html content="Much of the data handled by the trading engine may also be visualized over the charts through the layers and panels in the *Trading Charts* layer manager. If any of the above is not clear, please refer to the *Trading Bot Layers* tutorial available on the *Weak-hands Buster V2.0* plugin workspace." %}