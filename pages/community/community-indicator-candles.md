---
title:  Candles Volumes
summary: "The indicator processes one-minute candles into candles and volumes information for all time frames."
sidebar: community_sidebar
permalink: community-indicator-candles.html
---

{% include note.html content="Candles Volumes is brought to you by the [Masters](community-data-mine-masters.html) data mine." %}

## On the Charts

### Candle

Typical candlesticks.

{% include image.html file='interface/masters-bots-layers-00-candles.gif' url='yes' max-width='100' caption='Candlesticks.' %}

### Volume

We innovated a bit placing the buy volume at the bottom (in green), and the sell volume at the top (in red).

{% include image.html file='interface/masters-bots-layers-01-volumes.gif' url='yes' max-width='100' caption='Volume.' %}

## Products & Properties

### Candle

The product ```candle``` features five different properties.

| Product Name | Product Variable | Property Variables |
| :---: | :---: | :--- | 
| Candles | ```candle``` | ```min```, ```max```, ```open```, ```close```, ```direction``` |

```candle.min```: The minimum price of the last closed candle (low).

```candle.max```: The maximum price of the last closed candle (high).

```candle.open```: The price at which the last closed candle opened.

```candle.close```: The price at which the last closed candle closed.

```candle.direction```: 
* ```"Down"```: candle.close < candle.open (bearish candle)
* ```"Up"```: candle.close > candle.open (bullish candle)
* ```"Side"```: candle.close = candle.open (neutral candle)

### Volume

The product ```volume``` features two properties.

| Product Name | Product Variable | Property Variables |
| :---: | :---: | :--- | 
| Volumes | ```volume``` | ```buy```, ```sell``` |

```volume.buy```: The buy volume of the last closed candle.

```volume.sell```: The sell volume of the last closed candle.
