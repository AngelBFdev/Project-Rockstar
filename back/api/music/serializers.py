from rest_framework import serializers
from .models import *

class SongSerializer(serializers.ModelSerializer):
	class Meta:
		model = Song
		fields = ['id', 'name', 'song_length', 'song_file', 'song_preview', 'artists', 'album']
