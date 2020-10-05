<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Safely Close Superalgos" %}
{% assign definition = site.data.how_to.safely_close_superalgos %}

<!--------------------------------------------- TITLE AND DEFINITION ends -->

{% if include.more == "yes" and include.heading == "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn how to {{ title | downcase }}
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
<details class='detailsCollapsible'><summary class='nobr'>Click to learn how to {{ title | downcase }}
</summary>
{% endif %}

{% if include.content != "no" %}

<!--------------------------------------------- CONTENT starts -->

The backend application runs independently from the frontend browser-based application. You may close the browser at any point without affecting your data-mining operation or the bots you may be running in your testing or prodution environments. Once you restart the browser and navigate to the correct URL, the frontend app reconnects with the backend and you regain control over the whole operation.

{% include important.html content="If you wish to completely close Superalgos and stop all operations, there is a safe way to do this while preventing the corruption of files that may be processing at any point." %}

## Start Here

**1. Close all <a data-toggle="tooltip" data-original-title="{{site.data.network.data_mining}}">data-mining</a> tasks**. Select *Stop All Exchange Data Tasks* on the data mining node menu.

**2. Close all tasks in the <a data-toggle="tooltip" data-original-title="{{site.data.network.testing_environment}}">testing environment</a> and the <a data-toggle="tooltip" data-original-title="{{site.data.network.production_environment}}">production environment</a>**. Select *Stop All Task Managers* in the testing and production environment nodes menus.

**3. Wait a few seconds until all tasks are stopped and close the browser**.

**4. Wait for about one minute until all activity stops in the console, then close it**.

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