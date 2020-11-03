---
title: Simulating Sync With the Exchange
summary: "The simulated synchronization with the exchange resembles the real synchronization in that it follows the same logic. The difference lies in that the data involved in calculations originates in user definitions instead of real-life orders."
sidebar: suite_sidebar
permalink: suite-low-frequency-simulating-sync-with-exchange.html
---

The simulation of the synchronization with the exchange looks to reproduce the logic of live trading for backtesting and paper trading sessions so that simulations follow similar mechanisms, and thus, maximize their capacity to predict what live trading with any given trading system may look like. 

The obvious difference is that there is no exchange involved in the process, that is, no real-life data about the variables affecting orders such as the actual fill rates, or if orders are filled at all. Instead, all information is taken from user definitions (both from the trading system and session parameters) and market information.

There are two main levels of definitions that affect how orders are simulated. 

The one level that takes precedence in all cases is the definitions made through the simulated exchange events section under each order defined in the trading system. These definitions affect each order, providing granular control over how each order should be simulated.

The second level of definitions affecting how simulations work is that of parameters at the level of the trading session. These parameters are used for all orders that do not have a specific definition in the form of simulated exchange events.

Like with the real synchronization process, once all calculations are done, the trading bot does the bookkeeping (see [Accounting](suite-low-frequency-accounting.html)).

## Actual Size Simulation

Minimal variations in the size of orders that may occur during live trading sessions are irrelevant to the production of proper simulations, thus, there is no need to simulate such things. Instead, the trading bot takes the defined sizes as valid and uses those as the actual size of the order.

```
tradingEngineOrder.orderBaseAsset.actualSize.value = 
tradingEngineOrder.orderBaseAsset.size.value
tradingEngineOrder.orderQuotedAsset.actualSize.value = 
tradingEngineOrder.orderQuotedAsset.size.value
```

## Actual Rate Simulation

The initial value for the rate of orders is the close of the last candle for market orders, that is, the last known market rate, and the value defined for the rate node in case of limit orders.

```
tradingEngineOrder.orderStatistics.actualRate.value = tradingEngineOrder.rate.value
```

However, in real live trading situations, there are many factors out of the users' control that may affect the actual rate of an order, especially for market orders. Properly simulating such issues is conducive to more realistic projections on the potential performance of strategies, thus, simulations should take such issues into account.

There are three steps involved in the simulation of the actual rate, and shall be analyzed separately:

* Slippage simulation when there are definitions at the level of the trading system, that is, at the level of the simulated exchange events node (see Based On Trading System below).

* Slippage simulation when there are no definitions at the level of the trading system; session parameters are used instead (see Based On Session Parameters below).

* The last case has to do with verifying if the simulated actual rate defined in either of the two earlier steps makes sense in the context of the market (see Consider Best Match With Order Book below).

### Based On Trading System

If an actual rate is properly defined under simulated exchange events for the order in question, the value resulting from the formula is used as the actual rate.

```
tradingEngineOrder.orderStatistics.actualRate.value === 
tradingEngineOrder.orderStatistics.actualRate.config.initialValue
```

{% include note.html content='Although limit orders tend to have little or no slippage, notice that the above is valid both for market orders and limit orders.' %}

### Based On Session Parameters

If a limit order does not have an actual rate defined under simulated exchange events, then the actual rate of a limit order is the defined initial rate, as the slippage session parameter does not apply to limit orders. That is, the value is left untouched.

However, if a market order does not have an actual rate defined under simulated exchange events, then the ```marketOrderRate``` parameter within the slippage session parameter is used to apply a slippage factor.

```
slippageAmount = tradingEngineOrder.rate.value * 
sessionParameters.slippage.config.marketOrderRate / 100
```

{% include important.html content='Slippage is applied so that it always goes against the interest of the trading system. For example, for a market sell order, the slippage amount is subtracted from the initial rate, therefore simulating that the rate is worse than ideal.' %}

```
tradingEngineOrder.orderStatistics.actualRate.value = 
tradingEngineOrder.rate.value - 
slippageAmount
```

The opposite is true for market buy orders:

```
tradingEngineOrder.orderStatistics.actualRate.value = 
tradingEngineOrder.rate.value + 
slippageAmount
```

### Consider Best Match With Order Book

Let's set up the context for a little piece of analysis required to understand this simulation criterion.

The exchange's order book is populated with bids (buy orders) and asks (sell orders). In terms of rates, we could argue that buy orders sit below sell orders. When the rate of buy and sell orders converge, orders get filled. 

