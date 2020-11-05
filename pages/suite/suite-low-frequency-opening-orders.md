---
title: Opening Orders
summary: "Several calculations and validations are required before creating and placing an order."
sidebar: suite_sidebar
permalink: suite-low-frequency-opening-orders.html
toc: false
---

Before creating an order, a few calculations to determine what the order should look like are required, in particular about the rate of the order (see Calculate Order Rate) and the size of the order (see Calculate Order Size).

Once the calculations are done, some validations are in order.

* The size of an order may not be negative.

```
(tradingEngineOrder.orderBaseAsset.size.value <= 0)
(tradingEngineOrder.orderQuotedAsset.size.value <= 0)
```

{% include callout.html type='success' content='If previous checks pass and it is a forward testing or live trading session, the order is placed at the exchange. If it is a backtesting or paper trading session, the order exists in the data structure of the trading engine only.' %}

If the order is placed successfully, then all related data structures in the trading engine are updated accordingly, including size placed for the stage in both assets, episode counters, and the particular order's details.

## Calculate Order Rate

The first thing to consider to determine the rate of the order is whether it is a limit or a market order. 

Limit orders must have a proper definition of the order rate. That is, the order rate node must have a formula that results in a number, and that is greater than zero. If all validations pass, the order rate is stored in ```tradingEngineOrder.rate.value```.

For market orders, there is no definition of the rate, as the rate is whatever rate the order fills at the exchange. The initial value is therefore the last known market rate, that is, the rate of the last closed candle: ```tradingEngineOrder.rate.value = tradingEngine.current.episode.candle.close.value```.

## Calculate Order Size

The calculation of the size of the order is a bit more elaborate, as several things must be taken into account, with the added intricacy that the user may define the target size for the stage in the base asset or the quoted asset. 

The three main steps to define the size are the following:

* To start with, the definitions regarding the size of the order must be valid (see Required Configuration Validation). 

* Then, the size of the order added to the rest of the orders that may have been placed before must not be greater than the target size for the stage (see Not Passing Target Size Validation).

* Finally, the size of the order must not leave any of the assets in the trading engine's built-in accounting system with a negative balance (see Not Negative Balance Validation).

### Required Configuration Validation

Beyond the target size for the stage, the user produces two more definitions that affect what the order size should be for the particular order: at the level of the execution algorithm's configuration (```percentageOfStageTargetSize``` parameter) and the level of the order's configuration (```percentageOfAlgorithmSize``` parameter). Both of these definitions must be valid and numeric.

Once the corresponding checks pass, the size of the algorithm is determined as per the definitions:

```
algorithmSizeInBaseAsset = 
tradingEngineStage.stageBaseAsset.targetSize.value * 
executionAlgorithm.config.percentageOfStageTargetSize / 100
```

... and...


```
algorithmSizeInQuotedAsset = 
tradingEngineStage.stageQuotedAsset.targetSize.value * 
executionAlgorithm.config.percentageOfStageTargetSize / 100
```

{% include note.html content='Notice that it is assumed that the target size for the stage is defined both in base asset and the quoted asset. This is because, although the user defines the target size in one asset only, the system converts the definition to the other asset (at an earlier moment), to keep track of accounts on both assets at all times, which is a design requirement.' %}

### Not Passing Target Size Validation

This validation requires handling two possible scenarios separately. Did the user define the target size for the stage in base asset or the quoted asset? 

{% include note.html content='The system discriminates both scenarios to remain faithful to the intent of the definitions. This is a design feature throughout the system, and it is at the core of allowing maximum flexibility, so that users may use trading systems in various ways to achieve different goals.' %}

#### Stage size defined in base asset

If the stage size was defined in base asset, then the size of the order derives from the definitions that where validated in the previous step (see Required Configuration Validation):

```
tradingEngineOrder.orderBaseAsset.size.value = 
algorithmSizeInBaseAsset * 
tradingSystemOrder.config.percentageOfAlgorithmSize / 100
```

With the above value, the validation is run to determine if the combined sizes of all orders placed up to this point would be larger than the size defined for the stage. Remember that the size defined for the stage is enforced as a cap. If the defined order size does exceed the stage size limit, then the size is lowered to fit the limit. The re-sizing goes out with a warning, to let the user know why the resizing took place.

Once the order size in base asset is final, then the size in quoted asset may be determined multiplying the size in base asset by the order rate determined earlier:

```
tradingEngineOrder.orderQuotedAsset.size.value = 
tradingEngineOrder.orderBaseAsset.size.value * 
tradingEngineOrder.rate.value
```

#### Stage size defined in quoted asset

Similarly, in this case the size of the order in quoted asset derives directly from the definitions:

```
tradingEngineOrder.orderQuotedAsset.size.value = 
algorithmSizeInQuotedAsset * 
tradingSystemOrder.config.percentageOfAlgorithmSize / 100
```

The same validation is run as with the base asset, and the size of the order in base asset is also determined at the end:

```
tradingEngineOrder.orderBaseAsset.size.value = 
tradingEngineOrder.orderQuotedAsset.size.value / 
tradingEngineOrder.rate.value
```

### Not Negative Balance Validation

The final validation is there to make sure that no balances become negative if the order is created with the currently defined size.

#### Buy orders

For buy orders (both market and limit), the quoted asset balance minus the order size must be equal to or greater than zero. 

```
tradingEngine.current.episode.episodeQuotedAsset.balance.value - 
tradingEngineOrder.orderQuotedAsset.size.value => 0
```

If not, the size of the order is redefined to fit the available balance. The resizing goes out with a warning.

```
tradingEngineOrder.orderQuotedAsset.size.value = 
tradingEngine.current.episode.episodeQuotedAsset.balance.value
```

And, remember, every time a property changes for one asset, the same property for the other asset must be updated as well:

```
tradingEngineOrder.orderBaseAsset.size.value = 
tradingEngineOrder.orderQuotedAsset.size.value / 
tradingEngineOrder.rate.value
```

#### Sell orders

For market and limit sell orders, the validation is reversed, checking the balance of the base asset instead of the quoted asset.

{% include note.html content='Remember that a sell order always exchanges the base asset for the quoted asset and a buy order does the opposite.' %}
