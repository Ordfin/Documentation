---
title: Accounting
summary: "the accounting process involves keeping balances synchronized with the happenings at the exchange (or the simulated events) and keeping track of the size placed and size filled of the stage."
sidebar: suite_sidebar
permalink: suite-low-frequency-accounting.html
---

Once the synchronization is done, either with a real exchange or in a simulation, and with all relevant details about the order gathered and in place, it is time to do some bookkeeping.

Both the real and simulated synchronization processes save the previous values for the size filled and fees paid in both assets before performing the calculations to update those values.

These previous values are then used to undo the previous accounts to redo them with the latest synchronized data.

## Update Stage Assets

Stage base aset, undoing the previous accounting:

```
tradingEngineStage.stageBaseAsset.sizeFilled.value =
tradingEngineStage.stageBaseAsset.sizeFilled.value -
previousBaseAssetSizeFilled

tradingEngineStage.stageBaseAsset.feesPaid.value =
tradingEngineStage.stageBaseAsset.feesPaid.value -
previousBaseAssetFeesPaid
```

Stage base asset, accounting for the current filling and fees:

```
tradingEngineStage.stageBaseAsset.sizeFilled.value =
tradingEngineStage.stageBaseAsset.sizeFilled.value +
tradingEngineOrder.orderBaseAsset.sizeFilled.value

tradingEngineStage.stageBaseAsset.feesPaid.value =
tradingEngineStage.stageBaseAsset.feesPaid.value +
tradingEngineOrder.orderBaseAsset.feesPaid.value
```

Stage quoted asset, undoing the previous accounting:

```
tradingEngineStage.stageQuotedAsset.sizeFilled.value =
tradingEngineStage.stageQuotedAsset.sizeFilled.value -
previousQuotedAssetSizeFilled

tradingEngineStage.stageQuotedAsset.feesPaid.value =
tradingEngineStage.stageQuotedAsset.feesPaid.value -
previousQuotedAssetFeesPaid
```

Stage quote asset, accounting for the current filling and fees:

```
tradingEngineStage.stageQuotedAsset.sizeFilled.value =
tradingEngineStage.stageQuotedAsset.sizeFilled.value +
tradingEngineOrder.orderQuotedAsset.sizeFilled.value

tradingEngineStage.stageQuotedAsset.feesPaid.value =
tradingEngineStage.stageQuotedAsset.feesPaid.value +
tradingEngineOrder.orderQuotedAsset.feesPaid.value
```

## Update Balances

The updating of balances must take one crucial aspect into account: for sell orders, fees are paid in the quoted asset, while for buy orders, fees are paid in the base asset.

### Sell orders

Balance base asset, undoing the previous accounting:

```
tradingEngine.current.episode.episodeBaseAsset.balance.value =
tradingEngine.current.episode.episodeBaseAsset.balance.value +
previousBaseAssetSizeFilled
```

Balance base asset, accounting for the current filling and fees:

```
tradingEngine.current.episode.episodeBaseAsset.balance.value =
tradingEngine.current.episode.episodeBaseAsset.balance.value -
tradingEngineOrder.orderBaseAsset.sizeFilled.value
```

Balance quoted asset, undoing the previous accounting:

```
tradingEngine.current.episode.episodeQuotedAsset.balance.value =
tradingEngine.current.episode.episodeQuotedAsset.balance.value -
previousQuotedAssetSizeFilled +
previousQuotedAssetFeesPaid
```

Balance quoted asset, account for the current filling and fees:

```
tradingEngine.current.episode.episodeQuotedAsset.balance.value =
tradingEngine.current.episode.episodeQuotedAsset.balance.value +
tradingEngineOrder.orderQuotedAsset.sizeFilled.value -
tradingEngineOrder.orderQuotedAsset.feesPaid.value
```

### Buy orders

Balance base asset, undoing the previous accounting:

```
tradingEngine.current.episode.episodeBaseAsset.balance.value =
tradingEngine.current.episode.episodeBaseAsset.balance.value -
previousBaseAssetSizeFilled +
previousBaseAssetFeesPaid
```

Balance base asset, accounting for the current filling and fees:

```
tradingEngine.current.episode.episodeBaseAsset.balance.value =
tradingEngine.current.episode.episodeBaseAsset.balance.value +
tradingEngineOrder.orderBaseAsset.sizeFilled.value -
tradingEngineOrder.orderBaseAsset.feesPaid.value
```

Balance quoted asset, undoing the previous accounting:

```
tradingEngine.current.episode.episodeQuotedAsset.balance.value =
tradingEngine.current.episode.episodeQuotedAsset.balance.value +
previousQuotedAssetSizeFilled
```

Balance quoted asset, accounting for the current filling and fees:

```
tradingEngine.current.episode.episodeQuotedAsset.balance.value =
tradingEngine.current.episode.episodeQuotedAsset.balance.value -
tradingEngineOrder.orderQuotedAsset.sizeFilled.value
```

## Recalculate Stage Size

The stage keeps track of the accumulated size of orders placed for two reasons:

* The trading bot must enforce the cap embodied in the definition of the target size. That is, the bot must not place orders for an amount higher than the size defined.

* The bot must close the stage once the target size has been filled.

That is why keeping track of the size placed at the level of the stage is important.

The process is similar to what other accounting operations we’ve covered so far: first, the obsolete account is undone; then the new account is made.

Undoing the old accounts for base and quoted asset:

```
tradingEngineStage.stageBaseAsset.sizePlaced.value =
tradingEngineStage.stageBaseAsset.sizePlaced.value -
tradingEngineOrder.orderBaseAsset.actualSize.value

tradingEngineStage.stageQuotedAsset.sizePlaced.value =
tradingEngineStage.stageQuotedAsset.sizePlaced.value -
tradingEngineOrder.orderQuotedAsset.actualSize.value
```

Redoing the new accounts for base and quoted asset:

```
tradingEngineStage.stageBaseAsset.sizePlaced.value =
tradingEngineStage.stageBaseAsset.sizePlaced.value +
tradingEngineOrder.orderBaseAsset.sizeFilled.value

tradingEngineStage.stageQuotedAsset.sizePlaced.value =
tradingEngineStage.stageQuotedAsset.sizePlaced.value +
tradingEngineOrder.orderQuotedAsset.sizeFilled.value
```

