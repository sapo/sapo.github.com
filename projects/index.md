--- 
layout: default
title: Projects - Open Source at SAPO
subtitle: Things we rely on every day
---
<div class="ink-grid top-space projects">
    <div class="column-group gutters">
        <div class="all-100 align-center">
            <h2 class="">{{ page.title }}</h2>
            <h3 class="sub">{{ page.subtitle }}</h3>
        </div>
        {% for post in site.categories['projects'] %} 
        {% include projects.html %}
        {% endfor %}
    </div>
</div>