---
title:  Alpha indicators
summary: "A set of indicators built in the Alpha data mine including Average True Range (ATR), Rate of Change (ROC), and Stochastic indicators."
sidebar: suite_sidebar
permalink: suite-alpha-indicators.html
---

{% include callout.html type="success" content="The Alpha data mine is brought to you by <a href='https://github.com/rico4dev' rel='nofollow' rel='noopener' target='_blank'>@rico4dev</a>. Collaborate with this data mine and report issues directly at the <a href='https://github.com/rico4dev/Superalgos'  rel='nofollow' rel='noopener' target='_blank'>contributor's repository</a>." %}

{% include note.html content="The following indicator is available under the Alpha task managers in the data mining section of the ```Simple Workspace.json``` in the ```develop``` branch." %}

## Average True Range (ATR)

There are two products available, each with different smoothing functions and different period configurations:

| Product Name | Product Variable | Properties |
| :---: | :---: | :--- | 
| ATR - SMA | ```atrSMA``` | ```atr2```, ```atr3```, ```atr14``` |
| ATR - RMA | ```atrRMA``` | ```atr2```, ```atr3```, ```atr14``` |

**Examples:**

1. ```chart.at24hs.atrSMA.atr3 > chart.at24hs.atrSMA.atr14``` — Faster ATR (ATR-3) value above slower ATR (ATR-14) value indicates a higher volatility in the short term movement.

1. ```chart.at04hs.atrRMA.atr3 > chart.at04hs.atrRMA.atr14``` — Same example as above but with RMA (Exponatial Moving Average) as the smoothing function.

## Rate of Change (ROC)

There are three products based on various periods available. It is a simple indicator and has only one value: the percentage of change to the previous period.

| Product Name | Product Variable | Properties |
| :---: | :---: | :--- | 
| ROC | ```roc9``` | ```value``` |
| ROC | ```roc32``` | ```value``` |
| ROC | ```roc76``` | ```value``` |

**Examples:**

1. ```chart.at01hs.roc9.value > 0 && chart.at01hs.roc9.value > chart.at01hs.roc9.previous.value``` — Check if Rate of Change is above the zero trend line and moving upwards.

## Stochastic

Stochastic provides one product with a popular default setting.

| Product Setting | Product Variable | Properties |
| :---: | :---: | :--- |
| Stochastic (14, 3, 3) | ```stoch1433``` | ```fastLine```, ```slowLine``` |

**Examples:**

1. ```chart.at04h.stoch1433.slowLine >= 80 && chart.at04h.stoch1433.fastLine < chart.at04h.stoch1433.slowLine``` — Checking for overbought condition and the fast line lower than the slow line, indicating trend reversal.
