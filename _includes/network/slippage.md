<!-- TITLE AND DEFINITION starts -->

{% assign title = "Slippage" %}
{% assign definition = site.data.network.slippage %}
{% assign preposition = "a" %}
{% assign plural = "" %}

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

In the context of forward testing and live trading sessions, slippage does not affect the actual transactions. However, the parameter is taken into account when creating the live trading simulation until the actual order fill values are obtained from the exchange.

{% include note.html content="Check the configuration section for the details on how slippage works." %}

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->

To add a parameter that may be missing, select *Add Missing Params* on the parameters node menu. 

<!--------------------------------------------- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!--------------------------------------------- CONFIGURING starts -->

Select *Configure* on the menu to access the configuration.

```json
{
"positionRate": 0.1,
"stopLoss": 0.2,
"takeProfit": 0.3
}
```

* ```positionRate``` is the slippage value applied to the rate of all market orders throughout the position, expressed as a percentage (*i.e.:* 0.1 means 0.1%).

* ```stopLoss``` is the slippage value applied to the stop loss target defined by the formulas of each stop loss phase in the manage stage of the trading system, expressed as a percentage (*i.e.:* 0.2 means 0.2%). The slippage value is applied to the value resulting from the corresponding stop loss formula, and the actual stop loss target is the resulting number. For example, if the stop loss formula results in ```1000``` and the ```stopLoss``` slippage value is ```0.2```, then the resulting stop loss target is  ```1000``` **&plusmn;** ```1000 * 0.2 / 100```. Read below for an explanation on when the slippage is added or subtracted.

* ```takeProfit``` works similarly as the ```stopLoss``` setting, but affecting the take profit target instead of the stop loss target.

{% include callout.html type='success' content='The number you enter is applied as a percentage of the rate (of market orders in the case of ```positionRate``` and stop loss and take profit targets in the latter cases) and *added to or subtracted from the price depending on the circumstances, always working against you*. For instance, ```"positionRate": 0.1``` means that market orders will be set at a rate 0.1% worse than ideally. <br/><br/>Slippage is added or subtracted depending on how you define your trading system, but the application is automatic, so you do not *need* to know every detail. However, if you do wish to understand the details, you need to learn about how the open and close stages are defined in term of the initial targets, along with stop loss and take profit targets in the manage stage. [Read about the Open Stage Initial Targets](suite-strategies-open-targets.html)' %}

{% include note.html content="If the slippage parameter is left empty or detached both from your session and your trading system, slippage is not computed during simulations."%}

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