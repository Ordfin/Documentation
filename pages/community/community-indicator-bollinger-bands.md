---
title:  Bollinger Bands (BB)
summary: "The indicator produces the Bollinger Bands (BB) and Percentage Bandwith (%B), both in standard settings."
sidebar: community_sidebar
permalink: community-indicator-bollinger-bands.html
---

{% include note.html content="Bollinger Bands (BB) is brought to you by the [Masters](community-data-mine-masters.html) data mine." %}

## On the Charts

### Bollinger Bands

This is the traditional <a href="https://www.bollingerbands.com/" rel="nofollow" rel="noopener" target="_blank">Bollinger Bands</a> indicator. Bollinger Bands have a moving average, in our case calculated with the last 20 periods (the line in the middle of the bands). We are plotting the moving average with one color when it is going up, and with a different color when it's going down. The upper band is at 2 Standard Deviations from the moving average, pretty much like the lower band, also at 2 Standard Deviations. These are the most widely used Bollinger Bands settings.

{% include image.html file='interface/masters-bots-layers-04-bollinger-bands.gif' url='yes' max-width='100' caption='Bollinger Bands with standard settings.' %}

### Percentage Bandwidth

This is a well-known indicator that derives from the Bollinger Bands. In a nutshell, it tells you how close the price is either to the upper band or the lower band at any point in time. When the price is in the middle of the bands (it is calculated with the close value of each candle), then %B is in the middle of its chart, at value 50. When the price touches the upper band, then %B is at 100, and finally when the price is at the lower band, then %B is at 0. 

{% include image.html file='interface/masters-bots-layers-05-percentage-bandwidth.gif' url='yes' max-width='100' caption='Percentage Bandwidth with standard settings.' %}

The chart features lines at %B values 30 and 70 since those are the most common values for traders to forecast when a reversal may happen. In our chart, %B is the one represented at #1. We've found useful to add a moving average to smooth volatility a bit and to be able to ask—at any time—if it is going up or down. The moving average calculated with the last 5 %B values is plotted as line #2. Finally, we've also added a property called Bandwidth, which represents the separation of the upper band from the lower band. It is a measure of volatility and is plotted at #3.  

{% include image.html file='interface/masters-bots-layers-06-percentage-bandwidth-2.gif' url='yes' max-width='100' caption='Percentage Bandwidth with standard settings.' %}

## Products & Properties

### Bollinger Bands

The product ```bollingerBand``` features four different properties that you may use.

| Product Name | Product Variable | Property Variables |
| :---: | :---: | :--- | 
| Bollinger Bands | ```bollingerBand``` | ```movingAverage```, ```standardDeviation```, ```deviation```, ```direction``` |

```bollingerBand.movingAverage```: The value of the current moving average (20 periods).

```bollingerBand.standardDeviation```: The value of current the [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation).

```bollingerBand.deviation```: bollingerBand.standardDeviation * 2

```bollingerBand.direction```:  
* ```"Down"```: bollingerBand.previous.movingAverage > bollingerBand.movingAverage 
* ```"Up"```: bollingerBand.previous.movingAverage < bollingerBand.movingAverage
* ```"Side"```: bollingerBand.previous.movingAverage = bollingerBand.movingAverage)

### Percentage Bandwidth

The product ```percentageBandwidth``` features four different properties that you may use.

| Product Name | Product Variable | Property Variables |
| :---: | :---: | :--- | 
| Percentage Bandwidth | ```percentageBandwidth``` | ```value```, ```movingAverage```, ```bandwidth```, ```direction``` |

```percentageBandwidth.value```: A numeric value between 0 and 100; the current value of the percentage bandwidth.

```percentageBandwidth.movingAverage```: A numeric value between 0 and 100; the current value of the percentage bandwidth moving average.

```percentageBandwidth.bandwidth```: A numeric value between 0 and 100; the current bandwidth.

