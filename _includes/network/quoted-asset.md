<!-- TITLE AND DEFINITION starts -->

{% assign title = "Quoted Asset" %}
{% assign definition = site.data.network.quoted_asset %}
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

The quoted asset must reference an <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.exchange_account_asset}}">exchange account asset</a> under <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.exchange_accounts}}">exchange accounts</a> &#8594; <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.user_account}}">user account<a/> of the corresponding crypto exchange in the <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.crypto_ecosystem}}">Crypto Ecosystem</a> hierarchy. 

The exchange account asset referenced must be one of the assets in the pair of the specific <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.market}}">market</a> and the specific <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.crypto_exchange}}">crypto exchange</a> that the trading session is associated with. 

{% include note.html content="Notice that the quoted asset in the context of a trading session does not need to match the *market quoted asset* as listed by the exchange. The exchange decides how to list a market in terms of which is the *market quoted asset* and which is the *market base asset*. The user, however, may decide which are the trading session's quoted and base assets." %}

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

{% include note.html content="After adding a quoted asset node, make sure you establish a reference to the second asset in the same market of the same exchange as the reference established with the base asset." %}

<!-- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!-- CONFIGURING starts -->

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