Market buy orders are filled with the lowest rate possible sell orders in the book. Market sell orders are filled with the highest rate possible buy orders in the book.

Limit buy and sell orders have a defined rate. However, by definition, a limit order is an instruction to the exchange to fill the order at the specified price or better. The “or better” part of the instruction is the key to this analysis.

During the period of time represented in a candle, the range of rates between the maximum and minimum rates in the candle tells us that virtually all orders within those rates that were open upon the begin datetime of the candle must have been filled.

{% include callout.html type='success' content='Now, what happens if a buy order is placed at a rate higher than the maximum rate of the candle?' %}

In such a scenario, it is safe to make the following assumptions:

* The order is filled, because there are plenty of sell orders at a cheaper rate.

* The order is filled at a lower rate than the one defined, for the same reasons (there are cheaper asks in the order book).

The above is the consideration that drives this simulation criterion to estimate the actual rate of an order. However, what is not possible to pinpoint is the exact rate at which the order would be filled.

{% include callout.html type="success" content="With all this in mind, when a buy order's actual rate&mdash;as calculated by the *Based On Trading System* or the *Based On Session Parameters* approaches&mdash;is higher than the maximum rate of the candle, the *Consider Best Match With Order Book* simulation corrects the actual rate and assigns it the maximum value of the candle." %}

```
tradingEngineOrder.orderStatistics.actualRate.value = 
tradingEngine.current.episode.candle.max.value
```

As a corollary, the following criteria govern this particular simulation:

* On one hand, the simulation must mirror live trading as closely as possible. This is the reason for factoring in this analysis.

* On the other hand, when something is uncertain, the simulation must assume the worst possible scenario, so that simulations remain on the “realistic-pessimistic” type of performance outcome, as opposed to “wishful-thinking” scenarios that may be dangerous. This is the reason for using ```candle.max``` instead of any other more optimistic assumptions that&mdash;while feasible&mdash;are not necessarily more likely to happen.

The reversed scenario is considered as well: when a sell order is placed at a lower rate than the minimum rate of the candle against which the order is being simulated, the actual rate is corrected with the ```candle.min``` value.

```
tradingEngineOrder.orderStatistics.actualRate.value = 
tradingEngine.current.episode.candle.min.value
```

## Recalculate Actual Size

Since the actual rate may have been modified by the *Actual Rate Simulation*, it is necessary to recalculate the actual size in the quoted asset. The actual size in base asset remains the same, as it is not affected by the change in rate. Remember that the properties of the quoted asset always derive from the properties of the base asset.

```
tradingEngineOrder.orderQuotedAsset.actualSize.value =
tradingEngineOrder.orderBaseAsset.actualSize.value *
tradingEngineOrder.orderStatistics.actualRate.value
```

## Recalculate Size Placed

Since the actual rate may have changed, it is also necessary to calculate the stage's size placed. Remember that the size placed node at the level of the stage keeps track of the total size of orders that have been placed so that the target size defined for the stage may be enforced as a cap.

As done during a typical exchange synchronization, the initial size of the order is subtracted from the size placed, and then the actual size is added. This is done in two steps, for clarity:

```
tradingEngineStage.stageQuotedAsset.sizePlaced.value =
tradingEngineStage.stageQuotedAsset.sizePlaced.value -
previousQuotedAssetActualSize

tradingEngineStage.stageQuotedAsset.sizePlaced.value =
tradingEngineStage.stageQuotedAsset.sizePlaced.value +
tradingEngineOrder.orderQuotedAsset.actualSize.value
```

## Percentage Filled Simulation

The simulation of the filling of market orders is straightforward: they always fill. For limit orders, the trading bot runs a basic check:

* For limit buy orders to fill, the minimum rate of the candle must be equal or lower than the actual rate of the order. This means that the rate of the order falls within the range of rates filled during the duration of the candle.

```
tradingEngine.current.episode.candle.min.value <= 
tradingEngineOrder.actualRate.value
```

* For limit sell orders to fill, the reverse logic applies: the maximum rate of the candle must be equal or greater than the actual rate of the order.

```
tradingEngine.current.episode.candle.max.value >= 
tradingEngineOrder.actualRate.value
```

{% include note.html content='If limit orders do not pass the above check, they remain unfilled.' %}

When an order is filled, by default it is filled fully, that is, the percentage filled is 100%:

```
tradingEngineOrder.orderStatistics.percentageFilled.value = 100
```

