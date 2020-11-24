<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Space Settings" %}
{% assign definition = site.data.design_space.space_settings %}
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

XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.adding != "" %}

{{include.adding}} Adding {{preposition}} {{title}} Node

<!--------------------------------------------- ADDING starts -->

To add the {{ title | downcase }} node, select *Add {{ title }}* on the parent node menu. 

<!--------------------------------------------- ADDING ends -->

{% endif %}

{% if include.configuring != "" %}

{{include.configuring}} Configuring the {{title}}

<!--------------------------------------------- CONFIGURING starts -->

Select *Configure* on the menu to access the configuration.

```json
{
    "node": {
        "distancePercentage": 60,
        "radiusPercentage": 85,
        "massPercentage": 100,
        "menuItem": {
            "widthPercentage": 100,
            "heightPercentage": 60,
            "radiusPercentage": 90
        }
    },
    "physics": false
}
```

* ```node``` refers to every node in the design space.

* ```distancePercentage``` is the reference distance applied as a percentage of an arbitrary default distance separating a node from it's parent node, assigned to the medium distance setting (gree marking) of the **Distance to Parent** setting on the menu.

* ```radiusPercentage``` is the radius of the circular nodes' menu applied as a percentage of an arbitrary default radius.

* ```massPercentage``` is the refernce mass of nodes that affect the attraction and repulsion of the environment's pysics whe the physics setting is set to ```true```.

* ```menuItem``` refers to the items on the right-hand side of nodes' menus.

* ```widthPercentage``` is the reference width of an item applied as a percentage of an arbitrary default width.

* ```heightPercentage``` is the reference height of an item applied as a percentage of an arbitrary default height.

* ```radiusPercentage``` is the reference radious of the circular matrix that governs the distribution of items in the circular menu. Larger numbers cause items to spread appart while smaller numbers makes items lie closer to each other. 

* ```physics``` determines wether the environment is static (```false```) or dynamic (```true```). When physics is set to ```true```, nodes in the design space are affected by th gravitational pull and repulsion of other nodes.

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