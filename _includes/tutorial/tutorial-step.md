<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Tutorial Step" %}
{% assign definition = site.data.tutorial.tutorial_step %}
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

{% include note.html content="The basic configuration of the tutorial step node is the same as the tutorial node. Refer to the latter, please." %}

In addition to the basic configuration, tutorial step nodes feature a large collection of resources that allows you to manipulate the user interface and actual nodes in many ways.

{{include.configuring}}# Navigation

Setting up a reference to any node in the workspace and using the below parameter makes the step load next to the referenced node.

```
    "positionAtReferenceParent": true,
```

{{include.configuring}}# Messages

Setting up a reference to any node in the workspace and using the below parameters allows placing different types of messages on the referenced node.

```
    "setErrorMessageReferenceParent": "This is a simulated error message!"
    "setInfoMessageReferenceParent": "This is a simulated info message!"
    "setValueReferenceParent": "This is a simulated value message!"
    "setPercentageReferenceParent": "This is a simulated progress message!"
    "setStatusReferenceParent": "This is a simulated status message!"
```

{{include.configuring}}# Centering and Zooming Into a Time Machine

Setting up a reference to a time machine node in the charting space hierarchy while using the below parameter causes the following:

* The charting space viewport is centered on the referenced time machine.
* The time machine is adjusted to fit the aspect ratio of the screen.
* The viewport zooms into the time machine.

```
    "repositionAtTimeMachineReferenceParent": true,
```

{{include.configuring}}# Pressing Keys When on a Time Machine

Setting up a reference to a time machine node in the charting space hierarchy and using the below parameters allows simulating the pressing of relevant key combinations when on a time machine.

```
    "keyPressedTimeMachineReferenceParent": {
        "shiftKey": true,
        "ctrlKey": true,
        "metaKey": true,
        "key": "A"
    }
```

* ```shiftKey```, ```ctrlKey```, and ```metaKey``` (Mac OS equivalent to Control) may be ```true``` or ```false```.

* ```key``` may be any letter or number.

{{include.configuring}}# Modifying the Configuration of Nodes

Setting up a reference to any node in the design space and using the following parameters allows you to edit the configuration of the referenced nodes and their offspring.

The example below changes the configuration of the three different scale nodes under a time machine. In this case, the time machine is the node referenced, the ```nodePath``` is the path of the node whose configuration must be changed relative to the ```referenceParent```, and the ```properties``` parameter is the actual configuration to be set.

```
    "batchConfigChangesReferenceParent": [
        {
            "nodePath": "referenceParent.timeScale",
            "properties": {
                "autoMinScale": false,
                "autoMaxScale": false,
                "fromDate": "2020-08-31T23:40:00.000Z",
                "toDate": "2020-09-01T01:00:00.000Z"
            }
        },
        {
            "nodePath": "referenceParent.rateScale",
            "properties": {
                "autoMinScale": false,
                "autoMaxScale": false,
                "minValue": 11400,
                "maxValue": 11800
            }
        },
        {
            "nodePath": "referenceParent.timeFrameScale",
            "properties": {
                "value": "01-min"
            }
        }
    ]
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