 # coding=utf-8
import numpy
from PIL import Image
import binascii
def getMatrixfrom_bin(filename,width):
    with open(filename, 'rb') as f:
        content = f.read()
    hexst = binascii.hexlify(content)  #将二进制文件转换为十六进制字符串
    fh = numpy.array([int(hexst[i:i+2],16) for i in range(0, len(hexst), 2)])  #按字节分割
    rn = len(fh)/width
    fh = numpy.reshape(fh[:rn*width],(-1,width))  #根据设定的宽度生成矩阵
    fh = numpy.uint8(fh)
    return fh

def openfile(txt):
	fh=open(txt,'r')
	f=open('./new_train.txt','w')
	i=0
    for line in fh:
        line = line.strip('\n')
        line = line.rstrip()
        words = line.split()
        filename = words[0]
        im = Image.fromarray(getMatrixfrom_bin('./normal_train'+filename,512)) #转换为图像
        if(not os.path.exists('./new_train/')):
            os.makedirs('new_train/')
        im.save('./new_train/'+str(i)+'.jpg')
        f.write('./new_train/'+str(i)+'.jpg'+' '+str(words[1])+'\n')

open('./train.txt')


