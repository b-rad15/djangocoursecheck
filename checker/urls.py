from django.urls import path, include
from . import views

app_name = "checker"
urlpatterns = [
    path("", views.index),
    path("runscript/", views.run_script, name="run_script")
]
