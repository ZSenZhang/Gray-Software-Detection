from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .service import *
from django.contrib.auth.decorators import login_required

@login_required(login_url='/admin/login/?next=/')
def index(request):
  return HttpResponse(get_result())

def run_static(request, id=1):
    return JsonResponse({'data': static_analyse(id)})
