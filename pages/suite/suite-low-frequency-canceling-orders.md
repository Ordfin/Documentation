---
title: Canceling Orders
summary: "After running a few checks, if the cancel order event is triggered, the order is canceled, the synchronization is run, and accounts are updated."
sidebar: suite_sidebar
permalink: suite-low-frequency-canceling-orders.html
---

## Check Cancel Order Event

Before evaluating the cancel order event, a few checks are in order.

* Orders are not canceled if the stage is closing.

```(tradingEngineStage.status.value === 'Closing')```

* Orders may only be canceled if the status is ```Open```.

```(tradingEngineOrder.status.value === 'Open')```

If both checks pass, then the cancel order event is evaluated. If a situation in the event is ```true``, then the following actions take place:

* If it’s a backtesting or paper trading session, the order cancelation must be simulated (see [Simulating order cancelation](suite-low-frequency-simulating-order-cancellation.html)).

* If it’s a forward testing or live trading session, the order must be canceled at the exchange.

## Canceling Orders

When the cancel order event as defined in the trading system is triggered, the trading bot sends the cancel order request to the exchange, and waits for an answer. No further action is taken until the exchange confirms the order has been closed.

Once the confirmation is in, a new request to check the order is sent, so as to determine if the size filled for the order changed between the last time it was checked and the moment of the cancellation. 

Once the trading bot gets the order details, it runs the synchronization (see [Syncing with the exchange](suite-low-frequency-syncing-with-the-exchange.html)) and the recalculation of the stage size again (see [Accounting](suite-low-frequency-accounting.html)), to make up and account for any differences that may exist compared to the last known state of the order

The order is not closed until the order details are received from the exchange. 

```
tradingEngineOrder.status.value = 'Closed'
```
