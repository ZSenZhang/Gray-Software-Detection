from __future__ import absolute_import, unicode_literals
from celery import task, Task
from ninjadroid import get_apk_info
from apkModelAnalyse import ModelAnalyse
from apkDynamicAnalyse import DynamicAnalyse
from apk.models import Apk

@task(bind=True)
def static_task(id):
    apk = Apk.objects.get(pk=id)
    result = get_apk_info(apk)
    Apk.models.objects.get(pk=id).update(result)
    return apk

@task(bind=True)
def model_task(id):
    apk = Apk.objects.get(pk=id)
    result = ModelAnalyse(apk)
    data = {'binImage': result.img,
            'suspicion': result.suspicion}
    Apk.models.objects.get(pk=id).update(result)
    return data

@task(bind=True)
def dynamic_task(id):
    apk = Apk.objects.get(pk=id)
    result = DynamicAnalyse(apk)
    Apk.models.objects.get(pk=id).update(result)
    return result
