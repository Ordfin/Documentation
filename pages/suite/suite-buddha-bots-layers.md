---
title:  Buddha Data Mine Bots
summary: "The Buddha data mine offers the Candle Patterns recognition indicator."
sidebar: suite_sidebar
permalink: suite-buddha-bots-layers.html
---

{% include callout.html type="success" content="The Buddha data mine is brought to you by <a href='https://github.com/EduRemix' rel='nofollow' rel='noopener' target='_blank'>@EduRemix</a>. Collaborate with this data mine and report issues directly at the <a href='https://github.com/EduRemix/Superalgos'  rel='nofollow' rel='noopener' target='_blank'>contributor's repository</a>." %}

{% include note.html content="This page covers the use of Buddha indicators on the charts. To learn how to use these products from within strategies, see the [Buddha Indicators](suite-buddha-indicators.html) page." %}


## Candle Patterns

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
