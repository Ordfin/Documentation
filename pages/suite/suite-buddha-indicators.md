---
title:  Buddha indicators
summary: "A set of indicators built in the Buddha data mine including Candle Patterns recognition"
sidebar: suite_sidebar
permalink: suite-buddha-indicators.html
---

{% include callout.html type="success" content="The Buddha data mine is brought to you by <a href='https://github.com/EduRemix' rel='nofollow' rel='noopener' target='_blank'>@EduRemix</a></strong>. Collaborate with this data mine and report issues directly at the <a href='https://github.com/EduRemix/Superalgos'  rel='nofollow' rel='noopener' target='_blank'>contributor's repository</a>." %}

{% include note.html content="The following indicator is available under the Buddha task managers in the data mining section of the ```Simple Workspace.json``` in the ```develop``` branch." %}

## Candle Patterns

| Product Name | Product Variable | Property Variables |
| :--- | :--- | :--- |
| Basic Candles | ```basicCandle``` | ```name```, ```size```, ```direction```, ```upperShadow```, ```body```, ```lowerShadow```, ```length```, ```meanBody```, ```meanLength```|
| One-Candle Patterns | ```oneCandlePattern``` | ```name```, ```trend```, ```forecast```, ```trendLine```|
| Two-Candles Patterns | ```twoCandlePattern``` | ```name```, ```trend```, ```forecast```, ```trendLine``` |
| Three-Candles Patterns | ```threeCandlePattern``` | ```name```, ```trend```, ```forecast```, ```trendLine``` |

**Examples:**

1. ```chart.at24hs.basicCandle.name === "Long Green Candle"``` — Is *Long Green Candle* the name of the current basic candle?

2. ```chart.at24hs.basicCandle.upperShadow > chart.at24hs.basicCandle.body``` — Is the upper shadow longer than the body?

### Basic Candles

| Variable | Description | Possible Values |
| :--- | :--- | :--- |
| ```name``` | The name that has been assigned to the basic candle. | ```Short Green Candle```, ```Short Red Candle```, ```Green Candle```, ```Red Candle```, ```Long Green Candle```, ```Long Red Candle```, ```Green Marubozu```, ```Opening Green Marubozu```, ```Closing Green Marubozu```, ```Red Marubozu```, ```Opening Red Marubozu```, ```Closing Red Marubozu```, ```Red Spinning Top```, ```Green Spinning Top```, ```High Wave```, ```Four-Price Doji```, ```Star Doji```, ```Long-Legged Doji```, ```Dragonfly Doji```, ```Gravestone Doji```, ```Generic Doji``` |
| ```size``` | The relative size of the candle | ```short```, ```long```|
| ```direction``` | Indicates if it's a bullish or a bearish candle | ```bullish```, ```bearish``` |
| ```upperShadow``` | The length of the upper shadow |  |
| ```body``` | The length of the body |  |
| ```lowerShadow``` | <nobr>The length of the lower shadow</nobr> |  |
| ```length``` | The total length of the candle (```candle.max - candle.min```) |  |
| ```meanBody``` | The moving average of the length of the bodies of previous candles |   |
| ```meanLength``` | The moving average of the total length of previous candles |  |

<details class='detailsCollapsible'><summary class='nobr'>Click to learn how to change the basic calculation parameters
</summary>

The following table details the parameters that may be configured in the code of the indicator products:

| Parameter | Description | Default Value | <nobr>Normal Values</nobr> |
| :--- | :--- | :---: | :---: |
| ```Nbodies``` | The number of previous candle bodies used to calculate "meanBody" | 10 | 5 to 20 |
| ```dojiFactor``` | It is the maximum percentage allowed for the body in relation to the length for the candle to be included in the Doji family | 3 | 0 to 5 |
| ```sizeFactor``` | It is the percentage of the "meanLength" used to determinate the "size" of a candle (orange line on the chart) | 75 | 60 to 80 |
| ```Nlengths``` | The number of previous candle lengths used to calculate "meanLength" | 20 | 10 to 25 |
| ```sizeMethod``` | The method used to calculate "meanLength" | EMA | SMA or EMA |

To change the above-mentioned parameters, open the *Basic Candles* <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.product_definition}}">product definition</a>, open the <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.javascript_code}}">JavaScript Code</a> of the <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.procedure_loop}}">procedure loop</a>, and find the parameters in the first part of the code, as you can see in the following picture:

