<!-- TITLE AND DEFINITION starts -->

{% assign title = "Base Asset" %}
{% assign definition = site.data.network.base_asset %}
{% assign preposition = "a" %}
{% assign plural = "s" %}

<!-- TITLE AND DEFINITION ends -->

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

<!-- CONTENT starts -->

The base asset must reference an <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.exchange_account_asset}}">exchange account asset</a> under <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.exchange_accounts}}">exchange accounts</a> &#8594; <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.user_account}}">user account<a/> of the corresponding crypto exchange in the <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.crypto_ecosystem}}">Crypto Ecosystem</a> hierarchy. 

The exchange account asset referenced must be one of the assets in the pair of the specific <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.market}}">market</a> and the specific <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.crypto_exchange}}">crypto exchange</a> that the trading session is associated with. 

{% include note.html content="Notice that the base asset in the context of a trading session does not need to match the *market base asset* as listed by the exchange. The exchange decides how to list a market in terms of which is the *market base asset* and which is the *market quoted asset*. The user, however, may decide which are the trading session's base and quoted assets." %}

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

{% include note.html content="After adding a base asset node, make sure you establish a reference to the asset in a specific market of a specific exchange in the Crypto Ecosystem hierarchy." %}

<!-- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!-- CONFIGURING starts -->

Select *Configure Base Asset* on the menu to access the configuration.

```json
{
"initialBalance": 0.001,
"minimumBalance": 0.0001,
"maximumBalance": 0.1
}
```

* ```initialBalance``` is the amount of capital you wish to allocate to the trading system.

* ```minimumBalance``` is the threshold of accummulated losses that switches off the session; when your overall balance (balanceAssetA + balanceAssetB) drops to this value, all trading stops; think of the ```minimumBalance``` as a general safety switch.

* ```maximumBalance``` is a similar concept as with the ```minimumBalance``` but on the high side of the ```initialBalance```.


<!-- CONFIGURING ends -->

{% endif %}

{% if include.more == "yes" %}
</details>
{% endif %}