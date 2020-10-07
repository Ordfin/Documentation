<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Trading Mine" %}
{% assign definition = site.data.trading_mine.trading_mine %}
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

Altough Superalgos is starting out with a single <a data-toggle="tooltip" data-original-title="{{site.data.trading_mine.trading_bot}}">trading bot</a>, the system is prepared to feature as many trading bots as developers are willing to create. As such, a trading mine is a catalog of trading bots.

Notice that, in the context of Superalgos, a trading bot has nothing to do with the trading logic. Think of trading logic as the business rules which&mdash;in Superalgos&mdash;are defined in <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.trading_system}}">trading systems.</a> Anyone may build trading systems, meaning that creating a trading system and the <a data-toggle="tooltip" data-original-title="{{site.data.trading_system.trading_strategy}}">trading strategies</a> within does not require coding.

Trading mines work similarly to <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.data_mines}}">data mines</a> in the sense that they provide the same kind of tools to structure the definitions of bots, including <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.process_definition}}">process definitions</a>, <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.product_definition}}">product definitions</a>, and <a data-toggle="tooltip" data-original-title="{{site.data.data_mine.plotter}}">plotters</a>.

{% include important.html content="Changes made to data mines shipping with the system may not be saved at the workspace level. If you wish to modify those hierarchies and use them in such modified versions, you need to clone them and modify the clone instead. To do this successfully, you need to learn more about [backups](suite-backups.html) and [clones](suite-clones.html)." %}

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