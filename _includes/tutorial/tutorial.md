<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Tutorial" %}
{% assign definition = site.data.design_space.tutorial %}
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

Nodes in the hierarchy may be arranged freely, meaning that there may be as many tutorial topics and tutorial steps as desired. In general terms, all types of nodes behave similarly in the sense that each node, independently of the precise type, represents a tutorial step in and of itself. There are subtle differences to be covered where appropriate.

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

The configuration of each node in the tutorial hierarchy determines the content of each step. All types of nodes share the same basic configuration. However, tutorial step nodes have extra properties, described elsewhere.

The layout of the HTML page is fixed (CSS styles are fixed too) and is made out of a sequence of HTML elements, each of which may or may not be used, depending on whether the corresponding configuration parameter exists or not in the configuration.

{% include callout.html type="success" content="In other words, you may choose which elements of a potentially long list are used by filling the corresponding parameters with content or not." %}

{% include note.html content="The HTML page features a limited space and does not support scrolling. If too much information is defined in the configuration, the resulting content overflows the available space. There is no system-side control to deal with such overflows, so it's up to you to spread information across multiple steps and keep each page within its limits." %}

{% include tip.html content="You may use HTML element tags and inline CSS as part of the content of parameters. Just consider that they shall be embedded in the fixed layout and their effectiveness may vary." %}
 
Select *Configure* on the menu to access the configuration.

```json
{
    "title": "",
    "summary": "",
    "subTitle": "",
    "gif": "",
    "image": "",
    "definition": "",
    "bulletListIntro": "",
    "bulletArray": [
        [
            "",
            ""
        ],
        [
            "",
            ""
        ],
        [
            "",
            ""
        ]
    ],
    "paragraph1": "",
    "callOut": "",
    "externalLink": [
        "",
        ""
    ],
    "paragraph2": "",
    "note": "",
    "tip": "",
    "important": "",
    "warning": "",
    "position": "",
    "slider": "toTop",
    "pressButton": "",
    "documentationURL": ""
}
```

{% include tip.html content="Configuration items are listed in the order of appearance in the HTML layout, that is, the sequence of HTML elements mentioned earlier." %}

* ```title``` is the ```<H1>``` tag, the main title of the page.

* ```summary``` is a block of text preceded with the word <i>Summary</i>.

* ```subTitle``` is the ```<H2>``` tag, the secondary title of the page.

* ```gif``` is the name of an image in the <i>GIF</i> format. Do not include the ```.gif``` extension in the configuration, and make sure that the name of the file features the extension in lowercase. The file must be stored in the ```\Projects\[Project-Name]\Gifs```folder. The optimum size of the image is 400 px in width. For a step showing only a gif image, use 580 px for the height.

* ```image``` is the name of one of the icons stored in the ```\Projects\[Project-Name]\Icons```folder, without the extension. When the configuration exists, the icon is placed within a table, on the left-hand side of the text block featured in the ```definition``` field. When there is no icon, the ```definition``` occupies the full width.

* ```definition``` is a block of text in bold style (```<strong>``` HTML tag).

* ```bulletListIntro``` is a block of text that serves as an introduction to the array of bullet points below.

* ```bulletArray``` is the definition of any number of bullet points. The first field on each bullet is rendered in bold style and the second, in plain style. If the fields are left empty, the bullet list will still be included in the HTML, therefore, if you don't want bullets you must delete the whole definition of the bullet array from the configuration.

* ```paragraph1``` is a regular block of text.

* ```callOut``` is a block of text in bold style with a green border and the left-hand side of the block.

* ```externalLink``` allows you to set up a link that opens in a new tab at the end of the ```callOut``` block. Enter the URL in the first field and the anchor text in the second.

* ```paragraph2``` is a regular block of text.

* ```note``` is a block of text within a blue box preceded with the string ```Note:```.

* ```tip``` is a block of text within a green box preceded with the string ```Tip:```.

* ```important``` is a block of text within a yellow box preceded with the string ```Important:```.

* ```warning``` is a block of text within a red box preceded with the string ```Warning:```.

* ```position``` determines the position of the floating HTML. There are three alternatives: ```Left```, ```Right```, or leave the field empty to position the page in the center of the screen.

* ```slider``` determines the position of the horizontal slider. There are four alternatives: ```toTop```, ```Right```, or leave the field empty to position the page in the center of the screen.

* ```pressButton``` allows you to forcefully ```Stop``` the tutorial, go to the ```Next``` step, go to the ```Previous``` step, or ```Skip``` a step. When a step is loaded and one of these options is configured in this field, the action is applied immediately.

* ```documentationURL``` opens the Superalgos Documentation in the URL you configure. Use the complete URL, including the ```https://``` protocol header.


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