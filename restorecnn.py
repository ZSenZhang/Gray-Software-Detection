import torch
from torch.autograd import Variable
import matplotlib.pyplot as plt
import os
import torch.nn as nn
from torch.autograd import Variable
import torch.utils.data as Data
import torchvision
from torch.utils.data import Dataset, DataLoader
from PIL import Image

def default_loader(path):
    return Image.open(path).convert('RGB')
class MyDataset(Dataset):
    def __init__(self,txt,transform=None,target_transform=None,loader=default_loader):
        fh=open(txt,'r')
        imgs=[]
        for line in fh:
            line = line.strip('\n')
            line = line.rstrip()
            words = line.split()
            imgs.append((words[0],int(words[1])))
        self.imgs=imgs
        self.transform=transform
        self.target_transform=target_transform
        self.loader=loader

    def __getitem__(self,index):
        fn,label = self.imgs[index]
        img=self.loader(fn)
        if self.transform is not None:
            img = self.transform(img)
        return img,label

    def __len__(self):
        return len(self.imgs)


class CNN(nn.Module):
    def __init__(self):
        super(CNN, self).__init__()
        self.conv1 = nn.Sequential(         # input shape (3, 16384, 16384)
            nn.Conv2d(
                    in_channels=3,              # input height
                    out_channels=16,            # n_filters
                    kernel_size=5,              # filter size
                    stride=1,                   # filter movement/step
                    padding=2,                  # if want same width and length of this image after con2d, padding=(kernel_size-1)/2 if stride=1
                    ),                              # output shape (16, 16384, 16384)
            nn.ReLU(),                      # activation
            nn.MaxPool2d(kernel_size=2),    # choose max value in 2x2 area, output shape (16, 8192, 8192)
        )
        self.conv2 = nn.Sequential(         # input shape (16, 8192, 8192)
            nn.Conv2d(16, 32, 5, 1, 2),     # output shape (32, 8192, 8192)
            nn.ReLU(),                      # activation
            nn.MaxPool2d(2),                # output shape (32, 4096, 4096)
        )
        self.conv3 = nn.Sequential(         # input shape (32,4096,4096)
            nn.Conv2d(32,64,5,1,2),
            nn.ReLU(),
            nn.MaxPool2d(2),                #output shape (64,2048,2048)
        )
        self.conv4 = nn.Sequential(         # input shape (64,2048,2048)
            nn.Conv2d(64,128,5,1,2),
            nn.ReLU(),
            nn.MaxPool2d(2),                #output shape (128,1024,1024)
        )
        self.conv5 = nn.Sequential(         # input shape (128,1024,1024)
            nn.Conv2d(128,128,5,1,2),
            nn.ReLU(),
            nn.MaxPool2d(2),                #output shape (256,512,512)
        )
        self.out = nn.Linear(128 * 16 * 128, 10)   # fully connected layer, output 10 classes

    def forward(self, x):
        x = self.conv1(x)
        x = self.conv2(x)
        x = self.conv3(x)
        x = self.conv4(x)
        x = self.conv5(x)
        x = x.view(x.size(0), -1)           # flatten the output of conv2 to (batch_size, 32 * 7 * 7)
        output = self.out(x)
        return output, x    # return x for visualization

def restore_net():
    # restore entire net1 to net2
    cnn2 = torch.load('./newcnn.pkl')
    eval_loss = 0.
    eval_acc = 0.
    filewrite=open('testresult.txt','w')
    for batch_x, batch_y in test_loader:
    #!!!!add cuda()!!!!
        batch_x, batch_y = Variable(batch_x, volatile=True).cuda(), Variable(batch_y, volatile=True).cuda()
        out, _ = cnn2(batch_x)
    # outputx = cnn(batch_x)[0]
    # loss = loss_func(outputx, batch_y)
    # eval_loss += loss.data[0]
    #!!!!add cuda()!!!!!
        pred = torch.max(out, 1)[1].cuda().data.squeeze()
        test_acc=sum(pred==batch_y).item()/float(batch_y.size(0))
        print('|test accuracy:%.2f'%(test_acc))
        filewrite.write('testresult.txt:'+str(test_acc)+'\n')
    # num_correct = sum(pred == batch_y).item()/float(batch_y.size(0))
    # eval_acc += num_correct.data[0]
# pred_y=pred.data.numpy().squeeze()
    print(pred,'predictions number')
    print(batch_y.cpu().numpy(),'real number')
    #print('| test accuracy:%.2f'% (test_acc))

test_data=MyDataset(txt='./new_size_test.txt',transform=torchvision.transforms.ToTensor())
test_loader = DataLoader(dataset=test_data,batch_size=5)
cnn2 = CNN()
restore_net()
