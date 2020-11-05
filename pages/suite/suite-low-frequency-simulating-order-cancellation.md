---
title: Simulating Order Cancellations
summary: "The simulation of the cancellation of an order is quite straightforward, as the trading bot has all the information required to proceed."
sidebar: suite_sidebar
permalink: suite-low-frequency-simulating-order-cancellation.html
---

Simulating the cancelation of an order is almost trivial. Of course, the process applies to backtesting and paper trading sessions only.

The order is closed seamlessly as the bot has full control over the order’s details.

```
tradingEngineOrder.status.value = 'Closed'
```

Once the order is closed, the bot runs the calculations to adjusts the stage size (see [Accounting](suite-low-frequency-accounting.html)).
