<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Workspace" %}
{% assign definition = site.data.concepts.workspace %}
{% assign preposition = "the" %}
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

A workspace stores information about:
 
* Any hierarchy that is not included as a plugin.

* Nodes that may be floating around, detached from hierarchies.

* Information regarding the physical position and state of all nodes within the design space, even those detached from the hierarchies.
 
A workspace is not part of any of the hierarchies; instead, it contains them. 

<!--------------------------------------------- CONTENT ends -->

{% endif %}

{% if include.more == "yes" and include.extended == "more" and include.content != "more" and include.heading != "more" %}
<details class='detailsCollapsible'><summary class='nobr'>Click to learn more about {{ title | downcase }}{{plural}}
</summary>
{% endif %}

{% if include.extended != "no" %}

<!--------------------------------------------- EXTENDED starts -->

## Working With Workspaces

### Saving Workspaces

Workspaces are saved as ```.json``` files in the ```My-Workspaces``` folder.

They are saved automatically every 60 seconds, or at the moment the browser or browser tab is closed. You may also save it manually using the following hot-key combination: <kbd>Ctrl or &#8984;</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd>.

{% include tip.html content="Backing up a workspace downloads the same file to your local ```Downloads``` folder. This is a good way to store old versions in case you ever need to go back to a previous state of affairs." %}

{% include important.html content="Plugin workspaces may not be modified. When you load a plugin workspace, a new file is created in your ```My-Workspaces``` folder as soon as the workspace is saved for the first time, resulting in a copy of the plugin workspace. Any modifications you introduce in the workspace are stored in the copy, not the original plugin." %}

### Creating Workspaces

To create a new workspace, rename any of the existing workspaces by changing the label of the workspace node, and save it as explained above. After you change the label and once the workspace is saved (by any of the usual means), a new file is stored in the ```My-Workspaces``` folder.

{% include image.html file='design-space/workspace-01.gif' url='yes' max-width='100' caption='' %}

### Loading Workspaces

Users may manage multiple workspaces, but only one workspace may be loaded in the system at any point.

To load a workspace, click the *workspaces tab* on the left-hand side of the screen and select one of the available files.

To load a workspace you got from a third party, you may place the file in the ```My-Workspaces``` folder so that you may open it from the *workspaces tab*, or you may drag it and drop it on the design space.

### Deleting Workspaces

To delete a workspace, delete the corresponding workspace file from within the file system application of your operating system.


<!--------------------------------------------- EXTENDED ends -->

{% endif %}

{% if include.more == "yes" %}
</details>
{% endif %}