---
title:  Candle Patterns
summary: "The indicator features a pattern-recognition algorithm classifying candles in multiple groups such as Classic Candles, Marubozu Candles, Spinning Top Candles, Doji Candles, and grouping pattern into on, two, and three-candle sequences."
sidebar: suite_sidebar
permalink: suite-indicator-candle-patterns.html
---

{% include note.html content="Candle Patterns is brought to you by the Buddha data mine." %}

## Candle Patterns On the Charts

Before we may identify elaborate candle patterns, *basic candles* must be defined, grouped, and parameterized. Patterns may be made up of one or more candles. For this reason, the Candle Patterns indicator features a layer for basic candles and a layer for each group of patterns.

{% include tip.html content="In theory, candle patterns may contribute to predicting price action. In and of itself, the occurrence of a certain pattern may not necessarily be regarded as a signal. However, when combined with other Technical Analysis tools, and when the context is properly considered, candle patterns may provide valuable information." %}

### Basic Candles

The starting point to search for candle patterns is to establish standard criteria to name each candle. Because candles are made up of four prices, this gives rise to a large number of possible combinations. For example, there may be candles with one, two, or without shadows, which may be big or small relative to the body of the candle, which itself may be big or small in relation to other candles, and so on.

The *Basic Candles* layer features two blue lines and an orange one.

* The blue line in the bottom connects the *low* price of each candle.

* The blue line on top results from averaging the length of the last ten candles and adding it to the *low* value of the current candle.

* The orange line in the middle is calculated by multiplying the distance between the two blue lines by an arbitrary *sizeFactor*.

{% include image.html file='buddha/candle-patterns/buddha-bots-layers-00-basic-candles.gif' url='yes' max-width='100' caption='Basic Candles layer' %}

Therefore, the range between the blue lines is said to represent the average length of candles. The orange line in the middle serves to determine if a candle is short or long in relation to other candles. If the *high* of a candle lies above the orange line, it is said to be a *Long* candle, otherwise, it is a *Short* candle.

The corresponding layer panel features the following properties for each candle:

| <nobr>Indicator Properties</nobr> | Description |
| :--- | :--- |
| Name | The name of the basic candle. |
| Size | The relative size of the candle: *Short* or *Long*. |
| Upper Shadow % | The percentage that the upper shadow covers in the total length of the candle. |
| Body % | The percentage that the body represents in the total length of the candle. |
| Lower Shadow % | The percentage that the lower shadow represents in the total length of the candle. |
| Nbodies | The number of previous candles used to calculate the body average. |
| dojiFactor % | A limit to the size of the body expressed as a percentage of the total length for a candle to be considered a doji. |
| sizeFactor % | A factor used to calculate the orange line, which determines the relative size of candles, expressed as a percentage of the average length of the last few candles. |
| Nlengths | The number of previous candles used to calculate the average candle lengths. |
| Average Size Method | The method used to calculate the average of the total lengths of previous candles. |

**Below is the complete list of basic candles, grouped by families relative to certain characteristics they have in common.**

{% include note.html content="Generally&mdash;in the literature&mdash; colors *white* and *black* are used to refer to bullish and bearish candles respectively. In our case, white has been changed to *green* and black to *red*." %}

##### Classic Candles

These candles have the following characteristics in common:

1. Both shadows are present.

1. Each shadow is shorter than the body.

1. The opening price differs from the closing price.

According to their particular characteristics, they are named as follows:

| Representation | <nobr>Basic Candle Name</nobr>  | Particular Characteristics |
| :---: | :--- | :--- |
| ![Short-Candle](images/buddha/candle-patterns/short-candle.png) | <br> **"Short&nbsp;Green&nbsp;Candle"** <br> **"Short Red Candle"** | <br> 1. Bullish or Bearish. <br> 2. Relative Size: Short. |
| ![Candle](images/buddha/candle-patterns/candle.png) | <br> **"Green Candle"** <br> **"Red Candle"** | <br> 1. Bullish or Bearish. <br> 2. Relative Size: Long.  |
| ![Long-Candle](images/buddha/candle-patterns/long-candle.png) | <br> **"Long Green Candle"** <br> **"Long Red Candle"** |<br> 1. Bullish or Bearish. <br> 2. The body is at least three times higher than the average of the previous bodies. <br> 3. Relative Size: Long. |

##### Marubozu Candles

These candles have the following characteristics in common:

1. Lack of at least one shadow.

1. If it has one shadow, it must be shorter than the body.

1. The opening price differs from the closing price.

1. Relative Size: Short or Long.

According to their particular characteristics, they are named as follows:

| Representation | <nobr>Basic Candle Name</nobr> | Particular Characteristics |
| :---: | :--- | :--- |
| ![Marubozu](images/buddha/candle-patterns/marubozu.png) | <br> **"Green Marubozu"** <br> **"Red Marubozu"** | <br> 1) Bullish or Bearish. <br> 2) No shadows. |
| ![Opening-Green-Marubozu](images/buddha/candle-patterns/opening-green-marubozu.png) | <br> **"Opening Green Marubozu"** | <br> 1) Bullish. <br> 2) No lower shadow. |
| ![Closing-Green-Marubozu](images/buddha/candle-patterns/closing-green-marubozu.png) | <br> **"Closing Green Marubozu"**  | <br> 1) Bullish. <br> 2) No upper shadow. |
| ![Opening-Red-Marubozu](images/buddha/candle-patterns/opening-red-marubozu.png) | <br> **"Opening Red Marubozu"** |<br> 1) Bearish. <br> 2) No upper shadow. |
| ![Closing-Red-Marubozu](images/buddha/candle-patterns/closing-red-marubozu.png) | <br> **"Closing Red Marubozu"** |<br> 1) Bearish. <br> 2) No lower shadow. |

