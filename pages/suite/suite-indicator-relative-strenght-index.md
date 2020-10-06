---
title:  Relative Strenght Index (RSI)
summary: "The indicator produces the standard 14 setting of the Relative Strenght Index."
sidebar: suite_sidebar
permalink: suite-indicator-relative-strenght-index.html
---

{% include note.html content="Relative Strenght Index (RSI) is brought to you by the Sparta data mine." %}

## Relative Strength Index On the Charts

<a href="https://www.investopedia.com/terms/r/rsi.asp" rel="nofollow" rel="noopener" target="_blank">According to Investopedia</a>, "The relative strength index (RSI) is a momentum indicator that measures the magnitude of recent price changes to evaluate overbought or oversold conditions in the price of a stock or other asset. The RSI is displayed as an oscillator (a line graph that moves between two extremes) and can have a reading from 0 to 100."

{% include image.html file='interface/sparta-bots-layers-00-RSI.gif' url='yes' max-width='100' caption='Relative Strenght Index, standard settings.' %}

The chart for this indicator shows the RSI oscillating in a scale ranging from 0 at the bottom to 100 at the top. The bottom section of the chart shows a blue background covering the range from 0 to 20, also marked by a dotted line. When the RSI value falls below the 20 mark, the RSI line turns red, for easier viasualization. Also in the bottom section, there is a second dotted line signaling the 30 mark.

The equivalent (although reversed) effect is featured on the top half of the charts, with dotted lines signaling the 70 and 80 levels, and a blue background above 80.

There is also a dotted line at the 50 mark, signaling the median of the chart.

For the time being, the chart is fixed on the screen and the user may not move it.

## Relative Strength Index Products & Properties

The RSI product currently available uses the standard setting of 14 periods, and features a single property: ```rsi14.value```

**Examples:**

1. ```chart.at24hs.rsi14.value >= 70``` — How's the trend going at the 24-hours chart?
