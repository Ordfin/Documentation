---
title: Simulating Check of Events
summary: "Instead of checking what happened with the order at the exchange, the bot launches the synchronization simulation and updates the trading engine with the results of the calculations."
sidebar: suite_sidebar
permalink: suite-low-frequency-simulating-check-of-events.html
---

The process is the same for all orders and involves a simulated synchronization with the exchange (see [Simulating sync with exchange](suite-low-frequency-simulating-sync-with-exchange.html)), which performs all the checks and calculations, and updates the associated nodes in the trading engine hierarchy.

Once the simulated synchronization is done, the bot checks if the order was completely filled during the simulation ```(tradingEngineOrder.orderStatistics.percentageFilled.value === 100)``` and updates the corresponding trading engine nodes accordingly:

```
tradingEngineOrder.status.value = 'Closed'
tradingEngineOrder.exitType.value = 'Filled'
```
