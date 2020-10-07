---
title:  Rate of Change (ROC)
summary: "The indicator features three products for the following periods: 9, 32, 76."
sidebar: community_sidebar
permalink: community-indicator-rate-of-change.html
---

{% include note.html content="Rate of Change (ROC) is brought to you by the Alpha data mine." %}

## Rate of Change On the Charts

<a href="https://www.investopedia.com/terms/r/rateofchange.asp" rel="nofollow" rel="noopener" target="_blank">According to Investopedia</a>, "The rate of change (ROC) is the speed at which a variable changes over a specific period of time." It's an unbounded momentum indicator and a good tool to spot long term trends. This indicator should not be used as a signal in and of itself but can help to confirm other signals.

{% include image.html file='interface/alpha-bots-layers-00-ROC.png' url='yes' max-width='100' caption='Nine-periods Rate of Change indicator.' %}

Mathematically, ROC describes the percentage change of the current close price to the close price from an earlier period. 

The Alpha data-mine provides 3 ROC indicators with periods 76, 32, and 9. The Rate of Change is closely tied to price action. When price raises ROC value tends to be above the zero line and when price is falling ROC value tends to be below the zero line.

## Rate of Change Products & Properties

There are three products based on various periods available. It is a simple indicator and has only one value: the percentage of change to the previous period.

| Product Name | Product Variable | Properties |
| :---: | :---: | :--- | 
| ROC | ```roc9``` | ```value``` |
| ROC | ```roc32``` | ```value``` |
| ROC | ```roc76``` | ```value``` |

**Examples:**

1. ```chart.at01hs.roc9.value > 0 && chart.at01hs.roc9.value > chart.at01hs.roc9.previous.value``` — Check if Rate of Change is above the zero trend line and moving upwards.