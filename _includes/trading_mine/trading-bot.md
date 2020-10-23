<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Trading Bot" %}
{% assign definition = site.data.trading_mine.trading_bot %}
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

In Superalgos, a trading bot is a computer program designed to leverage the Superalgos infrastructure to provide smart trading features to users building, testing, and deploying <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.trading_system}}">trading systems</a>. As such, a trading bot does not feature trading logic in and of itself. Instead, it executes the logic defined in trading systems.

Put in other words, when Superalgos users define trading systems and the <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.trading_strategy}}">trading strategies</a> within, they are not building a trading bot. Instead, they are defining a set of instructions that a trading bot will then interpret and execute.

Trading bots have access to every piece of infrastructure built in Superalgos. One of the noteworthy sections of the infrastructure relevant to trading bots are trading mines themselves. Trading bots may be quite complex pieces of software. To name two of the most prominent characteristics: the bot needs to consider multiple dimensions of information and needs to be highly reliable, as its activity entails monetary transactions.

Trading mines make building trading bots a more accessible feat, providing a framework to produce compartmentalized definitions for the bots' processes and products, just like data mines do for sensors and indicators.

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->

To add the {{ title | downcase }} node, select *Add Trading Bot* on the parent node menu. 

<!--------------------------------------------- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!--------------------------------------------- CONFIGURING starts -->

Select *Configure* on the menu to access the configuration.

```json
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

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