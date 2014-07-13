--- 
layout: default 
image: imgs/greencubes512.png
---


{% include spotlight.html %}

<div class="ink-grid top-space projects">



    <div class="column-group gutters">

        <div class="all-100 align-center">
            <h2 class="">SAPO Open Source Projects</h2>
            <p>Things we rely on every day</p>
        </div>


        {% for post in site.categories['projects'] limit:3 %} {% include projects.html %} {% endfor %}

        <div class="all-100 align-center">
            <a class="check" href="/projects">Check out all of our Open Source Projects</a>

        </div>
    </div>

</div>

<div class="center">
    <div class="ink-grid top-space projects">

        <div class="column-group gutters">
            <div class="all-100 align-center">
                <h2 class="">Initiatives</h2>
                <p>Things that you can take part in</p>
            </div>
            {% for post in site.categories['initiatives'] limit:3 %} {% include initiatives.html %} {% endfor %}
        </div>
    </div>
</div>
<div class="ink-grid top-space projects">
    <div class="all-100 align-center">
        <h2 class="">Incubation</h2>
        <p>Shared experiences</p>
    </div>
    <div class="column-group gutters">
        {% for post in site.categories['incubation'] limit:8 %} {% include incubation.html %} {% endfor %}

    </div>
</div>