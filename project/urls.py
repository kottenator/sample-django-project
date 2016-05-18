from django.conf.urls import url, include

import project.main.urls


urlpatterns = [
    url(r'', include(project.main.urls)),
]
