#!/bin/bash
rename 's/\.apk/\.zip/' ./*
i=0
a=10
b=20
((a+=1))
echo $a

for file in `ls ./*.zip`; do
	#echo $file
	unzip -j ${file} "classes.dex" -d "./test"
	mv "./test/classes.dex" "./test/$i.dex"
	echo "$i.dex" "1" >> ./test/test.txt 
	((i+=1))
	rm ${file}
	echo "$i"
done
