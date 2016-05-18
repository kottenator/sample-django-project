from django.conf.urls import url, include

import project.base.urls
import project.main.urls


urlpatterns = [
    url(r'', include(project.base.urls)),
    url(r'', include(project.main.urls)),
]
