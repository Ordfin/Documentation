---
title: Reviewing Existing Orders
summary: "The trading bot checks all existing orders upon each execution to determine what needs to be done with each of them."
sidebar: suite_sidebar
permalink: suite-low-frequency-reviewing-existing-orders.html
toc: false
---

Each order has a create order event, and limit orders may have a cancel order event. This means that orders may be created and, in the case of limit orders, canceled.

For each order defined, the bot performs multiple checks which may result in different actions. Two particular cases are analyzed separately: when the order is ```Not Open``` and when the order is ```Open```.

## The order is Not Open
```(tradingEngineOrder.status.value === 'Not Open')```

If the order is ```Not Open``` it means that it may need to be created. However, a few checks are in order.

* Orders are not created in the first cycle.

```(tradingEngine.current.episode.cycle.value === 'First')```

* Orders are not created when the stage is closing.

```(tradingEngineStage.status.value === 'Closing')```

* For order definitions that do not allow spawning multiple orders, orders are not created when the lock is closed.

```(tradingEngineOrder.lock.value === 'Closed')```

If previous checks pass and one of the situations in the create order event validates ```true```, then the order is created (see [Opening orders](suite-low-frequency-opening-orders.html)).

## The order is Open
```(tradingEngineOrder.status.value === 'Open')```

If the order is ```Open``` and it is a limit order, it may need to be canceled (market orders may not be canceled as they are supposed to fill almost instantaneously). Also, several other system actions may be required. A few checks are in order.

* Orders are not canceled in the second cycle, only the first.

```(tradingEngine.current.episode.cycle.value === 'Second')```

* If it’s a forward testing or live trading session, the events that take place at the exchange must be checked (see [Checking exchange events](suite-low-frequency-checking-exchange-events.html)). If the checking of the events at the exchange fails for whatever reason, the order may not be canceled and will need to wait for the next execution.

* If it’s a backtesting or paper trading session, the events that take place at the exchange must be simulated (see [Simulating check of events](suite-low-frequency-simulating-check-of-events.html)).

If previous checks pass and one of the situations in the cancel order event validates ```true```, then the order is canceled (see [Canceling orders](suite-low-frequency-canceling-orders.html)). If the order is indeed closed, the order is cloned to update the corresponding data structure of the ```tradingEngine.last``` node.