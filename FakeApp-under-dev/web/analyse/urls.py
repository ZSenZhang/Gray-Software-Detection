from django.urls import include, path
from rest_framework.routers import DefaultRouter
from . import views
from analyse.views import *

urlpatterns = [
	path('',views.index),
	path('static/<int:id>/', run_static),
  path('model/<int:id>/', run_model),
  path('dynamic/<int:id>/', run_dynamic),
]