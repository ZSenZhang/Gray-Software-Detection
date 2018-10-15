from rest_framework import serializers

from apk.models import Developer, Apk

class DeveloperSerializer(serializers.ModelSerializer):
	class Meta:
		model = Developer
		fields = ('id', 'name', 'description')

class ApkSerializer(serializers.ModelSerializer):

	class Meta:
		model = Apk
		fields = (
      'id',
			'iconUrl',
      'binImage',
      'name',
      'filename',
      'size',
      'alike_icon_url',
      'alike_apk_name',
      'package_name',
      'version',
      'file_hash',
      'cert_hash',
      'developer',
      'developer_user',
      'update_time',
      'suspicion',
      'permissions',
      'activities',
      'screenshots',
		)

