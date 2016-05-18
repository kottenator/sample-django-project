from django.conf.urls import url
from django.views.generic.base import TemplateView

urlpatterns = [
    url(r'^plain/$', TemplateView.as_view(template_name='main/plain.html'), name='plain'),
    url(r'^amd/$', TemplateView.as_view(template_name='main/amd.html'), name='amd'),
    url(r'^common/$', TemplateView.as_view(template_name='main/common.html'), name='common'),
]
