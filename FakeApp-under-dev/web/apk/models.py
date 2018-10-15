from django.db import models

class Developer(models.Model):
  name = models.CharField(max_length=100, null=True)
  description = models.CharField(max_length=300, null=True)

class Apk(models.Model):
    iconUrl = models.CharField(max_length=300, null=True)
    binImage = models.CharField(max_length=300, null=True)
    name = models.CharField(max_length=100, null=True)
    filename = models.CharField(max_length=300)
    size = models.CharField(max_length=30, null=True)
    alike_icon_url = models.CharField(max_length=300, null=True)
    alike_apk_name = models.CharField(max_length=100, null=True)
    package_name = models.CharField(max_length=100, null=True)
    version = models.CharField(max_length=30, null=True)
    file_hash = models.CharField(max_length=40, null=True)
    cert_hash = models.CharField(max_length=100, null=True)
    developer = models.CharField(max_length=100, null=True)
    developer_user = models.ForeignKey(Developer)
    update_time = models.CharField(max_length=20, null=True)
    suspicion = models.IntegerField()
    permissions = models.CharField(max_length=1000, null=True)
    activities = models.CharField(max_length=1000, null=True)
    screenshots = models.CharField(max_length=1000, null=True)
    auth = models.BooleanField(defalt=False)