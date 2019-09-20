---
title:  Jack Ellis
layout: default
---

{% for p in site.pages %}
  {% if p.title and p.url != page.url  %}
- [{{ p.title }}]({{ p.url }})
  {% endif %}
{% endfor %}
