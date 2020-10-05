---
title:  Including Node Definitions
summary: "The include statement may be accompanied by several parameters that determine what sections are included and how they are rendered."
sidebar: contributing_sidebar
permalink: contributing-documentation-including-node-definitions.html
toc: false
---

Not all information within the definition of a node is relevant at all times. For example, a page introducing the four existing trading modes may list the short definition of each type of trading session, without going into details such as how to configure each type.

{% include note.html content="The infrastructure described in the [Node Definitions](contributing-documentation-node-definitions.html) page is designed to facilitate the flexible use of the information within each page." %}

Node definition pages are designed to be included in other pages. To do that, the Liquid ```include``` statement is used with the following syntax:

```
{% raw %}
{% include /folder/page-name.md more="" heading="##" icon="150" definition="bold" table="yes" content="yes" adding="####" configuring="####" starting="####" %}
{% endraw %}
```

The ```include``` statement is accompanied by several parameters that determine how the page is rendered:

* ```path``` is the path of the page to be included, starting at the ```_includes``` folder.

* ```more``` set to ```yes``` means that some part of the page will be collapsed into a collapsible HTML block (using the ```<datails>``` and ```<summary>``` tags). The collapsed block is expandable by clicking the *Click to learn more about...* notice. Where the page is collapsed depends on whether other parameters are set to ```more``` or not, as explained below. If no parameter is set to ```more```, then the collapsible block is set below the *content section*, that is, only the *adding*, *configuring*, and *starting sections* are included in the collapsible block. Any value other than ```yes``` means that there are no collapsible blocks.

* ```heading``` refers to the title of the page. When the value is a number of consecutive hash signs (```##```, ```###```, ```####```, ```#####```, ```######```), the hash signs are inserted in front of the title of the page, turning the title string into a valid markdown heading. This allows setting the level of the heading. Any value other than the ones mentioned hereinafter has the same effect&mdash;that is, the string is inserted before the title&mdash;an option not in use at this point. When the parameter is left empty (```""```) the title is not included. When ```heading``` is set to ```more``` in combination with the value ```yes``` in the ```more``` parameter, it means that the whole page will be collapsed.

* ```icon``` refers to the size of the icon to be included. Valid values are ```50``` and ```150```. An explicit ```no``` means the icon is not to be included. Any other value would cause the image not to be found.

* ```definition``` refers to the short definition. The value ```bold``` renders the short definition in a bold font. An explicit ```no``` hides the definition. Any other value, including no value at all, renders the short definition in the normal, plain font.

* ```table``` set to ```yes``` means that the icon and short definition are rendered side by side, using an HTML table. Any other value causes the icon to be rendered on top of the short definition.

* ```content``` determines if and how the content section is to be rendered. When set to ```more``` and the ```more``` parameter is set to ```yes```, a collapsible block is set up below the title, icon, and short definition. That is, the content section and everything below the content becomes part of the collapsible block.

* ```adding``` refers to the adding section. Like with the ```heading``` parameter, and empty value hides the section, and any other string is inserted before the title. The regular use is to add hash signs to turn the *Adding a* title into a valid markdown heading. Notice that the ```more``` value behaves like any other string and is inserted before the title. This means that collapsible blocks may not be defined through this parameter.

* ```configuring``` refers to the configuring section and works similarly to the ```adding parameter```.

* ```starting``` refers to the starting section and works similarly to the ```adding parameter```.

These parameters and their combinations may seem confusing, but some hands-on experimentation should quickly make things clear. Let's explore a few examples...

## Example 1

```
{% raw %}
{% include /network/backtesting-session.md more="yes" heading="##" icon="150" definition="bold" table="yes" content="more" adding="####" configuring="####" starting="####" %}
{% endraw %}
```
{% include callout.html type="success" content="The code above renders the Backtesting Session page with the title in an H2 heading style, the icon (at 150 px in size) and the short definition in bold, both side by side on an HTML table, and puts everything else into a collapsible block because the ```more``` parameter is set to ```yes``` and the ```content``` parameter is set to ```more```." %}

The code above results in the following content:

{% include /network/backtesting-session.md more="yes" heading="##" icon="150" definition="bold" table="yes" content="more" adding="####" configuring="####" starting="####" %}

## Example 2

```
{% raw %}
{% include /network/backtesting-session.md more="" heading="####" icon="50" definition="" table="yes" content="" adding="" configuring="" starting="" %}
{% endraw %}
```

{% include callout.html type="success" content="The above code renders the Backtesting Session page with the title in an H4 heading style, the icon (at 50 px in size) and the short definition in normal font, both side by side on an HTML table, and the content right below. There is no collapsible block because the ```more``` parameter is left empty, and the rest of the sections are not included because all other sections are left empty as well." %}

The code above results in the following content:

{% include /network/backtesting-session.md more="" heading="####" icon="50" definition="" table="yes" content="" adding="" configuring="" starting="" %}

## Example 3

```
{% raw %}
{% include /network/backtesting-session.md more="yes" heading="more" icon="150" definition="bold" table="yes" content="yes" adding="####" configuring="####" starting="####" %}
{% endraw %}
```

{% include callout.html type="success" content="The above code puts the whole page inside a collapsible block because the ```more``` parameter is set to ```yes``` and the ```heading``` parameter is set to ```more```." %}

The code above results in the following content:

{% include /network/backtesting-session.md more="yes" heading="more" icon="150" definition="bold" table="yes" content="yes" adding="####" configuring="####" starting="####" %}

## Example 4

```
{% raw %}
{% include /network/backtesting-session.md more="" heading="##" icon="150" definition="bold" table="yes" content="yes" adding="####" configuring="####" starting="####" %}
{% endraw %}
```

{% include callout.html type="success" content="The above code renders the whole page without collapsible blocks as the ```more``` parameter is left empty, while all other parameters are set to include all sections." %}

The code above results in the following content:

{% include /network/backtesting-session.md more="" heading="##" icon="150" definition="bold" table="yes" content="yes" adding="####" configuring="####" starting="####" %}