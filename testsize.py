import os
import math
import time

# third-party library
#import torch
#import torch.nn as nn
#from torch.autograd import Variable
#import torch.utils.data as Data
#import torchvision
#import matplotlib.pyplot as plt
#from torch.utils.data import Dataset, DataLoader
from PIL import Image

# torch.manual_seed(1)    # reproducible

# Hyper Parameters
EPOCH = 1               # train the training data n times, to save time, we just train 1 epoch
BATCH_SIZE = 50
LR = 0.001              # learning rate
DOWNLOAD_MNIST = False
#root='./mnist/raw/'

#def testfilesize(path):
#	fh =open('./'+path,'r')
#	maxheight=0
#	maxwidth=0
#	if(path=='new_train.txt'):
#		print('start_test_train')
#		i=0
#	else:
#		print('start_test_test')
#		i=0
#	for line in fh:
#		line=line.strip('\n')
#		line = line.rstrip()
#		words = line.split()
 #       	img = Image.open(words[0]) 
  #      	if (maxheight<img.height): 
   #         		maxheight=img.height
	#	if(i%30==0):
	#		print(str(i))
	#	i=i+1
			
        # if (maxwidth<img.width):
        #     maxwidth=img.width:
	#print('\n')
 #   	print(maxheight)
  #  	return maxheight
        # print(img.size)

def changepicsize(path,maxheight):
	fh = open('./new_'+path+'.txt','r')
	f=open('./new_size_'+path+'.txt','w')
	i=0
	timer=0
	print('start_change')
	for line in fh:
		start=time.time()
		line=line.strip('\n')
		line = line.rstrip()
		words = line.split()
		img = Image.open(words[0]) 
		img2=Image.new('RGB',(512,maxheight),(0,0,0))
		if(img.height<maxheight):
			box1=(0,0,img.width,img.height)
		else:
			box1=(0,0,img.width,maxheight)
		region=img.crop(box1)
		img2.paste(region,(0,0))
		if(not os.path.exists('./new_size_'+path+'/')):
			os.makedirs('./new_size_'+path+'/')
		img2.save('./new_size_'+path+'/'+str(i)+'.jpg')
		f.write('./new_size_'+path+'/'+str(i)+'.jpg'+' '+str(words[1])+'\n')
		i=i+1
		end=time.time()
		timer+=end-start
		if(i%10==0):
			remainingtime=timer*(7500-i)/10
			if(path=='train'):
				print(str(i/275)+'%')
			else:
				print(str(i/9)+'%')
			print('Remaining time:%s Seconds' %(remainingtime))
			timer=0


# def default_loader(path):
#     return Image.open(path).convert('RGB')
# class MyDataset(Dataset):
#     def __init__(self,txt,transform=None,target_transform=None,loader=default_loader):
#         fh=open(txt,'r')
#         imgs=[]
#         for line in fh:
#             line = line.strip('\n')
#             line = line.rstrip()
#             words = line.split()
#             imgs.append((words[0],int(words[1])))
#         self.imgs=imgs
#         self.transform=transform
#         self.target_transform=target_transform
#         self.loader=loader

#     def __getitem__(self,index):
#         fn,label = self.imgs[index]
#         img=self.loader(fn)
#         if self.transform is not None:
#             img = self.transform(img)
#         return img,label

#     def __len__(self):
#         return len(self.imgs)
maxtrainpicsize=0
maxtestpicsize=0
maxsize=4096

changepicsize('test',maxsize)


