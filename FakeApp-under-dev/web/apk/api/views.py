from apk.models import Developer, Apk
from .serializers import DeveloperSerializer, ApkSerializer
from rest_framework import viewsets


class DeveloperViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Developer.objects.all()
    serializer_class = DeveloperSerializer

class ApkViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Apk.objects.all()
    serializer_class = ApkSerializer