{% include image.html file='buddha/candle-patterns/basic-candles-parameters.PNG' url='yes' max-width='100' caption='Basic Candles product code' %}

{% include notice-modifying-official-hierarchies.html %}

</details>

### One-Candle Patterns

| Variable | Description | Predefined Values |
| :--- | :--- | :--- |
| ```name``` | The name assigned to the pattern | ```Bearish Strong Line```, ```Bearish Belt Hold```, ```Hanging Man```, ```Shooting Star```, ```Bullish Belt Hold```, ```Hammer```, ```Bullish Strong Line```|
| ```trend``` | The market trend during which the pattern has formed | ```Uptrend```, ```Downtrend```|
| ```forecast``` | It is the possible future scenario that represents the formation of this pattern | ```Bullish Continuation```, ```Bullish Reversal```, ```Bearish Continuation```, ```Bearish Reversal```|
| ```trendLine``` | The value of the Moving Average that represents the trend line on which the pattern was formed | |

<details class='detailsCollapsible'><summary class='nobr'>Click to learn how to change the basic calculation parameters
</summary>

The following table details the parameters that may be configured in the code of the indicator products:

| Parameter | Description | Default Value | Normal Values |
| :--- | :--- | :---: | :---: |
| ```N``` | It is the period of the moving average used to calculate the trend line | 10 | 5 to 20 |
| ```trendMethod``` | The method used to calculate the trend line Moving Average | EMA | SMA or EMA |

To change the above-mentioned parameters, open the *One-Candle Patterns* <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.product_definition}}">product definition</a>, open the <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.javascript_code}}">JavaScript Code</a> of the <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.procedure_loop}}">procedure loop</a>, and find the parameters in the first part of the code, as you can see in the following picture:

{% include image.html file='buddha/candle-patterns/one-candle-patterns-parameters.PNG' url='yes' max-width='100' caption='One-Candle Patterns product code' %}

{% include notice-modifying-official-hierarchies.html %}

</details>

### Two-Candles Patterns

| Variable | Description | Predefined Values |
| :--- | :--- | :--- |
| ```name``` | It is the name that has been assigned to the pattern based on the configuration of the candles that make it up | ```Last Engulfing Bottom```, ```Bearish Engulfing```, ```Bearish Harami```, ```Bearish Harami Cross```, ```Bearish Tasuki Line```, ```Descending Hawk```, ```Tweezers Top```, ```Two-Candle Shooting Star```, ```Last Engulfing Top```, ```Bullish Engulfing```, ```Bullish Harami```, ```Bullish Harami Cross```, ```Bullish Tasuki Line```, ```Tweezers Bottom``` |
| ```trend``` | The market trend during which the pattern has formed | ```Uptrend```, ```Downtrend```|
| ```forecast``` | It is the possible future scenario that represents the formation of this pattern | ```Bullish Continuation```, ```Bullish Reversal```, ```Bearish Continuation```, ```Bearish Reversal```|
| ```trendLine``` | The value of the Moving Average that represents the trend line on which the pattern was formed |  |

{% include note.html content="Calculation parameters are the same as those of One-Candle Patterns" %}

### Three-Candles Patterns

The following table details the variables that can be used in the conditions of the trading strategies:

| Variable | Description | Predefined Values |
| :--- | :--- | :--- |
| ```name``` | It is the name that has been assigned to the pattern based on the configuration of the candles that make it up | ```Advance Block```, ```Deliberation```, ```Identical Three Crows```, ```Three Inside Down```, ```Three Outside Down```, ```Three Inside Up```, ```Three Outside Up``` |
| ```trend``` | The market trend during which the pattern has formed | ```Uptrend```, ```Downtrend``` |
| ```forecast``` | It is the possible future scenario that represents the formation of this pattern | ```Bullish Continuation```, ```Bullish Reversal```, ```Bearish Continuation```, ```Bearish Reversal``` |
| ```trendLine``` | The value of the Moving Average that represents the trend line on which the pattern was formed |  |

{% include note.html content="Calculation parameters are the same as those of One-Candle Patterns" %}

<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about the theory behind the calculation of candle patterns
</summary>

#### Introduction

Candle patterns are a versatile tool that traders use to visually estimate the sentiment of market participants. The logic implemented in this indicator was distilled from content in the following works:

