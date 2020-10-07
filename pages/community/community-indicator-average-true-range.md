---
title: Average True Range (ATR)
summary: "The indicator features 2 different smoothing functions: ATR - SMA (simple moving average) / ATR - RMA (exponential moving average)."
sidebar: community_sidebar
permalink: community-indicator-average-true-range.html
---

{% include note.html content="Average True Range (ATR) is brought to you by the Alpha data mine." %}

## Average True Range On the Charts

<a href="https://www.investopedia.com/terms/a/atr.asp" rel="nofollow" rel="noopener" target="_blank">According to Investopedia</a>, "The average true range (ATR) is a technical analysis indicator that measures market volatility by decomposing the entire range of an asset price for that period." The ATR doesn't indicate a direction of price movement but measures the strength of a movement.

{% include image.html file='interface/alpha-bots-layers-00-ATR.png' url='yes' max-width='100' caption='Average True Range, with Simple Moving Average as the smoothing function.' %}

The true range (TR) calculates an absolute value of the range between the high/low of the current period and the previous period close. Because absolute values are used, the true range has only positive numbers indicating the volatility change from the previous period. The result of the true range is smoothed by the average true range (ATR). The Alpha data mine provides ATR indicators with 2 different smoothing function: ATR - SMA (simple moving average) / ATR - RMA (exponential moving average)

The chart for this indicator shows the 3 lines of ATR values from different periods (2, 3, 14). Higher ATR values indicate higher market volatility, independent of price action direction. The bottom line is zero as the minimum value. The longer period provides a more general overview of the current market volatility and the lower periods react to short term movements.

The information panel shows the numeric value for each ATR value in the layer.

## Average True Range Products & Properties

There are two products available, each with different smoothing functions and different period configurations:

| Product Name | Product Variable | Properties |
| :---: | :---: | :--- | 
| ATR - SMA | ```atrSMA``` | ```atr2```, ```atr3```, ```atr14``` |
| ATR - RMA | ```atrRMA``` | ```atr2```, ```atr3```, ```atr14``` |

**Examples:**

1. ```chart.at24hs.atrSMA.atr3 > chart.at24hs.atrSMA.atr14``` — Faster ATR (ATR-3) value above slower ATR (ATR-14) value indicates a higher volatility in the short term movement.

1. ```chart.at04hs.atrRMA.atr3 > chart.at04hs.atrRMA.atr14``` — Same example as above but with RMA (Exponatial Moving Average) as the smoothing function.