However, the above may change if you have defined a specific fill probability for the specific order on the simulated partial fill node. If there is a valid definition to simulate the probability of the order to be filled on each execution, then this is what the trading bot does with it:

```
percentageFilled = 
tradingSystemOrder.simulatedExchangeEvents.simulatedPartialFill.config.fillProbability * 100
```

That is, the ```fillProbability``` parameter is multiplied by 100, and the result is the percentage filled. If the percentage filled is lower than 100, then the order may continue filling in subsequent executions, provided it passes the above checks.

Therefore, in every execution, the following update is done on the percentage filled node of the order statistics:

```
tradingEngineOrder.orderStatistics.percentageFilled.value = 
tradingEngineOrder.orderStatistics.percentageFilled.value + 
percentageFilled
```

{% include note.html content='Of course, there is also a check to make sure that the percentage filled is never greater than 100.' %}

## Fees Paid Simulation

Like with the definitions regarding the actual rate of the order, the definition of the simulated fees paid node under simulated exchange events takes precedence in regards to the definitions in the fee structure parameter of the trading session.

In general terms, fees paid are calculated as follows:

* The percentage of fees is applied to the actual size to obtain the total amount of fees to be paid when the order is 100% filled.

* Then, the percentage filled is applied to obtain the fees paid for the portion of the order that actually filled.

### Trading system definitions

For buy orders, fees are calculated in the base asset, as that is the asset being acquired:

```
feesPaid = 
tradingEngineOrder.orderBaseAsset.actualSize.value *
tradingSystemOrder.simulatedExchangeEvents.simulatedFeesPaid.config.percentage / 100 *
tradingEngineOrder.orderStatistics.percentageFilled.value / 100
```

For sell orders, fees are calculated in the quoted asset:

```
feesPaid = 
tradingEngineOrder.orderQuotedAsset.actualSize.value *
tradingSystemOrder.simulatedExchangeEvents.simulatedFeesPaid.config.percentage / 100 *
tradingEngineOrder.orderStatistics.percentageFilled.value / 100
```

### Session parameters definitions

When producing the simulation based on the fees structure parameter of the trading session, the ```maker``` setting is applied to limit orders and the ```taker``` setting is applied to market orders.

For market buy orders:

```
feesPaid = 
tradingEngineOrder.orderBaseAsset.actualSize.value *
sessionParameters.feeStructure.config.taker / 100 *
tradingEngineOrder.orderStatistics.percentageFilled.value / 100
```

For market sell orders:

```
feesPaid = 
tradingEngineOrder.orderQuotedAsset.actualSize.value *
sessionParameters.feeStructure.config.taker / 100 *
tradingEngineOrder.orderStatistics.percentageFilled.value / 100
```

For limit buy orders:

```
feesPaid = 
tradingEngineOrder.orderBaseAsset.actualSize.value *
sessionParameters.feeStructure.config.maker / 100 *
tradingEngineOrder.orderStatistics.percentageFilled.value / 100
```

For limit sell orders:

```
feesPaid = 
tradingEngineOrder.orderQuotedAsset.actualSize.value *
sessionParameters.feeStructure.config.maker / 100 *
tradingEngineOrder.orderStatistics.percentageFilled.value / 100
```

## Size Filled Simulation

Calculating the size filled is straightforward considering we have already established the percentage of the size that has been filled. Bear in mind the property needs to be calculated for both assets.

```
tradingEngineOrder.orderBaseAsset.sizeFilled.value =
tradingEngineOrder.orderBaseAsset.actualSize.value *
tradingEngineOrder.orderStatistics.percentageFilled.value / 100

tradingEngineOrder.orderQuotedAsset.sizeFilled.value =
tradingEngineOrder.orderQuotedAsset.actualSize.value *
tradingEngineOrder.orderStatistics.percentageFilled.value / 100
```

## Amount Received Simulation

This is a simple calculation to explicitly determine how much of the asset was acquired in the transaction. It is calculated by subtracting the fees from the actual size. 

Buy orders acquire the base asset, thus, the amount is denominated in the base asset:

```
tradingEngineOrder.orderBaseAsset.amountReceived.value =
tradingEngineOrder.orderBaseAsset.sizeFilled.value -
tradingEngineOrder.orderBaseAsset.feesPaid.value
```

Sell orders acquire the quoted asset, thus, the amount is denominated in the quoted asset:

```
tradingEngineOrder.orderQuotedAsset.amountReceived.value =
tradingEngineOrder.orderQuotedAsset.sizeFilled.value -
tradingEngineOrder.orderQuotedAsset.feesPaid.value
```
