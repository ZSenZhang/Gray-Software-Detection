from django.conf.urls import url, include
from apk.api.views import DeveloperViewSet, ApkViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'apk', ApkViewSet)
router.register(r'developer', DeveloperViewSet)

urlpatterns = [
	url(r'^', include(router.urls)),
]