<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Target Rate" %}
{% assign definition = site.data.trading_system.target_rate %}
{% assign preposition = "a" %}
{% assign plural = "s" %}

<!--------------------------------------------- TITLE AND DEFINITION ends -->

{% if include.more == "yes" and include.heading == "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.heading != "" and include.heading != "more" %}
{{include.heading}} {{title}}
{% endif %}

{% if include.icon != "no" %} 

{% if include.table == "yes" and include.icon != "no" %}
<table class='definitionTable'><tr><td>
{% endif %}

<img src='images/icons/nodes/png{{include.icon}}/{{ title | downcase | replace: " ", "-" }}.png' />

{% if include.table == "yes" and include.icon != "no" %}
</td><td>
{% endif %}

{% endif %}

{% if include.definition == "bold" %}
<strong>{{ definition }}</strong>
{% else %}
{% if include.definition != "no" %}
{{ definition }}
{% endif %}
{% endif %}

{% if include.table == "yes" and include.icon != "no" %}
</td></tr></table>
{% endif %}

{% if include.more == "yes" and include.content == "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.content != "no" %}

<!--------------------------------------------- CONTENT starts -->

{{include.heading}}## Internal Use

The system needs to determine when the managed stop loss and managed take profit targets have been hit. To do this, the system observes how the user places the targets in relation to the target rate.

*For example:*

If the phase 1 managed stop loss target is placed below the target rate and the phase 1 managed take profit target above it, the system assumes that:

* the stop loss target is hit when the current rate is equal to or smaller than the managed stop loss value;

* the stop loss target is hit when the current rate is equal to or greater than the managed take profit value;

The reversed example is true, as well.

This is how the system uses the target rate internally.

{{include.heading}}## Fetching the Value from Formulas

Additionally, defining a target rate at the level of the stage may be of use so that you may retrieve the value from formulas while setting the rate of limit orders, using the path of the corresponding node at the trading engine.

For example, ```tradingEngine.current.position.entryTargetRate.value``` or ```tradingEngine.current.position.exitTargetRate.value```.

{{include.heading}}## Affecting How Simulations are Plotted

The target rates defined at the open and close stages affect how the *Posittion Base Asset* and *Position Quoted Asset* layers in the *Simulation Objects* layer manager draw the triangle representing the development of the trade.

{% include image.html file='trading-system/target-rate-in-position.png' url='yes' max-width='100' caption='The Position Base Asset layer is on, providing a visual clue of how the position developed.' %}

The horizontal segment marks the target rate defined at the open stage. If you are using market orders to take the position, then using ```tradingEngine.current.episode.candle.close.value``` may offer a good representation of the rate of market orders. If you are using limit orders, then you may decide at which rate you wish to take the position, and the horizontal segment of the triangle will match the chosen rate.

The third vertex of the triangle points to a ```[datetime, rate]``` coordinate. The ```datetime``` is given by the candle on which the manage stage closes, that is, the candle at which the stop loss or take profit targets are hit. The ```rate``` portion of the coordinate is given by the target rate defined in the close stage.

You may choose to apply a similar reasoning as with the open stage target rate for limit orders, but there is some nouance to consider if you are using market orders.


{% include callout.html type="success" content="The issue arises if you when you run a testing session at a time frame higher than the time frame you use for live trading." %}

Why is that an issue?

Let's say your trading system makes decisions based on the close of the 1-hour candle. And let's say you are using stop loss and take profit targets. In such cases&mdash;when live trading&mdash;you may want to run your strategy in the 1-minute time frame, to detect the tagging of the take profit and stop targets as soon as possible, and act accordingly.

However, when backtesting, it is much faster to run sessions on the 1-hour time frame. This is particularly important when you wish to test significant time ranges.

When backtesting a strategy on the 1-hour time frame, the trading bot evaluates if stop loss and take profit targets have been hit at the close of the 1-hour candle, and may only act upon the evaluation on the next candle. This means that if you are using market orders to exit the position, the market order would be placed (in the simulation!) on the candle after one of the targets was hit.

The difference in rate between the moment in time the target is hit and the time the 1-hour candle closes may be significant. As a result, if the close stage target rate is defined as ```tradingEngine.current.episode.candle.close.value```, the resulting simulation may show significant slippage, and diverge from what the trade would look like if running on the 1-minute time frame, like you would when trading live.

To solve the above issue, you may use a more ellaborate formula for the target rate in the close stage:

```js
targetRate()

function targetRate() {
    switch (tradingEngine.current.position.exitType.value) {
        case 'No Exit': {
            return tradingEngine.current.episode.candle.close.value
            break
        }
        case 'Take Profit': {
            return tradingEngine.current.position.takeProfit.finalValue.value
            break
        }
        case 'Stop Loss': {
            return tradingEngine.current.position.stopLoss.finalValue.value
            break
        }
    }
}
```

This formula discriminates among three possible outcomes:

* When the no target has been hit, the value of the target rate is the close of the current candle.

* When the take profit is hit, the value of the target rate is the last value of the take profit.

* When the stop loss is hit, the value of the target rate is the last value of the stop loss.

In other words, the above formula simulates what would happen when running the trading session on the 1-minute time frame.

{% include tip.html content="You may use a similar formula on the simulated actual rate node of the simulated exchange events associated with the market order you are using to exit the position. Such use of the simulated actual rate node would impact the accounts kept for the episode and result in more realistic results for your backtesting session." %}

{% include note.html content="As you see, flexibility is a key design feature in Superalgos." %}

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->

To add the {{ title | downcase }} node, select *Add Missing Items* on the parent node menu. 

<!--------------------------------------------- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!--------------------------------------------- CONFIGURING starts -->

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

<!--------------------------------------------- CONFIGURING ends -->

{% endif %}

{% if include.starting != "" %}

{{include.starting}} Starting {{preposition}} {{title}}

<!--------------------------------------------- STARTING starts -->

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

<!--------------------------------------------- STARTING ends -->

{% endif %}

{% if include.more == "yes" %}
</details>
{% endif %}