##### Spinning Top Candles

These candles have the following characteristics in common:

1. Have at least one shadow.

1. At least one shadow is greater than the body.

1. The opening price differs from the closing price.

According to their particular characteristics, they are named as follows:

| Representation | Basic Candle Name | Particular Characteristics |
| :---: | :--- | :--- |
| ![Spinning-Top](images/buddha/candle-patterns/spinning-top.png) | <br> **"Green&nbsp;Spinning&nbsp;Top"** <br> **"Red Spinning Top"** | <br> 1) Bullish or Bearish. <br> 2) Relative Size: Short or Long. <br> 3) If it's relative size is long, none of the shadows<br> can exceed three times the body. |
| ![High-Wave](images/buddha/candle-patterns/high-wave.png) | <br> **"High Wave"** |<obr> 1) Bullish or Bearish. <br> 2) Relative Size: Long. <br> 3) The length of at least one shadow is at least 3 times larger than the body. |

##### Doji Candles

These candles have the following characteristics in common:

1. Have no body, or very small body if it is allowed.

According to their particular characteristics, they are named as follows:

| Representation | Basic Candle Name | Particular Characteristics |
| :---: | :--- | :--- |
| ![Four-Price-Doji](images/buddha/candle-patterns/four-price-doji.png) | <br> **"Four-Price Doji"** | <br> 1) No shadows. <br> 2) Relative Size: Short. |
| ![Star-Doji](images/buddha/candle-patterns/star-doji.png) | <br> **"Star Doji"** | <br> 1) The body is located nearly mid-range (between 60% and 40% of total length). <br> 2) Relative Size: Short. |
| ![Long-Legged-Doji](images/buddha/candle-patterns/long-legged-doji.png) | <br> **"Long-Legged&nbsp;Doji"** | <br> 1) The body is located nearly mid-range (between 60% and 40% of total length). <br> 2) Relative Size: Long. |
| ![Dragonfly-Doji](images/buddha/candle-patterns/dragonfly-doji.png) | <br> **"Dragonfly&nbsp;Doji"** | <br> 1) Upper shadow shorter than 1% of total candle length. <br> 2) Relative Size: Long. |
| ![Gravestone-Doji](images/buddha/candle-patterns/gravestone-doji.png) | <br> **"Gravestone&nbsp;Doji"** | <br> 1) Lower shadow shorter than 1% of total candle length. <br> 2) Relative Size: Long. |
| ![Generic-Doji](images/buddha/candle-patterns/generic-doji.png) | <br> **"Generic Doji"** | <br> All doji candles that do not match the 5 mentioned above. |

{% include note.html content="It is worth noting that this initial set of definitions is what may be found in the general literature. However, the indicator may be expanded to identify other types of candles. We welcome ideas and contributions in that regard." %}

### One-Candle Patterns

*One-Candle Patterns* consist of a single *basic candle* in a certain market context. Matching the type of basic candle with the analysis of the context in terms of the current trend as indicated by a 10-period exponential moving average (EMA) may help predict reversals or continuations.

{% include image.html file='buddha/candle-patterns/buddha-bots-layers-01-one-candle-patterns.gif' url='yes' max-width='100' caption='One-Candle Patterns layer' %}

The layer features an EMA 10 drawn with a dark line. It also features green and red arrows below and above the one-candles patterns, indicating the position in which the pattern appears.

If the candle is green and is pointing up, the pattern indicates a "Bullish Reversal" or a "Bullish Continuation" forecast when it's trending downwards or upwards respectively. If the candle is red and is pointing down, it indicates a "Bearish Reversal" or "Bearish Continuation" forecast when the trend is up or down respectively.

The panel features the following properties:

| Indicator Properties | Description |
| :--- | :--- |
| Pattern Name | The name of the pattern. |
| Trend Direction | The market trend on which the pattern has formed, as indicated by the EMA 10. |
| Forecast | The prediction given by the pattern forming in the current trend. |
| Trend Line Method | The method used to calculate the moving average that represents the trend line. |
| Trend Line Period | The number of periods used to calculate the moving average. |
| Trend Line Value | The current value of the moving average. |

### Two-Candles Patterns

*Two-Candles Patterns* are built from two *basic candles*.

{% include note.html content="The same concepts regarding the context of the trend discussed for *one-candle patterns* apply for all patterns with two candles or more." %}

{% include image.html file='buddha/candle-patterns/buddha-bots-layers-02-two-candles-patterns.gif' url='yes' max-width='100' caption='Two-Candles Patterns layer' %}

When analyzing patterns of more than one candle, it is important to understand the following concepts:

1. The first candle in the pattern is the first candle that is formed chronologically, and so on for the following candles.

1. The first candle in the pattern is the one that defines the trend of the pattern. For this reason, the value and the direction of the trend line of the pattern corresponding to the trend line of the first candle.

1. The arrow is drawn on the last candle that forms the pattern.

{% include note.html content="The three concepts explained above apply for all patterns with two candles or more" %}

### Three-Candles Patterns

*Three-Candles Patterns* are built from three *basic candles*.

{% include image.html file='buddha/candle-patterns/buddha-bots-layers-03-three-candles-patterns.gif' url='yes' max-width='100' caption='Three-Candles Patterns layer' %}


## Candle Patterns Products & Properties

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
