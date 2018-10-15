# FakeApp
## Dependencies
> postgesql  
RabbitMQ  
Memcached  

# Introduction

1. Decompiled the APK, analyzed user permission, intent action and category, then applied KNN for classification training.
2. Transformed the binary code into the gray graph and used Neural Network to learn the graph.
3. Installed the app in virtual machine for dynamic analysis based on Xposed.
4. build website for a better view

# requirements
amqp==2.2.2
billiard==3.5.0.3
celery==4.1.0
Django==2.0.4
django-filter==1.1.0
django-webpack-loader==0.6.0
djangorestframework==3.8.2
kombu==4.1.0
psycopg2==2.7.4
python-memcached==1.59
pytz==2018.4
six==1.11.0
vine==1.1.4
