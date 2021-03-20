# Education
{% for education in site.data.education %}

### {{ education.from }}-{{ education.to }}: {{ education.school }}, {{ education.qualification }}

{% for part in education.parts %}
- {{ part.part }}: {{ part.grade }}
{% endfor %}

{% endfor %}