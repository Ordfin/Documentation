---
title:  Exponential Moving Average (EMA)
summary: "The indicator produces the Exponential Moving Avarge in multiple settings, including the popular 20, 50, 100, and 200, as well as less frequent base 7 and base 11 SMAs."
sidebar: suite_sidebar
permalink: suite-indicator-exponential-moving-average.html
---

{% include note.html content="Exponential Moving Average (EMA) is brought to you by the Sparta data mine." %}

## Exponential Moving Average On the Charts

<a href="https://www.investopedia.com/terms/e/ema.asp" rel="nofollow" rel="noopener" target="_blank">According to Investopedia</a>, "An exponential moving average (EMA) is a type of moving average (MA) that places a greater weight and significance on the most recent data points. The exponential moving average is also referred to as the exponentially weighted moving average. An exponentially weighted moving average reacts more significantly to recent price changes than a simple moving average (SMA), which applies an equal weight to all observations in the period."

{% include image.html file='interface/sparta-bots-layers-02-EMA.gif' url='yes' max-width='100' caption='Simple Moving Average, in particular, the Base11 EMA product.' %}

The same explanations offered for SMAs apply to EMAs.

## Exponential Moving Average Products & Properties

The products and periods available in EMA map exactly the products and periods available in SMA. To use EMA you simply need to replace the S with an E. That said, for your reference, this is the complete list...

Like with SMAs, there are three products pre-configured to start calculating as soon as you start the corresponding task, each with different period configurations:

| Product Name | Product Variable | Properties |
| :---: | :---: | :--- | 
| Popular EMAs | ```popularEMA``` | ```ema20```, ```ema50```, ```ema100```, ```ema200``` |
| Base 7 | ```base7EMA``` | ```ema7```, ```ema14```, ```ema21```, ```ema28```, ```ema35```, ```ema70```, ```ema140```, ```ema210```, ```ema280```, ```ema350```, ```ema700```, ```ema1400```|
| Base 11 | ```base11EMA``` | ```ema11```, ```ema22```, ```ema33```, ```ema55```, ```ema111``` |

There are four more products available but they will not be calculated unless you create the corresponding data outputs and reference them to the corresponding data sets:

| Product Name | Product Variable | Properties |
| :---: | :---: | :--- | 
| Base 5 | ```base5EMA``` | ```ema5```, ```ema10```, ```ema15```, ```ema20```, ```ema25```, ```ema50```, ```ema100```, ```ema150```, ```ema200```, ```ema250```, ```ema500```, ```ema1000``` |
| Base 6 | ```base6EMA``` | ```ema6```, ```ema12```, ```ema18```, ```ema24```, ```ema30```, ```ema60```, ```ema120```, ```ema180```, ```ema240```, ```ema300```, ```ema600```, ```ema1200``` |
| Base 12 | ```base12EMA``` | ```ema12```, ```ema24```, ```ema36```, ```ema48```, ```ema60```, ```ema120```, ```ema240```, ```ema360```, ```ema480```, ```ema600```, ```ema1200``` |
| Base 30 | ```base30EMA``` | ```ema30```, ```ema60```, ```ema90```, ```ema120```, ```ema150```, ```ema300```, ```ema600```, ```ema900```, ```ema1200```, ```ema1500``` |

**Examples:**

1. ```chart.at01hs.base5EMA.ema5 < chart.at01hs.base5EMA.ema25``` — May the trend be reversing? Checking if a fast 5-hours exponential moving average goes below the slower 25-hours EMA.
