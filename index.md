---
title:  Jack Ellis
layout: default
---

{% for page in site.pages %}
  {% if page.title %}
- [{{ page.title }}]({{ page.url }})
  {% endif %}
{% endfor %}
