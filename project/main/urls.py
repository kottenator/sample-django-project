from django.conf.urls import url, include
from django.views.generic.base import TemplateView

urlpatterns = [
    url(r'^plain/$', TemplateView.as_view(template_name='main/plain.html')),
]
