---
title:  Contributing Indicators
summary: Set up your data mine, document both the on-chart features and the data products made available to other bots, and submit a PR to the corresponding repository.
sidebar: contributing_sidebar
permalink: contributing-indicators.html
---

It's awesome you wish to contribute an indicator! Thank you for your generosity! By doing so, you are contributing to the intelligence of the collective. We hope many developers will want to share indicators so that Superalgos may soon feature a comprehensive library of technical studies that make our strategies smarter.

Indicators may ocasionally require maintenance, sometimes to adapt to evolutions in Superalgos, or to fix bugs users may help to spot. For that reason, it's good that indicators have maintainers. Also, contributing to an open-source project is the main way of building reputation with the community. 

As such, the sustainable way to organize contributions of indicators is that each contributor owns and maintains his or her own data mine. If you set up a data mine and complete the documentation as described below, we may include your data mine in the next official release of Superalgos.

{% include important.html content="All contributions are subject to the terms of the <a href='https://github.com/Superalgos/Superalgos/blob/master/LICENSE' rel='nofollow' rel='noopener' target='_blank'>Apache License 2.0</a>. " %}

## Documenting the Indicator

You need to prepare the documentation of the indicator, so that people may understand how to use it and how to make the most of it. 

### Produce the Content

The information that must be documented is twofold:

##### How to use and interpret the indicator on the charts

**1. Provide a brief explanation** of what the indicator is about. Do not copy and paste content from another source as that may violate copyrights laws. You may either explain it in your own words, or point to a public, reputable source on the Internet, or your blog or website, if you have one. The exception to this rule is copying and pasting a single sentence defining the concept and giving proper credit to the source.

**2. You do not need to describe trading ideas** based on the indicator, but feel free to do so if you wish.

**3. Use illustrations** to better convey ideas. You may use animated GIFs (8 fps) or PNG images (24 bits). The size that works best is 1366 x 768 pixels, and please keep the weight of each image below 10 Mb.

**4. Explain the data displayed on the panels** if there are any.

**5. Take the [Resistances and Supports](community-indicator-resistances-and-supports.html) indicator as an example**.

##### How to use the data products and their properties

**1. Write the indicator's technical sheet**. Simply list and explain the different data products the indicator may feature, their properties, and the possible values of each property so that people may use the indicator from within strategies.

**2. Take the [Resistances and Supports](community-indicator-resistances-and-supports.html) indicator as an example**.

### Intengrate the Content in the Documentation

**1. Fork the <a href="https://github.com/Superalgos/Documentation/" rel="noopener" target="_blank">Documentation repository</a>**

**2. Duplicate the corresponding template files to create your pages**.

You need to create at least two pages: one for your data mine, and one for each of your indicators.

* The template page for your data mine is ```pages/contributing/community-data-mine-template.md```.

* The template page for your indicators is ```pages/contributing/community-indicator-template.md```.

Rename the new pages with the name of your data mine and indicators accordingly.

**3. Update the *yaml* header** on the pages with the information corresponding to your data mine and indicators, and use the rest of the file as a markdown formatting template for your own write ups.

**4. Create a new folder inside ```images```** named after your data mine, and put your images there.

{% include note.html content="If you wish to run the documentation site on your machine to properly browse the documentation pages with the complete formating, you may run it as a <a href='https://jekyllrb.com/docs/' rel='nofollow' rel='noopener' target='_blank'>Jekyll site</a>." %}

## Submit the Data Mine and Documentation

**1. Submit the documentation** in a PR to the ```develop``` branch of the Documentation repository.

**2. Submit the data mine** to the ```Data-Mines``` folder of the ```develop``` branch of the <a href="https://github.com/Superalgos/Superalgos/tree/develop" rel="noopener" target="_blank">Superalgos repository</a>.