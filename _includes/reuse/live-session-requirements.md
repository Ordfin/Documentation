<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Live Session Requirements" %}

<!--------------------------------------------- TITLE AND DEFINITION ends -->

{% if include.content == "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn about the {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.content != "no" %}

<!--------------------------------------------- CONTENT starts -->

{% include important.html content="Running a live session requires the setup of a key reference at the market reference. It also requires a live data feed, meaning that the corresponding sensor bot, along with all indicators used by the referenced trading system, must be up and running. Finally, a live session also requires at least 48 hours of historic market data. Bear in mind that the trading system may require even more historic market data to properly analyze the market." %}

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.extended == "more" and include.content != "more" %}
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