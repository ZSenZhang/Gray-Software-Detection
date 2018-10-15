from .tasks import *
from celery.result import AsyncResult
from apk.models import Apk

def static_analyse(id):
  apk = Apk.objects.get(pk=id)
  task = static_task.delay(id)
  result = task.get()
  return result

def model_analyse(id):
  apk = Apk.objects.get(pk=id)
  task = model_task.delay(id)
  result = task.get()
  return result

def dynamic_analyse(id):
  task = dynamic_task.delay(id)
  result = task.get()
  return result
