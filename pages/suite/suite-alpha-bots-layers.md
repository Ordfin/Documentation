---
title:  Alpha Data Mine Bots
summary: "The Alpha data mine offers Average True Range (ATR), Rate of Change (ROC), and Stochastic indicators"
sidebar: suite_sidebar
permalink: suite-alpha-bots-layers.html
---

{% include callout.html type="success" content="The Alpha data mine is brought to you by <a href='https://github.com/rico4dev' rel='nofollow' rel='noopener' target='_blank'>@rico4dev</a>. Collaborate with this data mine and report issues directly at the <a href='https://github.com/rico4dev/Superalgos'  rel='nofollow' rel='noopener' target='_blank'>contributor's repository</a>." %}

{% include note.html content="This page covers the use of Alpha indicators on the charts. To learn how to use these products from within strategies, see the [Alpha Indicators](suite-alpha-indicators.html) page." %}

### Average True Range (ATR)

<a href="https://www.investopedia.com/terms/a/atr.asp" rel="nofollow" rel="noopener" target="_blank">According to Investopedia</a>, "The average true range (ATR) is a technical analysis indicator that measures market volatility by decomposing the entire range of an asset price for that period." The ATR doesn't indicate a direction of price movement but measures the strength of a movement.

{% include image.html file='interface/alpha-bots-layers-00-ATR.png' url='yes' max-width='100' caption='Average True Range, with Simple Moving Average as the smoothing function.' %}

The true range (TR) calculates an absolute value of the range between the high/low of the current period and the previous period close. Because absolute values are used, the true range has only positive numbers indicating the volatility change from the previous period. The result of the true range is smoothed by the average true range (ATR). The Alpha data mine provides ATR indicators with 2 different smoothing function: ATR - SMA (simple moving average) / ATR - RMA (exponential moving average)

The chart for this indicator shows the 3 lines of ATR values from different periods (2, 3, 14). Higher ATR values indicate higher market volatility, independent of price action direction. The bottom line is zero as the minimum value. The longer period provides a more general overview of the current market volatility and the lower periods react to short term movements.

The information panel shows the numeric value for each ATR value in the layer.

### Rate of Change (ROC)

<a href="https://www.investopedia.com/terms/r/rateofchange.asp" rel="nofollow" rel="noopener" target="_blank">According to Investopedia</a>, "The rate of change (ROC) is the speed at which a variable changes over a specific period of time." It's an unbounded momentum indicator and a good tool to spot long term trends. This indicator should not be used as a signal in and of itself but can help to confirm other signals.

{% include image.html file='interface/alpha-bots-layers-00-ROC.png' url='yes' max-width='100' caption='Nine-periods Rate of Change indicator.' %}

Mathematically, ROC describes the percentage change of the current close price to the close price from an earlier period. 

The Alpha data-mine provides 3 ROC indicators with periods 76, 32, and 9. The Rate of Change is closely tied to price action. When price raises ROC value tends to be above the zero line and when price is falling ROC value tends to be below the zero line.

### Stochastic

<a href="https://www.investopedia.com/terms/s/stochasticoscillator.asp" rel="nofollow" rel="noopener" target="_blank">According to Investopedia</a>, "A stochastic oscillator is a momentum indicator comparing a particular closing price of a security to a range of its prices over a certain period of time. It is used to generate overbought and oversold trading signals, utilizing a 0-100 bounded range of values."

{% include image.html file='interface/alpha-bots-layers-00-Stoch.png' url='yes' max-width='100' caption='Stochastic indicator with period of 14 and Simple Moving Average of 3.' %}

The chart for this indicator shows a fast line and slow line oscillating in a range between 0 and 100. The fast line displays the current close price in relation to the high/low range of the previous period. The slow line is a simple moving average of the fast line. Major signals provided by the stochastic indicator are overbought and oversold conditions. The default area for oversold is below 20 and for overbought above 80. Divergences between price action and stochastic records can also be helpful to identify upcoming trend reversals.