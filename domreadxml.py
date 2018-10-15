#!/usr/bin/python
# -*- coding: UTF-8 -*-
 
from xml.dom.minidom import parse
import xml.dom.minidom
fh = open('android.txt', 'w')

# 使用minidom解析器打开 XML 文档
DOMTree = xml.dom.minidom.parse("AndroidManifest.xml")
collection = DOMTree.documentElement
if collection.hasAttribute("xmlns:android"):
   collectionattribute="xmlns:android : "+collection.getAttribute("xmlns:android")
   fh.write(collectionattribute+'\n')
if collection.hasAttribute("package"):
   collectionattribute="Package:"+collection.getAttribute("package")
   fh.write(collectionattribute+'\n')
 
# 在集合中获取所有电影
permissions = collection.getElementsByTagName("uses-permission")
 
# 打印每部电影的详细信息
for permission in permissions:
   if permission.hasAttribute("android:name"):
      permissionattribute="permission_name : "+permission.getAttribute("android:name")
      fh.write(permissionattribute+'\n')
   # filters=permission.getElementsByTagName("intent-filter")
   # for fil in filters:
   #    if fil.hasAttribute("android:name"):
   #       filterattribute=fil.getElementsByTagName("android:name")
   #       fh.write(filterattribute+'\n')
 
activities = collection.getElementsByTagName("activity")

for activityy in activities:
   if(activityy.hasAttribute("android:icon")):
      activityattribute="activity:android:icon:"+activityy.getAttribute("android:icon")
      fh.write(activityattribute+'\n')
   if(activityy.hasAttribute("android:label")):
      activityattribute="activity:android:label:"+activityy.getAttribute("android:label")
      fh.write(activityattribute+'\n')
   if(activityy.hasAttribute("android:name")):
      activityattribute="activity:android:name:"+activityy.getAttribute("android:name")
      fh.write(activityattribute+'\n')
   if (activityy.getElementsByTagName("intent-filter")!=None):
      filters=activityy.getElementsByTagName("intent-filter")
      for filterr in filters:
         if(filterr.getElementsByTagName("action")!=None):
            actionn=filterr.getElementsByTagName("action")
            for act in actionn:
               if(act.hasAttribute("android:name")):
                  actionattribute="action:"+act.getAttribute("android:name")
                  fh.write(actionattribute+'\n')
         if(filterr.getElementsByTagName("category")!=None):
            category=filterr.getElementsByTagName("category")
            for cat in category:
               if(cat.hasAttribute("android:name")):
                  categoryattribute="category:"+cat.getAttribute("android:name")
                  fh.write(categoryattribute+'\n')

services = collection.getElementsByTagName("service")

for service in services:
   if(service.hasAttribute("android:name")):
      serviceattribute="activity:android:name:"+service.getAttribute("android:name")
      fh.write(serviceattribute+'\n')
   if (service.getElementsByTagName("intent-filter")!=None):
      filters=service.getElementsByTagName("intent-filter")
      for filterr in filters:
         if(filterr.getElementsByTagName("action")!=None):
            actionn=filterr.getElementsByTagName("action")
            for act in actionn:
               if(act.hasAttribute("android:name")):
                  actionattribute="action:"+act.getAttribute("android:name")
                  fh.write(actionattribute+'\n')
         if(filterr.getElementsByTagName("category")!=None):
            category=filterr.getElementsByTagName("category")
            for cat in category:
               if(cat.hasAttribute("android:name")):
                  categoryattribute="category:"+cat.getAttribute("android:name")
                  fh.write(categoryattribute+'\n')


receivers = collection.getElementsByTagName("receiver")

for receiver in receivers:
   if(receiver.hasAttribute("android:name")):
      receiverattribute="activity:android:name:"+service.getAttribute("android:name")
      fh.write(serviceattribute+'\n')
   if(receiver.hasAttribute("android:label")):
      receiverattribute="activity:android:label:"+receiver.getAttribute("android:label")
      fh.write(receiverattribute+'\n')
   if (receiver.getElementsByTagName("intent-filter")!=None):
      filters=receiver.getElementsByTagName("intent-filter")
      for filterr in filters:
         if(filterr.hasAttribute("android:priority")):
            filterattribute="intent-filter:"+filterr.getAttribute("android:priority")
            fh.write(filterattribute+'\n')
         if(filterr.getElementsByTagName("action")!=None):
            actionn=filterr.getElementsByTagName("action")
            for act in actionn:
               if(act.hasAttribute("android:name")):
                  actionattribute="action:"+act.getAttribute("android:name")
                  fh.write(actionattribute+'\n')
         if(filterr.getElementsByTagName("category")!=None):
            category=filterr.getElementsByTagName("category")
            for cat in category:
               if(cat.hasAttribute("android:name")):
                  categoryattribute="category:"+cat.getAttribute("android:name")
                  fh.write(categoryattribute+'\n')
   if(receiver.getElementsByTagName("meta-data")!=None):
      datas=receiver.getElementsByTagName("meta-data")
      for data in datas:
         if(data.hasAttribute("android:name")):
            dataattribute="meta-data:android:name"+data.getAttribute("android:name")
            fh.write(dataattribute+'\n')
         if(data.hasAttribute("android:resource")):
            dataattribute="meta-data:android:resource"+data.getAttribute("android:resource")
            fh.write(dataattribute+'\n')
   # type = movie.getElementsByTagName('type')[0]
   # typeattribute="Type : "+type.childNodes[0].data
   # fh.write(typeattribute+'\n')
   # format = movie.getElementsByTagName('format')[0]
   # formatattribute="Format:"+format.childNodes[0].data
   # fh.write(formatattribute+'\n')
   # rating = movie.getElementsByTagName('rating')[0]
   # ratingattribute="Rating:"+rating.childNodes[0].data
   # fh.write(ratingattribute+'\n')
   # description = movie.getElementsByTagName('description')[0]
   # descriptionattribute="Description:"+description.childNodes[0].data
   # fh.write(descriptionattribute+'\n') 

fh.close()