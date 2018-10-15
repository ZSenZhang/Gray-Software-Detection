#!/bin/bash
rename 's/\.apk/\.zip/' ./*
i=0
a=10
b=20
((a+=1))
echo $a

for file in `ls ./*.zip`; do
	#echo $file
	unzip -j ${file} "AndroidManifest.xml" -d "./test"
	mv "./test/AndroidManifest.xml" "./test/$i.xml"
	echo "$i.xml" "1" >> ./test/test.txt 
	((i+=1))
	rm ${file}
	echo "$i"
done
