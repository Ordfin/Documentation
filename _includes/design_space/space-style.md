<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Space Style" %}
{% assign definition = site.data.design_space.space_style %}
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
        "backgroundColor": "UI_COLOR.BLACK",
        "node": {
            "fontSize": 16,
            "imageSize":  60,
            "type": {
                "fontColor": "UI_COLOR.WHITE"
            },
            "name": {
                "fontColor": "UI_COLOR.WHITE"
            },
            "menuItem": {
                "backgroundColor": "UI_COLOR.BLACK",
                "fontColor": "UI_COLOR.WHITE",
                "fontSize": 14,
                "imageSize": 14
            }
        }
    }
```

* ```backgroundColor``` refers to the background of the design space (see table below).

* ```node``` refers to all nodes in the design space.

  * ```fontSize``` refers to the size of fonts affecting the type and name of nodes.

  * ```imageSize``` refers to the size of icons representing nodes.

* ```type``` refers to the type of node, as indicated by the string of text below each node.

  * ```fontColor``` refers to the color of the font (see table below).

* ```name``` refers to the name or label of the node, as indicated above the node.

* ```menuItem``` refers to items on the right-hand side of the menu.

  * ```backgroundColor``` refers to the color of the font (see table below).

  * ```fontSize``` refers to the size of the font of the string of text.

  * ```imageSize``` refers to the size of the icon illustrating the menu item.

| Variable Value | RGB Value | Color Sample |
| :--- | :---: | :------------------- |
| ```DARK``` | 48, 48, 54 | <span style="display: block; background: RGB(48, 48, 54); border: 1px solid black;">&nbsp;</span> |
| ```LIGHT``` | 234, 226, 222 | <span style="display: block; background: RGB(234, 226, 222); border: 1px black; border: 1px solid black;">&nbsp;</span> |
| ```GREY``` | 150, 150, 150 | <span style="display: block; background: RGB(150, 150, 150); border: 1px solid black;">&nbsp;</span> |
| ```LIGHT_GREY``` | 247, 247, 247 | <span style="display: block; background: RGB(247, 247, 247); border: 1px solid black;">&nbsp;</span> |
| ```WHITE``` | 255, 255, 255 | <span style="display: block; background: RGB(255, 255, 255); border: 1px solid black;">&nbsp;</span> |
| ```BLACK``` | 0, 0, 0 | <span style="display: block; background: RGB(0, 0, 0); border: 1px solid black;">&nbsp;</span> |
| ```GOLDEN_ORANGE``` | 240, 162, 2 | <span style="display: block; background: RGB(240, 162, 2); border: 1px solid black;">&nbsp;</span> |
| ```RUSTED_RED``` | 204, 88, 53 | <span style="display: block; background: RGB(204, 88, 53); border: 1px solid black;">&nbsp;</span> |
| ```GREEN``` | 188, 214, 67 | <span style="display: block; background: RGB(188, 214, 67); border: 1px solid black;">&nbsp;</span> |
| ```RED``` | 223, 70, 60 | <span style="display: block; background: RGB(223, 70, 60); border: 1px solid black;">&nbsp;</span> |
| ```PATINATED_TURQUOISE``` | 27, 153, 139 | <span style="display: block; background: RGB(27, 153, 139); border: 1px solid black;">&nbsp;</span> |
| ```TITANIUM_YELLOW``` | 244, 228, 9 | <span style="display: block; background: RGB(244, 228, 9); border: 1px solid black;">&nbsp;</span> |
| ```MANGANESE_PURPLE``` | 91,80, 122 | <span style="display: block; background: RGB(91,80, 122); border: 1px solid black;">&nbsp;</span> |
| ```TURQUOISE``` | 74, 207, 217 | <span style="display: block; background: RGB(74, 207, 217); border: 1px solid black;">&nbsp;</span> |
| ```DARK_TURQUOISE``` | 2, 149, 170 | <span style="display: block; background: RGB(2, 149, 170); border: 1px solid black;">&nbsp;</span> |




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