* "Candlestick Charting Explained" - Author: Greg Morris
* "Technical Analysis of The Financial Markets" - Author: John J. Murphy
* "Encyclopedia of Candlestick Charts" - Author: Thomas N. Bulkowski
* "Encyclopedia of Chart Patterns" - Author: Thomas N. Bulkowski
* "Japanese Candlestick Charting Techniques" - Author: Steve Nison

You may also wish to visit the following sources:

* <a href="http://thepatternsite.com/" rel="nofollow" rel="noopener" target="blank">Thomas Bulkowski: ThePatternSite.com</a>
* <a href="https://www.investopedia.com/articles/technical/112601.asp" rel="nofollow" rel="noopener" target="blank">Investopedia: Introduction to Technical Analysis Price Patterns</a>
* <a href="https://www.candlesticker.com/" rel="nofollow" rel="noopener" target="blank">CandleSticker by American Bulls</a>

#### Parts of a Candle

Let's start by agreeing on the basic vocabulary to describe candles.

The first price from which the candle begins to form is the *open price*. The last price from which the candle finishes forming is the *close price*. The distance between both prices is called *body*. Market volatility may cause the price to fluctuate beyond both prices during candle formation, creating *shadows*. The *upper shadow* is the line that links the *maximum price* with the body. The *lower shadow* is the line that links the *min price* with the body.

Regarding color:

* When the closing price is greater than the open price, the body of the candle is <span style="color:green">*green*</span>. This indicates that it is a *bullish* candle.
* When the closing price is lesser than the open price, the body of the candle is <span style="color:red">*red*</span>. This indicates that it is a *bearish* candle.

####  Body of Doji Candles

Japanese candle theory defines a doji candle as one in which the closing price equals the opening price. In other words, a doji candle should have no body. In practice, the following aspects must be taken into account:

* Price volatility

* The precision with which prices are recorded

These two factors make it very unlikely that both prices match exactly and&mdash;in practice&mdash;there is always a body, even if it is very small. For this reason, we define a range of uncertainty in body length to determine whether a candle is a doji or not. By default, we assume that the doji's body may be equal or lesser than 3% of the total length of the candle. This is the ````dojiFactor````.

#### Relative Size: Short or Long

It is very important to understand this concept since during the study and identification of candle patterns we must differentiate the size of each particular candle, that is, which ones are long and which are short. Intuitively, this seems simple, but translating the logic into an algorithm requires defining what tools will be used and how they will be parameterized.

To start, we need to establish some reference to decide what is long and what is short, since a long candle in some market context may be short in another context. When we look at a chart, our sight may deceive us since the context around a candle involves both past and future candles. However, when our algorithm is working on a live session, it may only *see* candles in the past.

It may be deduced that the average of the size of a certain number of past candles must be used as the frame of reference. This method arises from common sense and therefore it is the one observed to be widely used in the literature. Some authors differ in their criteria averaging only the bodies or averaging the total lengths including also the shadows.

For this reason, we have made both criteria available:

* **Body average:** Bulkowski uses this criterion to detect candles of the type *Long Green Candle* and *Long Red Candle*. Since they are a particular case that occurs when the size of the body extends more than three times compared to the previous candle's body average.

* **Length average:** this criterion is used in a general manner, for all basic candles, since it also includes doji candles which have no body (or have very small bodies); with the previous criterion they would always be sized as *Short*, which is not what we are looking for.

#### Pattern Validation

To find candle patterns on the chart, it is necessary to analyze the market context in which the basic candles appear and how they are related to each other. For this reason, the following concepts are necessary:

1. **Trend Line:** To determine if prices are in an *Uptrend* or a *Downtrend*, a reference trend line is necessary, which is generally a moving average.

1. **Minimum Trend Candles:** It is the minimum number of candles that must be on the same trend line to validate a pattern. By default, 3 candles will be used.

1. **Forecast:**

   1. *Bullish Reversal:* In a downtrend, a pattern is considered valid when the body of the first candle is below the trend line.

   1. *Bullish Continuation:* In an uptrend, a pattern is considered valid when at least open prices of all pattern candles are above the trend line.

   1. *Bearish Reversal:* In an uptrend, a pattern is considered valid when the body of the first candle is above the trend line.

   1. *Bearish Continuation:* In a downtrend, a pattern is considered valid when at least open prices of all candles are below the downtrend.

</details>