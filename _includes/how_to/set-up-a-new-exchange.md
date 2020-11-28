<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Set Up a New Exchange" %}
{% assign definition = site.data.how_to.set_up_a_new_exchange %}

<!--------------------------------------------- TITLE AND DEFINITION ends -->

{% if include.more == "yes" and include.heading == "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn how to {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.heading != "" and include.heading != "more" %}
{{include.heading}} How to {{title}}
{% endif %}

{% if include.table == "yes" %}
<table class='definitionTable'><tr><td>
{% endif %}

{% if include.definition == "bold" %}
<strong><i>In brief: </i>{{ definition }}</strong>
{% else %}
{% if include.definition != "no" %}
<strong><i>In brief: </i></strong> {{ definition }}
{% endif %}
{% endif %}

{% if include.table == "yes" %}
</td></tr></table>
{% endif %}

{% if include.more == "yes" and include.content == "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn how to {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.content != "no" %}

<!--------------------------------------------- CONTENT starts -->

A list of tested exchanges is available here.

{% include /reuse/tested-exchanges.md heading="##" icon="no" extended="no" content="more" definition="bold" table="no" more="yes"%}

Not all tested exchanges are set up in the default workspace. If you wish to use an exchange that is not set up in the workspace, you may set it up yourself following the instructions below.

## Start here

**1. Expand the *Untested* <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.crypto_exchanges}}">crypto exchanges</a> node** in the <a data-toggle="tooltip" data-original-title="{{site.data.crypto_ecosystem.crypto_ecosystem}}">crypto ecosystem</a> hierarchy.

**2. Locate the desired exchange**, detach it from its parent, and attach it to the *Testing Queue* crypto exchanges node. You may choose to attach your select exchange node to any other crypto exchanges node, or even add a new one. This is merely for organizational purposes and to keep the workspace tidy.

{% include /reuse/attaching-and-detaching-nodes.md heading="##" icon="no" extended="no" content="more" definition="bold" table="no" more="yes"%}

{% include note.html content="If the exchange you are looking for is not available there, it means it can not be setup in Superalgos at this point, likely for either or both of the following reasons: 1. The exchange does not provide one-minute candles; 2. The exchange does not provide a list of markets. Not all exchanges supported by the CCXT library comply in full with the standards proposed." %}

{% include tip.html content="There are over 60 exchanges complying with the <a href='https://github.com/ccxt/ccxt' rel='nofollow' rel='noopener' target='_blank'>CCXT library API standard</a>, an open-source effort to standardize communications with crypto exchanges, to the level required by Superalgos. If your exchange is not among those 60 plus exchanges, you may want to consider trading somewhere else. This is why: automating trading at your exchange requires building and maintaining a custom connector to speak with their API. It is unlikely that you will find an open-source project&mdash;or even a commercial solution&mdash;willing to do that, unless your exchange is in the top-10 list of exchanges in the world by volume traded." %}

{% include tip.html content="Alternative approach 1: Convince your exchange to comply with the standard." %}

{% include tip.html content="Alternative approach 2: Develop your own connector. We'll be happy to guide you and help you along the way!" %}

{% include /how_to/install-a-new-market.md heading="more" icon="no" extended="no" content="more" definition="" table="no" more="yes"%}



<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.extended == "more" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn how to {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.extended != "no" %}

<!--------------------------------------------- EXTENDED starts -->

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

<!--------------------------------------------- EXTENDED ends -->

{% endif %}

{% if include.more == "yes" %}
</details>
{% endif %}