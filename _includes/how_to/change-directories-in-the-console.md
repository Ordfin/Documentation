<!--------------------------------------------- TITLE AND DEFINITION starts -->

{% assign title = "Change Directories in the Console" %}
{% assign definition = site.data.how_to.change_directories_in_the_console %}

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

These are a few useful commands to navigate through a directory structure in the context of a console/terminal/command line application:

| Command | Effect |
| :--- | :--- |
| ```cd \Superalgos``` | Goes to the ```Superalgos``` folder, assuming it exists at the root of the current drive. If your ```Superalgos``` folder is not at the root of the drive, use the whole path instead. For example: ```cd \my-files\crypto-trading\Superalgos``` |
| ```cd ..``` | Goes down to the parent directory |
| ```cd ...``` | Goes down two directories |
| ```cd \``` | Goes down to the root directory |
| ```cd directory-name``` | Enters a specific directory in the current level |
| ``` cd c:/``` or ```cd d:/``` | Switches drives |

{% include image.html file='how-to/change-directories-in-the-console-00.gif' url='yes' max-width='100' caption='Use the ```cd``` command to change and enter directories.' %}

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